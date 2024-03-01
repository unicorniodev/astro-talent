# 💼 AstroTalent

## Introducción:

En este desafío crearemos el sitio web de una consultora de RRHH ficticia llamada AstroTalent. 

Esta “falsa” agencia de recruiting especializada en sourcing de perfiles IT, nos ha dado la tarea de desarrollar su página con la intención de modernizar su presencia online actual.  

<br/>

Algunas de sus necesidades como “clientes” son:  

✅ Mostrar sus servicios a posibles empresas que necesiten contratar nuevos Recursos Humanos  
✅ Detallar en el sitio las ofertas laborales activas  
✅ Conseguir contacto con nuevos Devs que estén buscando trabajo  
✅ Contemplar el desarrollo de una sección “blog” dentro del proyecto  

<br/>

Algunos requisitos técnicos para el desarrollo del desafío:  

🚀 Buenas prácticas de SEO  
🚀 Experiencia mobile first  
🚀 Buena performance del sitio  
🚀 Tener en cuenta la accesibilidad  

<br/>

![Imagen de la pantalla principal del proyecto](/src/assets/images/githubRepo/Home-AstroTalent-Desktop.jpg)

<br/>

## Desafíos técnicos interesantes:

Como el objetivo de estos desafíos es tratar de aprender cosas nuevas, les dejo algunas ideas de problemas técnicos que se pueden encarar dentro de este proyecto.

**Tu desafío, tus reglas.** Estos proyectos se adaptan a tu momento de aprendizaje y no al revés. Así que no te desanimes si los próximos detalles parecen estar en chino básico, con tal de que muevas tus manitas y codees algo nuevo ya es suficiente.

Desde recrear la UI con HTML y CSS, hasta armar tu propio backend, el cielo es el límite. Si este proyecto te gustó vos dale para adelante y a trabajar, que ese portfolio no se va a generar sólo 😉

Entonces… algunas ideas de desafíos técnicos potenciales:

1) **Internacionalización (i18n)** —> ¿Qué pasaría si nuestra agencia ficticia quiere abrirse las puertas a un nuevo mercado? ¿Cómo hacemos que el sitio esté en múltiples idiomas?

2) **Data Base de Desarrolladores** —> ¿Cómo podemos almacenar la información de aquellos/as Devs que quieran ser tenidos en cuenta para futuras ofertas?

3) **Un blog con CMS** —> ¿Qué pasa si la mayoría de las personas que van a escribir en el blog no son Devs? ¿Cómo les damos un servicio que les permita redactar artículos sin dramas y sin código? Entra en juego conectarse con un servicio de gestión de contenido.

Hay muchas cosas más que se pueden implementar sobre el mismo proyecto. 

A darle átomos! Elige tu stack de herramientas preferidas y a codear.

<br/>

## Diseño:

El diseño estará en proceso de desarrollo por un par de semanas. Mientras trabajo con eso, dejaré disponible [el link de Figma](https://www.figma.com/file/A1FpBCdpOktA1l8oGUDvLt/UNICORNIODEV---AstroTalen---WIP?type=design&node-id=0%3A1&mode=design&t=8LOP85MrLEJCwLOZ-1) para que puedan ver lo que iremos desarrollando en los streams. También pueden ir codeando las secciones que hacemos en los directos, si quieren ir practicando a la par.

Una vez terminado el diseño, subiré un archivo de Figma al repositorio para que puedan importarlo directamente en sus cuentas de este editor de diseño. De esa forma podrán editar el archivo como lo necesiten y alterar cualquiera de sus elementos o atributos (colores, tipografías, etc.).

[TODO —> En proceso]  
También dejaré en este repositorio un par de videos con una explicación súper simple sobre cómo usar las principales funcionalidades de Figma para que no tengan ningún problema.

<br/>

## Codeamos en directo

En el stream que tenemos todos los jueves por [Twitch](https://twitch.tv/unicorniodev) , nuestro objetivo será resolver este desafío utilizando el siguiente stack de tecnologías:

📝 Astro —> Como framework principal  
📝 Content Collections de Astro —> Para gestionar los artículos del blog y la sección de ofertas laborales | O quizás nos animamos e integramos un CMS, ya lo veremos…  
📝 View Transitions de Astro —> Intentaremos aplicarlo, vamos a ver si no se nos rompe todo jajaj  
📝 React —> Como soporte para algunos componentes interactivos  
📝 Tailwind CSS —> Para los estilos  
📝 Astro Icons —> Para los íconos  
📝 Figma —> Para los diseños  

Iremos codeando distintas secciones en vivo, y todos los videos quedarán subidos al canal de [YouTube](https://youtube.com/@unicorniodev) . Iré actualizando este README a medida que el material esté disponible.

También tendremos secciones donde ustedes pueden participar mandando sus Pull Requests (como mini desafíos dentro del gran proyecto). Toca estar atentos al stream para enterarse el desafío que tenemos activo en esta semana.

<br/>

## Streams

💛 **Primer directo sobre el proyecto —> 29/02/2024** 💛

- Presentación
- Configuración inicial del proyecto
- Estructura de carpetas y rutas
- Empezamos a codear los primeros componentes

<br/>

[![Mira el video](/src/assets/images/githubRepo/AstroTalen%20-%20Parte%201.png)](https://youtu.be/cm2rcwNx95M)

<br/>

## ¿Cómo puedo colaborar en este proyecto?

En breve habilitaré todo lo necesario para que puedan contribuir al código por medio de Pull Requests a este repo. Pero antes de hacerlo, dejaré todas las instrucciones para colaborar en el archivo `contributing.md` 

💜 De más está decir que si colaboras con el proyecto o creas tu propia versión de este desafío, podés utilizarlo para tu portfolio. Esa es la meta principal de estos proyectos.

<br/>

## Colaboradores

<br/>

## Créditos

En esta sección iré detallando las atribuciones correspondientes a los assets y otros elementos que usaremos para este proyecto.

Todas las imágenes, tipografías y otros elementos del diseño serán de tipo Open Source pero siempre es lindo valorar el esfuerzo de otras personas, por eso trataré de mantener esta lista lo más actualizada posible.

<br/>

## Licencia

Este repositorio tiene licencia tipo MIT. Para más información ver el archivo `LICENCE`

<br/>

## 🚀 Estructura del proyecto

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Comandos

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

