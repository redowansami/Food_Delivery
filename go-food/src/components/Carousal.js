import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id="carousel">
                    <div class="carousel-caption d-none d-md-block" style={{zIndex: 10}}>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://static.wixstatic.com/media/2cbff6_cf6583ae65b346e7a22a5ecacf74453f~mv2.jpg" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static.wixstatic.com/media/2cbff6_c4106d54f1f642f3bbf79d669e2d1ec5~mv2.jpg" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://soyummy.com/wp-content/uploads/2024/05/barbecue-grilled-hot-dog-with-yellow-mustard-on-wooden-table-stockpack-istock-scaled.jpg" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
