# 🎮 Tic-Tac-Toe con Redux Toolkit

Un juego de tres en raya (tic-tac-toe) implementado con React, TypeScript y Redux Toolkit, diseñado como práctica de aprendizaje para entender el manejo de estado global con Redux.

![React](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9+-purple.svg)
![Vite](https://img.shields.io/badge/Vite-5.0+-yellow.svg)

## 🎯 Características

- ✅ **Juego completo de tres en raya** con detección automática de ganador
- 🎉 **Efectos visuales** con confetti cuando alguien gana
- 🔄 **Estado global** manejado con Redux Toolkit
- 📱 **Interfaz responsive** y moderna
- 🎨 **UI atractiva** con estilos personalizados
- 🔧 **TypeScript** para mayor seguridad de tipos

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18+** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida y moderna

### Estado Global
- **Redux Toolkit** - Librería oficial para manejo de estado con Redux
- **React-Redux** - Bindings oficiales de React para Redux

### Funcionalidades
- **Canvas Confetti** - Efectos visuales para celebración de victoria

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Button.tsx          # Componente reutilizable para casillas
├── store/
│   ├── index.ts           # Configuración del store de Redux
│   └── slices/
│       ├── gameSlice.ts   # Slice principal del juego
│       └── counterSlice.ts # Slice de ejemplo (no utilizado)
├── utils/
│   └── calculateWinner.ts # Lógica para determinar el ganador
├── App.tsx               # Componente principal
├── main.tsx             # Punto de entrada de la aplicación
└── ...
```

## 🎮 Cómo Jugar

1. **Inicia el juego** - El jugador X siempre comienza
2. **Haz clic** en cualquier casilla vacía para hacer tu movimiento
3. **Alterna turnos** - Los jugadores X y O se turnan automáticamente
4. **Gana** - Consigue tres en raya (horizontal, vertical o diagonal)
5. **Celebra** - ¡Confetti cuando ganes! 🎉
6. **Reinicia** - Usa el botón "Reset" para comenzar una nueva partida

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd redux-toolkit
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Navega a `http://localhost:5173`
   - ¡Disfruta jugando!

## 📚 Conceptos de Redux Aprendidos

Este proyecto demuestra los conceptos fundamentales de Redux:

### 🏪 Store (Almacén)
- Estado global centralizado para toda la aplicación
- Configurado con `configureStore` de Redux Toolkit

### 🔄 Slices
- **gameSlice**: Maneja el estado del juego (casillas y turnos)
- Acciones: `makeMove` y `resetGame`
- Reducers: Lógica para actualizar el estado

### 🎯 Selectors
- `useSelector`: Para acceder al estado desde componentes
- `useDispatch`: Para enviar acciones al store

### 🔧 Tipos TypeScript
- Tipado completo del estado y acciones
- Interfaz `GameState` para el estado del juego
- `RootState` para el tipo del estado global

## 🎯 Objetivos de Aprendizaje

Este proyecto está diseñado para practicar:

- ✅ **Manejo de estado global** con Redux Toolkit
- ✅ **Separación de responsabilidades** (UI vs Lógica)
- ✅ **Tipado con TypeScript** en aplicaciones React
- ✅ **Arquitectura de componentes** reutilizables
- ✅ **Integración de librerías externas** (confetti)
- ✅ **Mejores prácticas** de desarrollo React

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de la construcción
npm run lint         # Ejecutar linter
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Este es un proyecto educativo, así que:

- 🐛 Reporta bugs
- 💡 Sugiere mejoras
- 📝 Mejora la documentación
- 🎨 Añade nuevas funcionalidades

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🎓 Recursos de Aprendizaje

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**¡Disfruta aprendiendo Redux con este divertido juego! 🎮✨**