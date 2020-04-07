module.exports = (sequelize, dataTypes) => {
  const Payee = sequelize.define("Payee", {
    firstName: {
      type: dataTypes.STRING
    },
    secondName: {
      type: dataTypes.STRING
    },
    lastName: {
      type: dataTypes.STRING
    },
    secondSurname: {
      type: dataTypes.STRING
    },
    documentType: {
      type: dataTypes.ENUM,
      values: ["DNI", "CE"]
    },
    documentNumber: {
      type: dataTypes.INTEGER,
      unique: true
    },
    address: {
      type: dataTypes.STRING
    },
    gender: {
      type: dataTypes.ENUM,
      values: ["Masculino", "Femenino"]
    },
    civilStatus: {
      type: dataTypes.ENUM,
      values: [
        "Soltero",
        "Viudo",
        "Divorciado",
        "Casado",
        "Conviviente",
        "Separado"
      ]
    },
    department: {
      type: dataTypes.STRING
    },
    province: {
      type: dataTypes.STRING
    },
    district: {
      type: dataTypes.STRING
    }
  });

  Payee.associate = function(models) {
    Payee.belongsTo(models.Contract);
  };

  return Payee;
};
