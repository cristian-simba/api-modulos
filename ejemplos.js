//ES MODULES
const calcular = (aniN,aniA)=>{
    let edad = aniA-aniN
    console.log(`Su edad es :${edad} y `)
    edad > 0 && edad < 13 ? console.log("Se encuentra en su niñez"):
    edad >= 13 && edad < 18 ? console.log("Se encuentra en su adolecencia"):
    edad >=18 && edad <30 ? console.log("Se encuentra en al florde la adultez"):
    edad >=30 && edad < 60 ? console.log("Se encuentra en su adultez"):
    edad >=60 && edad < 90 ? console.log("Se encuentra en su vejez"):""
}
export default calcular


//FUNDAMENTOS API
const obtenerDatosUsuario = async (nombreUsuario) => {
    try {
        const response = await fetch(`https://api.github.com/users/${nombreUsuario}`);
        
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos del usuario');
        }

        const usuario = await response.json();

      
        console.log(`Nombre de usuario: ${usuario.login}`);
        console.log(`Nombre: ${usuario.name || 'No disponible'}`);
        console.log(`Seguidores: ${usuario.followers}`);
        console.log(`Repositorios públicos: ${usuario.public_repos}`);
        console.log(`Ubicación: ${usuario.location || 'No disponible'}`);
 

    } catch (error) {
        console.error('Hubo un error al obtener los datos del usuario:', error);
    }
}

obtenerDatosUsuario('gilmar');
/* En el archivo de module */
// Definir funciones de operaciones matemáticas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// Exportar las funciones
module.exports = {
    sumar,
    restar
};