      let productos = [];

        function agregar() {
            const producto_nombre = document.getElementById('producto_nombre').value.trim();
            const producto_cantidad = parseInt(document.getElementById('producto_cantidad').value);
            const producto_precio = parseFloat(document.getElementById('producto_precio').value);

            if (!producto_nombre || !producto_cantidad || !producto_precio) {
                alert('Completa todos los campos');
                return;
            }

            productos.push({
                id: Date.now(),
                nombre: producto_nombre,
                cantidad: producto_cantidad,
                precio: producto_precio
            });

            document.getElementById('producto_nombre').value = '';
            document.getElementById('producto_cantidad').value = '';
            document.getElementById('producto_precio').value = '';

            mostrar();
        }

        function eliminar(id) {
            productos = productos.filter(p => p.id !== id);
            mostrar();
        }

        function mostrar() {
            const tabla_cuerpo = document.getElementById('tabla_cuerpo');
            const tabla_vacia = document.getElementById('tabla_vacia');
            const tabla_div = document.getElementById('tabla_div');

            if (productos.length === 0) {
                tabla_cuerpo.innerHTML = '';
                tabla_div.style.display = 'none';
                tabla_vacia.style.display = 'block';
                return;
            }

            tabla_div.style.display = 'block';
            tabla_vacia.style.display = 'none';

            tabla_cuerpo.innerHTML = productos.map(p => `
                <tr>
                    <td>${p.nombre}</td>
                    <td>${p.cantidad}</td>
                    <td>${p.precio.toFixed(2)}</td>
                    <td>${(p.cantidad * p.precio).toFixed(2)}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="eliminar(${p.id})">Eliminar</button></td>
                </tr>
            `).join('');
        }

        mostrar();