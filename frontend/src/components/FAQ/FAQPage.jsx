import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I book a ticket?',
      answer:
        "To book a ticket, navigate to the 'Events' or 'Movies' section, select the event or movie you want to attend, choose your seats, and proceed to payment.",
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer:
        "Yes, you can cancel or modify your booking up to 24 hours before the event or movie starts. Go to your 'Profile' section and manage your bookings.",
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept all major credit cards, debit cards, and payment through digital wallets like PayPal and Apple Pay.',
    },
    {
      question: 'Will I receive a confirmation email after booking?',
      answer:
        'Yes, you will receive a confirmation email with all the details of your booking immediately after completing the payment.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        "You can contact our customer support via the 'Contact Us' page, where you can find options to call, fill out a form, or chat live with our team.",
    },
    {
      question: 'Is there a discount for group bookings?',
      answer:
        'Yes, we offer discounts for group bookings of 10 or more tickets. Please contact our support team for more details.',
    },
    {
      question: 'What is the refund policy?',
      answer:
        'Refunds are available for cancellations made at least 24 hours before the event or movie starts. The refund will be processed within 7-10 business days.',
    },
    {
      question: 'Can I book tickets for multiple events in one transaction?',
      answer:
        'Yes, you can add multiple events or movies to your cart and proceed to checkout in one transaction.',
    },
    {
      question: 'What should I do if I forgot my booking reference number?',
      answer:
        'If you forgot your booking reference number, please check your confirmation email or contact our customer support for assistance. They will be able to help you retrieve your booking information.',
    },
    {
      question: 'Can I transfer my ticket to someone else?',
      answer:
        'Tickets are generally non-transferable. However, if you need to transfer your ticket, please contact our customer support team as soon as possible to see if they can assist you.',
    },
    {
      question: 'What if I arrive late to the event or movie?',
      answer:
        "If you arrive late, we will do our best to accommodate you. However, entry might be restricted depending on the event or movie's policies. Please arrive on time to ensure you don't miss out.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
