import clientPromise from "../../lib/utils/mongodb.js";
import {ObjectId} from 'mongodb'
import { withAuth } from "@clerk/nextjs/api";

export default withAuth(async function handler(req, res) {
  //Authorization
  const { userId, sessionId, getToken } = req.auth;

  //General
  console.log('ℹ️ Request Received');
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  
  switch (req.method) {
    case "POST":
        try {
            let bodyObject = req.body ? JSON.parse(req.body) : null;
            console.log('POST Request Received');
            console.log(req.body);

            
            res.status(201).json(req)
            return

        } catch (error) {
          console.log(error);
          res.status(500).json(error)
        }
      break
    case "GET":
        try {
            console.log('GET Request Received');

    

            res.status(201).json(req)
            return

        } catch (error) {
          console.log(error);
          res.status(500).json(error)
        }
      break
    case "PUT":
        try {

            console.log('PUT Request Received');
            res.status(201).json(req)
            return

        } catch (error) {
          console.log(error);
          res.status(500).json(error)
        }
      break
    case 'DELETE':
      try {

            console.log('DELETE Request Received');

            console.log();
            const body = JSON.parse(req.body)


            if (item.deletedCount === 1) {
                res.status(204).json('')
                return
            } else {
                res.status(404).json('')
                return
            }
            

      } catch (error) {
        console.log(error);
        res.status(500).json(error)
      }
    break
  }
})