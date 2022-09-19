document.getElementById("formPersona").addEventListener("submit",GuardarPersona);

function GuardarPersona(e) {
    let nombre= document.getElementById("txtNombres").value;
    let apellidos= document.getElementById("txtApellidos").value;
    let telefono= document.getElementById("txtTelefono").value;
    let email= document.getElementById("txtEmail").value;

    const persona = { nombre, apellidos, telefono, email};

    let mensaje = "";
    let personas = localStorage.getItem("personas") == null ? [] : JSON.parse( localStorage.getItem("personas") );
    for( let i=0; i < personas.length && mensaje == ""; i++)
        if ( telefono == personas[i].telefono ) {
            mensaje = "Registro duplicado";
            break;
        }
    if ( mensaje == "" ) {
        mensaje = "Registro guardado";
        personas.push(persona);
        localStorage.setItem( "personas", JSON.stringify(personas) );
    }    

    alert(mensaje);
    e.preventDefault();
}