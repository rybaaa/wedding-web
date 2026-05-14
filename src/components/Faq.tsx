import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What should I wear?',
    answer: 'The dress code is formal/cocktail attire. We recommend elegant dresses and suits.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Due to venue capacity, we can only accommodate guests listed on your invitation.',
  },
  {
    question: 'Will there be parking?',
    answer: 'Yes, complimentary parking is available at the venue for all guests.',
  },
  {
    question: 'Is the venue child-friendly?',
    answer: 'We love your little ones! Children are welcome to join the celebration.',
  },
  {
    question: 'When is the RSVP deadline?',
    answer: 'Please respond by July 22, 2026, so we can finalize our arrangements.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-custom-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-custom-text">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-[10px] shadow-md p-6">
              <h3 className="text-xl font-semibold text-custom-text mb-2">
                {item.question}
              </h3>
              <p className="text-custom-text">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;