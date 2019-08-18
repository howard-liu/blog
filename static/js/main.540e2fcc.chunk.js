(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(14),r=a.n(i),s=a(2),l=a(6);a(27);var h=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header-container pt-3 pr-0"},n.a.createElement("div",{className:"header-gradient pr-0"}),n.a.createElement("div",{className:"row pr-0 col-11"},n.a.createElement("div",{className:"col-sm-12 col-11 mt-1 ml-sm-3 ml-0 pr-0"},n.a.createElement("h2",{id:"header"},"Howard's Corner"),n.a.createElement("p",{className:"headerstitle mb-0"},"by Howard Liu, for all of you"))),n.a.createElement("div",{className:"header-links float-right"},n.a.createElement("div",{className:""},n.a.createElement(s.b,{to:"/",className:"col-2 black-link"},"Home"),n.a.createElement(s.b,{to:"/about",className:"col-2 black-link"},"About"),n.a.createElement(s.b,{to:"/blogs",className:"col-2 mr-sm-0 mr-3 black-link"},"Blogs")))),n.a.createElement("div",{className:"header-placeholder"}))},m=a(17),c=a(18),d=a(20),u=a(19),g=a(21),p=function(e){function t(){var e,a;Object(m.a)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={currentImage:a.props.preview,loading:!0},a.fetchImage=function(e){var t=new Image;t.onload=function(){return a.setState({currentImage:a.loadingImage.src,loading:!1})},t.src=e,a.loadingImage=t},a.style=function(e){return{transition:"0.5s filter linear",filter:"".concat(e?"blur(50px)":"")}},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchImage(this.props.image)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.image!==this.props.image&&this.setState({currentImage:e.preview,loading:!0},function(){t.fetchImage(e.image)})}},{key:"componentWillUnmount",value:function(){this.loadingImage&&(this.loadingImage.onload=null)}},{key:"render",value:function(){var e=this.state,t=e.currentImage,a=e.loading,o=this.props.alt;return n.a.createElement("img",{style:this.style(a),src:t,alt:o,className:this.props.className})}}]),t}(o.Component);a(33);var w=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"home-image-container"},n.a.createElement(p,{preview:"images/header-small.jpg",image:"images/header-large.jpg",className:"home-image",alt:"Home"}),n.a.createElement("div",{className:"home-image-text"},n.a.createElement("h1",null,"Hello ",n.a.createElement("br",null),"I'm Howard Liu"),n.a.createElement(s.b,{to:"/blogs",className:"home-blog-button"},"View Blog"))))};a(34);var y=function(){return n.a.createElement("div",{classname:"mb-3 mb-sm-0"},n.a.createElement("div",{style:{float:"left"}},n.a.createElement(p,{preview:"images/think-small.jpg",image:"images/think-large.jpg",className:"about-image mr-0 mr-sm-3 mb-2 mb-sm-1",alt:"Howard"})),n.a.createElement("p",null,n.a.createElement("h3",{id:"header"},"About me"),n.a.createElement("br",null),n.a.createElement("p",null,"I'm Howard, a web developer in Melbourne."),n.a.createElement("p",null,"I currently work for Revel, a startup aiming to connect event hosts with local services. My role mostly involves front end design and implementation using ReactJS and CSS, but other times it extends to NodeJS and MongoDB."),n.a.createElement("p",null,"I have also worked as a business analyst and volunteered as a campaigns advisor. This allowed me to gain experience in a wide range of skills, including media creation and distribution, as well as team communication. I also recently finished my Bachelors of Science, majoring in Mechatronics."),n.a.createElement("p",null,"I was born in Taichung, Taiwan and moved to Auckland, New Zealand for most of my life, then I moved to Melbourne. I enjoy reading, running and going to dog beaches."),n.a.createElement("p",null,"Visit my portfolio at"," ",n.a.createElement("a",{href:"https://howard-liu.github.io/me/",target:"_blank"},"https://howard-liu.github.io/me/"))))};a(35);var f=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"blog-card"},n.a.createElement(s.b,{to:"/pressure-cooker",className:"blog-link black-link"},n.a.createElement("div",{className:""},n.a.createElement("h4",null,"Pressure Cooker"),n.a.createElement(p,{preview:"images/pressurecooker-small.jpg",image:"images/pressurecooker-large.jpg",className:"col-12",alt:"Pressure Cooker"})))),n.a.createElement("div",{className:"blog-card"},n.a.createElement(s.b,{to:"/toggle-x-workflow",className:"blog-link black-link"},n.a.createElement("div",null,n.a.createElement("h4",null,"Toggle x Workflow"),n.a.createElement(p,{preview:"images/togglexworkflow-small.png",image:"images/togglexworkflow-large.png",className:"col-12",alt:"Toggle x Workflow"})))),n.a.createElement("div",{className:"blog-card last"},n.a.createElement(s.b,{to:"/ets2",className:"blog-link black-link"},n.a.createElement("div",null,n.a.createElement("h4",null,"Euro Truck Simulator 2"),n.a.createElement(p,{preview:"images/ets2-small.png",image:"images/ets2-large.png",className:"col-12",alt:"Euro Truck Simulator 2"}))))))};var b=function(){return n.a.createElement("div",null,n.a.createElement(p,{preview:"images/pressurecooker-small.jpg",image:"images/pressurecooker-large.jpg",className:"col-12",alt:"Pressure Cooker"}),n.a.createElement("h2",{id:"pressurecooker"},"Pressure cooker"),"I am stressed. But not at all in a bad way. I have come to terms with it: I am going to fail. Well I already have failed. All I can do now is to act fast and do it well.",n.a.createElement("h3",{id:"timeforchange"},"Time for change"),"So I am pretty bad at uni. The lack of direction has really pulled my grade down for the past 2 years. With the start of this year, I have started volunteering at ",n.a.createElement("a",{href:"http://www.oaktree.org/"},"Oaktree"),', the largest Australian youth-run not-for-profit. What really wowed me was the energy people had there. People were just so friendly, bubbly and eager to help. This was a welcome change to my self cooped-up life. It made me really appreciate what I had and what difference I can make in this world. One thing that really drove this home was one day, out the the blue, the Campaigns team drove up to Batman and met up with other NGOs like World Vision and Oxfam to discuss our plans for the upcoming Batman bi-election. The idea that a young person, like me, who barely knew anything about Australian politics could help, with this team, affect the Victorian political landscape is astounding to me. This really gave me a boot in the ass to "git gud" as the gamers say.',n.a.createElement("h3",{id:"downwiththesickness"},"Down with the sickness"),"Also, I got sick. Small common cold. Which, ironically, made me more productive for the first two weeks of uni. I stayed home for two days, missing lectures, which made me feel sedentary. This slingshotted me to work furiously to catch up, carrying me over to the following week. What was really funny was that, because my sinuses were blocked, the shortness of breath very quickly caused me to be anxious, which made me more focused on ensuring that I worked my ass off.",n.a.createElement("h3",{id:"systemsrevamp"},"Systems Revamp"),"One thing I am working on for Oaktree is revamping the Campaigns team's communications channels. I introduced them to"," ",n.a.createElement("a",{href:"https://slack.com/"},"Slack")," and"," ",n.a.createElement("a",{href:"https://trello.com/"},"Trello"),'. This got me thinking about my own systems of "communication". First I fully adopted Trello as my task management system. I have a "General" board for "',n.a.createElement("em",null,"Getting things done"),'"-esk brain dump and one for uni work. My system is a To do, Doing, Done system that has the tasks move to the right as they are completed. This has been super helpful with keeping me on the ball with uni lectures and allowing me to introduce tasks that fill up smaller gaps of time that can help supplement my learning. For example, I really need to learn Python and revise C and Java. So I have just have to swipe over to Trello when I have some free time to go see what I have up next.',n.a.createElement("h3",{id:"outwiththeoldinwithnew"},"Out with the old, in with new"),"I know the key to my success is how to keep this behaviour sustainable. The first thing I turned to is the media I consume. I have unsubscribed from a lot of my Youtube channels for gaming, and found some crazy, driven, smart Youtubers. Some include"," ",n.a.createElement("a",{href:"https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw"},"TechLead")," ","and"," ",n.a.createElement("a",{href:"https://www.youtube.com/channel/UCV0qA-eDDICsRR9rPcnG7tw"},"Joma Tech"),". I also found"," ",n.a.createElement("a",{href:"https://www.youtube.com/user/masterlock77"},"Tim Ferriss"),", both his Youtube and his Podcast, which is great for keeping my head sharp and prepared for the crazy tech world.",n.a.createElement("h3",{id:"bsing"},"BSing"),"My CV sucks, there is nothing on my resum\xe9 for after highschool. So something I learnt from Joma Tech is that there are many things you can do to fill out the resume as long as you have done the work for it. One thing I am focusing on is participating in uni competitions and groups. Obviously they are great for learning, but it also gives a great shine to your resum\xe9. I've looked at the SWIFT Institute Student Challenge and Autonomous Robotics Research Program already. Also I'm booked in for a seminar on AECOM.",n.a.createElement("h3",{id:"thingstodo"},"Things to do"),"I need a haircut. It's probably the longest it's ever been. Also I'm still in the middle of reworking my evening and morning routines. I'm trying out meditation and regular exercise. Yeah... I'm bad about exercising. There's also plenty to revise from previous years, especially if I want to be able to use the knowledge quickly. Finally, I am going to start time tracking again. By the end of last year, I really fell off time tracking. I feel like now, with the direction my life is taking, it will be more helpful if it was even more specific, recording what I am doing per subject. Still not quite sure. Finally gotta figure out how to rest. Clouding my brain with really dense problem solving before sleep is horrible, and I need to find a rest day and make it effective.",n.a.createElement("p",null,"Wish me luck, Howard"))};var k=function(){return n.a.createElement("div",null,n.a.createElement(p,{preview:"images/togglexworkflow-small.png",image:"images/togglexworkflow-large.png",className:"col-12",alt:"Toggle x Workflow"}),n.a.createElement("h2",{id:"togglexworkflow"},"Toggle x Workflow"),n.a.createElement("p",null,"Today I have started time tracking with the use of Toggl, with assistance from the Apple app Workflow. I will track what I\u2019m doing throughout the waking day with simple taps on all my devices."),n.a.createElement("h3",{id:"history"},"History"),n.a.createElement("p",null,"The concept of time tracking was first introduced to me when by my Dad when I was young and foolish. He bought timers all around the house, for which he made us set periods of 15 minutes of work, then a 3 minute eye rest. This meant that we knew how long we took to do anything within 15min accuracy, which allowed us to plan things better. Of course, my brother and I would often mess with the system, especially when games were involved. I see now that this is a kid-version of the Pomodoro technique, which is supposed to be a 25 minute period with a 5 minute break, to combat children\u2019s short attention span and malleable eyes. Thanks Dad."),n.a.createElement("h3",{id:"inspiration"},"Inspiration"),n.a.createElement("p",null,"My main inspiration for this project is CGP Grey and his work on Cortex and Hello Internet. Grey has long been an advocate for time tracking in that it not only shows you how much your time is worth monetarily, but reveals how much time you are ",n.a.createElement("em",null,"really")," spending on anything, as you just can\u2019t trust your brain on these things. That\u2019s how I found Toggl."),n.a.createElement("p",null,"One of the links on Cortex is Federico Viticci\u2019s article Toggl integration with Workflow on MacStories. Oh man. This really tickled the engineering/programming part of my brain and got me pumped about time tracking. I had a little experience with Workflow already, but I hadn\u2019t realised the crazy potential this app had. I tapped on Vittici\u2019s workflow and my mind was blown. The widget allowed me to quickly start a timer and check and stop the current timer. So I promptly ~~stole~~ borrowed Viticci\u2019s Workflows and used it as my own."),n.a.createElement("h3",{id:"system"},"System"),n.a.createElement("p",null,"I know myself as a lazy potato that will end up cheating the system or missing out on a whole lot of tracked time, so I wanted a system that would be as simple as possible. Therefore I have split my life into 4 \u201cProjects\u201d to categorise my tasks by effort and intent"),n.a.createElement("h3",{id:"purposefulstudy"},"Purposeful study"),n.a.createElement("p",null,"First is the most important: Purposeful study. As I am a student, this includes any time I am sitting down and revising, doing assignments or practice questions. I\u2019ve even lumped lectures into it, to encourage me to pay attention more. These tasks are named by the subjects I am studying. I think this should take at least 60% of the waking day. Although if you want to ask my lizard brain how much time I spend, it would say around 80%."),n.a.createElement("h3",{id:"properprojects"},"Proper projects"),n.a.createElement("p",null,"Proper projects is anything that I want to work on that is intense work, but not University work. For example, this article. I name these with the name of the article or whatever that I\u2019m working on."),n.a.createElement("h3",{id:"intentionalentertainment"},"Intentional Entertainment"),n.a.createElement("p",null,"Intentional Entertainment is any time I purposely sit down and do something enjoyable and/or relaxing that has nothing to do with work. \u201cWork hard play hard\u201d is a cheesy phrase I find very important with any meta-work thinking. Everyone needs rest. Everyone has things they want to do out of work. It is our job to maximise the recharge value of this time so we can maximise our work value and efficiency. This is where the \u201cintentional\u201d part is so important. Currently I play EuroTruck Simulator 2 as it is very relaxing and it\u2019s a great tool for relaxing without having your life sucked up in gaming. As my Dad says, control your technology or watch it control you."),n.a.createElement("h3",{id:"passivework"},"Passive Work."),n.a.createElement("p",null,"This is the one that we want to minimise. This is anything other than the three above. This currently includes eating, lounging, surfing the internet (youtube/reddit). With the last two Projects I always name it as \u2018Miscellaneous\u2019 as there are too many things I could be doing in these categories and identifying these would take too much effort and make it a burden to track time."),n.a.createElement("h3",{id:"workflowintegration"},"Workflow integration"),n.a.createElement("p",null,"I wasn\u2019t at all convinced by the idea of time tracking at first. Agh, it\u2019s too much work. Agh, what\u2019s it going to help me anyway? Although these two questions are still in my mind, the Workflow aspect of this is what really pushed me into time tracking. There\u2019s just something really cool to see automation operating at a touch of the button. Initially, I was using Viticci\u2019s two Workflows which, a day later, I reduced to one button which made switching to a new timer so much easier. This removed redundant prompts like confirmations and asking for tags, allowing a smoother process."),n.a.createElement("h3",{id:"whatisawakingday"},"What is a \u201cWaking day\u201d"),n.a.createElement("p",null,"My resolution was to track the whole of my working day and give myself the least chance to fall off the wagon as possible. I set up 2 calendar notifications, one at 8:55 and the other at 9:00 to remind me to start \u201cMiscellaneous\u201d \u201cPassive Work\u201d, as I like to have my day to be based off a 9-5 workday, although I will keep working beyond that, I can relax a bit. I have 2 hours from my first alarm to wake up and get ready."),n.a.createElement("h3",{id:"goaldirection"},"Goal? Direction?"),n.a.createElement("p",null,"This project is purely to observe how much I work. If I did want to set a goal, for example, 60% of time must be spent on purposeful study, I believe that will induce my to want to cheat, thus ruining the whole system. However, as Grey points out in Cortex, the \u201cObserver Effect\u201d of simply looking at the time spent should help me be more productive."),n.a.createElement("h3",{id:"annoyances"},"Annoyances"),n.a.createElement("p",null,"\u2022 internet connection required with workflow \u2013 sometimes my internet is slow and patchy \u2022 Slow startup for check Workflow \u2013 I need to optimise"),n.a.createElement("p",null,"Need to change Workflow because I am tracking continuously"),n.a.createElement("h3",{id:"bibliography"},"Bibliography"),n.a.createElement("a",{href:"https://www.macstories.net/ios/workflow-update-brings-ability-to-interact-with-any-web-api/",target:"_blank"},"Viticci's Workflows"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.relay.fm/cortex/",target:"_blank"},"Cortex"))};var v=function(){return n.a.createElement("div",null,n.a.createElement(p,{preview:"images/ets2-small.png",image:"images/ets2-large.png",className:"col-12",alt:"Euro Truck Simulator 2"}),n.a.createElement("h2",{id:"ets2"},"Euro Truck Simulator 2"),"You drive a fake a truck, to earn fake money, to relax after doing real work. Makes sense?",n.a.createElement("h3",{id:"inspiration"},"Inspiration"),"I think I always knew about the existence of this game, but I never thought it was never any good or that I would ever buy it. This changed because of CGP Grey. For him, it was a way to relax after videos are released, and he has some livestreams of it under his belt too. I watched a couple of his livestream VODs and got sucked into it. I'm not actually sure why. It was a guy driving across pretend Europe in his pretend truck. But his relaxing stream really captured me and drew me into the Trucksim world.",n.a.createElement("h3",{id:"firstimpressions"},"First Impressions"),'The combination of the sightseeing, progression and general driving really appealed to me and drew me right into the game. Not going to lie, I had some late "just one more job" nights the first weekend. The effect of having generally samey sights makes special events even more surprising and memorable. I recall turning a curve, and the trees parted to reveal the Swiss Alps (I think). My jaw just dropped. It would not have been the same experience if I just saw a picture of it. There was something there that was extremely gratifying about discovering new places, similar to a road trip in real life. I love to have some audio on in the background as I drive. I prefer podcasts, but some good ol\' road trip music is great too.\xa0 After a little getting used to the controls, I could basically focus my thinking part of the brain purely on the podcast (mostly Cortex at this time) while driving almost autonomously.',n.a.createElement("h3",{id:"controls"},"Controls"),"There is some debate on which control method is best. I can't afford a steering wheel, so that's out of the question for me. And WASD is just too imprecise for this game. As I am playing on a laptop, my choices are the trackpad and the mouse. I have a Logitech M705 as my mouse of choice, which has 2 thumb buttons which I assigned to be accelerate and brake, and the scroll wheel is used for controlling the cruise control. This allows me to drive with one hand, which frees me physically and relaxes me mentally too. I definitely enjoy this method as it is similar to cruising along with an actual steering wheel. However this does have its downsides. Mainly it's the problem with the lack of stability. I like resting my wrist on the table and using that as a pivot. This is for stability during straightaways and small turns. I've turned the sensitivity as far down as I feel comfortable with for larger turns, yet the tiniest movement still turns way too much. This is important during highway driving which takes up most of the time in this game. Maybe it's just because my mouse control's not that great. I try to combat this by resting the outer side of my hand and pinky on the mousepad and using that as the pivot. But again, it\u2019s still finicky and not very fluid. So in the end I actually use the trackpad the most when driving. The trackpad solves the problem with regards to accuracy and stability because you rest your finger on the trackpad at (nearly) all times, meaning small movements with the finger is much easier and controllable than the mouse and it\u2019s much more comfortable to stay still this way. Gameplay wise, I enjoy the trackpad more. However, it does have its issues. One of them being the potential for repetitive strain injury, which I didn\u2019t feel on the mouse. I felt a bit of strain after playing a whole afternoon. I found that using the first finger to be worse than using the middle finger. Another much less significant problem is that you basically have to drive 2 handed, only 1 handed when you have cruise control set up already.",n.a.createElement("h3",{id:"review"},"Review"),"After around a month, I still find trucking just as enjoyable. It allows me to enjoy stimulating conversations from people around the internet while my mind rests and relaxes through enjoying the view and driving smoothly across Europe. I can talk about the attention to detail that you realise as you cross into different countries like license plate changes, different environment, weather systems, traffic lights. Or I can complain about some issues like some of the copy and paste landscape, sometimes scarily annoying AI, minor loading issues/glitches etc, but this is not what I want to talk about. So far, I have 42 hours on ETS, which is not a lot and I know that my perspective may change in a while, but I think there is little stopping ETS becoming my most played game on Steam. I currently enjoy the game a great deal and there is plenty of 'progression' left with buying garages, upgrades and other trucks and workers. This does not change what I'm doing, but gives me plenty of things to work towards. Not only that, there are a myriad of DLCs available I haven't bought, as well as American Truck Simulator. Another thing I enjoy is playing in Rambo style, where I drive as fast as I can. This ups the excitement and difficulty as you need to keep an eye out for cops and try to round corners as effectively as possible as not to flip. This changes the pace when I crave some excitement.",n.a.createElement("h3",{id:"whyiloveets2"},"Why I love ETS2"),"I have already talked about my enjoyment of the gameplay and environment. But I think the main downside of this game is also it's major strength. It's boring. This menial task allows my brain to rest from thinking about study. With other games I have played in the past, I would be completely consumed by it. For example, last year I played Civilisations V and the first semester of this year I played Counter Strike: Global Offensive. Both of these games are so much more entertaining than ETS2, but they have major detriment to my working life. There's a lot of time needed in game to spend in practice and out of the game, my brain is used in thinking about and remembering strategies. Totally engrossed, this affected all aspects of my life, including health. I would recommend myself play these high intensity, entertaining games in the holidays when there aren't anything better to do. What I find special and most crucial about this game, is that, it does not ",n.a.createElement("em",null,"keep")," me hooked. After a couple of missions, I feel that I come back to myself, feeling sated, allowing me to go back to work whatever I need to. It's like eating something unhealthy which portions itself for you, while providing all the enjoyment that you would want. Guilt free fun. As my Dad says, control your technology or watch it control you.",n.a.createElement("h3",{id:"recommendation"},"Recommendation"),"I recommend this game to anyone who grew up with games, meaning that gaming is their brain's reward system. For anyone who enjoys work simulators, driving games or light work simulators, it provides great satisfaction, without hooking you into its trap. I see this game as a tool to reward my brain and allow it to rest so it is charged to face challenges of the week ahead.",n.a.createElement("h3",{id:"bibliography"},"Bibliography"),n.a.createElement("a",{href:"https://www.relay.fm/cortex",target:"_blank"},"Cortex"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://m.youtube.com/channel/UCzSBv-iml0SCoAE-6v2ReWQ",target:"_blank"},"CGP Play"))};a(36);var I=function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"app-borders"},n.a.createElement(s.a,null,n.a.createElement(h,null),n.a.createElement(l.a,{exact:!0,path:"/",component:w}),n.a.createElement(l.a,{path:"/about",component:y}),n.a.createElement(l.a,{path:"/pressure-cooker",component:b}),n.a.createElement(l.a,{path:"/toggle-x-workflow",component:k}),n.a.createElement(l.a,{path:"/ets2",component:v}),n.a.createElement(l.a,{path:"/blogs",component:f}))))};a(37);r.a.render(n.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.540e2fcc.chunk.js.map