package entity

import (
	"time"

	"gorm.io/gorm"
)

type Member struct {
	gorm.Model
	Name        string `gorm:"uniqueIndex"`
	Email       string `gorm:"uniqueIndex"`
	Password    string
	Phone       string
	MemberImage string `gorm:"type:longtext"`
	Point       int64

	PreOrders []Preorder `gorm:"foreignKey:MemberID"`
}

type Preorder struct {
	gorm.Model
	TotalAmount int64
	CreateTime  time.Time
	PickUpTime  time.Time
	PickUpDate  time.Time
	Note        string
	Respound    string

	// FK
	MemberID *uint
	Member   Member `gorm:"references:id"`

	StatusApprovePreorders []StatusApprovePreorders `gorm:"foreignKey:PreorderID"`
	StatusRecivePreorders  []StatusRecivePreorders `gorm:"foreignKey:PreorderID"`
	PreorderMenus          []PreorderMenu           `gorm:"foreignKey:PreorderID"`
}

type PreorderMenu struct {
	gorm.Model
	Quantity  int
	TotalCost float32 `gorm:"type:decimal(7,6);"`
	Size      string
	Sweetness string
	Option    string

	// FK
	PreorderID *uint
	Preorder   Preorder `gorm:"references:id"`

	// FK
	MenuID *uint
	Menu   Menu `gorm:"references:id"`
}
type Menu struct {
	gorm.Model

	MenuID      int    `gorm:"uniqueIndex"`
	MenuName    string `gorm:"uniqueIndex"`
	MenuNameEng string `gorm:"uniqueIndex"`
	MenuCost    float64
	MenuImage   string `gorm:"type:longtext"`
	MenuStatus  int

	PreorderMenus []PreorderMenu `gorm:"foreignKey:MenuID"`

	// FK test
	MenuTypeID *uint
	MenuType   MenuType `gorm:"references:id"`
	RatingID   *uint
	Rating     Rating `gorm:"references:id"`
}

type MenuType struct {
	gorm.Model
	TypeName string `gorm:"uniqueIndex"`

	Menu []Menu `gorm:"foreignKey:MenuTypeID"`
}
type StatusApprovePreorder struct {
	gorm.Model
	Name string

	StatusApprovePreorders []StatusApprovePreorders `gorm:"foreignKey:StatusApprovePreorderID"`
}
type StatusApprovePreorders struct {
	gorm.Model

	// FK
	PreorderID              *uint
	Preorder                Preorder `gorm:"references:id"`
	StatusApprovePreorderID *uint
	StatusApprovePreorder   StatusApprovePreorder `gorm:"references:id"`
}

type StatusRecivePreorder struct {
	gorm.Model
	Name string

	StatusRecrivePreorders []StatusRecivePreorders `gorm:"foreignKey:StatusRecivePreorderID"`
}
type StatusRecivePreorders struct {
	gorm.Model
	// FK
	PreorderID              *uint
	Preorder                Preorder `gorm:"references:id"`
	StatusRecivePreorderID *uint
	StatusRecivePreorder   StatusRecivePreorder `gorm:"references:id"`
}

type Rating struct {
	gorm.Model

	Score int

	Menu []Menu `gorm:"foreignKey:RatingID"`

	MemberID *uint
	Member   Member `gorm:"references:id"`
}
