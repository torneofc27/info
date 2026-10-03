// =====================================
// CONFIGURACIÓN DEL TORNEO
// =====================================

const CONFIG = {

    // ESCRIBE AQUÍ TU WHATSAPP
    // Ejemplo Cuba: 535XXXXXXXX
    // Ejemplo España: 346XXXXXXXX
    whatsapp: "000000000000",

    // CANTIDAD DE CUPOS
    cupos: 32

};


// =====================================
// PARTICIPANTES CONFIRMADOS
// =====================================
//
// Cuando tengas jugadores puedes agregar:
//
// {
//     nombre: "Juan Pérez",
//     id: "12345678",
//     equipo: "Real Madrid",
//     foto: "assets/jugadores/juan.jpg"
// }
//
// =====================================

const participantes = [

    // EJEMPLO:

    /*
    {
        nombre: "Juan Pérez",
        id: "12345678",
        equipo: "Real Madrid",
        foto: "assets/jugadores/juan.jpg"
    }
    */

];


// =====================================
// NÚMEROS DE LA RIFA
// =====================================
//
// false = disponible
// true  = vendido
//
// =====================================

const numerosRifa = {

    1:false,
    2:true,
    3:false,
    4:false,
    5:true,
    6:false,
    7:false,
    8:false,

    9:false,
    10:true,
    11:false,
    12:false,
    13:false,
    14:true,
    15:false,
    16:false,

    17:false,
    18:false,
    19:true,
    20:false,
    21:false,
    22:false,
    23:false,
    24:true,

    25:false,
    26:false,
    27:false,
    28:false,
    29:true,
    30:false,
    31:false,
    32:false

};


// =====================================
// GENERAR TARJETAS DE PARTICIPANTES
// =====================================

function renderRoster() {

    const container =
        document.querySelector("#roster");

    if (!container) return;


    const cards = [];


    for (
        let i = 0;
        i < CONFIG.cupos;
        i++
    ) {

        const jugador =
            participantes[i];


        if (jugador) {

            cards.push(`

                <article class="player-card confirmed">

                    <div class="player-photo">

                        ${
                            jugador.foto

                            ?

                            `<img
                                src="${jugador.foto}"
                                alt="${jugador.nombre}"
                            >`

                            :

                            "👤"
                        }

                    </div>


                    <div class="player-number">

                        ${String(i + 1).padStart(2,"0")}

                    </div>


                    <div class="player-info">

                        <span>
                            JUGADOR CONFIRMADO
                        </span>

                        <h3>
                            ${jugador.nombre}
                        </h3>

                        <p>
                            ID: ${jugador.id}
                        </p>

                        <strong>
                            ⚽ ${jugador.equipo}
                        </strong>

                    </div>

                </article>

            `);

        }

        else {

            cards.push(`

                <article class="player-card empty">

                    <div class="empty-icon">
                        +
                    </div>

                    <span>
                        CUPO ${String(i + 1).padStart(2,"0")}
                    </span>

                    <h3>
                        DISPONIBLE
                    </h3>

                    <a href="inscripcion.html">
                        INSCRIBIRME →
                    </a>

                </article>

            `);

        }

    }


    container.innerHTML =
        cards.join("");

}



// =====================================
// GENERAR NÚMEROS DE RIFA
// =====================================

function renderRaffle() {

    const grid =
        document.querySelector("#raffleGrid");

    if (!grid) return;


    grid.innerHTML =

        Object.entries(numerosRifa)

        .map(([numero, vendido]) => {

            return `

                <div class="raffle-number
                    ${vendido
                        ? "sold"
                        : "available"
                    }">

                    ${String(numero).padStart(2,"0")}

                </div>

            `;

        })

        .join("");

}



// =====================================
// WHATSAPP
// =====================================

function setupWhatsApp() {

    const button =
        document.querySelector("#whatsappBtn");

    if (!button) return;


    const mensaje = `🎮 INSCRIPCIÓN — TORNEO FC27 PS4

Hola, deseo inscribirme en el Torneo FC27 PS4.

👤 Nombre y Apellidos:
➡️ 

🪪 Carnet de Identidad:
➡️ 

🎮 Equipo seleccionado:
➡️ 

📱 Número de teléfono:
➡️ 

📸 Foto de perfil:
➡️ La adjunto a este mensaje.

💳 COMPROBANTE DE PAGO:
➡️ Adjunto la captura de la transferencia.

📩 SMS DE CONFIRMACIÓN:
➡️ Reenvío el SMS de confirmación.

Acepto las condiciones y reglamento del torneo.`;


    button.href =
        `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;

    button.target = "_blank";

}



// =====================================
// EJECUTAR
// =====================================

renderRoster();

renderRaffle();

setupWhatsApp();
