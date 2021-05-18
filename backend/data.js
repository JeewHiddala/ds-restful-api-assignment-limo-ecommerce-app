import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Jeewantha',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Kate',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p7.jpg',
            price:200,
            countInStock: 10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p8.jpg',
            price:100,
            countInStock: 20,
            brand:'Adidas',
            rating:4.0,
            numReviews:12,
            description: 'high quality product',
        },
        {
            
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/p9.jpg',
            price:220,
            countInStock: 15,
            brand:'Lacoste',
            rating:4.8,
            numReviews:17,
            description: 'high quality product',
        },
        {
            
            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p10.jpg',
            price:150,
            countInStock: 0,
            brand:'Nike',
            rating:4.5,
            numReviews:9,
            description: 'high quality product',
        },
        {
            
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p11.jpg',
            price:500,
            countInStock: 12,
            brand:'Puma',
            rating:4.2,
            numReviews:10,
            description: 'high quality product',
        },
        {
            
            name:'Adidas Fit Pant',
            category:'Pants',
            image:'/images/p12.jpg',
            price:450,
            countInStock: 5,
            brand:'Adidas',
            rating:3.8,
            numReviews:19,
            description: 'high quality product',
        },
    ],
};
export default data;