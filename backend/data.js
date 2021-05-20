import bcrypt from 'bcryptjs';
    const data={
      users:[
        {
          name:'admin',
          email:'admin@yahoo.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },

        {
          name:'John',
          email:'user@yahoo.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },

      ],
    products: [
      {
      
        name: 'Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 60,
        countInstock: 10,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Adidas fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 120,
        countInstock: 20,
        brand: ' Nike',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Slim Shirt1',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 60,
        countInstock: 0,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Slim Shirt2',
        category: 'Shirts',
        image: '/images/p4.jpg',
        price: 60,
        countInstock: 15,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Slim Shirt3',
        category: 'Shirts',
        image: '/images/p5.jpg',
        price: 60,
        countInstock: 30,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Slim Shirt4',
        category: 'Shirts',
        image: '/images/p6.jpg',
        price: 60,
        countInstock: 5,
        brand: ' Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      
    ],
}
export default data;