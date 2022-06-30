import axios from 'axios';

export default async (req, res) => {

    const { email } = req.body && JSON.parse(req.body);

    if (email) {
      const OPTIONS = {
        method: 'POST',
        url: 'https://api.sendinblue.com/v3/contacts',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.MAIL_KEY
        },
        data: { email: email, updateEnabled: false }
      };

      try {

        await axios.request(OPTIONS);
        res.status(200).json({ message: 'Subscribed'});

      } catch(err) {

        res.status(400).json(err.response.data);

      }
    } else {
      res.status(400).json({message: 'Email is required'});
    }
} 