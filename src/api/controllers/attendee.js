import Attendee from '../models/attendee';

const list = (req, res) => {
	Attendee.find()
		.then(data => res.json(data))
		.catch(err => res.status(500) && console.log(err));
};

const create = (req, res) => {
	const {email} = req.body; 
	Attendee.findOne({email})
		.then(att => {
			console.log(att); 
			if (att)
				return res.status(402).json({msg: 'Attendee already exists'});

			const atd = new Attendee(req.body);
			atd.save()
				.then(data => res.json(data));
		})
		.catch(err => res.status(500));
};

const update = (req, res) => {
  const {id} = req.body;

  Attendee.findByIdAndUpdate(id, req.body, (err, attendee) =>  {
    if(err) return res.status(404).json({msg: 'Attendee id is missins'});
    if(!attendee) {
      return res.status(404).json({message: `Attendee with id ${id} can not be found.`});
    }

    res.json(attendee);
  });
};

export default function(api){
	api.route('/attendee')
    .get(list)
    .post(create)
    .put(update);
}

// export {list, add, update};