const devPrompt = [
    {
      team: 'dev',
      level: 1,
      text: `Hi , you're answering a software developer.You're answer can have code, function names, and technical terms as well.
       consider the existing code and tables involved and point out good coding poractices Now answer the below query`,
    }
  ];
  
  const qaPrompt = [
    {
      type: 'text',
      label: 'How do you approach testing in a software project?',
      name: 'testingApproach',
    },
    {
      type: 'text',
      label: 'Share an experience where your testing skills made a significant impact.',
      name: 'testingExperience',
    }
  ];
  
  const csPrompt = [
    {
      type: 'text',
      label: 'Explain a complex computer science concept in simple terms.',
      name: 'csConcept',
    },
    {
      type: 'text',
      label: 'What programming languages are you proficient in?',
      name: 'programmingLanguages',
    }
  ];
  
  module.exports = {
    devPrompt,
    qaPrompt,
    csPrompt,
  };
  