//THIRD PARTY MODULES
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { ObjectID } = require('mongodb');

//CUSTOM MODULE FILES
const { Contact }  = require('./../models/Contact');


//ROUTES

//@route - GET - /api/contacts - GET ALL CONTACTS
router.get('/', (req, res) => {
    Contact.find({}).then((contacts) => {
        res.status(200).send({ contacts });
    }).catch((e) => {
        res.status(400).send();
    });
});

//@route - POST - /api/contacts - CREATE NEW CONTACT
router.post('/', (req, res) => {

    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }
    if (!req.body.email) {
        return res.status(400).send('Email is Required');
    }
    if (!req.body.phone) {
        return res.status(400).send('Phone is required');
    }

    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    });

    contact.save().then((contact) => {
        res.status(200).send({ contact })
    }).catch((e) => {
        res.status(400).send();
    });
});

//@route - PUT - /api/contacts/:id - UPDATE A CONTACT
router.put('/:id', (req, res) => {
    const body = _.pick(req.body, ['name', 'email', 'phone']);

    Contact.findOneAndUpdate({
        _id: req.params.id
    }, { $set: body }, { new: true }).then((contact) => {
        if (!contact) {
            return res.status(404).send({ message: 'Contact Not Found' });
        }

        res.status(200).send({ contact });
    }).catch((e) => {
        res.status(400).send();
    });
});

//@route - DELETE - /api/contacts/:id - DELETE A CONTACT
router.delete('/:id', (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send({ message: 'Invalid Id' });
    }

    Contact.findOneAndRemove({
        _id: req.params.id
    }).then((contact) => {
        if (!contact) {
            return res.status(404).send({ message: 'Contact Not Found' });
        }
        res.status(200).send({ contact });
    }).catch((e) => {
        res.status(400).send();
    });
});


module.exports = router;