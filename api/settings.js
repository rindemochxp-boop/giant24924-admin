// api/settings.js
let storage = { autoMod: true }; 

export default function handler(req, res) {
  if (req.method === 'POST') {
    storage = { ...storage, ...req.body };
    res.status(200).json({ status: "success", newSettings: storage });
  } else {
    res.status(200).json(storage);
  }
}
