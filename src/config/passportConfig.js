import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import User from '../models/userModel.js';
import '../config/dotenvConfig.js';

const SECRET_KEY = process.env.SECRET_KEY;

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: SECRET_KEY,
        },
        async (payload, done) => {
            try {
                const user = await User.scope('withPassword').findByPk(payload.id);
                return user ? done(null, user) : done(null, false);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

export default passport;