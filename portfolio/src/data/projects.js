import fishFrenzy from '../assets/fish-frenzy.png'
import novaChat from '../assets/novachat.png'

//* Projects that I have completed, personal and uni
const projects = [
    {
        id: 1,
        title: 'Nova Chat',
        description: 'Simple to use chat bot with simulated AI',
        long_Description: `NovaChat is a simple-to-use chatbot with simulated AI, utilising mood detection, noun detection, preset phrase detection and profanity filtering. Built as a team in C# with Blazor Server, 
        the app uses an MVVM-style pattern with dependency injection and has unit tests written in xUnit and Moq.`,
        tech: ['Blazor Server', 'C#', 'HTML', 'CSS', 'MMVM'],
        role: ['Developer', 'Planner', 'Presenter', 'Tester'],
        repo: 'https://github.com/NReader14/NovaChat',
        image: novaChat
    },
    {
        id: 2,
        title: 'Fish Frenzy',
        description: 'Browser-based fish game where a shark hunts the user',
        long_Description: `Fish Frenzy is a browser-based game where you play a fish trying to survive a hunting shark. The shark uses session-based Q-learning, so it learns from each chase during that game.
        It's built with JavaScript, HTML and CSS, with a Firebase backend. I planned, directed and tested the game, utilising AI-assisted development with Claude.`,
        tech: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Q-learning', 'Claude AI'],
        role: ['Planner', 'Tester', 'Director'],
        repo: 'https://github.com/NReader14/FishFrenzy',
        image: fishFrenzy
    },
    {
        id: 3,
        title: 'Coming Soon',
        description: 'Short description three',
        long_Description: 'Longer description for project three.',
        tech: ['Tech A'],
        role: ['Role 1', 'Role 2', 'Role 3'],
        repo: 'https://github.com/...',
        image: fishFrenzy
    },
    {
        id: 4,
        title: 'Coming Soon',
        description: 'Short description four',
        long_Description: 'Longer description for project four.',
        tech: ['Tech B', 'Tech F'],
        role: ['Role 2'],
        repo: 'https://github.com/...',
        image: fishFrenzy
    },
]

export default projects