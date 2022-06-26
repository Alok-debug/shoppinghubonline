import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'> 
            <div className='home__container'>
                <img 
                    className='home__image'
                    src='https://cdn4.vectorstock.com/i/1000x1000/64/23/lion-head-logo-icon-on-black-background-vector-26566423.jpg'
                    alt='background img'
                />
                <div className='home__row'>
                    <Product 
                        id    = "1"
                        title = 'OnePlus 10 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)'
                        price = '91,199.00'
                        image = 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1649139533/Croma%20Assets/Communication/Mobiles/Images/250719_nmmetr.png/mxw_2048,f_auto'
                        rating= {5}

                    />
                    <Product 
                        id    = "2"
                        title = 'Samsung Galaxy S20 Plus'
                        price = '54,199.00'
                        image = 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1645512446/Croma%20Assets/Communication/Mobiles/Images/248898_n0ipgj.png/mxw_2048,f_auto'
                        rating= {3}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id    = "3"
                        title = 'OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)'
                        price = '71,199.00'
                        image = 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1649139259/Croma%20Assets/Communication/Mobiles/Images/250716_re9dxf.png/mxw_2048,f_auto'
                        rating= {4}
                        />
                    <Product 
                        id    = "4"
                        title = 'Xiaomi Mi 10 (Coral Green, 128 GB, 8 GB RAM)'
                        price = '84,199.00'
                        image = 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605338270/Croma%20Assets/Communication/Mobiles/Images/8943203549214.png/mxw_2048,f_auto'
                        rating= {2}

                        />
                    <Product 
                        id    = "5"
                        title = 'OnePlus 9 Pro 5G (Morning Mist, 8GB RAM, 128GB Storage)'
                        price = '54,199.00'
                        image = 'https://www.91-img.com/gallery_images_uploads/0/b/0bd1cc8c610ba175bf62a694995ec3df5393dd13.jpg?tr=h-550,w-0,c-at_max'
                        rating= {3}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id    = "6"
                        title = 'Apple iPhone 13 Pro Max (512GB ROM, MND13HN/A, Alpine Green)'
                        price = '154,199.00'
                        image = 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1646918846/Croma%20Assets/Communication/Mobiles/Images/250112_iult8r.png/mxw_2048,f_auto'
                        rating= {5}

                        />
                </div>
            </div>
        </div>
        )
}

export default Home;