 import jwt from 'jsonwebtoken';
 
 const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        const isCustomAuth = token.length < 500; // Our own token is when if length of token is less than 500 and if it is token of googleAuth then length of token must be greater than 500

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');
            
            req.userId = decodedData?.id;
        } else {
            // It is the else case of GoogleAuth token 
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; //sub is a specific name for googleId
        }

        next();
    } catch (error) {
        console.log(error);
    }
 };

export default auth;