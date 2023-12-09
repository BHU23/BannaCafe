import React from 'react'
import { PiBasketFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import SidebarMemu from '../../../components/sidebarMember';
import AddMenuPreOrder from './addMenuPreOrder';
import EditPreOrder from './editPreOrder';
import './menuPreorder.css';
import Footer from '../../../components/footer';
export default function MenuPreorder() {
    return (
        <div className='menuPreorder'>
            <div className='sidebarMemu'>
                <SidebarMemu/>
            </div>
            <div className="contentMenu">
                <header>
                    <form className="search-menu">
                        <label htmlFor="">
                            <IoSearch className='icon-search'/>
                            <input className="search-input" placeholder='search for menu' />
                            <button className="search-btn">search</button>
                        </label>
                    </form>
                    <div className="basket-preorder"><PiBasketFill className="basket-icon"/></div>
                </header>
                <main>
                    <div className="menu-recomment">
                        <div className="menu-slide">
                            <div className="imge-slide">
                                <button className="bnt-laft"></button>
                                <div className="block-item"></div>
                                <button className="bnt-right"></button>
                            </div>
                            <div className="menu-name">
                                <p>129 bath.</p>
                                <span>Matchalatte & Orang</span>
                                <button><span>+</span></button>
                            </div>
                        </div>
                        <div className="munu-slide-information">
                            <div className="information-text">Information</div>
                            <div className="imge-information"></div>
                            <div className="name-information">Matchalatte & Orang <span>ส้มส้ม</span></div>
                            <div className="cost-information">ราคา <span>129 bath.</span></div>
                            <div className="rating-information"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                        </div>
                        <div className="munu-promotion">
                            <div className="information-text">Promotion & Recommend</div>
                            <div className="imges-promotion"></div>
                        </div>
                    </div>
                    <div className="menu-block">
                        <div className='menu-text'>Menu</div>
                        <div className="menu-all">
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-crad">
                                <div className="menu-crad menu-rating"><FaStar /> <span>4</span></div>
                                <div className="menu-item">
                                    <div className="menu-imge"></div>
                                    <div className="manu-name">เอสเปรสโช่ <br /><span>Esresso</span></div>
                                    <div className="cost-btn">
                                        <div className="menu-cost">49-.</div>
                                        <button className="btn-add">+เพิ่ม</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
            {/* <div className="add-menu">
                <AddMenuPreOrder/>
            </div> */}
            {/* <div className="edit-basketes">
                <EditPreOrder/>
            </div> */}
        </div>
  )
}
