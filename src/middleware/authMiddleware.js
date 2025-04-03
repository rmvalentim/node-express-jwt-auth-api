import passport from '../config/passportConfig.js';
export const authenticateJWT = passport.authenticate('jwt', { session: false });