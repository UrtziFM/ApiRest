// Load the new model for users
import { create as _create, findOne } from '../models/users';
// Load bcrypt library
import { compareSync } from 'bcrypt'; 
// Load jwt library
import { sign } from 'jsonwebtoken';

// Codificamos las operaciones que se podran realizar con relacion a los usuarios
export function create(req, res, next) {

    _create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
        if (err)
            next(err);
        else
            res.json({ status: "Ok", message: "Usuario agregado exitosamente!!!", data: null });
    });
}
export function authenticate(req, res, next) {
    findOne({ email: req.body.email }, function (err, userInfo) {
        if (err) {
            next(err);
        } else {
            if (compareSync(req.body.password, userInfo.password)) {
                const token = sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({ status: "Ok", message: "El usuario ha sido autenticado!!!", data: { user: userInfo, token: token } });
            } else {
                res.json({ status: "error", message: "Invalid email/password!!", data: null });
            }
        }
    });
}