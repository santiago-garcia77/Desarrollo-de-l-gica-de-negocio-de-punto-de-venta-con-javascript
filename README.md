# 📦 Proyecto: Cálculo de Compras con IVA  

## ✍️ Autor  
**Santiago García**  

## 📖 Descripción  
Este proyecto tiene como propósito gestionar y calcular información relacionada con compras realizadas.  
El sistema permite obtener:  

- ✅ **Cantidad total de productos comprados**  
- ✅ **Precio individual de cada producto**  
- ✅ **Subtotal** (suma de todos los productos)  
- ✅ **Total con IVA**, aplicando la tasa de impuesto correspondiente según el país  

La tasa del IVA se pasa como argumento, lo que permite adaptar el cálculo a distintos contextos fiscales.  

---

## ⚙️ Funcionamiento General  
1. Se recibe una colección de productos, cada uno con nombre y precio.  
2. Se determina automáticamente el total de productos.  
3. Se calcula el **subtotal** al sumar todos los precios.  
4. Se aplica la **tasa de IVA** proporcionada para obtener el **total final**.  
5. Se entrega un resumen con todos los datos calculados.  

---

## 🧩 Relación con el Diagrama de Clases  
El diseño se basa en dos partes principales:  

- **Clase Producto** → Contiene la información de cada ítem (nombre y precio).  
- **Funciones de cálculo** → Procesan la lista de productos para obtener:  
  - Total de productos  
  - Subtotal  
  - Total con IVA  

Esta separación asegura claridad, facilidad de mantenimiento y reutilización del código.  

---

## 🎥 Recurso Audiovisual  
Para complementar esta documentación, revisa el siguiente video explicativo del proyecto:  

👉 [Explicación del proyecto en YouTube](https://youtu.be/POZxxu4C8F0)  

---

## 📝 Conclusión  
Con este proyecto, se garantiza una forma clara, sencilla y adaptable de calcular compras con IVA según la tasa definida por cada país.  

Este README ha sido elaborado con la autoridad de **Santiago García** para servir como guía en la comprensión y aplicación del sistema.  
