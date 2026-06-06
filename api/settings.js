export default function handler(req, res) {
  // ข้อมูลตั้งค่าที่บอทจะอ่าน
  const botSettings = {
    autoMod: true,
    verification: "enabled"
  };

  if (req.method === 'POST') {
    // ส่วนนี้ไว้ให้หน้าเว็บส่งค่ามาอัปเดต (ในอนาคต)
    res.status(200).json({ message: "Settings updated", status: "success" });
  } else {
    // ส่วนนี้ให้บอทเรียกใช้เพื่อดูว่าต้องตั้งค่าอะไร
    res.status(200).json(botSettings);
  }
}
