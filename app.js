const express=require("express");
const mongoose=require("mongoose");
const routes=require("./Routes/index");
const cors=require("cors");
const bodyparser=require('body-parser');

const port=6503;
const host='localhost';
const app=express();

// app.use(cors());
// app.options('*',cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(bodyparser.json());
app.use('/api',routes);

const uri = "mongodb+srv://sasikalaveludurai:lXBziVFkEbc5mBdD@cluster0.xjkvn.mongodb.net/Restaurant-Db?retryWrites=true&w=majority";
mongoose.connect(uri).then(
    () => {
        app.listen(port,()=>{   //execute the server
            console.log(`server is running on ${host}:${port}`);  //template string
        })
     },
    err => { console.log(`Error on server running at ${host}:${port}-${err}`);}
  );




  // const mongoURI = 'mongodb+srv://sasikalaveludurai:%21tsMyGmail6%40vg@cluster0.xjkvn.mongodb.net/?retryWrites=true&w=majority';
// const url='mongodb+srv://sasikalaveludurai:!tsMyGmail6@vg@clustername.mongodb.net/Restaurant-Db';
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//     .then(() => {
//       console.log('Connected to MongoDB Atlas');
//     })
//     .catch(err => {
//       console.error('Error connecting to MongoDB Atlas:', err);
//     });
//   const MongoClient = mongodb.MongoClient;
//   const uri ='mongodb+srv://sasikalaveludurai:!tsMyGmail6%40vg@cluster0.xjkvn.mongodb.net/?retryWrites=true&w=majority';
//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//      client.db("Restaurant-Db");
//      app.listen(port,()=>{   //execute the server
//         console.log(`server is running on ${host}:${port}`);  //template string
//     })
//     // perform actions on the collection object
//     client.close();
//   });
//   let uri =
//   'mongodb+srv://sasikalaveludurai:!tsMyGmail6@vg@cluster0.xjkvn.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri);
// // async function run() {
// //   try {
//      client.connect().then(()=>{
//         app.listen(port,()=>{   //execute the server
//             console.log(`server is running on ${host}:${port}`);  //template string
//         })
//     });
//     const database = client.db("Restaurant-Db");
//     // const ratings = database.collection("<collName>");
//     // const cursor = ratings.find();
//     // await cursor.forEach(doc => console.dir(doc));
// //   } finally {
//      client.close();
//   }
// }
// run().catch(console.dir);




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sasikalaveludurai:lXBziVFkEbc5mBdD@cluster0.xjkvn.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("Restaurant-Db").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(port,()=>{   //execute the server
//     console.log(`server is running on ${host}:${port}`);  //template string
// })
