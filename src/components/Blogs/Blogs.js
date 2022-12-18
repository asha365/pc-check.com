import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='question'>
                <h3>What is Context Api?What is Purpose of Context Api.</h3>
                <p>The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
            </div>
            <div className='question'>
                <h3>What is Semantic Tag?</h3>
                <p>Semantic HTML tags are tags that define the meaning of the content they contain. For example, tags like header, article, and footer are semantic HTML tags. They clearly indicate the role of the content they contain. On the other hand, tags like div and span are typical examples of non-semantic HTML elements.</p>
            </div>
            <div className='question'>
                <h3>Difference between inline blocks and inline blocks elements.</h3>
                <p>The inline and block elements of HTML are one of the important areas where web developers often get confused because they were unable to know which are inline and block elements which may cause clumsiness in a webpage in case he assumes some element to be a block but it is an inline element which causes next element comes next to it.

                So let us see the differences between the inline and block elements in HTML and the different frequently used inline and block HTML elements. 

                Block elements: They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it.</p>
            </div>
            
        </div>
    );
};

export default Blogs;