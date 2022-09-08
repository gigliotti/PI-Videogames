const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATE
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://img.freepik.com/premium-vector/icon-gamepad-play-arcade-video-game-gamer-custom-designcartoon-illustration_185390-205.jpg?w=2000"
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ENUM('PC', 'PLAYSTATION', 'NINTENDO', 'XBOX', 'ANDROID', 'IOS'),
      allowNull: false
    }

  });
};
/*
- ID: * No puede ser un ID de un videojuego ya existente en la API rawg
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
*/