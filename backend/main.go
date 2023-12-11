package main

import (
	"github.com/BHU23/BannaCafe/controller"
	"github.com/BHU23/BannaCafe/entity"
	"github.com/BHU23/BannaCafe/middleware"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	r.POST("/members", controller.CreateMember)
	// r.POST("/login", controller.Login)
	router := r.Group("")
	{
		router.Use(middlewares.Authorizes()) //wtf "s"
		{
			r.POST("/login", controller.Login)
			// r.POST("/login", controller.Login)
			// User Routes
			// router.GET("/users", controller.ListUsers)
			// router.GET("/user/:id", controller.GetUser)
			// router.PATCH("/users", controller.UpdateUser)
			// router.DELETE("/users/:id", controller.DeleteUser)
			// Gender Routes
		// 	router.GET("/genders", controller.ListGenders)
		}
		r.Run()	
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
