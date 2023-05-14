import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-10 mb-20">
      <div className="p-3 border-2 rounded w-full h-[100%]">
        <h1 className="text-3xl py-3">When to use Context api?</h1>
        <p>
          The <strong>Context API</strong> is a powerful tool for managing state
          in Our React application and can help simplify our code and make it
          more maintainable.The Context API should not be overused, as it can
          make your code harder to understand and maintain. Only use Context
          when it's appropriate and necessary for your specific use case.
        </p>
      </div>
      <div className="p-3 border-2  rounded">
        <h1 className="text-3xl py-3">What is Custom Hooks?</h1>
        <p>
          <strong>Custom hooks</strong> in React are a way to reuse stateful
          logic across multiple components in your application. They allow you
          to extract common logic into a reusable function, which can be used
          across different components. Custom hooks are functions that start
          with the prefix use. They can call other hooks, such as useState,
          useEffect, useRef, etc., and can also have their own state and logic.
        </p>
      </div>
      <div className="p-3 border-2 rounded">
        <h1 className="text-3xl py-3">What is useRef?</h1>
        <p>
          <strong>useRef</strong> is a React Hook.This is a React Hook that
          allows you to create a mutable variable that persists across
          re-renders of a component. It is commonly used to access the DOM
          elements or to store any mutable value that needs to be accessed
          between renders without triggering a re-render.
        </p>
      </div>
      <div className="p-3 border-2 rounded">
        <h1 className="text-3xl py-3">What is useMemo?</h1>
        <p>
          <strong>useMemo</strong> is a React Hook.This is a React Hook that
          allows you to memoize the result of a function and only recompute it
          when the dependencies change. It is used to optimize performance by
          avoiding unnecessary re-computations of expensive operations.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
