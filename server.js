const express = require('express');
   const app = express();
   const port = 3000; // Puedes cambiar el número de puerto según tus necesidades

   // Configurar el servidor para parsear JSON
   app.use(express.json());

   // Endpoint para productos mockeados
   app.get('/mockingproducts', (req, res) => {
     const mockProducts = generateMockProducts(); // Llamamos a la función para generar productos mockeados
     res.json(mockProducts); // Enviamos la respuesta como JSON
   });

   // Manejador de errores personalizado
   app.use((err, req, res, next) => {
     console.error(err); // Imprimir el error en la consola para debugging
     res.status(500).json({ error: 'Ocurrió un error en el servidor' });
   });

   // Iniciar el servidor
   app.listen(port, () => {
     console.log(`Servidor esperando conexiones en http://localhost:${port}`);
   });

   // Función para generar productos mockeados
   function generateMockProducts() {
     const mockProducts = [];

     for (let i = 0; i < 100; i++) {
       const product = {
         _id: `product_${i}`,
         name: `Producto ${i}`,
         price: Math.floor(Math.random() * 100) + 1
       };

       mockProducts.push(product);
     }

     return mockProducts;
   }