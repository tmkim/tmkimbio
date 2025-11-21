"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Code, Download, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/TaeMinKim_Resume_Software_Engineer.pdf"; // Ensure the file is in /public

  return (
    <div className="max-w-4xl mx-auto p-6 m-6 bg-white rounded-xl text-black">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tae-Min Kim</h1>
        <p className="">US Citizen | taeminkim13@gmail.com | 732-496-4591</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="https://linkedin.com/in/tmk13" target="_blank">
            <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition" />
          </Link>
          <Link href="https://github.com/tmkim" target="_blank">
            <Github className="w-6 h-6 transition" />
          </Link>
          <Link href={resumeUrl} download>
            <Download className="w-6 h-6 text-green-600 hover:text-green-800 transition" />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3"><Code className="inline w-5 h-5 mr-2" /> Skills</h2>
        <p><strong>Proficient:</strong> Python, SQL (SQL Server, PostgreSQL), Django, Typescript, Next.js, Node.js</p>
        <p><strong>Experienced:</strong> Pandas, ETL, HTML, C#, Java, REST APIs, PyTest, React, Tailwind CSS, Vercel</p>
        <p><strong>Familiar:</strong> Docker, Jira, Git, NoSQL (MongoDB), AWS S3, AWS EC2</p>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3"><Briefcase className="inline w-5 h-5 mr-2" /> Relevant Experience</h2>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Independent Web Development (July 2023 - Present)</h3>
          </div>
          <p className=""></p>
          <ul className="list-disc list-inside">
            <li>
              Built and deployed independent web applications to maintain and grow technical skills using Python, Django REST Framework, Next.js, PostgreSQL, and AWS
            </li>
            <p className="font-semibold">Recent Examples</p>
            <li>
              <Link href="https://www.github.com/tmkim/dank_bank"
              className="font-semibold text-blue-700">Dank Bank</Link>: Web app for cataloging personal experiences and sharing recommendations
            </li>
            <li>
              <Link href="https://www.github.com/tmkim/bountyhunter"
              className="font-semibold text-blue-700">Bounty Hunter</Link>: Web app for building decks and tracking market prices 
            </li>
            <li>
              <Link href="https://www.github.com/tmkim/hedache_tracker"
              className="font-semibold text-blue-700">Headache Tracker</Link>: Web app for tracking headache symptoms
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Sefas Innovation (April 2019 – October 2022)</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Software Engineer (Professional Services)</h2>
            <h2 className="text-lg font-semibold">Burlington, MA</h2>
          </div>
          <h2 className="text-lg font-semibold"></h2>
          <p className=""></p>
          <ul className="list-disc list-inside">
            <li>
              Delivered a seamless, zero-downtime upgrade of a Fortune 500 banking client’s production environment by designing, developing, and deploying Python-based input parsers, document templates, and production workflows, modernizing operations and mitigating legacy system risk
            </li>  
            <li>
              Designed and maintained data pipelines to extract data from CSV/XML sources, transform it through cleaning and business logic, and generate customer-facing documents as final outputs
            </li>  
            <li>
              Engineered custom Python plugins to extend product functionality and meet client-specific requirements, enabling new use cases without core product changes
            </li>  
            <li>
              Developed a Python-based PDF comparison tool to automate output verification during a major environment migration, reducing manual QA and ensuring accuracy across environments
            </li>  
            <li>
              Led collaboration with client technical teams to clarify requirements, troubleshoot production issues, and deliver targeted training on internal tools and application maintenance
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">FAST Enterprises (June 2016 – October 2018)</h3>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Software Consultant (September 2017 - October 2018)</h2>
            <h2 className="text-lg font-semibold">Lansing, MI</h2>
          </div>
          <ul className="list-disc list-inside">
            <li>
              Developed backend services in SQL Server and VB.NET to modernize the state’s vehicle services, building efficient pipelines to process millions of customer records and improve data access and reliability
            </li>
            <li>
              Designed and implemented a dynamic query generation system to help state employees extract and deliver filtered vehicle data for third-party vendors, ensuring fast performance on multi-million-row datasets
            </li>
            <li>
              Collaborated directly with state employees to gather technical requirements, define test plans, and deliver user training, bridging communication between implementation teams and government stakeholders
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Junior Developer (June 2016 - September 2017)</h2>
            <h2 className="text-lg font-semibold">Centennial, CO</h2>
          </div>
          <ul className="list-disc list-inside">
            <li>
              Delivered maintenance and feature updates for production systems by resolving tickets and deploying code in VB.NET, ensuring timely support for client operations
            </li>
            <li>
              Prepared demo environments and operated live product demos for prospective clients, resulting in the acquisition of new contracts with government agencies
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3"><Briefcase className="inline w-5 h-5 mr-2" /> Other Experience</h2>

        <div className="mb-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">English Teacher (Nov 2022 - June 2024)</h3>
          </div>
          <p className=""></p>
          <ul className="list-disc list-inside">
            <li>
              Taught English as a foreign language to young students, adapting lessons to different skill levels
            </li>
            <li>
              Built interactive web applications to support learning in the classroom and track student progress
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3"><GraduationCap className="inline w-5 h-5 mr-2" /> Education</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Rutgers University – New Brunswick</p>
          <p className="">Bachelor of Science in Computer Science</p>
        </div>
      </section>
    </div>
  );
}
