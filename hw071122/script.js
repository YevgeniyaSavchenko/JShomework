/*
 Напишите функцию, которая поверхностно сравнивает два объекта. 
 Ожидаемый результат: True если объекты идентичны, false если объекты разные 
({ a: 1, b: 1 }, { a: 1, b: 1 }) => true 
 const data = { a: 1, b: 2 };
 const data2 = { a: 1, b: 3 };
 const data3 = { a: 2, b: 4 }; 

 console.log(isEqual(data, data2)); // true 
 console.log(isEqual(data, data3)); // false*/
 
 const data = { a: 1, b: 1 }; 
 const data1 = { a: 1, b: 1 }; 
 const data2 = { a: 1, b: 2 }; 
 
 let isEqual = function (obj1, obj2) {
 
   for (const key1 in obj1) {
     for (const key2 in obj2) {
       if (obj1[key1] != obj2[key2]) {
         return false;
       } 
     }
   }
   return true;
 }
 console.log(isEqual(data, data1));
 console.log(isEqual(data, data2));
 
 