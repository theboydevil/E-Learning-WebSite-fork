// console.log("Welcome");

var m_e = document.getElementById("main"); // main element
var data = {

  "Maths": {
    "Rational Numbers": [
      "https://www.youtube.com/embed/p_Il5zOo7m8",
      "A rational number is a number that is expressed as the ratio of two integers, where the denominator should not be equal to zero, whereas an irrational number cannot be expressed in the form of fractions. Rational numbers are terminating decimals but irrational numbers are non-terminating and non-recurring. Example of the rational number is 10/2, and for an irrational number is a famous mathematical value Pi(π) which is equal to 3.141592653589…….",
      "",
    ],
    "Geometry": [
      "https://youtube.com/embed/OgNH3xrhtdg",
      "Geometry is the branch of mathematics that deals with shapes, angles, dimensions and sizes of a variety of things we see in everyday life. Geometry is derived from Ancient Greek words – ‘Geo’ means ‘Earth’ and ‘metron’ means ‘measurement’. In Euclidean geometry, there are two-dimensional shapes and three-dimensional shapes.",
      "",
    ],
    "Integers": [
      "https://youtube.com/embed/o8vx8LqZ0Cg",
      "In Mathematics, integers are the collection of whole numbers and negative numbers. Similar to whole numbers, integers also does not include the fractional part. Thus, we can say, integers are numbers that can be positive, negative or zero, but cannot be a fraction. We can perform all the arithmetic operations, like addition, subtraction, multiplication and division, on integers. The examples of integers are, 1, 2, 5,8, -9, -12, etc. The symbol of integers is “Z“. Now, let us discuss the definition of integers, symbol, types, operations on integers, rules and properties associated to integers, how to represent integers on number line with many solved examples in detail.",
      "",
    ],
    "Probability and Statistics": [
      "https://youtube.com/embed/7aD6cVhUMfo",
      "Probability defines the likelihood of occurrence of an event. There are many real-life situations in which we may have to predict the outcome of an event. We may be sure or not sure of the results of an event. In such cases, we say that there is a probability of this event to occur or not occur. Probability generally has great applications in games, in business to make predictions, and also it has extensive applications in this new area of artificial intelligence.",
      "",
    ],
    
  },
  "Science": {
    "Introduction": [
      "https://www.youtube.com/embed/yiTVkCy7DwA",
      "Science, any system of knowledge that is concerned with the physical world and its phenomena and that entails unbiased observations and systematic experimentation. In general, a science involves a pursuit of knowledge covering general truths or the operations of fundamental laws. Science can be divided into different branches based on the subject of study. The physical sciences study the inorganic world and comprise the fields of astronomy, physics, chemistry, and the Earth sciences. The biological sciences such as biology and medicine study the organic world of life and its processes. Social sciences like anthropology and economics study the social and cultural aspects of human behaviour.",
      "",
    ],
    "Biology": [
      "https://www.youtube.com/embed/6v8djXa-IPQ?si=f4NNr_xbZCJyIOf7",
      "Biology, study of living things and their vital processes. The field deals with all the physicochemical aspects of life. The modern tendency toward cross-disciplinary research and the unification of scientific knowledge and investigation from different fields has resulted in significant overlap of the field of biology with other scientific disciplines. Modern principles of other fields—chemistry, medicine, and physics, for example—are integrated with those of biology in areas such as biochemistry, biomedicine, and biophysics.",
      "",
    ],
    "Chemistry": [
      "https://www.youtube.com/embed/t8x3wdXZGEY?si=LxVHBtefINgFazdP",
      "Chemistry is a subdiscipline of science that deals with the study of matter and the substances that constitute it. It also deals with the properties of these substances and the reactions undergone by them to form new substances. Chemistry primarily focuses on atoms, ions, and molecules which, in turn, make up elements and compounds. These chemical species tend to interact with each other through chemical bonds. It is important to note that the interactions between matter and energy are also studied in the field of chemistry. The study of elements and compounds’ properties, compositions, and structures, as well as how they can change and the energy that is released or absorbed during such changes, is the subject matter of the science known as chemistry.",
      "",
    ],
    "Physics": [
      "https://www.youtube.com/embed/Y-NQOJ3Uz4w?si=owkhLSP-Dw6XpKb3",
      "Physics, science that deals with the structure of matter and the interactions between the fundamental constituents of the observable universe. In the broadest sense, physics (from the Greek physikos) is concerned with all aspects of nature on both the macroscopic and submicroscopic levels. Its scope of study encompasses not only the behaviour of objects under the action of given forces but also the nature and origin of gravitational, electromagnetic, and nuclear force fields. Its ultimate objective is the formulation of a few comprehensive principles that bring together and explain all such disparate phenomena.",
      "",
    ],
  },
  "Punjabi": {
    "Introduction": [
      "https://www.youtube.com/embed/6PygcNZiD7k",
      "Punjabi language, one of the most widely spoken Indo-Aryan languages. The old British spelling “Punjabi” remains in more common general usage than the academically precise “Panjabi.” In the early 21st century there were about 30 million speakers of Punjabi in India. It is the official language of the Indian state of Punjab and is one of the languages recognized by the Indian constitution. In Pakistan Punjabi is spoken by some 70 million speakers, mostly in Punjab province, but official status at both the national and the provincial level is reserved for Urdu. There are also important overseas communities of Punjabi speakers, particularly in Canada and the United Kingdom—where in the early 21st century they respectively constituted the third and fourth largest linguistic groups in the national populations—as well as in several parts of the United States.",
      "",
    ],
    "History": [
      "https://www.youtube.com/embed/HolKzRl1fRQ?si=RX3EKVn2ncTG0b16",
      "It is one of the most ancient civilizations in the world with a distinguished culture. Punjabi language has its origins in the Indo-European family of languages which included Persian and Latin. A land of ethnic and religious diversity, it is birth place of a number of religious movements. Some of the prominent ones include Sikhism, Buddhism and many Sufi schools of Islam. The Indian State of Punjab was created in 1947, when the partition of India split the former Raj province of Punjab between India and Pakistan. The mostly Muslim western part of the province became Pakistan’s Punjab Province; the mostly Sikh eastern part became India’s Punjab state. The partition saw many people displaced and much intercommunal violence, as many Sikhs and Hindus lived in the west, and many Muslims lived in the east. Several small Punjabi princely states, including Patiala, also became part of Indian Punjab.",
      "",
    ],
    "Literature": [
      "https://www.youtube.com/embed/IK6ur2_A-xg?si=q-azLyEAKRFSnEqX",
      "Punjabi literature came into existence because of Fariduddin ganjshakar, which later developed. It inculcated religious literature, as well as literally on the society and societal reforms. Various writers wrote prose and poetry on life lessons and philosophy, which became famous among locals. Later on, literature was written on chronicles of history depicting the pride of the region’s people. Today Punjabi literature is one of the major literary genres in India, which includes beautiful, widely patronised folk songs and poems to chronicles of the past.",
      "",
    ],
    "Philosophy": [
      "https://www.youtube.com/embed/Gc-Vg6FtbSU?si=LnSfoNZjpj1PCum0",
      "The major activity of the department of Philosophy is primarily related to teaching and research apart from organizing and participating in the academic programmes such as seminars, conferences, workshops, training programmes for the students as well as the teachers. The main thrust in teaching and research is on Classical and Modern Indian Philosophy, Western Philosophy, Philosophy of Culture, Applied Ethics and Philosophy of Sikhism.The faculty members of the Department are actively involved in guiding research work at the Ph.D. level, as well as doing research themselves. The teachers have participated and presented papers in national and international conferences and Seminars.To strengthen the existing curriculum, the Department has started new Courses on Applied Ethics, Bio-Ethics and Environmental Philosophy.",
      "",
    ],
  },
  "Social Science": {
    "Introduction": [
      "https://www.youtube.com/embed/kUApnFN2vGk?si=EPDLhEkOl9AFNGR2",
      "Social science is the study of how people interact with one another. The branches of social science include anthropology, economics, political science, psychology, and sociology. Social scientists study how societies work, exploring everything from the triggers of economic growth and the causes of unemployment to what makes people happy. Their findings inform public policies, education programs, urban design, marketing strategies, and many other endeavors.",
      "",
    ],
    "Politics": [
      "https://www.youtube.com/embed/DhdRJHovAaU?si=dh1qEr4ocDgHU9Ra",
      "Political science is a member of the social sciences. While not all political scientists use the formal scientific method, they all adhere to empirical, falsifiable methods that are peer-reviewed. Political scientists at universities focus primarily on research and secondarily on teaching. Political scientists at community colleges focus primarily on teaching and secondarily on research.",
      "",
    ],
    "Sociology": [
      "https://www.youtube.com/embed/YnCJU6PaCio?si=aG4QIlyGDA2rdJe0",
      "Sociology, a social science that studies human societies, their interactions, and the processes that preserve and change them. It does this by examining the dynamics of constituent parts of societies such as institutions, communities, populations, and gender, racial, or age groups. Sociology also studies social status or stratification, social movements, and social change, as well as societal disorder in the form of crime, deviance, and revolution.",
      "",
    ],
    "Economics": [
      "https://www.youtube.com/embed/dVTNmSmUo14?si=hXrMwF5cQHzrJEmI",
      "Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The study of economics is primarily concerned with analyzing the choices that individuals, businesses, governments, and nations make to allocate limited resources. Economics has ramifications on a wide range of other fields, including politics, psychology, business, and law.",
      "",
    ],
  },
  "Hindi": {
    "Introduction": [
      "https://www.youtube.com/embed/WkgdcOSsbCc?si=oJLG7B5bzm05F82o",
      "Hindi definitely is a language and because it is influenced by many other languages like urdu,persian it doesn't mean it can't be a language.For example :Every language gets influenced by another and even English has loan words from many languages (latin,greek,tamil,sanskrit and even hindi).It is a part of evolution that we get influenced and this change will happen and unavoidable.We don't give English a different name but still call it English ,it is like that. Khadiboli is not easy for everyone to understand and hindi makes it easy.The main purpose of language must be communication let's embrace it however it evolves,it's just a medium.",
      "",
    ],
    "History": [
      "https://www.youtube.com/embed/17xCC1eMNdw?si=i1QUPNb7T2Er4QOM",
      "The Hindi language is a member of the Indo-Aryan group within the Indo-Iranian branch of the Indo-European language family. It is the preferred official language of India, although much national business is also conducted in English and other languages ​​recognized in the Indian Constitution. In India, Hindi is spoken as a first language by about 425 million people and as a second language by about 120 million people. Significant Hindi-speaking communities are also found in South Africa, Mauritius, Bangladesh, Yemen and Uganda.",
      "",
    ],
    "Literature": [
      "https://www.youtube.com/embed/MreiJ7Y1B9o?si=ZAdanADmXGbH6pfb",
      "Hindi literature, the writings of the western Braj language and Khadi dialect and the eastern Awadhi and Bundeli dialects of the Indian subcontinent and the writings of parts of Rajasthan in the west and Bihar in the east, which, strictly speaking, are not Hindi at all. Hindi literature also includes works by Muslim authors (such as Jayasi) in traditionally Persian script whose content is Hindu rather than Muslim.",
      "",
    ],
    "Philosophy": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Hindu philosophy consists of six orthodox schools of thought (shad-darśana): Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa and Vedanta. These are called the āstika philosophical traditions (i.e. those that accept the Vedas as an authoritative, important source of knowledge). Indian philosophy during the ancient and medieval periods also yielded philosophical systems that share concepts with āstika traditions, but rejected the Vedas; these have been called nāstika (heterodox or non-orthodox) philosophies, they include: Buddhism, Jainism, Chārvāka, Ājīvika, and others, which are thus classified under Indian but not Hindu philosophy.",
      "",
    ],
  },

  "English": {
    "Introduction": [
      "https://www.youtube.com/embed/WkgdcOSsbCc?si=oJLG7B5bzm05F82o",
      "Welcome to the world of English, kids! It's a language full of adventures in reading, writing, and speaking. Let's learn letters, sounds, and words together. Discover stories that take us to magical lands. With English, we can communicate with friends from all around the globe. Let's embark on this exciting journey!",
    ],
    "Storytelling": [
      "https://www.youtube.com/embed/17xCC1eMNdw?si=i1QUPNb7T2Er4QOM",
      "Once upon a time, in a faraway land, brave heroes embarked on epic quests. They battled dragons, solved mysteries, and discovered hidden treasures. With every twist and turn, they taught us lessons of courage, friendship, and hope. Let your imagination soar as you create your own magical tales!",
    ],
    "Reading Comprehension": [
      "https://www.youtube.com/embed/MreiJ7Y1B9o?si=ZAdanADmXGbH6pfb",
      "Reading comprehension is understanding what you read, kids! Start by reading a story or article. Ask questions like who, what, when, where, why, and how. Summarize the main idea and key details. Make connections to your own life. Practice makes perfect, so keep reading and exploring new worlds!",
    ],
    "Vocabulary Building": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Expand your word power, kids! Vocabulary building is like collecting treasures. Read books, explore new topics, and use a dictionary. Play word games like Scrabble or word puzzles. Make flashcards with new words and their meanings. With each word learned, your world grows bigger and more exciting!",
    ],
    "Grammar Games": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Let's play with words, kids! Grammar games make learning fun. Try sentence scrambles to put words in the right order. Find nouns, verbs, and adjectives in a scavenger hunt. Practice punctuation with a game of punctuation bingo. With laughter and games, we'll become grammar experts in no time!",
    ],
  },

  "Physical Education": {
    "Sports Basics": [
      "https://www.youtube.com/embed/WkgdcOSsbCc?si=oJLG7B5bzm05F82o",
      "Hey young athletes! Sports are all about fun and teamwork. Learn the basics like throwing, catching, and kicking. Practice dribbling a ball or swinging a bat. Stay active and healthy while making new friends. Whether it's soccer, basketball, or swimming, let's play fair and have a blast together!",
    ],
    "Fitness Challenges": [
      "https://www.youtube.com/embed/17xCC1eMNdw?si=i1QUPNb7T2Er4QOM",
      "Get moving, kids! Challenge yourself with fun fitness activities. See how many jumping jacks you can do in a minute. Try balancing on one foot or holding a plank position. Go for a bike ride or a nature walk. Stay active and strong – you're capable of amazing things!",
    ],
    "Outdoor Activities": [
      "https://www.youtube.com/embed/MreiJ7Y1B9o?si=ZAdanADmXGbH6pfb",
      "Let's explore the great outdoors, kids! Go for a hike and discover nature's wonders. Build forts or have a picnic in the park. Play tag, hide-and-seek, or kickball with friends. Don't forget to splash in puddles on rainy days! Outdoor adventures await – let's make memories together!",
    ],
    "Team Building Games": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Team up, kids! Team building games are super fun. Try the human knot, where you untangle yourselves as a group. Or play a trust fall game to build confidence. Relay races and scavenger hunts encourage teamwork and communication. With laughter and cooperation, we'll become an unbeatable team!",
    ],
    "Sportsmanship and Fair Play": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Hey champions! Sportsmanship means playing fair, respecting opponents, and cheering for everyone. Win or lose, it's how you play that counts. Shake hands, congratulate others, and never give up! Remember, teamwork and kindness make sports fun for everyone. Let's show good sportsmanship and make every game a win-win!",
    ],
  },
  "Computer Science": {
    "Introduction to Computers": [
      "https://www.youtube.com/embed/WkgdcOSsbCc?si=oJLG7B5bzm05F82o",
      "Hi kids! Computers are amazing machines that can do all sorts of cool stuff! They help us play games, learn new things, and talk to friends. Inside, they have parts like a brain (CPU), memory (RAM), and a storage space (hard drive). Let's explore the wonderful world of computers together!",
    ],
    "Coding Basics": [
      "https://www.youtube.com/embed/17xCC1eMNdw?si=i1QUPNb7T2Er4QOM",
      "Hey young coders! Coding is like giving instructions to computers using special languages. Start with simple commands like 'move forward' or 'turn left.' Practice makes perfect, so keep trying! With coding, you can create games, apps, and websites. Let's explore the amazing world of programming together!",
    ],
    "Robotics": [
      "https://www.youtube.com/embed/MreiJ7Y1B9o?si=ZAdanADmXGbH6pfb",
      "Hey kids, let's dive into robotics! Robots are like super-smart helpers. They can move, talk, and even learn from us! Sensors help them sense the world around them, like eyes and ears. With coding, we tell them what to do. Imagine all the cool things we can build together!",
    ],
    "Computer Hardware Exploration": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Let's explore computer hardware, kids! The CPU is the brain, RAM is like short-term memory, and the hard drive stores everything. Graphics cards make games look awesome! Keyboards and mice help us communicate. Remember to handle electronics gently and explore with curiosity. Who knows, you might be a future tech genius!",
    ],
    "Cybersecurity Awareness": [
      "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
      "Stay safe online, kids! Never share personal information or passwords. Be careful with emails and messages from strangers. Use strong passwords and update them often. Always ask a trusted adult before downloading anything. Remember, what you post online stays forever. Be cyber-smart and protect yourself!",
    ],
  },
    "Maths": {
        "Rational Numbers":[
            "https://www.youtube.com/embed/p_Il5zOo7m8",
            "A rational number is a number that is expressed as the ratio of two integers, where the denominator should not be equal to zero, whereas an irrational number cannot be expressed in the form of fractions. Rational numbers are terminating decimals but irrational numbers are non-terminating and non-recurring. Example of the rational number is 10/2, and for an irrational number is a famous mathematical value Pi(π) which is equal to 3.141592653589…….",
            ""],
        "Geometry":[
            "https://youtube.com/embed/OgNH3xrhtdg",
            "Geometry is the branch of mathematics that deals with shapes, angles, dimensions and sizes of a variety of things we see in everyday life. Geometry is derived from Ancient Greek words – ‘Geo’ means ‘Earth’ and ‘metron’ means ‘measurement’. In Euclidean geometry, there are two-dimensional shapes and three-dimensional shapes.",
            ""],
        "Integers":[
            "https://youtube.com/embed/o8vx8LqZ0Cg",
            "In Mathematics, integers are the collection of whole numbers and negative numbers. Similar to whole numbers, integers also does not include the fractional part. Thus, we can say, integers are numbers that can be positive, negative or zero, but cannot be a fraction. We can perform all the arithmetic operations, like addition, subtraction, multiplication and division, on integers. The examples of integers are, 1, 2, 5,8, -9, -12, etc. The symbol of integers is “Z“. Now, let us discuss the definition of integers, symbol, types, operations on integers, rules and properties associated to integers, how to represent integers on number line with many solved examples in detail.",
            ""],
        "Probability and Statistics":[
            "https://youtube.com/embed/7aD6cVhUMfo",
            "Probability defines the likelihood of occurrence of an event. There are many real-life situations in which we may have to predict the outcome of an event. We may be sure or not sure of the results of an event. In such cases, we say that there is a probability of this event to occur or not occur. Probability generally has great applications in games, in business to make predictions, and also it has extensive applications in this new area of artificial intelligence.",
            ""]
        },
    "Science": {
        "Introduction":[
            "https://www.youtube.com/embed/yiTVkCy7DwA",
            "Science, any system of knowledge that is concerned with the physical world and its phenomena and that entails unbiased observations and systematic experimentation. In general, a science involves a pursuit of knowledge covering general truths or the operations of fundamental laws. Science can be divided into different branches based on the subject of study. The physical sciences study the inorganic world and comprise the fields of astronomy, physics, chemistry, and the Earth sciences. The biological sciences such as biology and medicine study the organic world of life and its processes. Social sciences like anthropology and economics study the social and cultural aspects of human behaviour.",
            ""],
        "Biology":[
            "https://www.youtube.com/embed/6v8djXa-IPQ?si=f4NNr_xbZCJyIOf7",
            "Biology, study of living things and their vital processes. The field deals with all the physicochemical aspects of life. The modern tendency toward cross-disciplinary research and the unification of scientific knowledge and investigation from different fields has resulted in significant overlap of the field of biology with other scientific disciplines. Modern principles of other fields—chemistry, medicine, and physics, for example—are integrated with those of biology in areas such as biochemistry, biomedicine, and biophysics.",
            ""],
        "Chemistry":[
            "https://www.youtube.com/embed/t8x3wdXZGEY?si=LxVHBtefINgFazdP",
            "Chemistry is a subdiscipline of science that deals with the study of matter and the substances that constitute it. It also deals with the properties of these substances and the reactions undergone by them to form new substances. Chemistry primarily focuses on atoms, ions, and molecules which, in turn, make up elements and compounds. These chemical species tend to interact with each other through chemical bonds. It is important to note that the interactions between matter and energy are also studied in the field of chemistry. The study of elements and compounds’ properties, compositions, and structures, as well as how they can change and the energy that is released or absorbed during such changes, is the subject matter of the science known as chemistry.",
            ""],
        "Physics":[
            "https://www.youtube.com/embed/Y-NQOJ3Uz4w?si=owkhLSP-Dw6XpKb3",
            "Physics, science that deals with the structure of matter and the interactions between the fundamental constituents of the observable universe. In the broadest sense, physics (from the Greek physikos) is concerned with all aspects of nature on both the macroscopic and submicroscopic levels. Its scope of study encompasses not only the behaviour of objects under the action of given forces but also the nature and origin of gravitational, electromagnetic, and nuclear force fields. Its ultimate objective is the formulation of a few comprehensive principles that bring together and explain all such disparate phenomena.",
            ""]},
    "Punjabi": {
        "Introduction":[
            "https://www.youtube.com/embed/6PygcNZiD7k",
            "Punjabi language, one of the most widely spoken Indo-Aryan languages. The old British spelling “Punjabi” remains in more common general usage than the academically precise “Panjabi.” In the early 21st century there were about 30 million speakers of Punjabi in India. It is the official language of the Indian state of Punjab and is one of the languages recognized by the Indian constitution. In Pakistan Punjabi is spoken by some 70 million speakers, mostly in Punjab province, but official status at both the national and the provincial level is reserved for Urdu. There are also important overseas communities of Punjabi speakers, particularly in Canada and the United Kingdom—where in the early 21st century they respectively constituted the third and fourth largest linguistic groups in the national populations—as well as in several parts of the United States.",
            ""],
        "History":[
            "https://www.youtube.com/embed/HolKzRl1fRQ?si=RX3EKVn2ncTG0b16",
            "It is one of the most ancient civilizations in the world with a distinguished culture. Punjabi language has its origins in the Indo-European family of languages which included Persian and Latin. A land of ethnic and religious diversity, it is birth place of a number of religious movements. Some of the prominent ones include Sikhism, Buddhism and many Sufi schools of Islam. The Indian State of Punjab was created in 1947, when the partition of India split the former Raj province of Punjab between India and Pakistan. The mostly Muslim western part of the province became Pakistan’s Punjab Province; the mostly Sikh eastern part became India’s Punjab state. The partition saw many people displaced and much intercommunal violence, as many Sikhs and Hindus lived in the west, and many Muslims lived in the east. Several small Punjabi princely states, including Patiala, also became part of Indian Punjab.",
            ""],
        "Literature":[
            "https://www.youtube.com/embed/IK6ur2_A-xg?si=q-azLyEAKRFSnEqX",
            "Punjabi literature came into existence because of Fariduddin ganjshakar, which later developed. It inculcated religious literature, as well as literally on the society and societal reforms. Various writers wrote prose and poetry on life lessons and philosophy, which became famous among locals. Later on, literature was written on chronicles of history depicting the pride of the region’s people. Today Punjabi literature is one of the major literary genres in India, which includes beautiful, widely patronised folk songs and poems to chronicles of the past.",
            ""],
        "Philosophy":[
            "https://www.youtube.com/embed/Gc-Vg6FtbSU?si=LnSfoNZjpj1PCum0",
            "The major activity of the department of Philosophy is primarily related to teaching and research apart from organizing and participating in the academic programmes such as seminars, conferences, workshops, training programmes for the students as well as the teachers. The main thrust in teaching and research is on Classical and Modern Indian Philosophy, Western Philosophy, Philosophy of Culture, Applied Ethics and Philosophy of Sikhism.The faculty members of the Department are actively involved in guiding research work at the Ph.D. level, as well as doing research themselves. The teachers have participated and presented papers in national and international conferences and Seminars.To strengthen the existing curriculum, the Department has started new Courses on Applied Ethics, Bio-Ethics and Environmental Philosophy.",
            ""]},
    "Social Science": {
        "Introduction":[
            "https://www.youtube.com/embed/kUApnFN2vGk?si=EPDLhEkOl9AFNGR2",
            "Social science is the study of how people interact with one another. The branches of social science include anthropology, economics, political science, psychology, and sociology. Social scientists study how societies work, exploring everything from the triggers of economic growth and the causes of unemployment to what makes people happy. Their findings inform public policies, education programs, urban design, marketing strategies, and many other endeavors.",
            ""],
        "Politics":[
            "https://www.youtube.com/embed/DhdRJHovAaU?si=dh1qEr4ocDgHU9Ra",
            "Political science is a member of the social sciences. While not all political scientists use the formal scientific method, they all adhere to empirical, falsifiable methods that are peer-reviewed. Political scientists at universities focus primarily on research and secondarily on teaching. Political scientists at community colleges focus primarily on teaching and secondarily on research.",
            ""],
        "Sociology":[
            "https://www.youtube.com/embed/YnCJU6PaCio?si=aG4QIlyGDA2rdJe0",
            "Sociology, a social science that studies human societies, their interactions, and the processes that preserve and change them. It does this by examining the dynamics of constituent parts of societies such as institutions, communities, populations, and gender, racial, or age groups. Sociology also studies social status or stratification, social movements, and social change, as well as societal disorder in the form of crime, deviance, and revolution.",
            ""],
        "Economics":[
            "https://www.youtube.com/embed/dVTNmSmUo14?si=hXrMwF5cQHzrJEmI",
            "Economics is a social science that focuses on the production, distribution, and consumption of goods and services. The study of economics is primarily concerned with analyzing the choices that individuals, businesses, governments, and nations make to allocate limited resources. Economics has ramifications on a wide range of other fields, including politics, psychology, business, and law.",
            ""]},
    "Hindi":{
        "Introduction":[
            "https://www.youtube.com/embed/WkgdcOSsbCc?si=oJLG7B5bzm05F82o",
            "Hindi definitely is a language and because it is influenced by many other languages like urdu,persian it doesn't mean it can't be a language.For example :Every language gets influenced by another and even English has loan words from many languages (latin,greek,tamil,sanskrit and even hindi).It is a part of evolution that we get influenced and this change will happen and unavoidable.We don't give English a different name but still call it English ,it is like that. Khadiboli is not easy for everyone to understand and hindi makes it easy.The main purpose of language must be communication let's embrace it however it evolves,it's just a medium.",
            ""],
        "History":[
            "https://www.youtube.com/embed/17xCC1eMNdw?si=i1QUPNb7T2Er4QOM",
            "The Hindi language is a member of the Indo-Aryan group within the Indo-Iranian branch of the Indo-European language family. It is the preferred official language of India, although much national business is also conducted in English and other languages ​​recognized in the Indian Constitution. In India, Hindi is spoken as a first language by about 425 million people and as a second language by about 120 million people. Significant Hindi-speaking communities are also found in South Africa, Mauritius, Bangladesh, Yemen and Uganda.",
            ""],
        "Literature":[
            "https://www.youtube.com/embed/MreiJ7Y1B9o?si=ZAdanADmXGbH6pfb",
            "Hindi literature, the writings of the western Braj language and Khadi dialect and the eastern Awadhi and Bundeli dialects of the Indian subcontinent and the writings of parts of Rajasthan in the west and Bihar in the east, which, strictly speaking, are not Hindi at all. Hindi literature also includes works by Muslim authors (such as Jayasi) in traditionally Persian script whose content is Hindu rather than Muslim.",
            ""],
        "Philosophy":[
            "https://www.youtube.com/embed/vCEDptvB5Q4?si=OqOHSD22ykIvUfz2",
            "Hindu philosophy consists of six orthodox schools of thought (shad-darśana): Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa and Vedanta. These are called the āstika philosophical traditions (i.e. those that accept the Vedas as an authoritative, important source of knowledge). Indian philosophy during the ancient and medieval periods also yielded philosophical systems that share concepts with āstika traditions, but rejected the Vedas; these have been called nāstika (heterodox or non-orthodox) philosophies, they include: Buddhism, Jainism, Chārvāka, Ājīvika, and others, which are thus classified under Indian but not Hindu philosophy.",
            ""]}
          
};

function home() {
  m_e.getElementsByTagName("h1")[0].innerText = "SUBJECTS";
  m_e.getElementsByTagName("div")[0].innerHTML = "";
  m_e.getElementsByTagName("div")[0].style.display = "grid";
  m_e.getElementsByTagName("div")[0].style.height = "";
  for (const i in data) {
    var ele = `
        <div class="items" id="${i}">
        <div class="img">
            <img src="./images/${i}${".jpg" || ".png" || ".jpeg"}" alt="">
        </div>
        <div class="text">
            <h3 class="animate">
                ${i}
            </h3>
        </div>
    m_e.getElementsByTagName("div")[0].innerHTML += ele;
  }
  Array.from(m_e.getElementsByClassName("items")).forEach((element) => {
    element.addEventListener("click", function () {
      window.location.hash = element.id;
      sub(element.id);
      // console.log(element.id);
    });
  });
    m_e.getElementsByTagName("div")[0].innerHTML+=ele;
    }
    Array.from(m_e.getElementsByClassName("items")).forEach(
        element => {
            element.addEventListener("click", function(){
                window.location.hash=element.id;
                sub(element.id);

            });
        }
    );

}

function quizz(el) {
  console.log(el);
}
function topic(el) {
  var e = el.split("-");
  m_e.getElementsByTagName("h1")[0].innerText = e[1];
  m_e.getElementsByTagName("div")[0].innerHTML = "";
  m_e.getElementsByTagName("div")[0].style.display = "block";
  m_e.getElementsByTagName("div")[0].style.height = "100%";
  var ele = `
        <div class="topic">
        <iframe src="${
          data[e[0]][e[1]][0]
        }" title="What is Science? | Introduction To Science | Definition of science | Types of science | Letstute" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="topic-text"><p>${data[e[0]][e[1]][1]}</p></div>
        <button type="button" onclick='quizz("${e}")')>Quizz</button>
        </div>
    `;
  m_e.getElementsByTagName("div")[0].innerHTML += ele;
  // console.log(e);
}
function sub(e) {
  e = e.replaceAll("%20", " ");
  if (e.includes("/")) {
    topic(e.replace("/", "-"));
    return;
  }
  m_e.getElementsByTagName("h1")[0].innerText = e;
  m_e.getElementsByTagName("div")[0].innerHTML = "";
  m_e.getElementsByTagName("div")[0].style.display = "grid";
  m_e.getElementsByTagName("div")[0].style.height = "";
  // for(var x=0; x<30; x++){
  for (const i in data[e]) {
    var ele = `
        <div class="items" id="${i}">
        <div class="img">
            <img src="./images/${e}/${i}.jpg" alt="">
        </div>
        <div class="text">
            <h3 class="animate">
                ${i}
            </h3>
        </div>
    `;
    m_e.getElementsByTagName("div")[0].innerHTML += ele;
  }
  // }
  Array.from(m_e.getElementsByClassName("items")).forEach((element) => {
    element.addEventListener("click", function () {
      window.location.hash = e + "/" + element.id;
      // console.log(element.id);
    });
  });
}

function front_page() {
  if (window.location.hash === "") {
    home();
  } else {
    sub(window.location.hash.split("#")[1]);
  }
}

window.onload = function () {
  front_page();
};
window.addEventListener("hashchange", function (e) {
  front_page();
});

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByClassName("items");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.getElementById("search-input").addEventListener("keyup", function () {
  // console.log("searching");
  search();
});

const sidebar = document.getElementById("sidebar");
const root = document.documentElement;
const widthSidebar = getComputedStyle(root).getPropertyValue("--width-sidebar");
let isResizing = false;
let startX;

sidebar.addEventListener("mousedown", (e) => {
  isResizing = true;
  startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (isResizing) {
    const newWidth = sidebar.offsetWidth + e.clientX - startX;
    if (newWidth < 480 && newWidth > 230) {
      root.style.setProperty("--width-sidebar", `${newWidth}px`);
      document.body.style.setProperty("display", "grid");
      document.body.style.setProperty(
        "grid-template-columns",
        `${newWidth}px auto`
      );
    } else if (newWidth <= 230) {
      root.style.setProperty("--width-sidebar", `0`);
      document.body.style.setProperty("display", `block`);
      sidebar.style.position = "fixed";
      sidebar.style.left = "0";
      sidebar.style.zIndex = "5";
      sidebar.style.height = "100vh";
      sidebar.style.width = "280px";
      sidebar.style.display = "none";
      document.getElementById("menu").style.display = "block";
      document.getElementById("front-page").style.width = "100vw";
    }
    const range = 5;
    const mousePosition = e.clientX;
    const sidebarWidth = parseInt(sidebar.offsetWidth);
    if (
      mousePosition >= sidebarWidth - range &&
      mousePosition <= sidebarWidth + range
    ) {
      sidebar.style.cursor = "col-resize";
    } else {
      sidebar.style.cursor = "default";
    }
    startX = e.clientX;
  }
});

document.addEventListener("mouseup", () => {
  isResizing = false;
});

document.addEventListener("mouseleave", () => {
  if (isResizing) {
    isResizing = false;
  }
});

sidebar.addEventListener("touchstart", (e) => {
  isResizing = true;
  startX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
  if (isResizing) {
    const newWidth = sidebar.offsetWidth + e.touches[0].clientX - startX;
    if (newWidth < 480 && newWidth > 230) {
      root.style.setProperty("--width-sidebar", `${newWidth}px`);
      document.body.style.setProperty("display", "grid");
      document.body.style.setProperty(
        "grid-template-columns",
        `${newWidth}px auto`
      );
    } else if (newWidth <= 230) {
      root.style.setProperty("--width-sidebar", `0`);
      document.body.style.setProperty("display", `block`);
      sidebar.style.position = "fixed";
      sidebar.style.left = "0";
      sidebar.style.zIndex = "5";
      sidebar.style.height = "100vh";
      sidebar.style.width = "280px";
      sidebar.style.display = "none";
      document.getElementById("menu").style.display = "block";
      document.getElementById("front-page").style.width = "100vw";
    }
    startX = e.touches[0].clientX;
  }
});

document.addEventListener("touchend", () => {
  isResizing = false;
});

document.addEventListener("touchleave", () => {
  if (isResizing) {
    isResizing = false;
  }
});

document.addEventListener("touchcancel", () => {
  if (isResizing) {
    isResizing = false;
  }
});

sidebar.addEventListener("mouseenter", function (e) {
  const sidebarWidth = parseInt(sidebar.offsetWidth);
  const mousePosition = e.clientX;

  const range = 5;
  // console.warn(mousePosition, sidebarWidth - range, sidebarWidth + range);
  if (
    mousePosition >= sidebarWidth - range &&
    mousePosition <= sidebarWidth + range
  ) {
    // console.log("Mouse entered near the sidebar width");
    sidebar.style.cursor = "col-resize";
  } else {
    sidebar.style.cursor = "default";
  }
});

document.addEventListener("mousemove", function (e) {
  const sidebarWidth = parseInt(sidebar.offsetWidth);
  const mousePosition = e.clientX;

  const range = 5;
  // console.warn(mousePosition, sidebarWidth - range, sidebarWidth + range);
  if (mousePosition >= sidebarWidth - range) {
    // console.log("Mouse entered near the sidebar width");
    sidebar.style.cursor = "col-resize";
  } else {
    sidebar.style.cursor = "default";
  }
});

document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu").style.display = "none";
  root.style.setProperty("--width-sidebar", `280px`);
  document.body.style.setProperty("display", "grid");
  document.body.style.setProperty("grid-template-columns", `280px auto`);
  sidebar.style.display = "block";
  sidebar.style.removeProperty("position");
  sidebar.style.removeProperty("left");
  sidebar.style.removeProperty("z-index");
  sidebar.style.removeProperty("height");
  sidebar.style.removeProperty("width");
  document.getElementById("front-page").style.removeProperty("width");
});
window.onload = function(){
    front_page();
}
window.addEventListener('hashchange', function (e) {
    front_page();
});
