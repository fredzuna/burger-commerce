<h1 align="center"> <img height="48" src="https://avatars0.githubusercontent.com/u/56369819?s=200&v=4"> Fizzmod Challenge <img height="48" src="https://avatars3.githubusercontent.com/u/49998302?s=200&v=4"> </h1>

## 👋 Bienvenid@!

Este es uno de nuestros Challenges para prácticas y evaluaciones técnicas. Si llegaste hasta acá, es tu momento de demostrar todo eso que sabes!

La idea es que te enfrentes a un desafío, diviertas, inspires y talvés aprendas algo nuevo.

| ⚠️ Importante ⚠️ |
| :----: |
| Te pedimos que no la publiques ni en Github ni otras plataformas. De esta forma, hacemos que sea un poco más justo y divertido para quienes realmente les gusta resolver problemas codeando. |
| Confiamos en vos! 🙏 |

## 🔖 Contenido

- [¿De qué se trata este Challenge?](#-de-qué-se-trata-este-challenge)
	- [¿Cómo se evalúa?](#-cómo-se-evalúa)
	- [¿Cómo hago mi entrega?](#-cómo-hago-mi-entrega)
- [¿Qué tecnologías vamos a usar?](#-qué-tecnologías-vamos-a-usar)
	- [GIT](#-git)
	- [Node JS](#-node-js)
	- [NPM](#-npm)
	- [Linter](#-linter)
	- [Base de Datos: Mongodb](#-mongodb)
	- [Serverless](#-serverless)
	- [Docker](#-docker)
- 🟢 [Consigna - Fizz-Burger-Commerce](#-fizz-burger-commerce)
	- [Escenario](#escenario)
		- [Problema](#problema)
		- [Solución](#solución)
	- [APIs](#apis-de-productos-) a Realizar
		- [Creación](#crear-productos)
		- [Edición](#edición-de-productos)
		- [Eliminar](#eliminar-producto)
		- [Listado](#listado-de-productos)
		- [Get Individual](#get-individual-de-producto)
	- [Retos finales](#-retos-finales)

---

## 🤔 ¿De qué se trata este challenge?

No se trata de resolver ejercios de código porque si, ni sobre cuanto conocés la sintaxis del lenguaje, o sobre implementar un algoritmo especifico, no se trata de saber todo de memoria, porque eso se puede Googlear.

Te vamos a plantear un escenario que podría ser real, hagamos de cuenta que hay un cliente, un problema, una necesidad y un equipo dispuesto a resolverlo.

En este escenario tenemos que cumplir ciertos contratos, existen reglas que seguir, pero también hay espacios para que demostrar tu creatividad para resolver problemas. La idea es ver como te adaptas ante esta situación.

En este caso, vas a tener que armar una parte de un servicio de eCommerce. Va a ser una versión reducida, claro, pero interesante.

### 🏁 ¿Cómo se evalúa?

<details>
	<summary> Como te dijimos antes, no es una revisión de qué tan bien conocés la sintaxis, sino de qué tan bien sabés aplicar las herramientas del lenguaje para llegar a una solución por encima del promedio.

<b>(Abrir para ver más ➕)</b></summary>

Vamos a hacer nuestro análisis basandonos en:

* Tu solución cumple con las condiciones pedidas
	* 🔳 Si funcionaría (o no) en un ambiente productivo
	* 🔳 Si se respetan las herramientas o técnologias pedidas
	* 🔳 Si es escalable/extensinble
	* 🔳 Si es fácil o díficil agregar nuevas funcionalidades
* La calidad del código
	* 🔳 Si tiene (o no) problemas de performance graves
	* 🔳 Si tiene (o no) problemas de seguridad graves
	* 🔳 Uso de buenas/malas prácticas
	* 🔳 Si el código es prolijó, si hay un buen órden, osea que sea fácil de entender

Sabemos que esto puede tomarte un tiempo en terminar, hacelo con calma, y somos conscientes de lo valioso que es, asique de nuestro lado también vamos a invertir nuestro tiempo en hacer una devolucion de la entrega en forma de *Code Review*. para que sepas cuáles fueron los puntos altos y bajos (si hubieran) según nuestro análisis.

</details>

### 🛂 ¿Cómo hago mi entrega?


<details>
	<summary> Para hacer tu entrega seguí estas instrucciones.

<b>(Abrir para ver más ➕)</b></summary>

1. Hacé un **fork** de este repositorio (⚠️ **recordá hacerlo privado!** ⚠️)
2. Crea **una nueva branch** de tu fork del repo, llamada `DIS-fizzmod-challenge`
3. Realizá todo tu desarrollo en esa branch
4. Cuando hayas terminado, creá un Pull request de la branch `DIS-fizzmod-challenge` a `master` y solicita la revisión del mismo.
5. Avisanos

| ⚠️ Importante ⚠️ |
| :----: |
|  **El PR debe ser dentro de tu fork, NO hacia este repositorio. La revisión la haremos en tu fork.** |

</details>

---

## 💻 ¿Qué tecnologías vamos a usar?

Para este desafío necesitamos que tu solución se desarrolle con algunas tecnologías o herramientas especificas, es posible que algunas de ellas no las conozcas, o si, pero no te preocupes, te vamos a dejar unos 💡 **TIPS** 💡 y 🔗 **LINKS** 🔗 para que puedas aprender, consultar o lo que necesitas.

En algunos casos ya van a estar configuradas y solo esperamos que las respetes, en otros solo te toca extenderlas, y otras solo son opcionales.

### 🔀 GIT

<details>
	<summary> ❗❗ <b>Requerido</b> ❗❗

<b>(Abrir para ver más ➕)</b></summary>

La herramienta para el control de versiones, mas querida por la comunidad, y también por nosotros, como ya es obvio.

No necesitamos que seas un expert@, pero si que sepás manejar al menos lo básico, ya que como habras visto, hablamos de **branches**, **pull request**, etc.

| 🔗 Links 🔗 |
| :----: |
| 🔹 [Git, the book](https://git-scm.com/book/es/v2), tiene todo lo que se necesita saber y más sobre **GIT**. |
| 🔹 [Pull Request](https://docs.github.com/es/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests), Si tenes dudas sobre los **Pull Request**. |

</details>

### ➰ Node JS

<details>
	<summary> ❗❗ <b>Requerido</b> ❗❗

<b>(Abrir para ver más ➕)</b></summary>

Vas a estar tomando el rol de un desarrollador Backend y queremos que uses **Javascript** con **Node.js**, para resolver el desafío.

Vas a contar con una configuración base, que vas a tener que ir extendiendo.

| 🔗 Links 🔗 |
| :----: |
| 🔹 [Documentación oficial de Node](https://nodejs.org/dist/latest-v14.x/docs/api/) |
| 🔹 [Async/Await](https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await) |

| 💡 TIP 💡 |
| :----: |
| ❌ No uses Express ❌ |
| Sabemos que en la mayoría de cursos, tutoriales, blogs, etc, a la gente le gusta mucho usar Express tanto que hasta cuando enseñan desde el primer momento lo usan como si fuera parte de Node, como si fueran lo mismo, pero no lo es. Nuestro consejo es que no lo uses aca. |

</details>

### 📦 NPM

<details>
	<summary> ❔ <b>Opcional</b> ❔

 <b>(Abrir para ver más ➕)</b></summary>

El gestor de paquetes por exelencia de Node, es el que nosotros usamos. Podés usar todas las dependencias que quieras o creas necesitar, aunque tampoco abuses de ellas.

El proyecto ya cuenta con algunas instaladas para que puedas comenzar.

| ⚠️ Atención ⚠️ |
| :----: |
| ❌ **No hay que sacar ninguna dependencia** ❌ |

</details>

### 👀 Linter

<details>
	<summary> Es ❗ <b>Requerido</b> ❗ respetar sus reglas.

<b>(Abrir para ver más ➕)</b></summary>

> ¿ Qué es un Linter ?

Si nunca usaste una herramienta de Linting logicamente no sabes de que te estamos hablando. Son un tipo de herramientas que nos ayudan a mejorar la calidad de nuestro código y además nos ayuda a que todo este "estandarizado", de esta forma todos deben cumplir con las mismas reglas.

| 🔗 Links 🔗 |
| :----: |
| 🔹 [¿Qué es linting?](https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/) |

Nosotros usamos un linter llamado `eslint` y ya está configurado, agregado como devDependency para validar el formateo del código.

| ⚠️ Atención ⚠️ |
| :----: |
| El código entregado no debe tener errores de linter! |
| Te pedimos que no modifiques las reglas |

</details>

### 🥬 Mongodb

<details>
	<summary> ❗❗ <b>Requerido</b> ❗❗

<b>(Abrir para ver más ➕)</b></summary>

Como **Base de Datos** te pedimos que uses **MongoDB**, una base no-relacional (no-sql). Si no sabés, no es díficil de aprender, es muy parecido a Javascript, nos permite guardar datos sin una estructura definida de antemano.

| 🔗 Links 🔗 |
| :----: |
| 🔹 [Página Oficial](https://www.mongodb.com/) |

</details>

### ⚡ Serverless

<details>
	<summary> Ya esta configurado, es ❗ <b>Requerido</b> ❗ usarlo.

<b>(Abrir para ver más ➕)</b></summary>

No sé si habrás escuchado hablar de Serverless, pero es una forma de manejar las aplicaciones en la nube que te permite enfocarte en implementar tu aplicación, dejando de lado la administración de infraestructura al delegarlo a un proovedor como Amazon Web Services, Google Cloud Platform, Azure u otros.

| 🔗 Links 🔗 |
| :----: |
| Este desafío se debe realizar para que se ejecute en un ambiente serverless para una aplicación en AWS. |
| 🔹 [Serverless Framework](https://www.serverless.com/framework/docs/) |

En el contenido del repositorio, vas a encontrar que dejamos lista una estructura base para la entrega. Dejamos las dependencias definidas el el `package.json` (recordá instalarlas antes de comenzar) y un archivo `serverless.yml` donde se definen algunos parámetros basicos de configuración.

En el archivo `serverless.yml` también configuramos dos APIs de prueba (un `GET` y un `POST` para que tengas una idea de cómo configurar tus APIs si nunca antes lo hiciste y para que puedas ver el formato en que recibirás las requests).

| 💡 TIP 💡 |
| :----: |
| Para ejecutar el servicio, definimos un script en el `package.json` para que simplemente ejecutes `npm start` y puedas probar tus APIs. |

</details>

### 🐳 Docker

<details>
	<summary> 🌟 <b>Bonus</b> 🌟

<b>(Abrir para ver más ➕)</b></summary>

Nos gusta mucho Docker y Docker compose ya que nos simplifican la configuración de ambientes locales. Podés hacer es entregar el desafío ejecutándose dentro de contenedores (tanto la API como una instancia de mongodb).

> Qué esperamos de esto?

Simplemente ejecutar `docker-compose up` y tener ambos servicios ejecutándose cada uno en su contenedor.

| 🔗 Links 🔗 |
| :----: |
| 🔹 [Página Oficial](https://www.docker.com/) |
| 🔹 [Playground](https://www.docker.com/play-with-docker) |

</details>

---

## 🍔 Fizz Burger Commerce

Bien, la consigna al fin!

### Escenario

Imaginemos que vos y nosotr@s ya somos compañeros de trabajo, osea somos un equipo. Vos estas estas en el area de Backend, hay personas dedicadas al Frontend, a las Apps, etc.

Un día llega alguien del area de Comerciales y nos cuenta que hay un proyecto nuevo.

> Los dueños de la Hamburguesería "Fizz-Burger" se contactaron con la empresa, ya llevan muchos años en el rubro y sienten que se estan quedando afuera de toda la nueva movida, apenas tienen redes sociales, cuentan con una página web muy vieja, usan una carta de papel plastificada para atender a la gente que se acerca y tienen delivery pero solo por télefono.

Nos cuenta además que quieren renovarse, y tienen un plan a largo plazo, que incluye sumarse a las Apps de envios, también un eCommerce propio porque ellos ya tienen una clientela fija, creen que pueden evitarse el pago de comisiones a las Apps, y vender allí sus Hamburguesas, inclusos condimentos y otros productos.

El plan parece bueno y empezamos a diagramar el plan de acción, mientras que el area de Frontend empieza a trabajar la nueva Web, nosotros nos vamos a dedicar a armar las APIs para el eCommerce.

#### Problema

Pero surgió un problema, una nueva ordenanza municipal dicta que no se pueden usar mas las famosas cartas, que ahora los menú deben estar disponibles online, y esto tiene que cambiarse a la brevedad.

#### Solución

En una reunión decidimos que el lugar va a tener un código QR en sus mesas, que al escanearlo se abre una página en el navegador de los dispositivos moviles, mostrando el menú del momento.

Los chic@s de Front estan trabajando en la página con React y empezaron haciendo la parte del Menú (a donde va a estar dirigido el QR), también estan trabajando en los formularios para enviar la carga de datos.

Necesitamos hacer la parte de Back, para cargar la información de los productos y para las consultas del Menú. Como somos varios no vamos a parar el desarrollo del eCommerce, por eso mientras nosotros vamos a estar trabajando en eso, **te asignamos a vos la tarea de realizar estas APIs para poder cargar el menú**, creemos en vos y en tu capacidad.

### APIs de Productos 🍔

Necesitamos que hagas 5 APIs para administrar los productos:

- 2 para consultas del menú
	- Un [Listado](#listado-de-productos)
	- Un [Get Individual](#get-individual-de-producto)
- 3 para que la gente del restaurante pueda cargar o editar datos
	- [Crear](#crear-productos) Productos
	- [Editar](#edición-de-productos) Productos
	- [Eliminar](#eliminar-producto) Productos

#### Crear Productos

```http
  POST /api/product
```

Debe crear un producto nuevo.

> Body

El Body debe aceptar la siguiente estructura de datos

| Campo | Tipo | Requerido | Default | Descripción | Ejemplo | Anotaciones |
| :---: | :--: | :-------: | :-----: | :---------- | :------ | :---------- |
| `name` | `string` | **Si** | - | El nombre del producto | `"Extra Picante"` | - |
| `type` | `string` | **Si** | - | Que tipo de producto es | `"burger"` | Se debe validar sea uno de estos valores `"burger"`, `"condiments"`, `"snacks"`, `"drinks"` |
| `price` | `number` | **Si** | - | El precio del producto | `350.50` | - |
| `image` | `string` | **No** | `"https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg"` | La imagen del producto | `"https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg"` | Si no se ingresa debe guardase el default |
| `isPromotion` | `boolean` | **No** | `false` | Indica si el producto esta en promoción | `false` | Si no se ingresa debe guardase el default |
| `discount` | `number` | **No** | - | Indica el porcentaje de dinero a descontar | `15` | Solo debe poder ser ingresado si `isPromotion` esta en `true` |
| `ingredients` | `Array<string>` | **Si** | - | Un listado de ingredientes | `["Carne Vacuna", "Queso", "Jalapeño", "Pan Tostado", "Panceta"]` | No puede estar vació, Si se ingresa un ingrediente repetido solo se debe guardar una vez |

Adicionalmente se debe guardar los campos:
- `dateCreated` con la fecha de creación
- `status` con el valor `"active"`

> Respuesta

Se debe responder con el `id` del producto guardado en la base de datos.

> Comentarios

Tené en cuenta no solo el tipo de datos sino para que se podrían usar y evitar cargas de datos incoherentes (aunque cumplan con el tipo)

#### Edición de Productos

```http
  PUT /api/product/{id}
```

Debe actualizar un producto ya existente.

> Body

La estructura es la anterior con unos agregados

| Campo | Tipo | Requerido | Default | Descripción | Ejemplo | Anotaciones |
| :---: | :--: | :-------: | :-----: | :---------- | :------ | :---------- |
| `status` | `string` | **No** | - | El nombre del producto | `"active"` | Se debe validar que sea `"active"` o `"inactive"`, si no llega se debe respetar el valor actual |

Todos los campos no requeridos si no se pasan deben respetar el valor actual, tengan o no un valor default (en la creación).

Adicionalmente se debe guardar los campos:
- `dateModified` con la fecha de edición

> Respuesta

Se debe responder con el `id` del producto en la base de datos.

#### Eliminar Producto

```http
  DELETE /api/product/{id}
```

Debe eliminar un producto existente

> Respuesta

En caso de lograrlo debe responder con los datos del producto eliminado.

#### Listado de Productos

```http
  GET /api/product
```

Muestra todos los productos guardados.

> Query Parameters

| Campo | Acción | Ejemplo | Anotaciones |
| :---: | :----- | :-----: | :---------- |
| `name` | Filtra los productos por nombre | `Premium Patagonica` | sería ideal que pudiera hacer busquedas parciales |
| `type` | Filtra los productos por tipo | `burger` | sería ideal que validara los tipos |
| `priceFrom` | Filtra los productos por precio mayores al valor | `200.50` | - |
| `priceTo` | Filtra los productos por precio menores al valor | `400` | - |
| `isPromotion` | Filtra los productos que estan o no en Promoción | `1` | Para `true` se acepta `1` y para `false` se acepta `0` |
| `orderBy` | Ordena los resultados por el nombre del campo que se pasa como valor | `price` | Se debe aceptar solo `name`, `price`, `type` y `discount` |
| `orderDirection` | Indica la dirección del ordenamiento | `asc` | Se debe aceptar solo `asc` para ascendente, `desc` para descendente |

Ejemplo:

Query valida para buscar los productos que tengan un valor entre $300 y $500, ordenados con el más caro primero:

```http
  GET /api/product?priceFrom=300&priceTo=500&orderBy=price&orderDirection=desc
```

> Respuesta

Muestra un Array de Productos encontrados (con todos sus datos). Si no hay muestra Array vacio.

#### Get Individual de Producto

```http
  GET /api/product/{id}
```

Muestra los datos de un producto

> Respuesta

Debe mostrar todos los datos del producto.

### 🌟 Retos finales

Te ofrecemos unos retos finales para que el desarrollo sea completo

- Entregar tu solución con [Docker](#-docker) (y docker-compose). Necesitamos que podamos hacer `docker compose up` en la consola/terminal y que el ambiente con las API en Serverless y la base de datos esten listas para poder probar.
- Realizar Unit Tests de las APIs. Para eso podes usar la libreria que mas te guste, [Mocha](https://mochajs.org/), [Sinon](https://sinonjs.org/), [Jest](https://jestjs.io/), etc. Aclaranos cual usaste y como correrlos.

Aunque sean retos finales, necesitamos que la entrega incluya estos 2 puntos. Cualquier aclaración necesaria antes de corregir tu solución, puede estar incluidas en algun Archivo estilo Readme.

---

Eso es todo, exitos!

Esperamos tu respuesta!

Saludos!! 👋

### unit test
to run unit test just run the command
- npm test