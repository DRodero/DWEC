// Lista de ejercicios basados en los ejemplos de funciones.html
const ejercicios = [
  {
    id: 1,
    titulo: 'Raíz cuadrada segura',
    enunciado: 'Crear una función \nraizCuadradaSegura(numero) que devuelva la raíz cuadrada de un número. Si el número es negativo debe lanzar un Error o devolver null según el parámetro opcional `modo`.',
    firma: 'raizCuadradaSegura(numero: number, modo = "null") => number | null',
    dificultad: 'Fácil',
    pista: 'Usar Math.sqrt y comprobar si el número es negativo. `modo` puede ser "throw" para lanzar excepción.',
    ejemplo: 'raizCuadradaSegura(9) => 3\nraizCuadradaSegura(-1, "null") => null\nraizCuadradaSegura(-1, "throw") => Error'
  },
  {
    id: 2,
    titulo: 'Suma con Function',
    enunciado: 'Crear una función que reciba un array de números y devuelva la suma. Implementa también una versión usando el constructor Function (como en el ejemplo `new Function`).',
    firma: 'sumarArray(arr: number[]) => number',
    dificultad: 'Fácil',
    pista: 'Usar reduce para la versión normal. Para la versión con Function, construye una función que itere y retorne la suma.',
    ejemplo: 'sumarArray([1,2,3]) => 6'
  },
  {
    id: 3,
    titulo: 'Hoisting y variables',
    enunciado: 'Explica con código la diferencia entre var, let y const respecto a hoisting. Escribe una función que muestre valores antes y después de la declaración para cada caso (sin provocar errores fatales).',
    firma: 'n/a (ejercicio de demostración)',
    dificultad: 'Teórico/Intermedio',
    pista: 'Con var la variable es hoisteada con valor undefined; con let/const acceder antes lanza ReferenceError (temporal dead zone).',
    ejemplo: 'function prueba(){ console.log(a); var a = 2; // undefined }'
  },
  {
    id: 4,
    titulo: 'Funciones flecha y this',
    enunciado: 'Demuestra con ejemplos la diferencia de comportamiento de `this` entre una función normal y una función flecha en un objeto.',
    firma: 'n/a (ejemplos de comportamiento)',
    dificultad: 'Intermedio',
    pista: 'Las funciones flecha no tienen su propio this; heredan el this léxico.',
    ejemplo: 'const obj = {x: 1, getX: function(){return this.x}, getXArrow: ()=> this.x}; obj.getX() -> 1; obj.getXArrow() -> undefined'
  },
  {
    id: 5,
    titulo: 'Debounce sencillo',
    enunciado: 'Implementar una función debounce(fn, wait) que devuelva una versión "debounced" de fn: se debe ejecutar solo si han pasado `wait` ms desde la última llamada.',
    firma: 'debounce(fn: Function, wait: number) => Function',
    dificultad: 'Intermedio',
    pista: 'Usar setTimeout y clearTimeout. Mantener un id de timeout en el cierre léxico.',
    ejemplo: 'const deb = debounce(()=> console.log("x"), 200); deb(); deb(); // solo 1 log pasado 200ms'
  },
  {
    id: 6,
    titulo: 'Funciones puras vs impuras',
    enunciado: 'Escribe dos funciones que sumen 2 a un número: una pura y otra que modifica una variable externa (impura). Explica por qué la pura es preferible.',
    firma: 'sumaPura(n: number) => number; sumaImpura() => void',
    dificultad: 'Fácil',
    pista: 'La función impura debe modificar un estado fuera de su scope.',
    ejemplo: 'let x = 0; function sumaImpura(){ x += 2 }'
  },
  {
    id: 7,
    titulo: 'Funciones recursivas',
    enunciado: 'Implementar factorial(n) de forma recursiva y otra versión iterativa. Añadir manejo de casos base y entrada inválida.',
    firma: 'factorial(n: number) => number',
    dificultad: 'Intermedio',
    pista: 'Caso base n<=1 -> 1; controlar números negativos.',
    ejemplo: 'factorial(5) => 120'
  },
  {
    id: 8,
    titulo: 'Closures: contador',
    enunciado: 'Crear una función contador(inicial) que devuelva un objeto con métodos `incrementar`, `decrementar` y `valor` que usen un closure para mantener el estado privado.',
    firma: 'contador(inicial: number) => {incrementar: Function, decrementar: Function, valor: Function}',
    dificultad: 'Intermedio',
    pista: 'Devolver funciones que capturen la variable `count` en el cierre.',
    ejemplo: 'const c = contador(0); c.incrementar(); c.valor() => 1'
  },
  {
    id: 9,
    titulo: 'Map, filter y reduce',
    enunciado: 'Dado un array de objetos usuario {nombre, edad}, usar map/filter/reduce para obtener la suma de edades de los mayores de edad y una lista de nombres en mayúsculas.',
    firma: 'operacionesUsuarios(usuarios: {nombre:string,edad:number}[]) => {sumaEdad: number, nombres: string[]}',
    dificultad: 'Fácil/Intermedio',
    pista: 'Encadena filter -> map -> reduce según convenga.',
    ejemplo: 'operacionesUsuarios([{nombre:"Ana",edad:20},{nombre:"Luis",edad:17}]) => {sumaEdad:20, nombres:["ANA","LUIS"]}'
  },
  {
    id: 10,
    titulo: 'Argumentos por defecto y rest',
    enunciado: 'Crear una función crearSaludo(saludo = "Hola", ...nombres) que devuelva un saludo concatenando todos los nombres. Probar con diferentes números de argumentos.',
    firma: 'crearSaludo(saludo?: string, ...nombres: string[]) => string',
    dificultad: 'Fácil',
    pista: 'Usar parámetros por defecto y operador rest; unir con join.',
    ejemplo: 'crearSaludo("Buenos días", "Ana","Luis") => "Buenos días Ana y Luis"'
  }
];

function crearItemAccordion(ej) {
  const item = document.createElement('div');
  item.className = 'accordion-item';

  item.innerHTML = `
    <h2 class="accordion-header" id="heading${ej.id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${ej.id}" aria-expanded="false" aria-controls="collapse${ej.id}">
        ${ej.id}. ${ej.titulo} <small class="text-muted ms-2">(${ej.dificultad})</small>
      </button>
    </h2>
    <div id="collapse${ej.id}" class="accordion-collapse collapse" aria-labelledby="heading${ej.id}" data-bs-parent="#lista-ejercicios">
      <div class="accordion-body">
        <p><strong>Enunciado:</strong><br>${ej.enunciado.replace(/\n/g,'<br>')}</p>
        <p><strong>Firma esperada:</strong> <code>${ej.firma}</code></p>
        <div class="mb-2">
          <button class="btn btn-sm btn-outline-secondary me-2" data-accion="toggle-pista" data-id="${ej.id}">Mostrar pista</button>
          <button class="btn btn-sm btn-outline-primary" data-accion="toggle-ejemplo" data-id="${ej.id}">Mostrar ejemplo</button>
        </div>
        <div id="pista-${ej.id}" class="alert alert-info d-none" role="alert">${ej.pista}</div>
        <pre id="ejemplo-${ej.id}" class="bg-light p-2 border d-none" style="white-space: pre-wrap;">${ej.ejemplo}</pre>
      </div>
    </div>
  `;

  return item;
}

function render() {
  const cont = document.getElementById('lista-ejercicios');
  ejercicios.forEach(ej => cont.appendChild(crearItemAccordion(ej)));

  // Delegación de eventos para los botones
  cont.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-accion]');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    if (btn.getAttribute('data-accion') === 'toggle-pista') {
      const el = document.getElementById(`pista-${id}`);
      el.classList.toggle('d-none');
      btn.textContent = el.classList.contains('d-none') ? 'Mostrar pista' : 'Ocultar pista';
    }
    if (btn.getAttribute('data-accion') === 'toggle-ejemplo') {
      const el = document.getElementById(`ejemplo-${id}`);
      el.classList.toggle('d-none');
      btn.textContent = el.classList.contains('d-none') ? 'Mostrar ejemplo' : 'Ocultar ejemplo';
    }
  });
}

window.addEventListener('DOMContentLoaded', render);
