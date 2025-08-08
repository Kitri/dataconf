var modalData = [
{
    name: "Melissa Albeldas",
    bio: "Speaker bio to be added",
    title: "Climbing Out of Burnout: Lessons from Indoor Rock Climbing, MLOps, and the Data Science Lifecycle",
    talk: "This talk is going to cover a really important topic in tech...burnout. I will use MLOps and Indoor Rock climbing as 2 metaphors for burnout and then talk about how AI can be used to help with MLOps, rock climbing, and burnout. Part 1 will cover burnout and how it appears in humans, part 2 will cover how we see it in other areas MLOps/climbing, and part 3 will cover how we can incorporate AI to help us with MLOps and burnout too.",
    tracks: "AI (Including GenAI), Data Science, Data Visualisation, Data Ops, Data Ethics"
},
{
    name: "Innocent Jackson",
    bio: "Speaker bio to be added",
    title: "The Forgotten Demographic: Why Seniors Matter in Ethical AI and Digital Inclusion",
    talk: "While AI ethics conversations often highlight race, gender, and geography, age is often missing. This talk explores how seniors—holders of deep wisdom—are being left behind in our rapidly evolving digital world, even as many show a strong interest in learning and engaging with technology. Through my work with Senior Tech Hub, a grassroots initiative in South Africa, I'll share real-world experiences from teaching digital literacy to older adults. The session will unpack the barriers seniors face in accessing, trusting, and interacting with AI-driven platforms—and what that reveals about our systems. This talk makes the case that building ethical, inclusive AI requires active intergenerational inclusion, and that seniors must be seen as collaborators—not afterthoughts—in designing safer, more human-centered digital ecosystems.",
    tracks: "AI (Including GenAI), Data Ethics"
},
{
    name: "Georgina Armstrong",
    bio: "Speaker bio to be added",
    title: "Hard-learned lessons about Recommender Systems",
    talk: "I've built recommender systems for Shoprite, Woolworths, 22seven (personal finance) and my current employer Zedge (a gigantic mobile content app). I've learned some really interesting things about this type of data product. This talk has 20% focus on the technical approach, but 80% on insights, ethical issues and practical challenges.",
    tracks: "Data Science, Data Ethics"
},
{
    name: "Malcolm Hillebrand",
    bio: "Speaker bio to be added",
    title: "Help, my data crawled off the table! A peek into how data science for biology works",
    talk: "Experiments in biology are messy and difficult. But they produce data that we as scientists can use to understand development, diseases and DNA -- after a whole lot of analysis. Join me on a behind-the-scenes journey of biophysics data analysis and modelling. Gaze in wonder at the tools and hacks we use to turn raw (and occasionally boiled) data into meaningful numbers and visualisations, using anecdotes and examples from current research.",
    tracks: "Data Science, Data Visualisation, Other"
},
{
    name: "Pippa Hillebrand",
    bio: "Speaker bio to be added",
    title: "Privacy or piracy in AI?",
    talk: "In the years before the LLM hype-train took over our lives, the hot topic was GDPR and POPIA. Keeping confidential data within secure boundaries was important to all engineering teams. LLMs blasted through those concerns like a shotgun through a paperback, and now security operators are scrambling to pick up the pieces. Barbara in sales doesn't understand why she shouldn't upload her confidential reports into ChatGPT for analysis. Thembi in admissions at the hospital doesn't understand the risks of asking ChatGPT to help her respond to a particularly angry email from a patient. Both of them have heard about the power of AI, and they have seen how much the tools can help them do their jobs better, but IT security is dealing with subtle (or explicit) data leaks. Data privacy in the age of AI is still maturing. We look at the how and why of maintaining a secure handle on the data. What should, and shouldn't, be logged. And how building an intuitive and secure product can open up more industries to the options afforded them by LLMs.",
    tracks: "AI (Including GenAI), Data governance, security and privacy"
},
{
    name: "Henrico Bekker",
    bio: "Speaker bio to be added",
    title: "Beyond the Firewall: Securing the AI Revolution",
    talk: "Join us to gain a comprehensive understanding of the emergent threats confronting AI-driven systems and to explore actionable frameworks for fostering secure AI development and deployment. This session aims not only to illuminate the challenges but also to empower attendees with the knowledge to safeguard the integrity and resilience of the AI revolution.This session won't leave you with amazing new ideas for bots, agents, LLMs or prompt engineering, but will be aimed at the fundamentals of safeguarding and monitoring all the buzzwords and acronyms.",
    tracks: "AI (Including GenAI), Data governance, security and privacy, Data Ethics"
},
{
    name: "Michael Johnson",
    bio: "Speaker bio to be added",
    title: "Pipes and Streams: A New Age of Data Engineering Architectures",
    talk: "In this 40-minute presentation we examine the architectural evolution of data engineering. Starting with traditional batch-based pipelines through to modern streaming architectures that leverage distributed processing and stream first designs using unified data platforms such as Lakehouse.",
    tracks: "Data Engineering"
},
{
    name: "Carike Blignaut-Staden",
    bio: "Speaker bio to be added",
    title: "Observability as a team sport : Designing for humans, not just metrics",
    talk: "In a world overflowing with dashboards, why do so many go unused? This talk explores how observability is not just a DevOps concern but a collaborative effort across teams. We'll dive into the principles of designing dashboards that are not only functional but also accessible, inclusive, and actionable. Learn how to build visualizations that serve real user needs, foster shared ownership, and drive better decision-making across your organization.",
    tracks: "Business Intelligence, Data Visualisation, Other"
},
{
    name: "Lisema Matsietsi",
    bio: "Speaker bio to be added",
    title: "How to Craft Teams of Exceptional Analysts",
    talk: "In today's fast-paced data-driven world, building high-performing analyst teams is no longer optional; it's essential. This talk introduces ten proven models for team effectiveness, drawn from the book \"Crafting Teams of Exceptional Analysts,\" offering leaders a practical roadmap for forming, leading, and elevating analytical teams. Attendees will learn how to quickly diagnose team challenges, apply targeted strategies, and foster collaboration using frameworks like FSNPA, GRPI, Lencioni's Five Dysfunctions, and the Google Model. Whether you're leading a new team or revitalising an existing one, this session will show how pairing these models with mentorship, especially from immediate managers, can accelerate growth and unlock transformational leadership. Join us to discover how intentional model selection and adaptive leadership can turn good analysts into exceptional teams.",
    tracks: "Managing data teams"
},
{
    name: "WIZA MSUKU",
    bio: "Speaker bio to be added",
    title: "From chaos to coherence: My journey through Offline Healthcare analytics from a hundredfold sources",
    talk: "In many resource-limited environments, the path to meaningful analytics and insights often begins in chaos. This talk shares a personal journey of transforming a fragmented and manual data extraction and aggregation process into a scalable, near real-time analytics pipeline. Starting with the labor-intensive collection of full MySQL dumps from over two hundred remote clinics via SSH-RSYNC, clinical data was manually restored into individual database schemas for analysis then subsequently transformed into a cumulative target database used for analytics, an approach riddled with inefficiencies, inconsistencies and significant delays. Over time, this process evolved into a robust data streaming architecture using solid queue background jobs and consolidated schemas, enabling near real-time insights and automated data quality checks. This session explores the technical decisions, data infrastructure changes, architectural shifts and lessons learned, highlighting how embracing change, rethinking dataflows and simplifying complexity can turn disjointed chaos into coherent, actionable intelligence. Whether you are at the beginning or mid-point of your own data journey, this talk offers practical insights for building modern pipelines that empower timely and evidence-based decision-making.",
    tracks: "Data Engineering, Data Science"
}
];

$(document).ready(function() {
  for (var i = 0; i < modalData.length; i++) {
    var first_name = modalData[i].name.split(' ')[0]
    var modal = $("#speakerModal").clone(); 
    var speaker_html = "<h5>" + modalData[i].name + "</h5>" + modalData[i].bio 
    modal.attr("id", "speakerModal" + first_name); 
    // Image removed for 2025 design 
    modal.find(".modal-title").text(modalData[i].title); 
    modal.find(".modal-speaker-bio").html(speaker_html); 
    modal.find(".modal-talk-content").html(modalData[i].talk);
    modal.find(".modal-speaker-name").html(modalData[i].name); 
    modal.find(".modal-tracks").html("<strong> Categories: </strong>" + modalData[i].tracks); 
    modal.appendTo("body"); 
  }
});