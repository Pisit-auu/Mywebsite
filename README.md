# Mywebsite — Portfolio ของ Pisit Sangiemwong

เว็บไซต์แนะนำตัวและรวมผลงาน (portfolio) หน้าเดียว พัฒนาด้วย **Next.js** และ **Tailwind CSS** แสดงประวัติโดยย่อ ทักษะ โปรเจกต์ที่เคยทำ และช่องทางติดต่อ

---

## สารบัญ

- [เนื้อหาในเว็บ](#เนื้อหาในเว็บ)
- [Tech Stack](#tech-stack)
- [โครงสร้างโปรเจกต์](#โครงสร้างโปรเจกต์)
- [เริ่มต้นใช้งาน](#เริ่มต้นใช้งาน)
- [Scripts](#scripts)
- [การแก้ไขเนื้อหา](#การแก้ไขเนื้อหา)
- [การ Deploy](#การ-deploy)

---

## เนื้อหาในเว็บ

เว็บเป็นหน้าเดียว มีแถบเมนูด้านบนที่ติดอยู่ตลอดเวลา (sticky) กดเลื่อนไปแต่ละส่วนได้

| ส่วน | Anchor | เนื้อหา |
|------|--------|---------|
| **About Me** | `#about` | ตำแหน่ง ประวัติย่อ รูปโปรไฟล์ และปุ่มไป GitHub |
| **Technologies** | — | ทักษะแบ่ง 5 กลุ่ม: Programming Languages, Web Development, AI & Machine Learning, Tools & DevOps, IoT & Embedded |
| **My Project** | `#work` | การ์ดโปรเจกต์ บอกปี คำอธิบาย ลิงก์ และแท็กเทคโนโลยี |
| **Contact** | `#contact` | ส่วนท้ายเว็บ ลิงก์ GitHub และอีเมล (กดแล้วเปิดโปรแกรมอีเมล) |

### โปรเจกต์ที่แสดง

| โปรเจกต์ | ปี | รายวิชา | ลิงก์ |
|----------|----|---------|-------|
| Numerical Website | 2024 | Numerical Method | [numerrical.vercel.app](https://numerrical.vercel.app/) |
| Kab shop | 2024 | System Analysis & Design | [kabshop.vercel.app](https://kabshop.vercel.app/) |
| StuffNext | 2025 | System Analysis & Design | [stuffnext.vercel.app](https://stuffnext.vercel.app/) |
| Giraffe Escape | 2024 | Object Oriented Programming | [giraftgame.vercel.app](https://giraftgame.vercel.app/) (เวอร์ชันเว็บ) |
| SearchEngine | 2025 | Machine Learning | [searchengineml.streamlit.app](https://searchengineml.streamlit.app/) |
| Intelligent System Project | 2025 | Intelligent System | [projectintelligentsystem.streamlit.app](https://projectintelligentsystem.streamlit.app/) |
| EA by AI | 2025 | Artificial Intelligence Software Development | [eawithai.vercel.app](https://eawithai.vercel.app/) |
| TableLearn | 2026 | — (โปรเจกต์ส่วนตัว) | [tablelearn.vercel.app](https://tablelearn.vercel.app/) |

---

## Tech Stack

| ส่วน | เทคโนโลยี |
|------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | React 19 |
| ภาษา | TypeScript |
| Styling | Tailwind CSS 4 |
| ฟอนต์ | Geist / Geist Mono (`next/font`) |
| รูปภาพ | `next/image` |

เว็บเป็น static ทั้งหมด build แล้วได้เป็นหน้า HTML ล้วน ไม่ต้องมีฐานข้อมูลหรือ environment variable

---

## โครงสร้างโปรเจกต์

```
Mywebsite/
├── public/
│   └── image.jpg          # รูปโปรไฟล์
├── src/app/
│   ├── layout.tsx         # Root layout, ฟอนต์, title และ description ของเว็บ
│   ├── page.tsx           # เนื้อหาทั้งหน้า + ข้อมูล portfolio (portfolioData)
│   └── globals.css        # Tailwind
├── next.config.ts
└── package.json
```

---

## เริ่มต้นใช้งาน

ต้องมี **Node.js 20.9** ขึ้นไป

```bash
git clone https://github.com/Pisit-auu/Mywebsite.git
cd Mywebsite
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

---

## Scripts

| คำสั่ง | คำอธิบาย |
|--------|----------|
| `npm run dev` | รัน development server |
| `npm run build` | build สำหรับ production |
| `npm run start` | รัน production server (ต้อง build ก่อน) |

---

## การแก้ไขเนื้อหา

ข้อมูลทั้งหมดอยู่ในตัวแปร `portfolioData` ด้านบนของ `src/app/page.tsx` แก้ที่นี่ที่เดียว ไม่ต้องแตะส่วน UI

| ต้องการแก้ | ฟิลด์ |
|------------|-------|
| ชื่อ / ตำแหน่ง / ประวัติย่อ | `name`, `role`, `bio` |
| GitHub / อีเมล | `socials.github`, `socials.email` |
| ทักษะ | `skills` (อาร์เรย์ของ `{ category, items }`) |
| โปรเจกต์ | `projects` (อาร์เรย์ของ `{ title, desc, year, link, tags }`) |

ตัวอย่างเพิ่มโปรเจกต์ใหม่:

```ts
{
  title: "ชื่อโปรเจกต์",
  desc: "คำอธิบายโปรเจกต์",
  year: "2026",
  link: "https://github.com/Pisit-auu/<repo>",
  tags: ["Next.js", "PostgreSQL"]
}
```

- **รูปโปรไฟล์:** แทนที่ไฟล์ `public/image.jpg`
- **ชื่อแท็บเบราว์เซอร์และคำอธิบายเว็บ:** แก้ `metadata` ใน `src/app/layout.tsx`

---

## การ Deploy

deploy บน **Vercel** ได้ทันที:

1. เข้า [vercel.com/new](https://vercel.com/new) แล้วเลือก repo `Pisit-auu/Mywebsite`
2. Framework Preset เลือก Next.js (Vercel ตรวจให้เอง)
3. กด Deploy

หลังจากนั้นทุกครั้งที่ push ขึ้น `main` Vercel จะ build และ deploy ให้อัตโนมัติ ไม่ต้องตั้ง environment variable ใด ๆ
