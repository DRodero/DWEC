# 🎃 Ejercicio Práctico: Juego de Halloween

## 👨‍🎓 Para Estudiantes de 2º DAM

¡Bienvenido al ejercicio práctico de JavaScript! En esta actividad vas a completar un juego de Halloween que ya está parcialmente programado.

## 🎯 Objetivos del Ejercicio

Al completar este ejercicio serás capaz de:
- ✅ Manejar eventos de teclado en JavaScript
- ✅ Manipular variables y actualizar la interfaz
- ✅ Implementar lógica de colisiones básica
- ✅ Gestionar el estado de un juego simple
- ✅ Practicar conceptos fundamentales de programación

## 📋 ¿Qué tienes que hacer?

El juego está **casi terminado**, pero faltan **4 funciones importantes** que TÚ debes completar:

### 🔧 Ejercicio 1: Movimiento con Teclado (FÁCIL)
**Archivo:** `halloween.js` - función `setupKeyboardControls()`

**Tu misión:** Hacer que el mago se mueva con las flechas ← →

**Pistas que tienes:**
- `e.key === 'ArrowLeft'` detecta la flecha izquierda
- `e.key === 'ArrowRight'` detecta la flecha derecha
- `Math.max(0, ...)` evita que se salga por la izquierda
- `Math.min(...)` evita que se salga por la derecha

---

### 🔧 Ejercicio 2: Sistema de Puntuación (MEDIO)
**Archivo:** `halloween.js` - función `handleCollision()`

**Tu misión:** Programar qué pasa cuando el mago toca una calabaza o un fantasma

**Reglas que debes implementar:**
- 🎃 Calabaza = +10 puntos
- 👻 Fantasma = -1 vida
- Cada 50 puntos = juego más rápido
- Si vidas = 0 → Game Over

---

### 🔧 Ejercicio 3: Detección de Colisiones (DIFÍCIL)
**Archivo:** `halloween.js` - función `checkCollision()`

**Tu misión:** Detectar cuándo el mago toca un objeto

**Concepto clave:** Dos rectángulos se tocan si se superponen

---

### 🔧 Ejercicio 4: Reiniciar Juego (FÁCIL)
**Archivo:** `halloween.js` - función `resetGameVariables()`

**Tu misión:** Volver todo al estado inicial cuando se reinicia

**Variables a resetear:**
- `score = 0`
- `lives = 3`
- `gameSpeed = 2`
- `gameActive = true`
- `playerPosition = 270`

## 🚀 Instrucciones de Trabajo

### Paso 1: Preparación
1. Abre `halloween.html` en tu navegador
2. Abre `halloween.js` en tu editor de código
3. El juego no funcionará correctamente hasta que completes los ejercicios

### Paso 2: Busca los TODOs
En el archivo `halloween.js` busca los comentarios que dicen:
```javascript
// TODO: Completa el código aquí
```

### Paso 3: Completa uno por uno
**🔥 ORDEN RECOMENDADO:**
1. **Ejercicio 1** (Movimiento) - Para poder mover al mago
2. **Ejercicio 4** (Reinicio) - Para poder reiniciar y probar mejor
3. **Ejercicio 2** (Puntuación) - Para que el juego tenga sentido
4. **Ejercicio 3** (Colisiones) - El más complicado, déjalo para el final

### Paso 4: Prueba constantemente
Después de cada ejercicio:
- Guarda el archivo
- Recarga el navegador (F5)
- Prueba la funcionalidad que acabas de programar

## 🛠️ Herramientas de Ayuda

### Consola del Navegador
Si algo no funciona:
1. Presiona `F12` en el navegador
2. Ve a la pestaña "Console"
3. Busca mensajes de error en rojo

### Debugging con console.log()
Puedes añadir líneas como:
```javascript
console.log("Variable score:", score);
console.log("Posición del jugador:", playerPosition);
```

## ❓ ¿Necesitas Ayuda?

### Pistas Extra para Cada Ejercicio:

**Ejercicio 1 - Movimiento:**
```javascript
// Ejemplo de estructura:
if (e.key === 'ArrowLeft') {
    playerPosition = Math.max(0, playerPosition - PLAYER_SPEED);
}
player.style.left = playerPosition + 'px';
```

**Ejercicio 2 - Puntuación:**
```javascript
// Para sumar puntos:
score += 10;
scoreDisplay.textContent = score;

// Para verificar múltiplos:
if (score % 50 === 0) {
    // hacer algo
}
```

**Ejercicio 3 - Colisiones:**
```javascript
// Dos rectángulos se tocan si:
return rectA.left < rectB.right &&
       rectA.right > rectB.left &&
       rectA.top < rectB.bottom &&
       rectA.bottom > rectB.top;
```

**Ejercicio 4 - Reinicio:**
```javascript
// Ejemplo:
score = 0;
scoreDisplay.textContent = score;
gameOverScreen.style.display = 'none';
```

## 🏆 Criterios de Evaluación

- **Funcionamiento correcto** (70%): El juego debe funcionar sin errores
- **Código limpio** (20%): Código bien estructurado y comentado
- **Comprensión** (10%): Capacidad de explicar lo que has programado

## 🎮 ¿Cómo Saber si Está Bien?

El juego estará correctamente programado cuando:
- ✅ El mago se mueve con las flechas del teclado
- ✅ Atrapar calabazas suma puntos
- ✅ Tocar fantasmas resta vidas
- ✅ El juego termina cuando se acaban las vidas
- ✅ El botón "Jugar de Nuevo" funciona correctamente
- ✅ El juego se acelera cada 50 puntos

## 🚀 Retos Extra (Opcional)

Si terminas pronto, puedes intentar:
1. Cambiar los emojis por otros de Halloween
2. Modificar la velocidad inicial del juego
3. Cambiar los puntos que dan las calabazas
4. Añadir un mensaje cuando el jugador alcance 100 puntos

---

**¡Buena suerte programando! 🎃👻**

*Recuerda: La programación se aprende practicando. No tengas miedo de experimentar y hacer pruebas.*