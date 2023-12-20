import {Collection,Document} from 'mongodb';
import mongodb from '../db/mongodb';

const DBName = 'd_user';
let DBcollection:Collection|null = null;

async function init() {
    if(DBcollection)return DBcollection;
    const DB = await mongodb();
    if(!DB) throw new Error('数据库未连接');
    const model = DB.collection(DBName);
    DBcollection = model;
    return model;
}
const subjectModel = {};
interface IUser{};
async function findOne(data:any){
    const db = await init();
    return await db.findOne<IUser>(data,{});
}
export default subjectModel;