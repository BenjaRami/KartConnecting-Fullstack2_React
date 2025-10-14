
/* ------ Datos de ejemplo (inspirados en Mario Kart 8 Deluxe) ------ */


/* Jugadores: (más de 50) */
const jugadores = [
  { id: 1, nombre: "MarioRacer", correo: "mario@nintendo.com", pais: "Italia", nivel: "Pro", bio: "Plomero legendario." },
  { id: 2, nombre: "LuigiSpeed", correo: "luigi@nintendo.com", pais: "Italia", nivel: "Semi-Pro", bio: "Hermano veloz." },
  { id: 3, nombre: "PeachStar", correo: "peach@nintendo.com", pais: "Reino Champiñón", nivel: "Pro", bio: "Elegancia en pista." },
  { id: 4, nombre: "YoshiTurbo", correo: "yoshi@nintendo.com", pais: "Isla Yoshi", nivel: "Pro", bio: "Dino veloz." },
  { id: 5, nombre: "BowserBoss", correo: "bowser@nintendo.com", pais: "Castillo Koopa", nivel: "Pro", bio: "Fuerza bruta." },
  { id: 6, nombre: "DKBarrels", correo: "dk@nintendo.com", pais: "Jungle", nivel: "Semi-Pro", bio: "Rey de la jungla." },
  { id: 7, nombre: "ToadDash", correo: "toad@nintendo.com", pais: "Reino Champiñón", nivel: "Amateur", bio: "Pequeño pero rápido." },
  { id: 8, nombre: "WarioGold", correo: "wario@nintendo.com", pais: "Wario Land", nivel: "Semi-Pro", bio: "Por monedas." },
  { id: 9, nombre: "WaluigiSpin", correo: "waluigi@nintendo.com", pais: "Diamond City", nivel: "Semi-Pro", bio: "Estilo y técnica." },
  { id: 10, nombre: "RosalinaCosmos", correo: "rosalina@nintendo.com", pais: "Galaxy", nivel: "Pro", bio: "Control estelar." },
  { id: 11, nombre: "DaisyFlower", correo: "daisy@nintendo.com", pais: "Sarasaland", nivel: "Semi-Pro", bio: "Energía pura." },
  { id: 12, nombre: "ShyGuyMask", correo: "shyguy@nintendo.com", pais: "Unknown", nivel: "Amateur", bio: "Misterioso." },
  { id: 13, nombre: "KoopaShell", correo: "koopa@nintendo.com", pais: "Reino Koopa", nivel: "Amateur", bio: "Soldado veloz." },
  { id: 14, nombre: "BabyMario", correo: "babymario@nintendo.com", pais: "Italia", nivel: "Amateur", bio: "El futuro." },
  { id: 15, nombre: "BabyLuigi", correo: "babyluigi@nintendo.com", pais: "Italia", nivel: "Amateur", bio: "Pequeño y ágil." },
  { id: 16, nombre: "BabyPeach", correo: "babypeach@nintendo.com", pais: "Reino Champiñón", nivel: "Amateur", bio: "Pequeña y rápida." },
  { id: 17, nombre: "BabyDaisy", correo: "babydaisy@nintendo.com", pais: "Sarasaland", nivel: "Amateur", bio: "Alegre." },
  { id: 18, nombre: "DryBonesX", correo: "drybones@nintendo.com", pais: "Castillo Koopa", nivel: "Semi-Pro", bio: "Resistente." },
  { id: 19, nombre: "BowserJrClown", correo: "bowserjr@nintendo.com", pais: "Castillo Koopa", nivel: "Semi-Pro", bio: "Pequeño intrépido." },
  { id: 20, nombre: "KamekMagic", correo: "kamek@nintendo.com", pais: "Castillo Koopa", nivel: "Pro", bio: "Magia en pista." },
  { id: 21, nombre: "BirdoPink", correo: "birdo@nintendo.com", pais: "Dinosaur Land", nivel: "Semi-Pro", bio: "Lista para la acción." },
  { id: 22, nombre: "KingBooPhantom", correo: "kingboo@nintendo.com", pais: "Boo Mansion", nivel: "Pro", bio: "Fantasma veloz." },
  { id: 23, nombre: "FunkyKongPro", correo: "funkykong@nintendo.com", pais: "Jungle", nivel: "Pro", bio: "Cool y potente." },
  { id: 24, nombre: "LakituCloud", correo: "lakitu@nintendo.com", pais: "Sky", nivel: "Amateur", bio: "Árbitro y piloto." },
  { id: 25, nombre: "ToadetteCute", correo: "toadette@nintendo.com", pais: "Reino Champiñón", nivel: "Amateur", bio: "Llena de energía." },
  { id: 26, nombre: "MetalMario", correo: "metalmario@nintendo.com", pais: "Italia", nivel: "Pro", bio: "Pesado y fuerte." },
  { id: 27, nombre: "PinkGoldPeach", correo: "pgpeach@nintendo.com", pais: "Reino Champiñón", nivel: "Pro", bio: "Brillante y veloz." },
  { id: 28, nombre: "DryBowser", correo: "drybowser@nintendo.com", pais: "Castillo Koopa", nivel: "Pro", bio: "Oscuro y potente." },
  { id: 29, nombre: "DiddyBanana", correo: "diddy@nintendo.com", pais: "Jungle", nivel: "Semi-Pro", bio: "Plátanos al ataque." },
  { id: 30, nombre: "PaulineCity", correo: "pauline@nintendo.com", pais: "New Donk City", nivel: "Semi-Pro", bio: "Alcaldesa veloz." },
  { id: 31, nombre: "InklingBoy", correo: "inklingboy@nintendo.com", pais: "Inkopolis", nivel: "Pro", bio: "Color y velocidad." },
  { id: 32, nombre: "InklingGirl", correo: "inklinggirl@nintendo.com", pais: "Inkopolis", nivel: "Pro", bio: "Pura energía." },
  { id: 33, nombre: "VillagerBoy", correo: "villagerb@nintendo.com", pais: "Animal Crossing", nivel: "Amateur", bio: "De pueblo a pista." },
  { id: 34, nombre: "VillagerGirl", correo: "villagerg@nintendo.com", pais: "Animal Crossing", nivel: "Amateur", bio: "Dulce y rápida." },
  { id: 35, nombre: "IsabelleBell", correo: "isabelle@nintendo.com", pais: "Animal Crossing", nivel: "Semi-Pro", bio: "Orden en pista." },
  { id: 36, nombre: "LinkHero", correo: "link@nintendo.com", pais: "Hyrule", nivel: "Pro", bio: "Héroe veloz." },
  { id: 37, nombre: "TanookiMario", correo: "tanooki@nintendo.com", pais: "Italia", nivel: "Pro", bio: "Transformación ágil." },
  { id: 38, nombre: "CatPeach", correo: "catpeach@nintendo.com", pais: "Reino Champiñón", nivel: "Pro", bio: "Ágil y felina." },
  { id: 39, nombre: "MiiPlayer1", correo: "mii1@example.com", pais: "USA", nivel: "Amateur", bio: "Jugador personalizado." },
  { id: 40, nombre: "MiiPlayer2", correo: "mii2@example.com", pais: "Chile", nivel: "Amateur", bio: "Jugador personalizado." },
  { id: 41, nombre: "MiiPlayer3", correo: "mii3@example.com", pais: "Mexico", nivel: "Amateur", bio: "Jugador personalizado." },
  { id: 42, nombre: "MiiPlayer4", correo: "mii4@example.com", pais: "Japan", nivel: "Semi-Pro", bio: "Jugador personalizado." },
  { id: 43, nombre: "MiiPlayer5", correo: "mii5@example.com", pais: "Spain", nivel: "Semi-Pro", bio: "Jugador personalizado." },
  { id: 44, nombre: "MiiPlayer6", correo: "mii6@example.com", pais: "Brazil", level: "Pro", bio: "Jugador personalizado." },
  { id: 45, nombre: "MiiPlayer7", correo: "mii7@example.com", pais: "France", nivel: "Amateur", bio: "Jugador personalizado." },
  { id: 46, nombre: "MiiPlayer8", correo: "mii8@example.com", pais: "Germany", nivel: "Semi-Pro", bio: "Jugador personalizado." },
  { id: 47, nombre: "MiiPlayer9", correo: "mii9@example.com", pais: "Canada", nivel: "Semi-Pro", bio: "Jugador personalizado." },
  { id: 48, nombre: "MiiPlayer10", correo: "mii10@example.com", pais: "UK", nivel: "Amateur", bio: "Jugador personalizado." },
  { id: 49, nombre: "PeteyPiranha", correo: "petey@nintendo.com", pais: "Piranha Bay", nivel: "Pro", bio: "Gigante y peligroso." },
  { id: 50, nombre: "KingBobomb", correo: "kingbobomb@nintendo.com", pais: "Bomb Land", nivel: "Semi-Pro", bio: "Explosivo en curvas." }
];

/* Equipos */
const equipos = [
  { id: 1, nombre: "Mushroom Racers", pais: "Reino Champiñón", descripcion: "Equipo clásico de Mario." },
  { id: 2, nombre: "Koopa Clan", pais: "Castillo Koopa", descripcion: "Caparazones y poder." },
  { id: 3, nombre: "Banana Bunch", pais: "Jungle", descripcion: "Plátanos por doquier." },
  { id: 4, nombre: "Galaxy Wheels", pais: "Galaxy", descripcion: "Velocidad espacial." },
  { id: 5, nombre: "Spooky Speedsters", pais: "Boo Mansion", descripcion: "Fantasmas al ataque." },
  { id: 6, nombre: "Splatoon Squad", pais: "Inkopolis", descripcion: "Color y caos." },
  { id: 7, nombre: "Hyrule Racers", pais: "Hyrule", descripcion: "Trifuerza y velocidad." },
  { id: 8, nombre: "Animal Dashers", pais: "Animal Crossing", descripcion: "Buen rollo y velocidad." },
  { id: 9, nombre: "Metal Fury", pais: "Italia", descripcion: "Pesados e imponentes." },
  { id: 10, nombre: "Miiverse Drivers", pais: "Global", descripcion: "Jugadores de todo el mundo." }
];

/* Torneos */
const torneos = [
  { id: 1, nombre: "Copa Champiñón 2025", modalidad: "Individual", inicio: "2025-01-10", fin: "2025-01-15" },
  { id: 2, nombre: "Copa Koopa 2025", modalidad: "Equipos", inicio: "2025-02-01", fin: "2025-02-07" },
  { id: 3, nombre: "Grand Prix Deluxe", modalidad: "Individual", inicio: "2025-03-05", fin: "2025-03-12" },
  { id: 4, nombre: "Battle of Kingdoms", modalidad: "Equipos", inicio: "2025-04-01", fin: "2025-04-07" },
  { id: 5, nombre: "Rainbow Cup", modalidad: "Individual", inicio: "2025-05-10", fin: "2025-05-15" },
  { id: 6, nombre: "Galaxy Grand Prix", modalidad: "Equipos", inicio: "2025-06-20", fin: "2025-06-27" }
];

/* Carreras (simple lista, vinculadas a torneos) */
const carreras = [
  { id: 1, id_torneo: 1, pista: "Mario Kart Stadium", fecha: "2025-01-10 10:00" },
  { id: 2, id_torneo: 1, pista: "Water Park", fecha: "2025-01-10 12:00" },
  { id: 3, id_torneo: 1, pista: "Sweet Sweet Canyon", fecha: "2025-01-11 10:00" },
  { id: 4, id_torneo: 2, pista: "Bowser's Castle", fecha: "2025-02-01 11:00" },
  { id: 5, id_torneo: 2, pista: "Rainbow Road", fecha: "2025-02-02 11:00" },
  { id: 6, id_torneo: 3, pista: "Electrodrome", fecha: "2025-03-05 14:00" },
  { id: 7, id_torneo: 3, pista: "Mount Wario", fecha: "2025-03-06 14:00" },
  { id: 8, id_torneo: 4, pista: "Hyrule Circuit", fecha: "2025-04-01 16:00" },
  { id: 9, id_torneo: 4, pista: "Animal Crossing", fecha: "2025-04-02 16:00" },
  { id: 10, id_torneo: 5, pista: "Cloudtop Cruise", fecha: "2025-05-11 18:00" }
];

/* Participaciones: generaremos varias entradas aleatorias (por simplicidad, aquí unas 120) */
const participaciones = [];
for (let i = 1; i <= 120; i++) {
  const jugador = jugadores[(i-1) % jugadores.length].id;
  const carrera = (i % carreras.length) + 1;
  const posicion = (i % 12) + 1;
  const minutos = 2 + (i % 4); // 2 a 5
  const segundos = (i * 7) % 60;
  const items = 4 + (i % 12);
  // Formato INTERVAL '0 0:MM:SS' DAY TO SECOND (lo mostramos como string para luego convertir si hace falta)
  const tiempo = `0 0:0${minutos}:${String(segundos).padStart(2,'0')}`;
  participaciones.push({
    id: i,
    id_jugador: jugador,
    id_carrera: carrera,
    posicion_final: posicion,
    tiempo_total: tiempo,
    items_usados: items
  });
}

/* Busquedas de jugadores */
const busquedas = [
  { id: 1, id_equipo: 1, rol: "Piloto ofensivo", nivel: "Pro", estado: "Abierta" },
  { id: 2, id_equipo: 2, rol: "Soporte táctico", nivel: "Semi-Pro", estado: "Abierta" },
  { id: 3, id_equipo: 3, rol: "Estratega", nivel: "Pro", estado: "Cerrada" },
  { id: 4, id_equipo: 4, rol: "Piloto defensivo", nivel: "Amateur", estado: "Abierta" },
  { id: 5, id_equipo: 5, rol: "Manager", nivel: "Pro", estado: "Abierta" }
];

export { jugadores, equipos, torneos, carreras, participaciones, busquedas };

