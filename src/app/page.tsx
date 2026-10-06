import HeroTitle from "./components/HeroTitle";
import SiteNav from "./components/SiteNav";
import TiltPhoto from "./components/TiltPhoto";
import WorkExplorer from "./components/WorkExplorer";
import type { Project, SkillGroup } from "./components/types";


const portfolioData: {
  name: string;
  role: string;
  bio: string;
  socials: { github: string; email: string };
  skills: SkillGroup[];
  projects: Project[];
} = {
  name: "Pisit Sangiemwong",
  role: "Software Developer",
  bio: "I am a third year Computer Science student experienced in AI and web application projects, with growing interests in IoT and DevOps to broaden my technical skill set.",
  socials: {
    github: "https://github.com/Pisit-auu",
    email: "s6604062610471@email.kmutnb.ac.th", 
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "PrismaORM", "PostgreSQL", "MySQL"]
    },
    {
      category: "AI & Machine Learning",
      items: ["PyTorch/TensorFlow", "Scikit-learn", "Supervised Fine Tuning (SFT)", "LoRA"]
    },
    {
      category: "Tools & DevOps",
      items: ["Docker", "Git", "Postman", "Swagger", "UNIX"]
    },
    {
      category: "IoT & Embedded",
      items: ["Raspberry Pi", "C/C++ Sensor Integration"]
    }
  ],
  projects: [
    {
      title: "Numerical Website",
      desc: "เป็น Project วิชา Numerical Method ที่นำเนื้อหาที่เรียน มาทำเป็นเว็บไซต์สำหรับ คำนวณ พร้อมแสดงวิธีการทำอย่างละเอียด เครื่องมือที่ใช้ Next.js tailwind PrismaORM Postgrest Postman โดยมีการทำ CICD Swagger และได้ใช้ Docker ในProjectด้วย ",
      year: "2024",
      link: 'https://numerrical.vercel.app/',
      image: "/projects/numerical.png",
      tags: ["Next.js", "Tailwind", "Prisma", "Docker", "Swagger", "PostgreSQL"]
    },
    {
      title: "Kab shop",
      desc: "เป็น Project วิชา 	SYSTEM ANALYSIS & DESIGN เป็นวิชาสำหรับฝึกการวิเคราะห์ Requirement รวมถึงการสร้าง Diagram ต่างๆ ซึ่งได้หัวข้อ Project คือ เว็บไซต์ ขายอุปกรณ์เครื่องเขียน ซึ่งในระบบมีตั้งแต่ การ เพิ่ม ลบ แก้ไข ค้นหา ตะกร้า บัญชีผู้ใช้ เครื่องมือที่ใช้พัฒนาคือ Next.js tailwind PrismaORM Postgrest Postman ",
      year: "2024",
      link: 'https://kabshop.vercel.app/',
      image: null,
      tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"]
    },
    {
      title: "StuffNext",
      desc: "เป็น Project วิชา 	SYSTEM ANALYSIS & DESIGN โดยทำงานจริงตั้งแต่ รับ Requirement ของผู้ใช้ ไปจนถึงการทดสอบระบบ และ Deploy เพื่อใช้งาน ซึ่งเว็บไซต์นี้ ใช้ในการ จัดการครุภัณฑ์ของโรงเรียนศรีนครินทร์วิทยานุเคราะห์ โดยจัดเก็บตำแหน่งที่อยู่ จำนวน ชื่อผู้รับผิดชอบ ของครุภัณฑ์แต่ละอัน ซึ่งในระบบ สามารถ ค้นหา เพิ่ม ลบ แก้ไข ย้ายตำแหน่ง ได้ ดูสรุปได้ เครื่องมือที่ใช้พัฒนาคือ Next.js tailwind PrismaORM Postgrest Postman และ Docker สำหรับ deploy อ่านรายละเอียดเพิ่มเติมได้ที่ README https://github.com/Pisit-auu/stuffnext",
      year: "2025",
      link: 'https://stuffnext.vercel.app/',
      image: "/projects/stuffnext.png",
      tags: ["Next.js", "Tailwind", "Docker", "Prisma", "PostgreSQL"]
    },
    {
      title: "Giraft Escape",
      desc: "เป็น Project วิชา Object Oriented Programming โดยสร้างเกมแนว Tower Defense ที่สร้างโดยใช้หลักการ OOP และ ภาษา Java ต่อมาได้พอร์ตเป็นเวอร์ชันเว็บด้วย TypeScript ให้เล่นบนเบราว์เซอร์ได้ทั้งคอมพิวเตอร์และมือถือ",
      year: "2024",
      link: 'https://giraftgame.vercel.app/',
      image: "/projects/giraft.png",
      tags: ["Java", "OOP", "TypeScript", "Git"]
    },
    {
      title: "SearchEngine",
      desc: "เป็น Project วิชา Machine Learning โดย Project นี้ใช้สำหรับการค้นหารูปภาพสถานที่ๆคล้ายคลึงกันด้วย AI ซึ่งจัดกลุ่มรูปภาพ โดยใช้ CLIP ในการแปลงรูปภาพให้เป็นเวกเตอร์คุณลักษณะ (feature vectors) และใช้ FAISS เพื่อค้นหารูปภาพที่มีความคล้ายคลึงกัน ",
      year: "2025",
      link: 'https://searchengineml.streamlit.app/',
      image: null,
      tags: ["Python", "Machine Learning", "CLIP", "FAISS"]
    },
    {
      title: "Project ",
      desc: "เป็น Project วิชา Intelligentsystem ได้ลองใช้ SVM และ KNN ในการลองใช้สำหรับทำนายรายได้ของประชากร และ ลองพัฒนา Convolutional Neural Network โดยใช้ MobileNetV2 สำหรับ ทำนายรูปภาพว่าเป็น ค้อน กระดาษ หรือ กรรไกร",
      year: "2025",
      link: 'https://projectintelligentsystem.streamlit.app/',
      image: "/projects/intelligent.png",
      tags: ["Python", "SVM", "KNN", "MobileNetV2"]
    },
    {
      title: "EA by Ai ",
      desc: "เป็น Project วิชา Artificial Intelligence Software Development ทำ Projectเกี่ยวกับ ให้ EA เทรด ให้กับเรา อัตโนมัติ ใน MetaTrader5 โดยใช้ 1DCNN+LSTM ในการทำนาย Wait,Trade และใช้ LLM ในการทำนาย BUY,SELL โดยการ finetune LLM ด้วย LoRA",
      year: "2025",
      link: 'https://eawithai.vercel.app/',
      image: "/projects/eawithai.png",
      tags: ["Python","1DCNN","LSTM","Supervised Fine Tuning (SFT)","LLM Parameter efficient fine tuning using LoRA","llama"]
    },
    {
      title: "TableLearn",
      desc: "เว็บไซต์ช่วยวางแผนลงทะเบียนเรียนสำหรับนักศึกษา มจพ. ดึงรายวิชาและ section จริงจากระบบทะเบียน มาลองจัดได้หลายแผน เห็นเวลาเรียนชนและตารางสอบชนทันที มีตัวช่วยจัดแผนอัตโนมัติพร้อมคะแนน เปรียบเทียบ 2 แผน และห้องจัดตารางร่วมกับเพื่อนด้วยรหัสห้อง ส่งออกเป็น Excel หรือรูปภาพได้",
      year: "2026",
      link: 'https://tablelearn.vercel.app/',
      image: "/projects/tablelearn.png",
      tags: ["Next.js", "TypeScript", "React", "PostgreSQL"]
    }
  ]
};

export default function MinimalPortfolio() {
  return (
    <div className="min-h-screen text-slate-800 font-sans">

      {/* HEAD */}
      <SiteNav name={portfolioData.name} socials={portfolioData.socials} projects={portfolioData.projects} />

      <main className="w-full">

        {/* ME*/}
        <section id="about" className="w-full py-24 md:py-32 bg-slate-100">
          <div className="max-w-4xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

            <div className="flex-1 text-center md:text-left">
              <HeroTitle />
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                {portfolioData.bio}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                  GitHub
                </a>
              </div>
            </div>

            <TiltPhoto src="/image.jpg" alt="Profile Picture" />

          </div>
        </section>

        {/* Technologies + Projects: clicking a technology highlights the projects that use it */}
        <WorkExplorer skills={portfolioData.skills} projects={portfolioData.projects} />

        {/* Footer */}
        <footer id="contact" className="w-full bg-slate-900 py-12 border-t border-slate-800 text-slate-400 text-sm">
                  

                  <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    
                    <p>© 2026 {portfolioData.name}</p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 items-center">
                      <a 
                        href={portfolioData.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition" 
                      >
                        GitHub
                      </a>
                      <a 
                        href={`mailto:${portfolioData.socials.email}`} 
                        className="hover:text-white transition" 
                      >
                        Email : {portfolioData.socials.email}
                      </a>
                    </div>

                  </div>
                </footer>

      </main>
    </div>
  );
}