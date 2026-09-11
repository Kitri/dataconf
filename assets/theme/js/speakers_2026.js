var modalData = [
{
    id: "keynote",
    name: "Keynote — TBC",
    bio: "",
    title: "To be announced",
    talk: "",
    tracks: "",
    photo: null,
    is_keynote: true,
    tbc: true,
},
{
    id: "abia",
    name: "Abia Duvenage",
    bio: "Abia is a data scientist at 1map Spatial Solutions in Wellington — the sole \"pure data\" hire on a team of finance, software and GIS specialists. She loves turning chaos into profundity and questions into stories; how and when, she tends to figure out along the way. Nowadays, it's mostly in Python.<br><br>She once planned to become a journalist — she'd always loved telling stories, and was annoyingly obsessed with the truth — until a data science course convinced her that modern storytelling increasingly happens in data, and that data scientists are basically philosophers who code. At the time, she was completing her BSocSci in Politics, Philosophy and Economics while working as a practice administrator at a dental practice, quietly optimising its systems. She stayed on for a while to help stabilise the practice while job-hunting in her new field, until a chance mention of that course, made to her now-boss at his own dental appointment, turned into an internship at 1map instead.<br><br>She's since taught herself Python, SQL and the fundamentals of Data Engineering, and now works on municipal data pipelines and property-level analytics. She treats every dataset the way she once treated a story: as something with a truth in it, waiting to be told.",
    title: "Thorough, Documented & Wrong: The Problems Methodology Can't Fix",
    talk: "Picture this. Your boss sends you a link to a GitHub repo and says, \"I built this with AI and it broke. Can you fix it?\" This is to be your first data pipeline – because, actually, you're not a data engineer. Normally, one of the developers would have dealt with this, but they're all busy with more important things. And, hey, you've been reading up on data modelling and orchestrators – gosh darn it, you're excited.<br><br>The brief: build an ingestion pipeline that pulls CSV financial reports into a PostgreSQL database, in a way that can seamlessly be used for invoicing calculations. The pipeline must be auditable, end-to-end, and have clear, transparent validation steps so that no one is worried about data integrity. Auditability is a non-negotiable, but if it will take long to build, best not to overengineer the consumption layer.<br><br>Ladies and gentlemen, welcome to my nightmare.<br><br>I went into the problem framing section thinking slowly changing dimensions. That was it. The problem was almost certainly the modelling of slowly changing dimensions between different sourcefiles, leading to inaccurate deduplication.<br><br>So, I ran tons of tests to see how the data behaved between sourcefiles. The data was oddly structured, clearly not optimised for analytics – no clean natural key, records that looked like duplicates but weren't, or didn't look like duplicates but were. (I know, I know – natural keys are problematic themselves. I'm not getting into that debate.) So I built a key. A hash-based surrogate key, SCD2 modelling to track changes over time, deduplication strategies tested against every edge case I could construct – the whole thing thoroughly documented in a Jupyter notebook, where every decision was clearly backed by visible patterns.<br><br>I walked my boss, a CA, through it, step by step. I was confident I'd not only discovered an important gap in our workflow, but solved a genuinely hard problem. <br><br>He looked at my logic for ten seconds and said: \"But that's not how accounting works. They're probably organised by receipt number. If they’re not, that’s a big problem.\"<br><br>He gave me time to rerun my tests with the new receipt number group key, derived from the data in a way that was deeply unintuitive to me. Obvious to an accountant though. It worked. Almost no exceptions.<br><br>Neither of us had thought to specify that receipt number should be the group key. To him, it was too obvious to mention. To me, it was not a question I would think to ask. And the brief was simple enough, so why do a whole detailed requirements scope?<br><br>Classically, the data engineers in the audience would recognise this as a requirements engineering problem. But how do you do requirements engineering for requirements nobody thinks to mention?<br><br>Turns out the answer isn't a better process as such. It's a better relationship — what Kross and Guo (2021) call socio-emotional infrastructure in data science workflows. It doesn't answer the question outright, but it's what let my boss correct me straightforwardly, once the requirements process had already failed to catch it. <br><br>There are real, practical ways to shrink the odds of this happening to you, and to shrink the cost when it does. This talk walks through what actually worked for us afterwards, turning a two-week miss into a two-day one.<br>",
    tracks: "Data Engineering, Business Intelligence, Managing data teams",
    photo: "speaker_abia.png",
},
{
    id: "carike",
    name: "Carike Blignaut-Staden",
    bio: "Carike Blignaut-Staden has a passion for using technology to help others. She is a DevOps engineer and co-organiser of the JHBMSDUG developer community. Continuously improving and broadening her skillset, she holds multiple certifications from various disciplines such as AI, Cloud technologies, Cybersecurity, DevOps, IoT, Site Reliability Engineering and GreenOps<br><br>Dedicated to helping others upskill and sharing her knowledge. Connect with her on LinkedIn (https://www.linkedin.com/in/carike) or X (@CarikeBStaden)",
    title: "Token Economics: The Hidden Cost of Every Prompt",
    talk: "Generative AI is transforming how we work, but most users have little understanding of the currency that powers it: tokens. Every prompt consumes tokens, creating not only financial cost but also environmental impact. As organisations rapidly adopt AI, unmanaged token consumption is becoming the next challenge for both FinOps and GreenOps teams.<br><br>This session explores token economics from a practical perspective. Attendees will learn how tokens translate into cost, why prompt design influences energy consumption, and why organisations should monitor, budget and optimise AI usage. Drawing on GreenOps principles and industry sustainability research, including insights from GreenPixie, the session demonstrates how responsible AI usage can reduce waste, control spend and lower carbon impact.<br>",
    tracks: "AI (Including GenAI), Other",
    photo: "speaker_carike.png",
},
{
    id: "geoffrey",
    name: "Geoffrey Lydall",
    bio: "A Software Engineering professional with a background in Electrical Engineering and Masters Degree in Software Engineering, Geoffrey's 20+ year career in software development includes not only architectural, design, and implementation responsibilities but also the training of junior software developers and passing on the baton of software expertise.",
    title: "Intellectual and Emotional Obesity - Fast food in your brain",
    talk: "Have you ever wondered if using a calculator is dulling your arithmetic skills? Or that using Google means that you can't remember facts any more? What if the same thing is happening to your general ability to think, or emotional resilience?<br><br>In this talk, we discuss social & emotional stamina, and cognitive endurance, thus introducing the concept of \"AI Emotional and Intellectual Obesity\" (AIEIO). That is, obesity for our intellectual and emotional capacities, and how they are impacted by AI.<br><br>AI is rapidly becoming a part of people's daily lives. Anything from generating a meme or helping us find a product to buy, to writing code, doing research, support in big decision making, or even taking the place of a therapist. We are turning to chat services to do the thinking for us and validate our thoughts and feelings. Frictionlessly.<br><br>Much in the way that fast food allows us to rapidly and effortlessly consume calorie dense meals that have been engineered for a dopamine hit in processes designed to get the upsell, AI services are providing information and emotional validation dense responses with the goal of keeping you engaged. Are we losing our grit? Our ability to work through that hard problem? Our capacity to accept and take on truths that we don't want to hear? This is AIEIO.",
    tracks: "AI (Including GenAI), Data Ethics",
    photo: "speaker_geoffrey.png",
},
{
    id: "james",
    name: "James McGillivray",
    bio: "James McGillivray, Data Management and Analytics MCSE, has been working in Business Intelligence for over a decade. He spends his working hours building solutions that allow people to make informed decisions. quickly and accurately. He is a Director at South African Data Consultancy, Cobalt Analytics.<br><br>Before his career in data, James was an avid musical theatre student and musician. This love for performance has developed into a passion for developing and delivering presentations that are informative and enjoyable. James speaks frequently at Data Community Events, and has presented at some of the most well-known Data Events around the globe, including PASS Summit, SQL Bits and the Power BI World Tour.",
    title: "Turning Data into Stories People Remember",
    talk: "Data is powerful, but on its own it rarely inspires action. In this session, we’ll take a real dataset of baby names from the U.S. Census Bureau and turn it into a story that grabs attention. You’ll learn how to find the most interesting insights, visualize them in ways that make sense, and weave them into a narrative that resonates with any audience. Whether your story feels like a history, a tragedy, or a thriller, you’ll leave knowing how to make your data speak in a way that people remember.",
    tracks: "Business Intelligence, Data Visualisation, Data Ethics",
    photo: "speaker_james.png",
},
{
    id: "lisema",
    name: "Lisema Matsietsi",
    bio: "I am the right person to give this talk because I have lived the transition it explores. I moved from being an individual technical contributor in banking to leading analysts, building teams, mentoring emerging professionals, and learning firsthand that technical excellence does not automatically translate into effective leadership.<br><br>Through my work on books such as Being an Analyst, Crafting Teams of Exceptional Analysts, and Take the Gap, I have turned those experiences into practical frameworks that can help other data specialists lead people, functions, and organisational change with greater confidence.",
    title: "Take The Gap: The Journey from Data Specialist to Data Leader",
    talk: "This talk is about how analysts can move beyond technical expertise to lead teams, functions and organisational change. Many data professionals spend years mastering technical skills, only to discover that leadership requires an entirely different toolkit. As organisations adopt flatter structures and AI automates more technical work, the ability to influence, coach and lead across teams has become a critical differentiator.<br><br>Drawing on lessons from building analyst teams, mentoring emerging analysts, and publishing a book for an executive coach titled \"Take The Gap\", this session introduces the Five Gaps Framework, a practical roadmap for moving from specialist to organisational leader.<br><br>You will learn how to navigate the transitions from contributor to trusted advisor, team leader, functional leader, and enterprise influencer. You will leave with actionable strategies for developing leadership capability, building high-performing teams, and creating organisational impact in the modern data profession.",
    tracks: "Managing data teams",
    photo: "speaker_lisema.png",
},
{
    id: "mfundo",
    name: "Mfundo Mbambo",
    bio: "I am a financial services and digital transformation professional and consultant with over a decade of experience across risk, compliance, technology and innovation and management consulting. My work sits at the intersection of emerging technology and responsible business, with a particular interest in how AI creates value while introducing new risks for organisations and society.<br><br>I bring both practitioner and researcher perspectives to this conversation. I hold a Master of Management in Digital Business from Wits Business School and have worked directly with AI, data and emerging technologies inside regulated financial services environments. This includes developing AI policies and governance frameworks, advising on AI use case assessment and governance readiness, and leading the rollout of AI-enabled solutions as a management consultant. I am a thought leader and have also conducted and presented research on AI ethics, responsible AI and AI governance both in local and international engagements. ",
    title: "What Does AI Think Africa Looks Like? An Experiment in LLM Bias",
    talk: "In July, I joined Apart Research’s Global South AI Safety Hackathon with a deceptively simple question: if we ask an AI model to describe the same human experience in Africa and the West, does the story change?<br><br>Over one intense weekend, I turned that question into an exploratory research project examining how large language models portray African people and places. I tested five frontier AI models using matched prompts; asking models to describe comparable people, environments and experiences in different geographic contexts. The prompts remained consistent with only the location changing<br><br>What emerged was not simply a question of whether models were “biased”, but how that bias manifested in the narratives they generated.<br><br>We identified recurring themes in the representation of African contexts, revealing differences in the assumptions models made about people's lives, environments and aspirations. Perhaps most interestingly, models could sometimes recognise and articulate problematic biases in outputs they had themselves generated. This suggested that some representations may operate as implicit defaults rather than deliberate model behaviour.<br><br>But the implications extend well beyond the chatbot interface. Frontier models are increasingly becoming the foundation on which businesses build. Companies are embedding them into customer-service agents, financial services, recruitment platforms, education products, productivity tools and decision-support systems. If biases and stereotypes exist in the foundation models, they can potentially be inherited, amplified or obscured by the applications built on top of them.<br><br>This creates a business problem as much as an AI ethics problem: how can organisations confidently deploy AI in markets and communities that may be poorly represented in the data used to build the models?<br><br>In this talk, I’ll take the audience behind the experiment, including the findings. I’ll then explore what these findings mean for organisations building AI products in Africa and for data professionals responsible for evaluating and building AI systems.",
    tracks: "AI (Including GenAI), Data Ethics, Other",
    photo: "speaker_mfundo.png",
},
{
    id: "michael",
    name: "Michael Victor",
    bio: "I'm a data engineering and data science consultant with over a decade of experience, working mostly in Python and the Microsoft cloud stack. I specialise in designing scalable data pipelines, optimizing workflows, and building predictive models that drive strategic decision-making.<br><br>My background is in mechanical engineering and simulation of dynamic systems. I like finding weird, unexpected, or counterintuitive uses for tools and problems, since those detours are usually the ones that often make complex topics click.",
    title: "An Introduction to Data Science with the Help of Banana-Throwing Gorillas",
    talk: "In this session, we'll unpack the fundamentals of data science in a practical way with the help of the classic DOS game QBasic Gorillas where two gorillas take turns lobbing bananas across a city skyline, and the goal is simple: hit the other gorilla before he hits you.<br><br>Using a projectile motion simulation built to recreate the game's physics, we'll generate our own datasets and train machine learning models to predict the throw parameters needed to hit the target. Along the way, we'll look at a number of issues like what happens when we don't have enough training data, when we extrapolate beyond what the model was trained on, or when we pick the wrong algorithm for the job. From there, we can simulate the predicted trajectories and see how the training metrics actually stack up against real performance.<br><br>The flight of a banana is something we all have an intuitive feel for, so when a model gets it wrong, you don't need to be a data scientist to notice and figure out what might be the cause.<br><br>It's a fun, hands-on way to see the fundamentals of data science in action, grounded in something you can sanity-check with your own gut, and a reminder that good data science has less to do with fancy tools than with understanding your data and the choices you make with it.",
    tracks: "Data Science, Machine Learning Engineering",
    photo: "speaker_michael.png",
},
{
    id: "paul",
    name: "Paul Domanski",
    bio: "I run Domanski.AI - a Cape Town based agency that installs AI operating systems inside real businesses. I'm passionate about building with AI and love sharing stories from the front lines. ",
    title: "Vanta Rising: How I Built an AI-Native Operating System for a Global Brand House",
    talk: "Over three months I built and embedded Vanta, an AI-native operating system, inside an international brand house running multiple consumer brands across territories. Not a chatbot pilot: one central intelligence with seven internal seats, each a permission boundary with its own sources, memory and evals, answering real commercial questions like \"Where do we stand on brand X in Germany?\"<br><br>This talk is the honest build log. I'll cover the engineering behind the never-lie bar, where every material answer carries its source, owner, date and freshness label, and a correct refusal counts as a passing answer. I'll show the two trust grades that gate what the system may do in front of humans, the permissions matrix that stops any credential exceeding what its owner signed, and why every irreversible action, from email to purchase orders, stays human-owned by design. Plus what broke, what the client actually valued, and what I'd do differently.<br><br>Attendees leave with a reusable blueprint: seat architecture, honesty labels, eval gates, and the governance layer that makes an AI system trustworthy enough to sit inside a real company.",
    tracks: "AI (Including GenAI), Data governance, security and privacy",
    photo: "speaker_paul.png",
},
{
    id: "rishal",
    name: "Rishal Hurbans",
    bio: "Rishal Hurbans is a technologist, entrepreneur, and author who is passionate about crafting innovative products and meaningful experiences. He has 15 years of expertise delivering diverse technology solutions across the finance, health, agriculture, mining, and aviation industries. Rishal is driven by a deep interest in making complex concepts accessible through visual, intuitive, and practical experiences. He has delivered dozens of keynotes and workshops around the world on AI, software engineering, and leadership. And authored Grokking AI Algorithms with Manning Publications. Rishal continues to build at the intersection of design, technology, and creativity, guided by the belief that technology should amplify human potential. For more about Rishal Hurbans, see https://rhurbans.com.",
    title: "The Algorithms Inside Generative AI",
    talk: "Generative AI can feel like magic. You type a few words, and a machine replies with an essay, a piece of code, or an image that didn’t exist a few seconds ago. But if we slow the trick down, the spells become much easier to understand.<br><br>In this talk, we’ll take a walk through two of the most important ideas behind modern generative AI: large language models and diffusion-based image generation.<br><br>We’ll start with language and ask a simple question: how does a machine decide what word should come next? From there, we’ll build up the intuition behind tokens, embeddings, Transformers, and attention mechanisms.<br><br>Then, we’ll move to images, where the process becomes even stranger. Instead of painting on a blank canvas, diffusion models begin with noise and gradually remove what does not belong. We’ll explore how that process works, how prompts guide the model, and why U-Net-style architectures are so useful for turning noise into something recognisable.<br><br>The goal is not to bury the audience in mathematics and research. It’s to make the algorithms feel less mysterious. By the end, attendees should have a clearer mental model of how generative AI works under the hood, and why ideas like prediction, attention, and denoising are at the heart of the tools we are all using.<br><br>That understanding matters because generative AI is moving from novelty to becoming infrastructure. People who understand the algorithms underneath it are better equipped to build with it, evaluate it, and know when not to use it.",
    tracks: "AI (Including GenAI), Data Science, Machine Learning Engineering, Data Ethics",
    photo: "speaker_rishal.png",
},
{
    id: "thabang",
    name: "Dr Thabang Mathonsi",
    bio: "Dr. Thabang Mathonsi currently serves as the Group Head of AI Strategy and Enablement at Netcare, South Africa’s largest and Africa’s most technologically advanced hospital group. He holds two Masters degrees and a Ph.D. in Data Science and AI, with experience establishing and leading teams across industries including academia and financial services. He is passionate about organizational value realization enabled through data, strategy, analytics, and enterprise-scale AI.",
    title: "Healthcare in the Age of Agents: The AI Paradigm Shift and its Impact in a Regulated World",
    talk: "We have entered the agentic healthcare age, where your model is executing decisions on its own, booking appointments, routing clinical referrals, denying medical aid claims, or writing records that the next clinician will read as ground truth, for example. In this new paradigm, every architectural choice your data team makes is simultaneously a governance choice, and every governance gap your data team leaves open is a potential patient safety incident or regulatory liability wearing the disguise of an IT ticket.<br><br>This talk explores the agentic accountability gap. A clear-eyed picture of exactly where current data governance practices (validation frameworks, model cards, human-in-the-loop design) break down when AI systems execute decisions autonomously, and considers what additional controls must be designed to close that gap.",
    tracks: "AI (Including GenAI), Data Science, Data governance, security and privacy, Data Ethics",
    photo: "speaker_dr_thabang.png",
},
{
    id: "thato",
    name: "Thato Mokoena",
    bio: "Thato is a Lead Data Engineer at Naked, where he is helping build a data practice — which mostly means making it easier for everyone else to do data work without him. He previously spent his consulting years building and maintaining cloud data platforms for clients in logistics, banking and financial services, both here at home and abroad. He is also a failed academic: two published papers on verifying people by the way they type, then he escaped to industry before anyone could talk him into a PhD.<br><br>When he is not on his keyboard, Thato is chasing running goals, deep in a DIY project, or talking personal finance to anyone who will listen.",
    title: "Trekking to the Data Promised Land: Building a Data Practice, Not a Data Team",
    talk: "Every organisation wants self-service analytics. But what happens when your operating model is built around autonomous domain squads, and Data Enablement is intentionally a lean function?<br><br>At Naked Insurance, self-service is not an aspiration — it is a requirement of how we operate. A traditional centralised data team, acting as a bottleneck between the business and its data, does not scale. We have framed the challenge differently: Naked does not need a data team; it needs a data practice.<br><br>This talk is not a technology tour. It is a practical story about how to derive a data practice from your own constraints — and keep iterating when the first design does not survive contact with reality.<br><br>We will share the method we use: start from organisational constraints, apply a small set of principles (leverage over throughput, golden paths over gatekeeping, governance as a by-product, keep the practice machine-readable), then place deliberate capability bets and revise them based on evidence.<br><br>Those bets, for us, have taken the shape of Platform → Data → Metadata → Semantics → Governance → AI agents — not as a prescribed maturity ladder, but as connected capabilities that need to reinforce one another for self-service to scale:<br><br>Platform — make participation easy. Shared foundations, reusable patterns and golden paths that enable autonomous teams without forcing them to reinvent the practice.<br><br>Data — make information available. Reliable data products that turn operational activity into information that can be used to answer real business questions.<br><br>Metadata — make knowledge discoverable. A shared map of the data landscape: what exists, what it represents, who owns it, where it came from and how it connects. This serves humans, teams, governance and AI agents alike.<br><br>Semantics — make meaning shared. Common business definitions, metrics and modelling conventions so people and systems do not interpret the same data differently. This is currently our least mature layer.<br><br>Governance — make trust scalable. Ownership, quality, security and responsible use embedded into the way data work gets done, rather than treated as a separate approval process.<br><br>AI agents — make the practice accessible. A natural-language interface to the data, knowledge and guardrails already in place — not a shortcut around the practice, but an interface to it.<br><br>We will be transparent about what is working, what we have revised along the way, and what is still ahead — particularly the consumption layer where business users ask questions and get trusted answers without opening an IDE.<br><br>The destination is not a perfect platform or an AI chatbot wired to a warehouse. It is a data-enabled organisation where teams can find the data, understand the data, trust the data — and eventually just ask the data.<br><br>Thesis: AI agents do not replace the data practice. They expose its strengths and weaknesses.",
    tracks: "AI (Including GenAI), Data Engineering, Data governance, security and privacy, Managing data teams",
    photo: "speaker_thato.png",
},
{
    id: "panel",
    name: "Panel Discussion — TBC",
    bio: "",
    title: "To be announced",
    talk: "",
    tracks: "",
    photo: null,
    tbc: true,
},
];

$(document).ready(function() {
  for (var i = 0; i < modalData.length; i++) {
    var speaker = modalData[i];
    var modal = $("#speakerModal").clone();
    var speaker_html = speaker.bio ? ("<h5>" + speaker.name + "</h5>" + speaker.bio) : "";
    modal.attr("id", "speakerModal" + speaker.id);
    modal.find(".modal-title").text(speaker.title);
    modal.find(".modal-speaker-bio").html(speaker_html);
    modal.find(".modal-talk-content").html(speaker.talk);
    modal.find(".modal-speaker-name").html(speaker.name);
    modal.find(".modal-tracks").html(speaker.tracks ? ("<strong>Categories: </strong>" + speaker.tracks) : "");
    if (speaker.photo) {
      modal.find(".modal-speaker-photo")
        .attr("src", "assets/images/speakers_2026/" + speaker.photo)
        .attr("alt", speaker.name)
        .show();
    }
    modal.appendTo("body");
  }
});
