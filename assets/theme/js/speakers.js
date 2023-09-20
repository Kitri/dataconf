var modalData = [
  {
        name: "Greg Duckworth",
        bio: "I'm a  Data Scientist with 11 years' experience in the Data Industry over a range of industries such as insurance, marketing, sales forecasting, statistical optimisation, public relations, and Ed-Tech. I'm also active in the research industry, having completed my PhD in applied statistics from UCT (2018), as well as publishing 14 papers in peer-reviewed international academic journals all within the sphere of applied statistics. During my PhD I lectured and tutored statistics to first and second year students, so I am familiar with presenting technical concepts to technical audiences. Furthermore, I was invited to present my PhD research at three international conferences, hosted in the USA, Morocco, and the UK. Currently, I am a Principal Data Science Consultant at Daemon, and am a senior leader in the South African contingent of the company. ",
        title: "An introduction to Machine Learning Operations (MLOps)",
        talk: "In this talk, I introduce the topic of MLOps (machine learning operations), and expand on what it is, why is it needed, and why it (as a distinct field) has grown in popularity over the last 5 or so years. I then go into detail about what processes and capabilities a good MLOps solutions should entail, and the typical tech stack used to address and enable these. Lastly, I present a working MLOps solution that we (at Daemon) have developed in AWS, and run through a standard ML problem to showcase how MLOps can be used to speed up ML development time. Attendees of this talk should come away with knowledge around what MLOps is, why it is needed, and an idea of how it can be implemented. ",
        tracks: "Data Engineering, Data Science, Machine Learning Engineering, Data Ops"
  },
  {
      name: "Jade Abbott",
      bio: "Jade Abbott is the co-founder and COO of Lelapa AI and co-founder of Masakhane, the grassroots organisation driving NLP research in African languages, for Africans, by Africans. She has 10 years experience building and professionalising AI in industry working across banking to NGOs to startups. Aside from her inspiring career she holds an MSc and was recently one of South Africa’s Inspiring Fifty 2020 and Mail&Guardian Top 200 Young South Africans 2021.",
      title: "TBC",
      talk: "Coming Soon",
      tracks: ""
  },
  {
      name: "Austin Poulton",
      title: "Cut adrift -  practical MLOps buoys",
      talk: "Your cherished live serving model’s performance has been degrading steadily for weeks and you are seeing similar effects in the challenger model.   Why is this happening and how to correct it is not clear. \
      <br /><br />There are a host of reasons why machine learning models go can and do sideways.  In this session I'll use, sometimes embarrassing, anecdotes and examples from past experience to describe data and concept drift for ML applications.  We’ll cover techniques and tools for detecting the various guises of drift and how to respond.   We’ll take a lightweight approach, using MLops principles, sprinkled with a dash of new and emerging open source tools and libraries.  ",
      bio: "I have software engineering and quantitative background and have worked in data science and engineering roles for the last 10+ years.  I returned to Cape Town from London in 2022 to lead the Equal Experts South Africa's data practice.",
      tracks: "Data Engineering, Data Science"
  },
  {
      name: "Ewald Horn",
      title: "Data army of one - Unconventional tools to conquer data challenges",
      talk: "Everyone knows that Python, Julia and R are the tools you need to do data work. What happens when none of those are an option though? How can you still deliver the results business needs? What about unconventional technologies? Does thinking outside the conventional box hold any promise? \
      <br/><br/>On a recent project, I was challenged to find ways to visualise data, but, I was not able to use the traditional tools. After trying out D3, I realised I needed even finer control over what was happening and had to find a better way forward. Throw in the complication of needing a web and desktop application, plus potentially mobile somewhere down the road, and things looked a bit bleak. \
      <br/><br/>Yet, I found a surprising answer, one that allowed me to meet all the project requirements and deliver real business value. Best of all, I could share code between the different environments and deliver results quickly. \
      <br/><br/>In my talk, I will show how using tooling not normally associated with the data world can help solve data challenges and open up new possibilities", 
      bio: "I solve esoteric problems for unconventional people and love using the wrong technology to do the right thing. Sure, it's often whacky and tacky, but in business, that's sometimes all that's needed.  Sharing my experiences is a passion and I love helping people move off the beaten path and find different ways of overcoming challenges.  \
      <br /><br />Plus, I'm a consultant and we all know consultants know everything. So there's that.",
      tracks: "Data Engineering, Business Intelligence, Data Visualisation"
  },
  {
    name: "Gordon Inggs",
    title: "How to do everything right and still fail - a story from the data engineering frontlines at the City of Cape Town",
    talk: "The caricature of an engineer is a socially maladjusted nerd who prefers solving technical problems than having to interact with people. This story is mostly a lie, since engineers almost always have to work with large teams of people to get anything done. However, all stories have a basis in truth, and the truth is that we do sometimes get the people stuff wrong. \
    <br/><br/>I will use an example from my work in the Data Science branch at the City of Cape Town as a cautionary tale of \"getting the people stuff wrong\". The story relates to data infrastructure we have developed and deployed relating to information about loadshedding in the City of Cape Town. \
    <br/><br/>Earlier this year, in a ridiculously short amount of time, we automated the workflow around updating the Ciy's loadshedding schedule, and removed considerable risk of residents being misinformed. We went from a method of updating the schedule that involved many, redudant people from different departments, semiofficial WhatsApp groups and magic spreadsheets, to a world that looked like best practice - only the one or two people needed involved, serverless infrastructure, exposing useful data in machine readable format. I would spend a little time describing what we built since I think it would be of technical interest to the audience, and I'm proud of it.\
    <br/><br/>However, the roll out has not been smooth. I will spend the rest of the talk describing where and when in the process we missed opportunities to engage critical stakeholders, their perspectives, and have conversations that needed to be had. I will also spend some time casting a more charitable light on the \"old\" way of doing things, talking about the value of social relationships and feedback loops. \
    <br/><br/>While the project has not been a failure by any stretch of the imagination, it could have been better, and this talk will be my opportunity to get this off my chest!",
    bio: "Dr. Gordon Inggs is a Principal Data Engineer at the City of Cape Town, known for working on large, complex socio-technical systems. Raised among the penguins of Simon's Town, he completed his undergraduate and Masters in Electrical Engineering at the University of Cape Town in 2011, followed by a Ph.D. in Computer Engineering at Imperial College London, focusing on heterogeneous systems, which was awarded in 2016. After his PhD, he returned to Cape Town to work for AWS in 2016. He worked on the EC2 product, contributing to some of the largest computing systems on the planet. In 2018, he joined the City of Cape Town, initially as the city's second data scientist. However, in 2021, he recognised his true calling, data engineering, and transitioned to that role, dedicating himself to practical data solutions for the City's residents. Dr Inggs has a unique combination of advanced technical knowledge, combined with deep understanding of the social contexts within which these technologies might play a role.",
    tracks: "Data Engineering, Data Science, Business Intelligence, Data governance, security and privacy, Other"
  },

  {
    name: "Guillaume Belrose",
    title: "TDD for Data Engineering",
    talk: "Many practices known to deliver improved outcomes in software delivery (for example test automation, CI / CD, agile methods) can also be successfully applied to Data Engineering. \
    <br/><br/>Focusing on testing, my presentation will highlight the benefits of applying Test Driven Development techniques to data transformations. This can prove extremely useful when writing logic to cater for non trivial business or technical requirements. TDD also acts as a guide to design data transformations that are more decoupled and easier to test. \
    <br/><br/>I will provide examples written with DBT where the tests and the transformation logic is written entirely in SQL. But the concepts are applicable to other data stacks.",
    bio: "I have over 20 years of experience working as a Software and Operations Engineer and I have recently switched to Data Engineering, so I am far from an expert in that field. However, I strongly believe that common principles applied to code used for software, infrastructure or data can lead to good quality. And certainly, from a Data Engineer newbie's perspective, TDD offers a ton of benefits. ",
    tracks: "Data Engineering"
  },
  {
    name: "Jody Roberts",
    title: "Modern Data Management",
    talk: "The intricate world of data can easily become daunting. It does not exist on any linear plane, nor does it adhere to any formal structural parameters. Within the vast universe of what data may represent, there lies an organic & progressive universe of opportunity. Let's explore your data together and unlock opportunities for your business.",
    bio: "Jody Roberts is a technology entrepreneur who is passionate about solving social problems with the help of technology. He has over 20 years experience in the IT industry with deep specialization in data management across various platforms. He has received the Microsoft MVP award for data platforms for the last decade and continues to play a critical role in the building of technology communities across Africa and mentoring young professionals. \
    <br/><br/>When he is not solving real world problems, he spends his free time doing CrossFit or mountain biking.",
    tracks: "Data governance, Security and privacy"
  },  
  {
    name: "Janine Lodewick",
    title: "Could I store data in my closet?",
    talk: "A journey through the various data storage architectures, over time, starting at databases, through warehouses, data lakes, cloud services and finally extra focus on Distributed Data Meshes.  The presentation contains analogies to closets which will help junior data engineers get a clearer understanding on how data is categorized and stored.",
    bio: "After many years in the software development space, data captured my heart and took me on a new exciting journey into data storage, analysis and visualizations.",
    tracks: "Data Engineering"
  },
  {
    name: "Johanna Thathaisa",
    title: "Unveiling the Illusion: Navigating the Pitfalls of Low-Code Data Tools for Non-Specialists",
    talk: "Accessible tech has significantly altered the data sphere through the integration of low-code tools. However, despite offering accessibility through simple interfaces, leveraging complex algorithms employed by these tools can prove challenging even for seasoned professionals within respective fields. Entranced by the fascinating charm of these data instruments with riches beyond your wildest imagination - prepare yourself for the unsettling risks and consequences they harbor. Unravel the mystery around non-experts' belief they've acquired adequate data engineering and visualization skills; get insights into genuine hazards resulting from half-baked solutions; discover the far-reaching implication of this phenomenon on organizations in years to come. Let's dive deep into real-world examples (case studies), explore ways to differentiate profound experience/knowledge from superficial training (skills), and gain valuable insight on how to harmoniously integrate domain authority with prevention of mistakes/obstacles. This presentation anticipates benefiting individuals with varied occupations or interests - including data experts, executives, and tech fans alike - by furnishing them with knowledge on how to arrive at educated choices and construct a durable data-focused fate.",
    bio: "As an accomplished data professional with technical acumen, practical experience, and a gift for communication, I am uniquely positioned to shed light on the allure and dangers of low-code data tools. My insights, coupled with real-world examples, will empower your audience to discern genuine expertise from superficial skills, enabling them to make smarter data-driven decisions and avoid future complications. ",
    tracks: "Data Engineering, Data Science, Business Intelligence, Data governance, security and privacy, Managing data teams, Other"
  },
  {
    name: "Michael Johnson",
    title: "Diving into Delta Lake",
    talk: "Delta Lake is a file-based, open-source storage format that works created by the inventors of Apache Spark to enable reliable and scalable data analytics. Delta Lake supports ACID transactions, schema evolution, upserts, time travel, and more. Delta Lake can improve data quality, performance, governance, and discovery for both batch and streaming workloads.\
    <br/><br/>Using Delta Lake files in analytics can offer many benefits, such as:\
    <ul>\
    <li>Improving data quality and reliability by ensuring data integrity, consistency, and accuracy across different sources and formats.</li>\
    <li>Enabling faster and easier data ingestion, transformation, and analysis by leveraging Spark’s distributed processing power and Delta Lake’s optimized storage layer.</li>\
    <li>Supporting both batch and streaming workloads on the same data with high performance and low latency.</li>\
    <li>Enhancing data governance and security by enabling audit trails, access control, encryption, and compliance features.</li>\
    <li>Facilitating data discovery and exploration by providing rich metadata, schema enforcement, and time travel capabilities.</li>\
        </ul> \
    Join this session to find out how why Delta Lake is the preferred storage layer for both Databricks and Microsoft Fabric any why you should be using it too.  ",
    bio: "Michael Johnson is a Business intelligence architect, Microsoft Data Platform MVP and international speaker. After graduating from the University of Johannesburg with an honours degree in Informatics in 2005 he went on to work as an application developer at one of the big 4 banks in South Africa, it was there that he discovered his love of data. In 2011 Michael changed roles and became a business intelligence consultant, in this role he has completed projects at many of the large banks in the country.\
    <br/><br/>In addition to working as a business intelligence consultant Michael also leads the Johannesburg SQL User Group which holds monthly meeting discussing variety of issues relating the SQL Server platform. He also hosts an annual conference called SQL Saturday the attracts speakers from all over the world and attracts over 250 local attendees.\
    <br/><br/>Michael has spoken at many both locally and internationally, most recently in the UK, Canada and the United States of America. He also presents at non- SQL related conferences including satRday and Devconf. It is for these activities that Michael was recognised as a Data Platform MVP by Microsoft in 2017.  ",
    tracks: "Data Engineering"
  },  
  {
    name: "Rishal Hurbans",
    title: "Generative AI APIs: Weird and wonderful applications",
    talk: "This talk explores useful and surprising real-world applications of generative AI APIs from our experience in integrating it into apps. Some examples include: Finding themes in a group's input during brainstorms and workshops, transforming unstructured data into a common consistent structure for aviation sites, and generating test data for quality assurance in development. This talk consists of more code walk-throughs and demonstrations, and less theory.",
    bio: "Co-founder at Viszen. Author of Grokking AI Algorithms. Founder and organiser of the AI ZA meetup. A bit more about me here: https://rhurbans.com/about-rishal/. We've had some interesting, useful, and fun encounters while trying to leverage generative AI in our apps and products, and I think the learnings might be insightful to others.",
    tracks: "Machine Learning Engineering, Data Visualisation, Other"
  },  
  {
    name: "Bernard van Niekerk",
    title: "Riding the Storm: Thriving in Uncertainty as a Startup",
    talk: "What happens when the unexpected strikes in a world obsessed with planning and predictability? Using the journey of RadixTrie, a unique database startup, as a case study, this talk explores the often-overlooked advantages of embracing uncertainty and the unpredictable. Started on the brink of a pandemic, without significant capital or conventional business expertise, RadixTrie has defied the odds, turning challenges into opportunities. In 'Riding the Storm,' we'll delve into the power values, the role of passion over profits, and why sometimes not knowing what lies ahead can be your greatest asset.   ", 
    bio: "",
    tracks: "Managing data teams"
  },
  {
    name: "Jonathan Gerrand",
    title: "\"Where'd my facts go!?\" - Navigating the Development Journey of a Knowledge-Augmented Large Language Model Application at Company Scale",
    talk: "The world is currently being pushed to ever greater hights on the generative AI hype-cycle, with the unending promises of Large Language Models (LLMs) being ubiquitous in the media. However, the reality of developing and deploying these systems is far from a seamless experience. \
    <br/><br/>In my upcoming talk, I'll be sharing my personal journey of developing an internal LLM application used to access disparate knowledge stores at ExploreAI. I'll take you through the highs and lows, the challenges faced, and the innovative solutions arrived at to enable knowledge-based searches, specifically Retrieval Augmented Generation, at our institution.\
    <br/><br/>Together we'll dive deep into the world of data extraction from source documents and systems, and I'll share why I believe data ownership and robust metadata management are so crucial. I'll show you how these elements not only helped shape the functionality of our LLM application but also affected its efficiency and effectiveness.\
    <br/><br/>We'll also chat about the importance of enhancing observability from an end-user perspective. Here I'll share some insights into how this can improve user experience and make the application's use far more intuitive. Weaving this all together will be a collection of demos showcasing the LLM application's knowledge metadata management capabilities and the user experience enhancements achieved through increased observability.\
    <br/><br/>While there will be many interesting facets to my talk, I ultimately would like people to leave the session grappling with question of how entire ecosystems supporting LLMs, and not only the AI itself, need to be developed in order our projects are to yield true value.", 
    bio: "I'm a data scientist and researcher who believes in the power that artificial intelligence and its related fields can bring for social good - and how creatively, these technologies can change our future. I feel that my studies and work experience have fostered within me a pursuit for excellence, and a critical curiosity for the world around me. My intrinsic beliefs push me to share my knowledge with others, to uplift the society which has raised me.",
    tracks: "Data Science"
  }
    


];

$(document).ready(function() {
  for (var i = 0; i < modalData.length; i++) {
    var first_name = modalData[i].name.split(' ')[0]
    var modal = $("#speakerModal").clone(); // Clone the template
    var speaker_html = "<h5>" + modalData[i].name + "</h5>" + modalData[i].bio 
    modal.attr("id", "speakerModal" + first_name); // Set a unique ID for each modal
    modal.find(".modal-img").html("<img src=\"assets/images/speaker_" + first_name.toLowerCase() + ".png\" />"); // Set the modal title
    modal.find(".modal-title").text(modalData[i].title); // Set the modal title
    modal.find(".modal-speaker-bio").html(speaker_html); // Set the modal content
    modal.find(".modal-talk-content").html(modalData[i].talk); // Set the modal content
    modal.find(".modal-speaker-name").html(modalData[i].name); // Set the modal content
    modal.find(".modal-tracks").html("<strong> Categories: </strong>" + modalData[i].tracks); // Set the modal content
    modal.appendTo("body"); // Append the modal to the body
  }
});