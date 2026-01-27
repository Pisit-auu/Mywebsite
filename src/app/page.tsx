import Image from "next/image";
import Link from "next/link";


const portfolioData = {
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
      tags: ["Next.js", "Tailwind", "Prisma", "Docker", "Swagger", "PostgreSQL"]
    },
    {
      title: "Kab shop",
      desc: "เป็น Project วิชา 	SYSTEM ANALYSIS & DESIGN เป็นวิชาสำหรับฝึกการวิเคราะห์ Requirement รวมถึงการสร้าง Diagram ต่างๆ ซึ่งได้หัวข้อ Project คือ เว็บไซต์ ขายอุปกรณ์เครื่องเขียน ซึ่งในระบบมีตั้งแต่ การ เพิ่ม ลบ แก้ไข ค้นหา ตะกร้า บัญชีผู้ใช้ เครื่องมือที่ใช้พัฒนาคือ Next.js tailwind PrismaORM Postgrest Postman ",
      year: "2024",
      link: 'https://github.com/Pisit-auu/kabshop',
      tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"]
    },
    {
      title: "StuffNext",
      desc: "เป็น Project วิชา 	SYSTEM ANALYSIS & DESIGN โดยทำงานจริงตั้งแต่ รับ Requirement ของผู้ใช้ ไปจนถึงการทดสอบระบบ และ Deploy เพื่อใช้งาน ซึ่งเว็บไซต์นี้ ใช้ในการ จัดการครุภัณฑ์ของโรงเรียนศรีนครินทร์วิทยานุเคราะห์ โดยจัดเก็บตำแหน่งที่อยู่ จำนวน ชื่อผู้รับผิดชอบ ของครุภัณฑ์แต่ละอัน ซึ่งในระบบ สามารถ ค้นหา เพิ่ม ลบ แก้ไข ย้ายตำแหน่ง ได้ ดูสรุปได้ เครื่องมือที่ใช้พัฒนาคือ Next.js tailwind PrismaORM Postgrest Postman และ Docker สำหรับ deploy อ่านรายละเอียดเพิ่มเติมได้ที่ README https://github.com/Pisit-auu/stuffnext  ลองใช้ website User:admin Password:1234 ",
      year: "2025",
      link: 'https://stuffnext.vercel.app/',
      tags: ["Next.js", "Tailwind", "Docker", "Prisma", "PostgreSQL"]
    },
    {
      title: "Giraft Escape",
      desc: "เป็น Project วิชา Object Oriented Programming โดยสร้างเกมแนว Tower Defense ที่สร้างโดยใช้หลักการ OOP และ ภาษา Java",
      year: "2024",
      link: 'https://github.com/Pisit-auu/GiraffeEscape',
      tags: ["Java", "OOP","Git"]
    },
    {
      title: "SearchEngine",
      desc: "เป็น Project วิชา Machine Learning โดย Project นี้ใช้สำหรับการค้นหารูปภาพสถานที่ๆคล้ายคลึงกันด้วย AI ซึ่งจัดกลุ่มรูปภาพ โดยใช้ CLIP ในการแปลงรูปภาพให้เป็นเวกเตอร์คุณลักษณะ (feature vectors) และใช้ FAISS เพื่อค้นหารูปภาพที่มีความคล้ายคลึงกัน ",
      year: "2025",
      link: 'https://searchengineml.streamlit.app/',
      tags: ["Python", "Machine Learning", "CLIP", "FAISS"]
    },
    {
      title: "Project ",
      desc: "เป็น Project วิชา Intelligentsystem ได้ลองใช้ SVM และ KNN ในการลองใช้สำหรับทำนายรายได้ของประชากร และ ลองพัฒนา Convolutional Neural Network โดยใช้ MobileNetV2 สำหรับ ทำนายรูปภาพว่าเป็น ค้อน กระดาษ หรือ กรรไกร",
      year: "2025",
      link: 'https://projectintelligentsystem.streamlit.app/',
      tags: ["Python", "SVM", "KNN", "MobileNetV2"]
    },
    {
      title: "EA by Ai ",
      desc: "เป็น Project วิชา Artificial Intelligence Software Development ทำ Projectเกี่ยวกับ ให้ EA เทรด ให้กับเรา อัตโนมัติ ใน MetaTrader5 โดยใช้ 1DCNN+LSTM ในการทำนาย Wait,Trade และใช้ LLM ในการทำนาย BUY,SELL โดยการ finetune LLM ด้วย LoRA เป็น Project ที่กำลังดำเนินอยู่ในภาคเรียนการศึกษานี้",
      year: "2025",
      link: 'in progress',
      tags: ["Python","1DCNN","LSTM","Supervised Fine Tuning (SFT)","LLM Parameter efficient fine tuning using LoRA","llama"]
    }
  ]
};

export default function MinimalPortfolio() {
  return (
    <div className="min-h-screen bg- text-slate-800 font-sans">
      
      {/* HEAD */}
      <nav className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
             <Link href="#about" className="font-semibold text-slate-900 tracking-tight" > {portfolioData.name} </Link>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#about" className="hover:text-slate-900 transition">About Me</Link>
            <Link href="#work" className="hover:text-slate-900 transition">Project</Link>
            <Link href="#contact" className="hover:text-slate-900 transition">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="w-full">
        
        {/* ME*/}

        <section id="about" className="w-full py-24 md:py-32 bg-slate-100">
          <div className="max-w-4xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Software Developer 
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                {portfolioData.bio}
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-700 transition shadow-lg shadow-slate-200">
                  GitHub
                </a>
              </div>
            </div>


            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <div className="absolute inset-0 bg-slate-200 rounded-full animate-pulse"></div> 
              <Image 
                src="/image.jpg" 
                alt="Profile Picture"
                fill 
                className="object-cover rounded-full border-4 border-white shadow-xl"
                priority 
              />
            </div>

          </div>
        </section>

        {/* --- Skills --- */}
        <section className="max-w-4xl mx-auto px-6 mb-24 pt-12">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-6">Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.skills.map((group, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-4 border-slate-300 pl-3">
                    {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-white text-slate-600 text-sm rounded-full border border-slate-200 hover:border-slate-400 hover:shadow-sm transition cursor-default">
                        {skill}
                    </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*Projects*/}
        <section id="work" className="max-w-4xl mx-auto px-6 mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">My Project</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600 transition">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                  </div>
                 
                  <span className="text-xs font-mono text-slate-400 border border-slate-100 px-2 py-0.5 rounded">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    <Link href={project.link} className="hover:text-slate-900 transition">       {project.title}</Link>
           
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            ))}
          </div>
        </section>

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
                        href={portfolioData.socials.email} 
                        className="hover:text-white transition" 
                      >
                        Email : s6604062610471@email.kmutnb.ac.th
                      </a>
                    </div>

                  </div>
                </footer>

      </main>
    </div>
  );
}