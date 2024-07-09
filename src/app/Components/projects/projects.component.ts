import { Component ,Input} from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  projects = [
    {
      title: 'Chat Application',
      technologies: 'Java, WebSocket',
      description: 'A real-time chat application built using Java and WebSocket.',
      image: 'https://via.placeholder.com/150//FFFFFF?text=Chat+App',
      liveDemo: 'https://example.com/chat-app',
      sourceCode: 'https://github.com/yourusername/chat-app'
    },
    {
      title: 'Consultancy Management System',
      technologies: 'Angular, Java',
      description: 'A comprehensive consultancy management system developed using Angular and Java.',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Consultancy+System',
      liveDemo: 'https://example.com/consultancy-system',
      sourceCode: 'https://github.com/yourusername/consultancy-system'
    },
    {
      title: 'Online Store',
      technologies: 'React, Node.js',
      description: 'An online store application built with React and Node.js.',
      image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Online+Store',
      liveDemo: 'https://example.com/online-store',
      sourceCode: 'https://github.com/yourusername/online-store'
    },
    {
      title: 'Task Manager',
      technologies: 'Vue.js, Firebase',
      description: 'A task management tool built with Vue.js and Firebase.',
      image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Task+Manager',
      liveDemo: 'https://example.com/task-manager',
      sourceCode: 'https://github.com/yourusername/task-manager'
    },
    {
      title: 'Portfolio Website',
      technologies: 'HTML, CSS, JavaScript',
      description: 'A personal portfolio website to showcase my projects.',
      image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Portfolio+Website',
      liveDemo: 'https://example.com/portfolio-website',
      sourceCode: 'https://github.com/yourusername/portfolio-website'
    },
    {
      title: 'Weather App',
      technologies: 'Python, Flask',
      description: 'A weather forecasting application built with Python and Flask.',
      image: 'https://via.placeholder.com/150/87CEEB/FFFFFF?text=Weather+App',
      liveDemo: 'https://example.com/weather-app',
      sourceCode: 'https://github.com/yourusername/weather-app'
    },
    {
      title: 'Blog Platform',
      technologies: 'Django, PostgreSQL',
      description: 'A blogging platform developed using Django and PostgreSQL.',
      image: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Blog+Platform',
      liveDemo: 'https://example.com/blog-platform',
      sourceCode: 'https://github.com/yourusername/blog-platform'
    },
    {
      title: 'Fitness Tracker',
      technologies: 'Kotlin, Firebase',
      description: 'A fitness tracking application built with Kotlin and Firebase.',
      image: 'https://via.placeholder.com/150/FF69B4/FFFFFF?text=Fitness+Tracker',
      liveDemo: 'https://example.com/fitness-tracker',
      sourceCode: 'https://github.com/yourusername/fitness-tracker'
    },
    {
      title: 'Recipe App',
      technologies: 'Swift, Core Data',
      description: 'A recipe management application built with Swift and Core Data.',
      image: 'https://via.placeholder.com/150/9370DB/FFFFFF?text=Recipe+App',
      liveDemo: 'https://example.com/recipe-app',
      sourceCode: 'https://github.com/yourusername/recipe-app'
    },
    {
      title: 'Expense Tracker',
      technologies: 'Flutter, SQLite',
      description: 'An expense tracking application developed using Flutter and SQLite.',
      image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Expense+Tracker',
      liveDemo: 'https://example.com/expense-tracker',
      sourceCode: 'https://github.com/yourusername/expense-tracker'
    }
  ];
   

}
