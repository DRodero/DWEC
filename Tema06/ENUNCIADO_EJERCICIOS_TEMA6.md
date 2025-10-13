# 📚 TEMA 6 - OBJETOS Y ARRAYS EN JAVASCRIPT
## Ejercicios Prácticos para Estudiantes

---

### 📋 **INFORMACIÓN GENERAL**

**Asignatura:** Desarrollo Web en Entorno Cliente (DWEC)  
**Tema:** 6 - Objetos y Arrays  
**Curso:** 2º DAW  
**Modalidad:** Práctica individual  

---

### 🎯 **OBJETIVOS DE APRENDIZAJE**

Al completar estos ejercicios, el estudiante será capaz de:

1. **Crear y manipular objetos** en JavaScript con propiedades y métodos
2. **Trabajar con arrays** usando métodos básicos y avanzados
3. **Combinar objetos y arrays** para crear estructuras de datos complejas
4. **Aplicar métodos funcionales** como map, filter y reduce
5. **Desarrollar aplicaciones completas** usando objetos y arrays
6. **Manipular el DOM** para mostrar resultados dinámicamente

---

### 🛠️ **RECURSOS NECESARIOS**

- **Archivos proporcionados:**
  - `ejercicio_1_alumno.html` - Interfaz web con Bootstrap 5
  - `ejercicio_1_alumno.js` - Archivo JavaScript con estructura de ejercicios
  
- **Tecnologías a utilizar:**
  - HTML5
  - CSS3 (Bootstrap 5)
  - JavaScript vanilla (ES5)
  - Manipulación del DOM

---

### 📖 **INSTRUCCIONES GENERALES**

#### 🔧 **Configuración del Entorno**
1. Descargar los archivos `ejercicio_1_alumno.html` y `ejercicio_1_alumno.js`
2. Colocar ambos archivos en la misma carpeta
3. Abrir `ejercicio_1_alumno.html` en un navegador web
4. Abrir `ejercicio_1_alumno.js` en tu editor de código preferido

#### ✅ **Normas de Desarrollo**
- **NO modificar** el archivo HTML ni los nombres de funciones
- **Completar solo** los comentarios marcados con `TODO`
- **Usar sintaxis tradicional** de JavaScript (function, var, no arrow functions)
- **Mostrar resultados** en el DOM usando `innerHTML`, NO en la consola
- **Testar cada ejercicio** antes de continuar con el siguiente
- **Usar solo JavaScript vanilla**, sin librerías externas

#### 🎨 **Sintaxis Requerida**
```javascript
// ✅ CORRECTO - Usar esta sintaxis
function nombreFuncion() {
    var variable = "valor";
    document.getElementById("id").innerHTML = "contenido";
}

// ❌ INCORRECTO - No usar arrow functions ni let/const
const nombreFuncion = () => {
    let variable = "valor";
}
```

---

### 📝 **DESCRIPCIÓN DE LOS EJERCICIOS**

#### **EJERCICIO 1: Crear Objeto Estudiante** 🎓
- **Objetivo:** Crear un objeto con propiedades básicas y un método
- **Conceptos:** Propiedades de objetos, métodos, `this`
- **Dificultad:** ⭐ Básico

**Tareas a realizar:**
- Crear objeto `estudiante` con nombre, apellidos, edad, curso
- Implementar método `mostrarInfo()` que retorne HTML
- Mostrar la información en el DOM

#### **EJERCICIO 2: Gestión de Array de Colores** 🌈
- **Objetivo:** Manipular arrays con métodos básicos
- **Conceptos:** `push()`, `pop()`, bucles, arrays
- **Dificultad:** ⭐ Básico

**Tareas a realizar:**
- Agregar colores al array usando `push()`
- Eliminar el último color con `pop()`
- Mostrar lista completa de colores

#### **EJERCICIO 3: Catálogo de Productos** 🛒
- **Objetivo:** Trabajar con arrays de objetos
- **Conceptos:** Arrays de objetos, `sort()`, `filter()`
- **Dificultad:** ⭐⭐ Intermedio

**Tareas a realizar:**
- Crear array de productos (nombre, precio, categoría)
- Ordenar productos por precio
- Filtrar productos caros (>50€)

#### **EJERCICIO 4: Estudiante con Notas** 📊
- **Objetivo:** Combinar objetos con arrays anidados
- **Conceptos:** Objetos complejos, métodos de cálculo, validación
- **Dificultad:** ⭐⭐ Intermedio

**Tareas a realizar:**
- Crear objeto con array de notas
- Implementar métodos para agregar notas
- Calcular promedio de calificaciones

#### **EJERCICIO 5: Gestión de Empleados** 👥
- **Objetivo:** Aplicar filtros y búsquedas complejas
- **Conceptos:** Filtrado avanzado, búsqueda por criterios
- **Dificultad:** ⭐⭐ Intermedio

**Tareas a realizar:**
- Crear sistema de empleados
- Buscar por departamento
- Filtrar por salario

#### **EJERCICIO 6: Métodos Avanzados de Arrays** 🔧
- **Objetivo:** Dominar métodos de manipulación de arrays
- **Conceptos:** `splice()`, `slice()`, `concat()`, `find()`, `indexOf()`
- **Dificultad:** ⭐⭐ Intermedio

**Tareas a realizar:**
- Eliminar elementos con `splice()`
- Extraer porciones con `slice()`
- Buscar elementos específicos

#### **EJERCICIO 7: Constructor de Vehículos** 🚗
- **Objetivo:** Crear múltiples objetos con función constructora
- **Conceptos:** Funciones constructoras, `this`, instanciación
- **Dificultad:** ⭐⭐⭐ Avanzado

**Tareas a realizar:**
- Crear función constructora `Vehiculo`
- Instanciar múltiples objetos
- Implementar métodos compartidos

#### **EJERCICIO 8: Matriz de Números** 🔢
- **Objetivo:** Trabajar con arrays multidimensionales
- **Conceptos:** Arrays 2D, bucles anidados, operaciones matemáticas
- **Dificultad:** ⭐⭐⭐ Avanzado

**Tareas a realizar:**
- Crear matriz 3x3
- Calcular suma de diagonal
- Mostrar matriz en tabla HTML

#### **EJERCICIO 9: Métodos Funcionales** ⚙️
- **Objetivo:** Aplicar programación funcional básica
- **Conceptos:** `map()`, `filter()`, `reduce()`
- **Dificultad:** ⭐⭐⭐ Avanzado

**Tareas a realizar:**
- Transformar datos con `map()`
- Filtrar elementos con `filter()`
- Reducir arrays con `reduce()`

#### **EJERCICIO 10: Biblioteca de Libros (Proyecto Final)** 📖
- **Objetivo:** Desarrollar una aplicación completa CRUD
- **Conceptos:** Todas las técnicas anteriores integradas
- **Dificultad:** ⭐⭐⭐⭐ Proyecto completo

**Tareas a realizar:**
- Sistema completo de gestión
- Operaciones CRUD (Create, Read, Update, Delete)
- Múltiples filtros y ordenamientos
- Validación de datos

---

### 🏆 **CRITERIOS DE EVALUACIÓN**

#### **Puntuación por Ejercicio:**
- Ejercicios 1-3: **1 punto cada uno** (3 puntos total)
- Ejercicios 4-6: **1.5 puntos cada uno** (4.5 puntos total)
- Ejercicio 7-8: **2 puntos cada uno** (4 puntos total)
- Ejercicio 9: **2.5 puntos**
- Ejercicio 10: **5 puntos**

**Total: 20 puntos**

#### **Aspectos Evaluados:**
- ✅ **Funcionalidad (60%):** Los ejercicios funcionan correctamente
- ✅ **Código limpio (20%):** Sintaxis correcta y comentarios adecuados
- ✅ **Creatividad (10%):** Mejoras o características adicionales
- ✅ **Presentación (10%):** Interfaz ordenada y profesional

---

### 📅 **PLAZOS DE ENTREGA**

**Fecha límite:** [Completar según calendario académico]  
**Formato de entrega:** Archivos .html y .js funcionales  
**Método de entrega:** [Especificar plataforma - Moodle, email, etc.]

---

### 💡 **CONSEJOS PARA EL ÉXITO**

#### 🎯 **Estrategia de Desarrollo**
1. **Lee completamente** cada ejercicio antes de empezar
2. **Implementa paso a paso** siguiendo los TODO
3. **Testa frecuentemente** cada funcionalidad
4. **No pases al siguiente** hasta completar el actual
5. **Usa la consola del navegador** para depurar errores

#### 🔍 **Técnicas de Debug**
- Usar `console.log()` para verificar valores (solo para debug)
- Verificar que los elementos DOM existen
- Comprobar que los event listeners están conectados
- Revisar sintaxis de objetos y arrays

#### 📚 **Recursos de Ayuda**
- Documentación MDN Web Docs
- Ejemplos vistos en clase
- Consultar con compañeros (sin copiar código)
- Preguntar al profesor durante las clases prácticas

---

### ⚠️ **IMPORTANTE - NORMAS ACADÉMICAS**

- **Trabajo individual:** No se permite copia entre estudiantes
- **Código propio:** Todas las implementaciones deben ser originales
- **Consultas permitidas:** Documentación oficial y material de clase
- **Plagio:** Resultará en calificación de 0 puntos

---

### 📞 **CONTACTO Y DUDAS**

**Professor:** [Nombre del profesor]  
**Email:** [email@centro.edu]  
**Horario de consultas:** [Especificar horarios]  
**Aula:** [Número de aula]

---

## 🚀 **¡A PROGRAMAR!**

Recuerda que la práctica es la clave para dominar JavaScript. Cada ejercicio construye sobre el anterior, así que tómate tu tiempo para entender bien cada concepto antes de avanzar.

**¡Mucha suerte y que disfrutes programando!** 💻✨