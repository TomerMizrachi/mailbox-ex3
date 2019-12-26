const router = require('express').Router();
const MailBoxController = require('./controller');

router.get('/mails/read', (req, res) => {
    MailBoxController.getAll(req, res)
});

router.get('/mail/read/:id', (req, res) => {
    MailBoxController.getMassage(req, res)
});

router.post('/mail/create', (req, res) => {
    MailBoxController.postMassage(req, res)
});

router.put('/mail/update/:id', (req, res) => {
    MailBoxController.putMassage(req, res)
});

router.delete('/mail/delete/:id', (req, res) => {
    MailBoxController.deleteMassage(req, res)
});

module.exports = router;