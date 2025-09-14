// Función que determina el ganador en un juego de tres en raya
export const calculateWinner = (squares: (string | null)[]): string | null => {
    // Definimos todas las combinaciones posibles de posiciones que forman una línea ganadora
    const lines = [
        [0, 1, 2], // Línea horizontal superior
        [3, 4, 5], // Línea horizontal central
        [6, 7, 8], // Línea horizontal inferior
        [0, 3, 6], // Línea vertical izquierda
        [1, 4, 7], // Línea vertical central
        [2, 5, 8], // Línea vertical derecha
        [0, 4, 8], // Línea diagonal de esquina superior izquierda a esquina inferior derecha
        [2, 4, 6], // Línea diagonal de esquina superior derecha a esquina inferior izquierda
    ]
    // Iteramos sobre cada combinación de líneas ganadoras
    for (let i = 0; i < lines.length; i++) {
        // Extraemos las posiciones de la línea actual
        const [a, b, c] = lines[i]
        // Verificamos si las posiciones contienen el mismo valor (X u O) y no son nulas
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // Si se cumple la condición, retornamos el valor que representa al ganador (X u O)
            return squares[a]
        }
    }
    // Si no se encuentra ninguna línea ganadora, retornamos null
    return null
}