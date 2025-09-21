use venv10

การเก็บข้อมูล cookie อยู่ 3 ส่วนคือ

- เก็บข้อมูลจาก http only Set-Cookie

- เก็บ cookie จากการเก็บค่า ผ่าน window.cookieStore (asynchronous) โดยเมื่อเปิดเว็บไซต์ จะมีการเก็บ cookie เรื่อยๆจนกว่าจำไม่มีข้อมูลที่เพิ่มขึ้นเป็นเวลา 3 second

- เก็บ cookie จากการเก็บค่า ผ่าน document.cookie (synchronous) 

ใช่ seleniumwire ในการเก็บข้อมูลจาก http only
