package entity

import (
	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Name 	  string
	Email     string
	Phone     string
	Profile   string `gorm:"type:longtext"`
	Point     int64

	PreOrders []PreOrder `gorm:"foreignKey:MemberID"`
}

type PreOrder struct {
	gorm.Model
	Name 	  		string
	Total_amount    int64
	PickUpTime      string
	Discount		int64

	// MemberID ทำหน้าที่เป็น FK
	MemberID *uint
	Member   Member `gorm:"references:id"`

	// StatusID ทำหน้าที่เป็น FK
	StatusID *uint
	Status   Status `gorm:"references:id"`

	PreOrderMenus []PreOrderMenu `gorm:"foreignKey:PreOrderID"`
}

type PreOrderMenu struct {
	gorm.Model
	amount    		int64
	Size      		string
	Sweetness      	string
	Option      	string
	Note			int64

	// PreOrderID ทำหน้าที่เป็น FK
	PreOrderID *uint
	PreOrder   PreOrder `gorm:"references:id"`

	
	// MenuID ทำหน้าที่เป็น FK
	MenuID *uint
	Menu   Menu `gorm:"references:id"`
}
type Menu struct {
	gorm.Model
	NameThai    string
	nameEng     string
	cost      	string
	image		string `gorm:"type:longtext"`

	// MenuID ทำหน้าที่เป็น FK
	MenuTypeID *uint
	MenuType   MenuType `gorm:"references:id"`

	PreOrderMenus []PreOrderMenu `gorm:"foreignKey:MenuID"`
}

type MenuType struct {
	gorm.Model
	Name	    string

	Menus []Menu `gorm:"foreignKey:MenuTypeID"`
}


type Status struct {
	gorm.Model
	StatusName  string  `gorm:"uniqueIndex"`

	PreOrders []PreOrder `gorm:"foreignKey:StatusID"`	
}