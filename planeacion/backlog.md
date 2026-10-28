# Backlog de mi-portafolio

Este archivo es el **plan** del proyecto. Cada historia de usuario (HU) de aquí
se convierte en un **issue** en GitHub, se pone en el **tablero** de GitHub
Projects y se cierra con un **commit** que diga `closes #número`.

Formato de cada criterio de aceptación:

> `- [ ] Dado <contexto>, cuando <acción>, entonces <resultado esperado>.`

Cuando crees el issue en GitHub, escribe su número en la línea **Issue:**
(por ejemplo `**Issue:** #4`).

---

## HU-01 · Menú de navegación fijo  ✅ (ejemplo resuelto)

**Historia:** Como visitante del portafolio, quiero un menú fijo en la parte superior, para ir a cualquier sección sin hacer scroll.

**Etiquetas:** historia, frontend, prioridad-alta · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando miro la parte superior, entonces veo un menú con enlaces a "Sobre mí", "Proyectos" y "Contacto".
- [ ] Dado que estoy en la parte de arriba, cuando hago clic en "Proyectos", entonces la página baja hasta la sección de proyectos.
- [ ] Dado que hice scroll hasta el final, cuando miro la parte superior de la pantalla, entonces el menú sigue visible.

**Issue:** #2

---

## HU-02 · Sección de habilidades  ✅ (ejemplo resuelto)

**Historia:** Como reclutador, quiero ver las habilidades técnicas del aprendiz en una lista, para evaluar rápidamente si su perfil encaja con la vacante.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando llego a la sección "Habilidades", entonces veo al menos 6 habilidades técnicas.
- [ ] Dado que estoy en la sección "Habilidades", cuando la leo, entonces las habilidades están agrupadas en "Frontend" y "Herramientas".
- [ ] Dado que estoy en el menú, cuando hago clic en "Habilidades", entonces la página baja hasta esa sección.

**Issue:** #3

---

## HU-03 · Pie de página con redes

**Historia:** Como visitante, quiero un pie de página con el año y los enlaces a las redes del aprendiz, para contactarlo desde cualquier parte de la página.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando miro a la parte inferior, entonces veo un pie de pagina con datos del aprendiz
- [ ] Dado que me desplazo hacia abajo, cuando miro el pie de pagina, entonces veo el contacto del aprendiz
- [ ]  Dado que estoy en cualquier parte de la pagina, cuando miro el pie de pagina, entonces encuentro los datos del aprendiz para poder ser contacto

**Issue:** #4

---

## HU-04 · Enlace al repositorio en cada proyecto

**Historia:** Como reclutador, quiero que cada tarjeta de proyecto tenga un enlace a su repositorio en GitHub, para revisar el código que escribió el aprendiz.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que estoy viendo los proyectos, cuando me interesa uno, entonces tiene un enlace que me dirige a su repositorio en github
- [ ] Dado que veo un proyecto, cuando le doy click al enlace, entonces se abre una nueva pestaña con el repositorio de github
- [ ] Dado que le di click a un enlace, cuando se abre la pestaña nueva, entonces se puede visualizar el codigo

**Issue:** #5

---

## HU-05 · Portafolio adaptable al celular

**Historia:** Como visitante que usa el celular, quiero que el portafolio se vea bien en pantallas pequeñas, para leerlo sin hacer zoom ni scroll horizontal.

**Etiquetas:** historia, frontend, prioridad-alta · **Estimación:** M

**Criterios de aceptación:**

- [ ] Dado que el usuario esta en un dispositivo celular, cuando entra a ver el portafolio, entonces la informacion es legible sin necesidad de hacer zoom ni scroll horizontal
- [ ] Dado que el usuario utiliza una pantalla de menos de 600 px, cuando visualiza las tres tarjetas del portafolio, entonces estas se organizan verticalmente para facilitar su lectura.
- [ ] Dado que el usuario accede desde un celular, cuando navega por el portafolio, entonces los textos, las imágenes y los botones se ajustan al ancho de la pantalla sin desbordarse.

**Issue:** #6

---

## HU-06 · Formulario de contacto

**Historia:** Como visitante, quiero enviar un mensaje mediante un formulario de contacto, para comunicarme con el propietario del portafolio.

**Etiquetas:** historia, frontend, prioridad-alta · **Estimación:** M

**Criterios de aceptación:**

- [ ] Dado que el visitante está en el portafolio, cuando completa los campos obligatorios y envía el formulario, entonces el sistema confirma que el mensaje fue enviado correctamente.
- [ ]Dado que el visitante deja campos obligatorios vacíos, cuando intenta enviar el formulario, entonces el sistema muestra un aviso indicando qué campos debe completar.
- [ ] Dado que el visitante ingresa un correo electrónico inválido, cuando intenta enviar el formulario, entonces el sistema muestra un mensaje de error y solicita corregirlo.

**Issue:** #7