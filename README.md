# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

                                    NAMOUR HANDBAGS FOR REACTJS

---

Este proyecto fue creado para el curso ReactJS de coderhouse.

Este proyecto va a estar contenida en la carpeta "Entregable1-ReactJs-CoderHouse", dentro de la misma podemos encontrar 4 carpetas:

1-build: Esta carpeta contiene el build del proyecto con el cual se hizo deploy a traves de netlify. Dicho deploy pordemos encontrarlo en el siguiente enlace, con una version de uso de la aplicacion: "https://namour-handbags.netlify.app".

2-node_modules: En esta carpeta se encuentra todas aquellas dependencias que se han instalado en el archivo "package.json".

3-public: En public podemos encontrar un archivo "index.html" donde se ha linkeado una font-family que se ha utilizado en el estilado de la app y donde se mostraran la App a traves del "div" con "id = root" y un archivo .json, ambos archivos se crearon al momento de inicializar el proyecto con ReactJs.

4-src: Carpeta de gran importancia, donde se encuentra la gran amyoria del proyecto. Esta con unos cuantos archivos y unas carpetas.

    Los archivos que se encuentran dentro de la carpeta src son:

        *App.js: Es el archivo js donde se encuentran contenidos los componentes de <Footer/> y <NavBar/>, como asi tambien importacion de una libreria que se usara en el proyecto como "react-router-dom". En este archivo se crea un componente donde se establecen las rutas de navegacion a traves de "Router", como asi tambien el "ProductsProvider" para poder pasar un contexto, ambos se definen como un "higher-order component" abarcando casi todo el proyecto. Y las rutas que se establecen son:
             + "/" que nos llevara a la pagina principal mostrando el componente <ItemListContainer/>.
             + "/item/:id" que nos llevara al componente <ItemDetailContainer />, donde se mostrara un producto en detalle segun el ID que coincida con el del params.
             + "/categoryList/:category" nos mostrara todos los productos en lista que tengan en sus atributos la categoria que haga match con la del params.
             + "/cart" que nos mostrara un view importante de la app de todos aquellos productos agregados a la lista para comprar.
        La idea de este componente es que sirva para trabajar con todos los demas componentes y este componente <App/> sera contenido dentro del archivo index.js.
        *App.css: Estilado del componente <App/>.
        *index.js: Archivo js de gran relevancia debido a que contiene al componente <App/> que sera renderizado en el "div" con el "id = root".
        *reportWebVitals.js: Archivo js que se creo al momento de inicializar la App.
        *setupTests.js: Archivo js que se creo al momento de inicializar la App.
        *style.css y styles.css.map: Archivos css de estilado generados en el momento de inicializar l a App con ReactJS.

    Las carpetas que se encuentran dentro de la carpeta src son:

        *assets: Esta carpeta contiene todas las imagenes que se han utilizado en la pagina, si bien he utilizado la pagina web "https://imgbb.com/" para subir todas las imagenes a la nube y utilizarlas por medio de links, a excepcion de la imagen del logo de la App,  he decidido dejarlas dentro de esta carpeta porque los links de imgbb pueden crashear a futuro y provocaría perdida de informacion importante para la App y la empresa. A su vez tambien contiene el icono del carrito en formato SVG por si las dudas.
        *components: Dentro de esta carpeta se encuentran casi todos los componentes que conforman la App, a excepcion de los componentes <App/> y aquel incluido dentro de la carpeta views, el cual seria <Cart/>, index.js no es un componente, es el script principal. Dentro de la carpeta components podemos encontrar otras carpetas para cada uno de los componentes donde cuentan con minimo un archivo .js y ademas puede tener adicionamente un archivo .css para agregarle estilado:
            -burguerButton: En esta carpeta se encuentra el boton de menu hamburguesa del proyecto contando con sus animaciones y funcionalidades, dicho componente es <BurguerButton>.
            -cartContext: En esta carpeta se encuentra el contexto con informacion de todos los productos y algunas funcionalidades referidas al uso de informacion de los productos como por ejemplo sumar productos al carrito, dicho contexto se pasa como un componente de alto orden al componente <App/> y solo se renderizara en el modo mobile.
            -cartDetail: Este componente renderiza una "carta" de cada uno de los productos agregados al carrito al detalla, es decir mostrando informacion como el precio, cantidad, subtotal y la imagen, dicho componente se define en la App como <CartDetails/>. Dicha informacion debe coincidir con la informacion de los productos que se encuentren subidos en el firestore database.
            -cartSummary: El componente <CartSummary/> contiene un resumen de la orden de compra, acompañada de la suma total de la misma. A su vez contiene un formulario donde el usuario debera rellenar con la informacion pertinente, donde se encuentra tambien algunos conditional renderings, que dependiendo si el usuario relleno correctamente o no el formulario se renderizara uno u otro como el caso de los mensajes de error al no coincidir los emails, de pedido realizado o el boton de finalizar compra que no aparecera hasta rellenar los 4 campos.
            -cartWidget: Este componente contiene al icono del carrito que fue utilizado desde la pagina "https://react-icons.github.io/react-icons/" y hace uso del contexto pasado desde cartContext para renderizar a traves de la constante declarada por medio del useState. "cartList" sera un numero que se actualizara a medida que el usuario vaya agregando productos al carrito. Este componente se puede encontrar en la App como <CartWidget>
            -categoryList: En <CategoryList> se renderizan todos los productos que dentro de sus atributos coincida aquel llamado "category" con el params pasado a traves de las rutas establecidas en el navBar, dicha informacion debe coincidir con la informacion de los productos que se encuentren subidos en el firestore database.
            -emptyCart: Es un componente que debe renderizarse en el view cart, dentro del componente <Cart/> si en el mismo nno existen productos existentes. El componente <EmptyCart/> cuenta con una imagen, texto y un boton que te lleva a la pagina inicial.
            -errorMessage: <ErrorMessage/> Es un componente armado por un elemento importado desde "MaterialUI" que se ha introducido a modo de componente para trabajar con el de manera "conditional rendering". El mismo se muestra en caso de que no coincidan los emails ingresados por el usuaruio en el componente <CartSummary/>.
            -footer: El <Footer/> esta fixed y se meustra en todo momento en pantalla para una cuestion de comodidad al usuario, dentro del mismo hay un icono con el logo de instagram ("https://react-icons.github.io/react-icons/") que te redireccionara a la cuenta de Namour Handbags de la misma red social y un texto.
            -idNotExist: En el caso de que el producto buscado por "id" en <ItemDetailContainer/>, a traves de los params, no coincida con alguno aquel que se encuentre dentro de la firestore database, mostrara el compoenente <IdNotExist/>. Que cuenta con un texto informando de que el producto no se encuentra en stock, un icono utilizado desde "https://react-icons.github.io/react-icons/" y un boton que te redirecciona a la vista inicial.
            -item: <Item/> se utiliza en dos ocaciones, en los componentes <CategoryList/> y <ItemList/>, el mismo muestra informacion del producto (imagen, precio, stock y un boton de detalles que te redirecciona al componente <ItemDetailContainer/>) a modo de pequeña tarjeta.
            -itemCount: <ItemCount/> se utiliza dentro del componente <ItemDetail/> el mismo sirve para sumar y restar a un valor entero, el mismo inicia desde 1, ya que un usuario no puede pedir 0 productos, en el caso de estar en 1 y querer restar debera mostrar una alerta. Y en el caso de querer sumar  excediendose del stock tambien debera mostrar una alerta de ello al usuario. El valor del contador luego por medio de funciones y de funciones del contexto, se logra utilizar el valor del contador y al atributo del producto llamado "quantity" insertarle dicho valor.
            -itemDetail: En <ItemDetail/> podemos encontrar informacion en detalle del producto que se haya obtenido por "id" a traves de los params y haya coincidido con alguno de los prodcutos que se encuentran en firestore database en <ItemDetailContainer/>, a su vez aca se hace uso del cartContext.js para pasarle la funcion al <ItemCount/> que se encuentra dentro del este componente.
            -itemDetailContainer: Encontraremos aqui a los componentes <ItemDetail/> y al <IdNotExist/>, como se ha explicado anteriormente. En el componente <ItemDetailContainer/> si el "id" obtenido a traves de los params matchean con los de algun producto creado en la firestore database monstrara el <ItemDetail/> en caso contrario <IdNotExist/>.
            -itemList: <ItemList/> hace uso del firestore database para hacer un mapeo de cada uno de los productos que se encuentren creados alli.
            -itemListContainer: Este componente contiene un titulo y al componente <ItemList/>, es utilizado a modo de presentacion de vista inicial, donde se mostraran todos los productos.
            -navBar: El componente <NavBar/> es muy importante, ya que sera de las principales fuentes de interaccion para el usuario, donde podra recorrer cada una de las categorias de productos a traves de los <li>, tambien contendra el logo que te llevara a la vista principal de la App, donde se muestran todos los productos. A su vez contendra el componente <CartWidget/> como un elemento <li> y al componente <BurguerButton/> que servira fundamentalmente para mostrar los <li> en la version mobile de la App.
            -orderItem: Este componente renderizara una breve informacion de los productos agregados al cartList para hacer la lista de los productos agregados por el usuario y la suma total. El componente es  <OrderItem/>.
            -orderMessage: El componente <OrderMessage/> contiene un elemento de materialUI que sirve a modo de alerta para mostrar que la compra fue exitosa y el mismo muestra el ID de la compra generada por el usuario. El componente se encuentra dentro del componente <CartSummary/> en forma de conditional rendering.
        *data: Esta carpeta contiene solo un archivo js, llamado "data.js", el mismo cuenta con informacion de los productos a modo de backup para evitar la perdida de informacion si sucediera algo, y tambien funciona para trabajar con este array de objetos de manera destructurada en algunos momentos de la App. Tambien cuenta con una funcion que nos permite obetener un producto a traves del "id" y utilizarlo en otras funciones del codigo.
        *firebase: Data e informacion importante para conectar a la database de firestore a traves de firebase de google y poder utilizarla para poder obtener los prodcutos creados desde alli y poder postear productos nuevos.
        *views: Para este proyecto crei conveniente crear una sola view que es la del carro de compras, el mismo se creo a manera de funcionalidad para un componente llamado <Cart/>, este contendra un arrego de compoenntes <CartDetail/> que mostraran cada uno de los productos agregados al cartList del contexto y tambien contendra el componente <CartSummary/> que es el resumen de la compra, que al rellenar el formulario le permitira al usuario realizar un post de la compra a la firestore database.

Con eso concluye todo aquello que se encuentren dentro de carpetas de la App.

Luego encontramos archivos generales del proyecto como es el caso de este mismo README.md que contiene informacion relevante para quien quiera utilizar, o modificar esta App. A su vez se encontrara el archivo package.json que es generado automaticamente al inicializar el proyeco de ReactJS, que contendra datos vitales del proyecto como el nombre, dependecias, scrips y demases que no se aconseja modificar, salvo de contar con experiencia. Tambien se encuentra el package-lock.json que no se debe modificar. Y por ultimo encontramos los archivos ".gitignore" y ".gitattributes".

Librerias:
Las librerias que se encuentran en uso son actualmente utilizadas en el proyecto final o pueden haber quedado instaladas desde que he comenzado a realizar este proyecto al inicio de la cursada en CoderHouse, curso de ReactJS. Tratare de explicar la importancia de algunas ellas:

    -react: Es vital para hacer un proyecto en ReactJS, ya que nos permite hacer casi todo lo relacionado a ReactJS.
    -react-router-dom: Esta libreria nos permite utilizar page routing lo cual es bastante importante, ya que react por si mismo no nos lo permite. Aca aparecen elementos como: BrowserRouter, Routes, Route y Link.
    -material: es una libreria de componentes la cual utilice para los componentes <OrderMessage/> y <ErrorMessage/>, es decir las alertas en el componente <OrderSummary/>.
    -axios: En algun punto de la cursada lo utilizamos para poder llamar a API´s a traves del metodo FETCH, si bien no esta en uso actualmente en la aplicacion y lo correcto seria eliminarlo para produccion, decidi dejarla ya que creo que voy a utilizar este proyecto para ayudarme en el futuro y me servira para recordar.
    -react-icons: Utilice iconos desde la pagina "https://react-icons.github.io/react-icons/" en varias partes del proyecto dada a su facilidad para utilizar y poder agregarles estilado.

Como ultima aclaracion respecto al proyecto: tiene 2 medias queries, es decir que hay un estilado que no esta dentro de ninguna de ellas, es aquel que esta enfocado a la vista mobile, dado que he trabajado con la metodologia mobile first. Por lo tanto la primer media query es a los 800px, la misma esta basada en el tamaño de las pantallas de las tables, cuentan con algunas modificaciones de estilado que incluso llegan hasta el modo desktop y toma otros del estilado mobile. Y por ultimo contamos con la media query de 1440px que es aquellos dispositivos desktop.

Aquí les dejo una breve demostración de la App:

Mobile version:

https://user-images.githubusercontent.com/106835817/181657520-45ee76a1-8a0a-40e6-9064-3a1a91dc5580.mp4

Desktop version:

https://user-images.githubusercontent.com/106835817/181657014-2b3aa476-bd45-4f04-8499-eee37ff690f9.mp4

Muchas gracias por leer y pueden revisar el proyecto en la siguiente dirección:
https://namour-handbags.netlify.app
