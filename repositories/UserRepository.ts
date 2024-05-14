import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {
    static async add(user: User) {
        const sql = 'INSERT INTO users (email, nombres, password) VALUES (?, ?, ?)';
        const values = [user.email, user.nombres, user.password];
        return db.execute(sql, values);
    }
}

export default UserRepository;