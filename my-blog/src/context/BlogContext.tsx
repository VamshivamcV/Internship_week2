import { createContext, useState, useContext, ReactNode } from "react";

export interface BlogPost {
    id: number;
    title: string;
    content: string;
}

export interface BlogContextType {
    posts: BlogPost[];
    currentUser: string;
    addPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({children}: {children: ReactNode}) => {
    const [posts, setPosts] = useState<BlogPost[]>([
        { id: 1, title: 'react Basics', content: 'React is a popular JavaScript library developed by Meta for building fast and interactive user interfaces, especially for single-page applications. It uses a component-based architecture, allowing developers to break UIs into reusable pieces. React’s declarative syntax makes it easy to describe what the UI should look like, and its virtual DOM optimizes updates for better performance. JSX, a syntax extension that looks like HTML, is used to define UI structures, while props and state allow components to handle dynamic data and interactivity. Hooks like `useState` and `useEffect` enable functional components to manage state and lifecycle events without needing class components. React’s ecosystem includes tools like React Router for navigation and Context API or Redux for state management, making it a powerful choice for building modern web applications.'},
        { id: 2, title: 'Using Context API', content: 'The Context API in React is a built-in state management feature that allows you to share data across components without having to pass props manually at every level. It is especially useful for managing global state, such as user authentication, theme settings, or language preferences. The Context API consists of `createContext` to create a context object, a `Provider` component to supply the context value, and the `useContext` hook to consume that value in any child component. By wrapping your component tree in a context provider, you make data accessible to all nested components, eliminating prop drilling and making your code cleaner and more maintainable. While it’s ideal for simpler apps or specific global states, for more complex state logic or performance-sensitive applications, external libraries like Redux or Zustand may offer more advanced capabilities.'},
    ]);

    const [ currentUser ] = useState('john Smith');

    const addPost = (post: BlogPost) => {
        setPosts((prev) => [...prev, post]);
    };

    return (
        <BlogContext.Provider value={{posts, currentUser, addPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context){
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};