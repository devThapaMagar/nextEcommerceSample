import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState(0);

  const [items, setItems] = useState([]);

  const addItem = (event, item) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: item.name,
        price: item.price,
        imgsrc: item.imgsrc
      }
    ]);
    setCart(items.length + 1);
  };
  return (
    <div className={styles.container}>
      <Head>
        <meta name="google-site-verification" content="_hIUkOPUZ0UG4zi-DMgcy_2rYPa0wmRuJ735APlA7Yc" />
      </Head>

      <main className={styles.main}>
        <div className="App" id="appId">
          <div className="cartDiv">
            <div className='cartVal'><a href='#'>View Cart: <p className='cartCount'>{cart}</p></a></div>
          </div>
          <div className='productCategoryType'>
            <div className='productCategoryInStore'>in_store </div>
            <div className='productCategoryCurbside'>curbside </div>
            <div className='productCategoryHomeDelivery'>home_delivery</div>
          </div>
          <div id="columns" className="columns_5">
            <div className="figure" id='figure1'>
              <img src="https://i.imgur.com/ruU04I6.jpg" />
              <div className='productId' id="product-100">100</div>
              <div className='caption' id="caption1" value="Green Checkered Shirt">Green Checkered Shirt</div>
              <span className="price" id="price1" value="44">$44</span>
              <button href="#" id="btnAddItem1" onClick={(e) => addItem(e, {
                'name': e.target.value, 'price': '44', 'imgsrc':
                  'https://i.imgur.com/ruU04I6.jpg'
              })} value="Green Checkered Shirt">Buy Now</button>
            </div>

            <div className="figure" id='figure2'>
              <img src="https://i.imgur.com/sPxEkEI.jpg" />
              <div className='productId' id="product-101">101</div>
              <div className='caption' id="caption2" value="Green and Black Flowers">Green and Black Flowers</div>
              <span className="price" id="price2" value="44">$44</span>
              <button href="#" id="btnAddItem2" onClick={(e) => addItem(e, {
                'name': e.target.value, 'price': '44', 'imgsrc':
                  'https://i.imgur.com/sPxEkEI.jpg'
              })} value="Green and Black Flowers">Buy Now</button>
            </div>

            <div className="figure" id='figure3'>
              <img src="https://i.imgur.com/S3Umfmb.jpg" />
              <div className='productId' id="product-102">102</div>
              <div className='caption' id="caption3" value="Black Dots">Black Dots</div>
              <span className="price" id="price3" value="44">$44</span>
              <button href="#" id="btnAddItem3" onClick={(e) => addItem(e, {
                'name': e.target.value, 'price': '44', 'imgsrc':
                  'https://i.imgur.com/S3Umfmb.jpg'
              })} value="Black Dots">Buy Now</button>
            </div>

            <div className="figure" id='figure4'>
              <img src="https://i.imgur.com/x1IZjjy.jpg" />
              <div className='productId' id="product-103">103</div>
              <div className='caption' id="caption4" value="Red Flowy">Red Flowy</div>
              <span className="price" id="price4" value="44">$44</span>
              <button href="#" id="btnAddItem4" onClick={(e) => addItem(e, {
                'name': e.target.value, 'price': '44', 'imgsrc':
                  'https://i.imgur.com/x1IZjjy.jpg'
              })} value="Red Flowy">Buy Now</button>
            </div>

            <div className="figure" id='figure5'>
              <img src="https://i.imgur.com/Jv8IWKQ.jpg" />
              <div className='productId' id="product-104">104</div>
              <div className='caption' id="caption5" value="Yellow Button-Up">Yellow Button-Up</div>
              <span className="price" id="price5" value="44">$44</span>
              <button href="#" id="btnAddItem5" onClick={(e) => addItem(e, {
                'name': e.target.value, 'price': '44', 'imgsrc':
                  'https://i.imgur.com/Jv8IWKQ.jpg'
              })} value="Yellow Button-Up">Buy Now</button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
