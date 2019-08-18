/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ProgressiveImage from "../ProgressiveImage";

function ToggleXWorkflow() {
  return (
    <div>
      <ProgressiveImage
        preview="./images/togglexworkflow-small.jpg"
        image="./images/togglexworkflow-large.png"
        className="col-12"
        alt="Toggle x Workflow"
      />
      <h2 id="togglexworkflow">Toggle x Workflow</h2>
      <p>
        Today I have started time tracking with the use of Toggl, with
        assistance from the Apple app Workflow. I will track what I’m doing
        throughout the waking day with simple taps on all my devices.
      </p>

      <h3 id="history">History</h3>

      <p>
        The concept of time tracking was first introduced to me when by my Dad
        when I was young and foolish. He bought timers all around the house, for
        which he made us set periods of 15 minutes of work, then a 3 minute eye
        rest. This meant that we knew how long we took to do anything within
        15min accuracy, which allowed us to plan things better. Of course, my
        brother and I would often mess with the system, especially when games
        were involved. I see now that this is a kid-version of the Pomodoro
        technique, which is supposed to be a 25 minute period with a 5 minute
        break, to combat children’s short attention span and malleable eyes.
        Thanks Dad.
      </p>

      <h3 id="inspiration">Inspiration</h3>

      <p>
        My main inspiration for this project is CGP Grey and his work on Cortex
        and Hello Internet. Grey has long been an advocate for time tracking in
        that it not only shows you how much your time is worth monetarily, but
        reveals how much time you are <em>really</em> spending on anything, as
        you just can’t trust your brain on these things. That’s how I found
        Toggl.
      </p>

      <p>
        One of the links on Cortex is Federico Viticci’s article Toggl
        integration with Workflow on MacStories. Oh man. This really tickled the
        engineering/programming part of my brain and got me pumped about time
        tracking. I had a little experience with Workflow already, but I hadn’t
        realised the crazy potential this app had. I tapped on Vittici’s
        workflow and my mind was blown. The widget allowed me to quickly start a
        timer and check and stop the current timer. So I promptly ~~stole~~
        borrowed Viticci’s Workflows and used it as my own.
      </p>

      <h3 id="system">System</h3>

      <p>
        I know myself as a lazy potato that will end up cheating the system or
        missing out on a whole lot of tracked time, so I wanted a system that
        would be as simple as possible. Therefore I have split my life into 4
        “Projects” to categorise my tasks by effort and intent
      </p>

      <h3 id="purposefulstudy">Purposeful study</h3>

      <p>
        First is the most important: Purposeful study. As I am a student, this
        includes any time I am sitting down and revising, doing assignments or
        practice questions. I’ve even lumped lectures into it, to encourage me
        to pay attention more. These tasks are named by the subjects I am
        studying. I think this should take at least 60% of the waking day.
        Although if you want to ask my lizard brain how much time I spend, it
        would say around 80%.
      </p>

      <h3 id="properprojects">Proper projects</h3>

      <p>
        Proper projects is anything that I want to work on that is intense work,
        but not University work. For example, this article. I name these with
        the name of the article or whatever that I’m working on.
      </p>

      <h3 id="intentionalentertainment">Intentional Entertainment</h3>

      <p>
        Intentional Entertainment is any time I purposely sit down and do
        something enjoyable and/or relaxing that has nothing to do with work.
        “Work hard play hard” is a cheesy phrase I find very important with any
        meta-work thinking. Everyone needs rest. Everyone has things they want
        to do out of work. It is our job to maximise the recharge value of this
        time so we can maximise our work value and efficiency. This is where the
        “intentional” part is so important. Currently I play EuroTruck Simulator
        2 as it is very relaxing and it’s a great tool for relaxing without
        having your life sucked up in gaming. As my Dad says, control your
        technology or watch it control you.
      </p>

      <h3 id="passivework">Passive Work.</h3>

      <p>
        This is the one that we want to minimise. This is anything other than
        the three above. This currently includes eating, lounging, surfing the
        internet (youtube/reddit). With the last two Projects I always name it
        as ‘Miscellaneous’ as there are too many things I could be doing in
        these categories and identifying these would take too much effort and
        make it a burden to track time.
      </p>

      <h3 id="workflowintegration">Workflow integration</h3>

      <p>
        I wasn’t at all convinced by the idea of time tracking at first. Agh,
        it’s too much work. Agh, what’s it going to help me anyway? Although
        these two questions are still in my mind, the Workflow aspect of this is
        what really pushed me into time tracking. There’s just something really
        cool to see automation operating at a touch of the button. Initially, I
        was using Viticci’s two Workflows which, a day later, I reduced to one
        button which made switching to a new timer so much easier. This removed
        redundant prompts like confirmations and asking for tags, allowing a
        smoother process.
      </p>

      <h3 id="whatisawakingday">What is a “Waking day”</h3>

      <p>
        My resolution was to track the whole of my working day and give myself
        the least chance to fall off the wagon as possible. I set up 2 calendar
        notifications, one at 8:55 and the other at 9:00 to remind me to start
        “Miscellaneous” “Passive Work”, as I like to have my day to be based off
        a 9-5 workday, although I will keep working beyond that, I can relax a
        bit. I have 2 hours from my first alarm to wake up and get ready.
      </p>

      <h3 id="goaldirection">Goal? Direction?</h3>

      <p>
        This project is purely to observe how much I work. If I did want to set
        a goal, for example, 60% of time must be spent on purposeful study, I
        believe that will induce my to want to cheat, thus ruining the whole
        system. However, as Grey points out in Cortex, the “Observer Effect” of
        simply looking at the time spent should help me be more productive.
      </p>

      <h3 id="annoyances">Annoyances</h3>

      <p>
        • internet connection required with workflow – sometimes my internet is
        slow and patchy • Slow startup for check Workflow – I need to optimise
      </p>

      <p>Need to change Workflow because I am tracking continuously</p>

      <h3 id="bibliography">Bibliography</h3>
      <a
        href="https://www.macstories.net/ios/workflow-update-brings-ability-to-interact-with-any-web-api/"
        target="_blank"
      >
        Viticci's Workflows
      </a>
      <br />
      <a href="https://www.relay.fm/cortex/" target="_blank">
        Cortex
      </a>
    </div>
  );
}

export default ToggleXWorkflow;
