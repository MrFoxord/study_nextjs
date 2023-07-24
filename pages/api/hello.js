export default function handler(req, res) {
    console.log('hi')
    res.status(200).json({ text: 'Hello' });
}