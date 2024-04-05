         const botonFormulario = document.querySelector('#form');
            const formulario = document.getElementById('formulario');
            const botonCerrar = document.getElementById('cerrar');
          
            // Mostrar el formulario al hacer clic en el botón "Abrir Formulario de contacto"
            botonFormulario.addEventListener('click', () => {
              formulario.style.visibility = 'visible';
            });
          
            // Ocultar el formulario al hacer clic en el botón "X"
            botonCerrar.addEventListener('click', () => {
              formulario.style.visibility = 'hidden';
            });

            