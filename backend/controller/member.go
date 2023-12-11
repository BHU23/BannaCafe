package controller

import (
	"net/http"
	"github.com/BHU23/BannaCafe/entity"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// POST /membersRegister
func CreateMemberRegister(c *gin.Context) {
	var member entity.Member

	// bind เข้าตัวแปร member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	hashUsername, err := bcrypt.GenerateFromPassword([]byte(member.Username),14)
	if err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hash username"})
	}
	hashEmail, err := bcrypt.GenerateFromPassword([]byte(member.Email),14)
	if err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hash email"})
	}
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(member.Password),14)
	if err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": "error hash password"})
	}

	// สร้าง member
	members := entity.Member{
		Username: 	string(hashUsername), 
		Email:     	string(hashEmail),     
		Password:   string(hashPassword),       
	}

	// บันทึก
	if err := entity.DB().Create(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": members})
}
