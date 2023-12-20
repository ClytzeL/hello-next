import { MongoClient,Db,MongoClientOptions} from 'mongodb';
const ctf={
    url:'mongodb://root:mongodb.rds.aliyuncs.com:3717',
    name: 'admin'
}
let dbMg:Db|null = null;

async function connect(){
    let options:MongoClientOptions={};
    let client = await MongoClient.connect(ctf.url,options);
    console.log('MongoDB 连接成功',ctf.url);
    dbMg = client.db(ctf.name);
    return dbMg;
}

const mongodbInstance = async function() {
    if(dbMg)return dbMg;
    return connect();
}
export default mongodbInstance;