import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Projeto Voluntario",
    })
    .then(() => {
      console.log("Conexao ao database!");
    })
    .catch((error) => {
      console.log("Some Error Occured While Connecting To DataBase", error);
    });
};
