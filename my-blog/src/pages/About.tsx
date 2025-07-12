const About = () => {
    return (
      <div className="px-8 sm:px-8 md:px-16 lg:px-32 py-10 max-w-3xl mx-auto text-justify">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About This Blog
        </h1>
        
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          This blog application is built using <strong>React</strong> and the <strong>Context API</strong> for global state management. It demonstrates how to structure a modern React app with multiple pages using React Router, and manage shared data like blog posts and user info efficiently across components.
        </p>
  
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          The project is styled using <strong>Tailwind CSS</strong> to provide a clean, responsive design that works across all devices. It’s a beginner-friendly example of how to use functional components, custom hooks, and built-in tools like the Context API to create scalable and maintainable UI applications.
        </p>
  
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          This blog can be extended with features like post creation, editing, deleting, user authentication, and even a backend connection using APIs or databases. It's a great starting point for learning React in a real-world context.
        </p>
      </div>
    );
  };
  
  export default About;
  