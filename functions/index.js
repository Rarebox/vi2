const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.submitForm = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }
    const data = req.body;

    try {
      const db = admin.database();
      const ref = db.ref('forms').push();
      await ref.set(data);
      return res.status(201).send({ message: 'Form submitted successfully', id: ref.key });
    } catch (error) {
      console.error('Error submitting form:', error);
      return res.status(500).send({ message: 'Error submitting form', error: error.message });
    }
  });
});

exports.getForms = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'GET') {
      return res.status(405).send('Method Not Allowed');
    }

    try {
      const db = admin.database();
      const ref = db.ref('forms');
      const snapshot = await ref.once('value');
      const forms = snapshot.val();
      return res.status(200).send(forms);
    } catch (error) {
      console.error('Error retrieving forms:', error);
      return res.status(500).send({ message: 'Error retrieving forms', error: error.message });
    }
  });
});

exports.updateFormStatus = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'PATCH') {
      return res.status(405).send('Method Not Allowed');
    }
    const { id, status } = req.body;

    try {
      const db = admin.database();
      const ref = db.ref(`forms/${id}`);
      await ref.update({ status });
      return res.status(200).send({ message: 'Form status updated successfully' });
    } catch (error) {
      console.error('Error updating form status:', error);
      return res.status(500).send({ message: 'Error updating form status', error: error.message });
    }
  });
});
