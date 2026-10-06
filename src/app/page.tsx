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

type Project = (typeof portfolioData.projects)[number];

// Newest first; the sort is stable so same-year projects keep their written order.
const projects = [...portfolioData.projects].sort((a, b) => Number(b.year) - Number(a.year));
const [featured, ...rest] = projects;

function hostname(url: string) {
  return new URL(url).hostname;
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

function VisitLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 self-start text-sm font-medium text-slate-900 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 ${className}`}
    >
      <span className="underline underline-offset-4 decoration-slate-300 group-hover:decoration-slate-900 transition-colors">Visit site</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="sr-only">(opens {hostname(href)} in a new tab)</span>
    </a>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100">
          {tag}
        </li>
      ))}
    </ul>
  );
}

// A browser-window frame around a real screenshot of the live site.
// On hover the screenshot glides from the top of the page to the bottom,
// so the visitor gets a quick look at the whole site without leaving.
function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className="block rounded-lg overflow-hidden border border-slate-200 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.35)] transition-[box-shadow,translate] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.45)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
    >
      <div className="flex items-center gap-3 h-8 px-3 border-b border-slate-200 bg-slate-50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <span className="flex-1 min-w-0 truncate text-center text-[11px] font-mono text-slate-400 pr-12">{hostname(project.link)}</span>
      </div>
      <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-[16/10]"} bg-slate-100`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title.trim()}`}
            fill
            sizes={featured ? "(min-width: 896px) 848px, 100vw" : "(min-width: 896px) 340px, 100vw"}
            className="object-cover object-top transition-[object-position] duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:object-bottom motion-reduce:transition-none"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900 text-center px-6">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title.trim()}</span>
            <span className="text-xs font-mono text-slate-400">{hostname(project.link)}</span>
          </div>
        )}
      </div>
    </a>
  );
}

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
        <section id="work" className="max-w-4xl mx-auto px-6 mb-32 scroll-mt-24">
          <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">My Project</h2>
            <p className="text-sm text-slate-500 pb-1.5 whitespace-nowrap">
              <span className="tabular-nums font-semibold text-slate-900">{projects.length}</span> projects
            </p>
          </div>

          {/* Latest project leads at full width */}
          <article className="group">
            <ProjectPreview project={featured} featured />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-5">
                <p className="text-sm text-slate-500 tabular-nums mb-2">{featured.year} · Latest</p>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                  <a href={featured.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-[6px] decoration-2 decoration-slate-300">
                    {featured.title.trim()}
                  </a>
                </h3>
                <VisitLink href={featured.link} className="mt-5" />
              </div>
              <div className="md:col-span-7">
                <p className="text-slate-600 leading-relaxed max-w-[65ch]">{featured.desc.trim()}</p>
                <ProjectTags tags={featured.tags} />
              </div>
            </div>
          </article>

          <div className="mt-20 md:mt-24 border-t border-slate-200 divide-y divide-slate-200">
            {rest.map((project) => (
              <article key={project.link} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12">
                <div className="md:col-span-5">
                  <ProjectPreview project={project} />
                </div>
                <div className="md:col-span-7 flex flex-col">
                  <p className="text-sm text-slate-500 tabular-nums mb-1.5">{project.year}</p>
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-2 decoration-slate-300">
                      {project.title.trim()}
                    </a>
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed max-w-[65ch]">{project.desc.trim()}</p>
                  <ProjectTags tags={project.tags} />
                  <VisitLink href={project.link} className="mt-6" />
                </div>
              </article>
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