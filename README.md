# Walmart challenge backend

Walmart Web nos permite buscar productos por id, brand o description. En caso que la busqueda sea un palindrome retorna el precio con un 50% de descuento. Y solo buscara por brand o descripcion cuando el largo de busqueda se mayor que 3.

Este proyecto para que pueda desplegar datos se debe tener corriendo la api https://github.com/sergioarro/base-challenge-api-js.git
## Comandos

1. Bajar Repositorio
```
   git clone https://github.com/sergioarro/walmart-web.git 
```

3. Instalar 
```
   npm install  
```

4. Levantar en Local
```
   npm run start
```

5. Levantar en docker 
```
   npm run docker:run  
```

6. Prueba en el browser
```
    http://localhost:8080
```

## Pruebas 

1. Correr pruebas unitarias
```
   npm run test:unit  
```

2. Pruebas de integración
```
  npm run test:integration   
```
