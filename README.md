# GIT Capacitacion
## Desafio 1

### Ejercicio 1
Se creó un nuevo archivo llamado "index.html" para subir un cambio nuevo al repositorio y se mandó al stage area por medio del comando "git add .", que agrega todos los cambios existentes (en este caso, un solo archivo nuevo). El commit del mismo tuvo como mensaje "Agregar archivo index.html", efectuado por medio del comando "git commit -m < mensaje >". Posteriormente se llevo a cabo una instrucción "git log" para listar todos los commits hasta el momento. Finalmente, se subieron los cambios desde el repo local al remoto por medio del comando "git push"

## Desafio 2

### Ejercicio 1
Se clonó el repositorio en otra carpeta distinta a la original, por medio del comando "git clone https://github.com/MarianoChunGLA/GIT-Capacitacion.git < alias >". En el repo clonado se modifico el archivo index.html, agregandole un < p > con texto. Finalmente, se agregaron al stage area los cambios, se hizo un commit de los cambios hechos con el nombre de "Add paragraph a index.html - Desafio 2 - Ejercicio 1" y se pushearon los cambios al repo remoto.

### Ejercicio 2
Para resolver la consigna, se hizo una copia del repo de nest js por medio de un "fork". El mismo se encuentra en el siguiente repo: https://github.com/MarianoChunGLA/fork-nestJs-git-capacitacion

## Desafio 3

### Ejercicio 1
Para resolver este ejercicio, se hizo un fork del proyecto "web-veterinaria", al cual se puede acceder desde el siguiente link https://github.com/MarianoChunGLA/web-veterinaria.

En el mismo, primero se creó un archivo "status.js" y se lo pusheo a la rama main. Posteriormente, se creó y switcheo a una rama nueva llamada "custom-navbar", que solo vive en el repo local. Luego de esto, se agregaron dos elementos < li > al nav bar del proyecto, para generar nuevos cambios que git pueda identificar. 

Por último, se mandaron todos estos cambios no commiteados al stash por medio del comando "git stash", para así poder switchear a la rama main. Finalmente se borro el archivo "status.js" y se pushearon los cambios para cumplir la consigna.

### Ejercicio 2
*Aclaración:* Se utilizo la branch "custom-navbar" ya creada en vez de la indicada en el ejercicio, la cual era "front-react" para la resolución de este ejercicio.

Primero se mergearon los cambios de la rama "main" a "custom-navbar", el cual constaba del borrado del archivo "status.js". Luego se sacó del stash los cambios guardados en el ejercicio anterior por medio del comando "git stash pop" y se commitearon los cambios.

Finalmente, para cumplir la consigna, cambiamos a la rama "main" y efectuamos un merge con la rama "custom-navbar", para traer todos los cambios efectuados en esta última. De esta forma, terminamos con el push de los cambios desde la rama "main" al remoto (en teoria, a producción).
