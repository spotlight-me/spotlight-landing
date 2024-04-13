import React, { useState } from 'react';
import faqs from './faq-questions-answers'
import './Dropdown.css';

const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState(null);  // Tracks the active FAQ item

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);  // Toggle visibility
  };

  return (
    <div className="faq-container">
        <h1 className='inter-font faq-page-title'>FAQs</h1>
        {faqs.map((faq, index) => (
            <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
                <h2 className="faq-question">
                    {faq.question}
                </h2>
                <p className={`faq-answer ${activeIndex === index ? 'open' : ''}`} >
                    {faq.answer}
                </p>
            </div>
        ))}
    </div>
  );
};

export default Dropdown;
