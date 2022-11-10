import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-lg bg-slate-700 rounded-lg shadow mx-auto p-11 my-10'>
            <div className='my-3'>
                <h2 className='font-semibold text-2xl'>1. Difference between SQL and NoSQL</h2>
                <br />
                <p className='font-medium'>SQL: <br /> Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.

                    SQL programming can be effectively used to insert, search, update, delete database records.

                    That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.

                    Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.</p> <br />
                <p className='font-medium'>NoSQl: <br />NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

                    NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.

                    Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data. </p>
            </div>
            <div className='my-3'>
                <h2 className='font-semibold text-2xl'>2. What is JWT, and how does it work?</h2>
                <br />
                <p className='font-medium'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>
            <div className='my-3'>
                <h2 className='font-semibold text-2xl'>3. What is the difference between javascript and NodeJS?</h2>
                <br />
                <p className='font-medium'>NodeJS: <br />NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p className='font-medium'>Javascript: <br />Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
            </div>
            <div className='my-3'>
                <h2 className='font-semibold text-2xl'>4. How does NodeJS handle multiple requests at the same time?</h2>
                <br />
                <p className='font-medium'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br />How NodeJS handle multiple client requests?

                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;