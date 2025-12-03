// track the searches made by the user
import {Client, TablesDB} from "react-native-appwrite";
import {Databases} from "react-native-appwrite";
import {Query} from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const client = new Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client)


export const updateSearchCount  = async (query: string, movie: Movie)=>{

let promise = database.listTransactions({
    queries: [
        Query.equal('query', query)
    ]
});

}