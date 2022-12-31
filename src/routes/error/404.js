import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <section>
      <div className="container mx-auto p-4">
        Error404
        <Link to="/">Back to home</Link>
      </div>
    </section>
  );
};

export default Error404;
