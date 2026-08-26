IUD_MOVIES/
│
├── backend/ # Aquí va tu API
│ ├── src/ # Código fuente (controladores, rutas, modelos)
│ ├── config/ # Configuración (DB, variables de entorno)
│ ├── tests/ # Pruebas del backend
│ └── package.json # Dependencias del backend
│
├── frontend/ # Aquí va tu página web
│ ├── public/ # Archivos estáticos (index.html, imágenes, CSS)
│ ├── src/ # Código fuente (componentes, vistas, lógica)
│ ├── tests/ # Pruebas del frontend
│ └── package.json # Dependencias del frontend
|
├── docs/ # Documentación del proyecto
├── .gitignore # Archivos a ignorar en Git
└── README.md # Explicación general del proyecto

---

# Lista de tareas

1. Agregar librería react router
2. Diseñar paginas:
   2.1 Solo películas (COMPLETO)
   2.2 Solo series (COMPLETO)
   2.3 Información de película --- hasta aqui paso a funcionalidades
   2.4 Administrador
   2.5 Agregar: director,tipo,genero,productora

3. Agregar funcionalidad a las paginas
   2.1 Solo películas (COMPLETO)
   2.2 Solo series (COMPLETO)
   2.3 Información de película
   2.4 Administrador
   2.5 Agregar: director,tipo,genero,productora

TAREAS PENDIENTES

- Terminar los metodos (getBiId,delete,put) en los controladores y modelos de (type,directors,productions,genre)
- Agregar debounce a las funciones handleChange en los componentes Admin y Seeker
- Crear un customHook con lo valores para los filtros de los formularios,seeker y admin
- Crear lógica para el cambio de colo del tag dependiendo de si es una película o serie

- Limpiar mas los componentes como addFilm, pasar useState a useReducer
- Funcion de agregar filmes, generos, directores,tipos,productoras
