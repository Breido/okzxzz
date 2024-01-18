Backend:
Programming Language: JavaScript (Node.js, Express)
The application is responsible for collecting data from cryptocurrency exchanges via APIs, processing it, and responding to requests.

Structure:
│
├── index.js # Application entry point
├── routes.js # HTTP request handling
├── /screener # Screener logic
└── /screener/ta # Technical analysis scripts

Installation and run:
cd backend
npm install
node index.js

Frontend:
Programming Language: JavaScript (Vue 3, Quasar Framework)
The application is responsible for displaying, sorting, and filtering cryptocurrency data received from the server.

Structure:
│
├── src/ # Application source files
│ ├── assets/ # Static resources (images, fonts, etc.)
│ ├── boot/ # Initialization files
│ ├── components/ # Vue.js components
│ ├── layouts/ # Application layouts
│ ├── pages/ # Application pages (each page is a component)
│ ├── plugins/ # Quasar plugins
│ ├── store/ # Vuex store
│ ├── styles/ # Global styles
│ ├── App.vue # Main Vue component
│
├── public/ # Static files available directly
│
├── .quasar/ # Quasar configurations
│ └── quasar.conf.js # Quasar configuration
│
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignored files and directories
├── babel.config.js # Babel configuration
├── package.json # Project dependencies and scripts
├── README.md # Project documentation

Installation and run:
cd frontend
npm install
npm run dev # Or "quasar dev" for development mode
npm run build # Or "quasar build" for building the application (compiled files will be in the "dist/spa" directory)
Note: It is assumed that you have Quasar CLI installed (npm install -g @quasar/cli). If not, please install it before using the "quasar" commands.