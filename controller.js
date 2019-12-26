const massage = require('./massage');

class MailBoxController {
    static async getAll(req, res) {
        try {
            let obj = await massage.find({}, (err) => {
                if (err) throw err;
            });

            if (obj.length == 0) throw {
                message: 'no content'
            };

            res.status(200).json(obj);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    static async getMassage(req,res){
        try{
            let obj = await massage.find({massageNumber : req.params.id}, (err) =>{
                if(err) throw err;
            });

            if(obj.length == 0) throw {
                message: 'no content'
            };
            res.status(200).json(obj[0]);
        }catch(err){
            res.status(500).send(err);
        }
    }
    static async postMassage(req,res){
        try{
            let obj = await massage.find({massageNumber : req.body.massageNumber}, (err) =>{
                if(err) throw err;
            });

            if(obj.length != 0) throw {
                message: 'id number already exists chose diffrent one'
            };

            let m = new massage(
                {
                    massageNumber: req.body.massageNumber,
                    senderName: req.body.senderName,
                    receiverName: req.body.receiverName,
                    massageContent: req.body.massageContent
                }
            );
            m.save();
            res.send('Message Created successfully');
        }catch(err){
            res.status(400).send(err);
        }
    }
    static async putMassage(req, res) {
        try{
            let obj = await massage.find({massageNumber : req.params.id}, (err) =>{
                if(err) throw err;
            });

            if(obj.length == 0) throw {
                message: 'no content'
            };

            obj = obj[0];

            if(req.body.senderName)
                obj.senderName = req.body.senderName;

            if(req.body.receiverName)
                obj.receiverName = req.body.receiverName;

            if(req.body.massageContent)
                obj.massageContent = req.body.massageContent;

            await massage.updateOne({massageNumber : req.params.id},obj, (err)=>{
                if(err) throw err;
            })

            res.status(200).send('success');
        }catch(err){
            res.status(500).send(err);
        }
    }
    static async deleteMassage(req, res) {
        try{
            let obj = await massage.find({massageNumber : req.params.id}, (err) =>{
                if(err) throw err;
            });

            if(obj.length == 0) throw {
                message: 'no content'
            };
            await massage.deleteOne({massageNumber : req.params.id});
            res.status(200).send('deleted');
        }catch(err){
            res.status(500).send(err);
        }
    }
}

module.exports = MailBoxController;
