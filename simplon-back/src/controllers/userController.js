const User = require("../models/userModel");
const bcrypt = require("bcrypt"); // bcrypt va transformer le mdp du user en mdp haché dans la base de données
const jwt = require("jsonwebtoken"); // jsonwebtoken va stocker toutes les infos du user et va le stocker dans le local storage
const dotenv = require("dotenv");

dotenv.config(); //Dans ce fichier, on utilise les variables du fichier.env

const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // bcrypt va hacher le pwd et 10 est le niveau le plus élevé pour hacher le password
    const user = new User({
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: hashedPassword,
    }); // Le user a besoin du fullName, du userName et du password
    await user.save(); // attend que le user soit bien créé et ensuite le sauvegarde ds la base de données
    res.json(user); // envoie un msg qui dit que c'est bien créé
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName }); //va chercher le userName dans les infos qui sont envoyées par une requête
    if (!user) return res.status(404).send("User not found"); // va envoyer un user not found si le user n'est pas das la base de données

    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    ); // compare est une méthode de bcrypt qui va comparer le passeword entré par l'user avec celui enregistrées dans la base de données
    if (!validpassword) return res.status(400).send("Invalid password"); // va donner un mod incorrect si le user se trompe dans son password
    const token = jwt.sign({ user }, process.env.SECRET_KEY);
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { registerUser, loginUser };
