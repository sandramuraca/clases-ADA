## Ejercitacion

1) Crear un nuevo proyecto de React --hecho

2) Agregar en App.js el siguiente array, --hecho 

const nombresGatos = ["Rodolfo", "Muzzarela", "Artilugia", "Wosito", "Calamardo"]

3) En el JSX (el retorno de App) recorrer con un map nombresGato y por cada elemento del array retornar un <p> con el nombre del gato como contenido --hecho

4) Crear un componente llamado BotonGato que reciba como parametro un string. Ese string va a ser el contenido de un button de html.--hecho

5) Importar BotonGato en App --hecho

6) Hacer un map que recorra nombresGato y por cada elemento del array, retornar BotonGato pasandole como prop el nombre de cada gato. -- hecho


7) Crear el siguiente array en App.js:

const gatos = [
  {
    name: 'Rodolfo',
    shortDesc:
      'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
    colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
    sexo: 'm',
  },

  {
    name: 'Muzzarella',
    shortDesc:
      'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
    colores: ['gris'],
    sexo: 'f',
  },

  {
    name: 'Artilugia',
    shortDesc:
      'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
    colores: ['negro', 'blanco'],
    sexo: 'f',
  },

  {
    name: 'Wosito',
    shortDesc:
      'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
    colores: ['rayado'],
    sexo: 'm',
  },

  {
    name: 'Calamardo',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },
]; --hecho

8) Recorrer el array gatos y por cada elemento del array retornar el componente BotonGato pasandole el nombre de cada gato (recorda que son objetos, queremos la propiedad name de cada uno de ellos) --hecho

9) Crear el componente TarjetaGato que reciba como props: un nombre, una descripcion y una imagen. TarjetaGato debe tener un titulo con el nombre, un parrafo con la descripcion y la imagen. --hecho

10) Recorrer el array gatos y por cada elemento, retornar el componente TarjetaGato pasandole las props correspondientes.-- hecho