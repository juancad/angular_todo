# Angular to-do

## Contenidos 
1. [Introducción](#intro)
  1.1. [Link web](#link-web)
2. [Requisitos](#requisitos)
3. [Descripción del trabajo realizado](#descripcion)

### 1. Introducción <a name="intro"/>
Se trata de realizar una aplicación en angular para una todo list utilizando enrutamiento y navegación.

### 1.1 Link web <a name="link-web"/>
https://juancad.github.io/angular_todo/

## 2. Requisitos<a name="requisitos"/>
Para poder ejecutar el proyecto será necesario:
- Tener instalado [Node.js](https://nodejs.org/es/download/).
- Para este proyecto se ha utilizado el IDE Visual Studio.
- Tener instalado npm, mediante el comando: `npm install -g @angular/cli`.
- Importar el proyecto e instalar las dependencias del fichero package.json mediante el comando `npm install`.
- Ejecutar el comando `ng serve` y abrir la dirección `http://localhost:4200/` en un navegador.

## 3. Descripción del trabajo realizado<a name="descripcion"/>
Se trata de una lista de tareas en la que existen tres columnas, una para cada estado de la tarea: to do, in progress, done. 

Cada estado se trata de una lista de tareas, por lo que se han implementado tres listas en el servicio de la aplicación.

Cuando se añade una nueva tarea desde el formulario de la izquierda, se mete en la columna de "to do".

El usuario podrá mover con el ratón las tareas a la columna de "in progress" o "done". En caso de que la tarea se marque como "done", no podrá volver a moverse.

Las tareas tendrán asociado un autor. Se podrán añadir autores desde el botón "añadir autor" de la barra de navegación.

Se puede ver la info de cada tarea, modificar o eliminar la tarea.

Se ha utilziado enrutamiento y navegación para ver la lista de tareas, acceder a la info de una tarea concreta, editar una tarea y para añadir un autor. Para que info y editar tarea tengan la tarea, se pasa por parámteros el id de la tarea y la lista en la que se encuentra.

Los componentes de la aplicación son:
1. navbar: barra de navegación de la aplicación.
2. footer: pie de página de la aplicación.
3. autor: contiene el formulario para añadir un autor en la aplicación.
4. edit: contiene el formulario para editar una tarea.
5. form: formulario para añadir una tarea.
6. info: para mostrar la información de la tarea seleccionada.
7. todo: muestra la lista de tareas en cada categoría.

El movimiento de las tareas se ha realizado siguiendo el ejemplo ["Drag and Drop" de Angular Material](https://material.angular.io/cdk/drag-drop/examples).
