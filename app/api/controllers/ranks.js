// Load the new model for ranking
import { create as _create} from '../models/ranks';

// Define create function
export function create(req, res, next) {

    _create({ name: req.body.name, score: req.body.score, date: req.body.date }, function (err, result) {
        if (err)
            next(err);
        else
            res.json({ status: "Ok", message: "User score is right", data: null });
    });
}