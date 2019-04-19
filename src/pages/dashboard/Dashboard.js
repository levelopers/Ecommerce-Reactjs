import React, { Component } from 'react'
import Header from '../../components/header'
var data={"data":{"products":[{"_id":"5bedf3b9c14d7822b39d9d45","imagePath":"https://static.zara.net/photos///2018/I/0/1/p/5644/641/800/2/w/1920/5644641800_2_5_1.jpg?ts=1540395699528","title":"Tank Top","description":"Flowy V-neck camisole with spaghetti straps.","price":29.99,"color":"Black","size":"XS,S,XL","quantity":15,"department":"Women","category":"Basics","__v":0},{"_id":"5bedf448c14d7822b39d9d47","imagePath":"https://static.zara.net/photos///2018/I/0/1/p/7568/469/251/2/w/1920/7568469251_2_1_1.jpg?ts=1540393989160","title":"Basic Top","description":"Round neck long sleeved shirt. ","price":25.99,"color":"White","size":"XS","quantity":90,"department":"Women","category":"Basics","__v":0},{"_id":"5bedf31cc14d7822b39d9d43","imagePath":"https://static.zara.net/photos///2018/I/0/1/p/7568/644/802/2/w/1920/7568644802_1_1_1.jpg?ts=1541152091085","title":"Oversized Textured Top","description":"High collar top with short cuffed sleeves. Asymmetric hem with side slits.","price":35.95,"color":"Gray","size":"XS,S,M","quantity":10,"department":"Women","category":"Basics","__v":0},{"_id":"5bedf55bc14d7822b39d9d4b","imagePath":"https://static.zara.net/photos///2018/I/0/1/p/8197/757/093/4/w/1920/8197757093_2_2_1.jpg?ts=1538393944729","title":"Belted Plaid Blazer","description":"Flowy blazer with lapel collar and long sleeves. Self belt. Chest patch pockets and welt pockets at hip. Front double-breasted button closure.","price":79.99,"color":"Black","size":"S,M,L","quantity":4,"department":"Women","category":"Blazer","__v":0},{"_id":"5bedf5eec14d7822b39d9d4e","imagePath":"https://static.zara.net/photos///2018/I/0/2/p/1775/300/615/2/w/1920/1775300615_1_1_1.jpg?ts=1539690384503","title":"Perl Knit Swear","description":"Purl-stitch knit sweater in a combination of textures. Ribbed trim.","price":79.99,"color":"Orange","size":"M,L","quantity":5,"department":"Men","category":"Knitwear","__v":0},{"_id":"5bedf6b5c14d7822b39d9d51","imagePath":"https://static.zara.net/photos///2018/I/0/2/p/6186/352/407/2/w/1920/6186352407_2_1_1.jpg?ts=1540990017618","title":"Ripped Jeans","description":"Slim fit jeans with five pockets, washed effect, and rips on the legs. Zippered hem at in-seams. Front zip and metal button closure.","price":79.99,"color":"Dark Blue","size":"M,L","quantity":80,"department":"Men","category":"Jeans","__v":0},{"_id":"5bedf720c14d7822b39d9d52","imagePath":"https://static.zara.net/photos///2018/I/0/2/p/5575/380/406/2/c-158-0-2048-3072/w/1920/5575380406_1_1_1.jpg?ts=1527530663760","title":"Basic Slim Jeans","description":"Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.","price":45.99,"color":"Light Blue","size":"XS,S,M","quantity":8,"department":"Men","category":"Jeans","__v":0},{"_id":"5bedf7ecc14d7822b39d9d55","imagePath":"https://static.zara.net/photos///2018/I/0/2/p/3548/350/700/2/c-192-0-2048-3072/w/1920/3548350700_2_1_1.jpg?ts=1528819649601","title":"Faux Leather Perforated Jacket","description":"Faux leather perforated jacket with high collar and long sleeves. Two front zip pockets. Lined. Interior pocket. Front zip closure. Ribbed elastic hem and cuffs.","price":99.99,"color":"Brown","size":"XS,M,XL","quantity":12,"department":"Men","category":"Jackets","__v":0}]},"status":200,"statusText":"OK","headers":{"content-type":"application/json; charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvYkBib2IuY29tIiwiaWF0IjoxNTU1NjI3NDkzLCJleHAiOjE1NTU3MTM4OTN9.JrfvaWYO8pkH0ewoOi_FThgKb76Ie-Tc73ZLq_BSlL4"},"method":"get","url":"http://localhost:4000/products","baseURL":"http://localhost:4000"},"request":{}}
var products = data.data.products


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  
  
  render() {
    console.log(this.state);
    return (
      <div>
        <Header/>
        dashboard
      </div>
    )
  }
}




