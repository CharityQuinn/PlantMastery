
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String},
  lastName: {type: String},
  email: {type: String},
  likePlant: {type: String}
 
});

const User = mongoose.model("User", userSchema);

module.exports = User;






const bcryptjs = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a table from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our table is between 1 and 140 characters
      validate: {
        len: [1, 125]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 125]
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    
    email: {
       type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255]
      }
    },
    hasVoted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isLeader: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function (models) {
    models.User.belongsToMany(models.Group, {
      through: "UserGroup"
    });
    models.User.hasMany(models.VacationRatings);
  };
  // create method for all user objects to use
  User.prototype.validPassword = function(password) {
    return bcryptjs.compareSync(password, this.password);
  }

  User.hook("beforeCreate", function(user) {
    user.password = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(10), null);
  });


  
  return User;
};
