import React from 'react';

const Blog = () => {
    return (
        <div className='gap-4'>
            <div className='mt-4'>
                <h1 className='text-center text-3xl '>What is an access token and refresh token </h1>
                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-center text-3xl'>Compare SQL and NoSQL databases?</h1>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-center text-3xl'>What is express js</h1>
                <p>Express is a node js web application framework that provides broad features for building web and mobile applications</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-center text-3xl'>What is Nest JS  </h1>
                <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser</p>
            </div>
            <div className='mt-4'>
                <h1 className='text-center text-3xl'>What is MongoDB aggregate and how does it work </h1>
                <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>
            </div>
        </div>
    );
};

export default Blog;