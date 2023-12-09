package controller

import (
	"net/http"
	"github.com/BHU23/BannaCafe/entity"
	"github.com/gin-gonic/gin"
)

// POST /members
func CreateMember(c *gin.Context) {
	var member entity.Member

	// bind เข้าตัวแปร member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// สร้าง member
	members := entity.Member{
		Name: 		member.Name, 
		Email:     	member.Email,     
		Password:   member.Password,       
	}

	// บันทึก
	if err := entity.DB().Create(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": members})
}
