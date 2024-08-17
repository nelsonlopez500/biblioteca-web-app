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


## Estructura del Proyecto

### `src/components/`

**Descripción**: Almacena los componentes de React reutilizables que pueden ser utilizados en diferentes partes de la aplicación. Los componentes aquí deben ser modulares y enfocados en una única funcionalidad.

### `src/pages/`

**Descripción**: Contiene los componentes de página que representan vistas principales en la aplicación. Estos componentes generalmente ensamblan varios componentes de la carpeta `components/` para formar una página completa.

### `src/services/`

**Descripción**: Contiene la lógica para interactuar con servicios externos, como APIs. Aquí es donde configuras y gestionas las llamadas a la API y otras integraciones de datos.

### `src/utils/`

**Descripción**: Almacena funciones utilitarias y helpers que pueden ser utilizadas en diferentes partes de la aplicación. Estas funciones no están directamente relacionadas con los componentes y se utilizan para tareas generales.

### `src/styles/`

**Descripción**: Contiene archivos de estilo globales y CSS. Aquí puedes colocar estilos que se aplican a toda la aplicación o estilos específicos que no están directamente asociados con un componente particular.

### `src/App.js`

**Descripción**: El componente raíz de la aplicación. Aquí se configuran los enrutamientos principales (si se usa React Router) y se ensamblan los componentes principales para la estructura general de la aplicación.

### `src/index.js`

**Descripción**: El punto de entrada principal de la aplicación. Renderiza el componente `App` en el DOM utilizando `ReactDOM.render` y configura cualquier configuración global necesaria (como el contexto del enrutador o el proveedor de estado global).