const Sequelize = require('sequelize');
const { User } = require('./models');
// const { User, Photo } = require('./models)


// CREATE USERS
app.post('/users', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email,
    });
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
})

// RETRIEVING USERS

//Getting All Rows
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

//Selects All Columns
app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});

//Retrieve Row by id
app.get('/users/:id', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
});

//Error Handling
app.get('/users/:id', async (req, res) => {
    try{
        const oneUser = await User.findByPk(req.params.id);
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});

// Text Search 
app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            firstName: req.body.term,
        }
    });
    res.json(users);
});

// Text Search on Multiple Fields
app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            ]
        }
    });
    res.json(users);
});

// Get all Users with their Photos
app.get('/users/photos', async (req, res) => {
    const users = await User.findAll({
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

// user search that includes photos
app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            ]
        },
        include: [{
            model: Photo
        }]
    });
    res.json(users);
});

// get all Photos, and include the User Object with each Photo
// app.get('/photos/users, async (req, res) => {
//     const photos = await Photos.findAll({
//         include: [{
//             model: User
//         }]
//     });
//     res.json(photos);
// });

// UPDATING USER
app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
    
    // Assuming that `req.body` is limited to
    // the keys firstName, lastName, and email
    const updatedUser = await User.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});

// DELETING USER

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});


