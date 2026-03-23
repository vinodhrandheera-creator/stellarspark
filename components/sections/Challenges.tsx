
import React from 'react';
import { ChallengeItem } from '../../types';

const Challenges: React.FC = () => {
  const challenges: ChallengeItem[] = [
    { icon: 'engineering', title: 'Doing everything yourself', desc: 'You are the bottleneck. Manual processes mean you can\'t step away without things breaking.' },
    { icon: 'table_view', title: 'Infinite Spreadsheets', desc: 'Your critical business data is scattered across fragile Excel sheets and personal chat logs.' },
    { icon: 'lightbulb', title: 'Idea but no path', desc: 'You have a vision for a product that could change the market, but technical barriers hold you back.' }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      {/* Background decoration adjusted for light theme */}
      <div className="absolute inset-0 z-0 tech-mesh opacity-[0.03]"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-80 h-80 bg-primary/5 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Current Challenges
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Does any of this <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">feel familiar?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            Many businesses hit a growth ceiling because their tools can't keep up. We identify and remove technical bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Challenges list container */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
            {challenges.map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-gray-100 shadow-sm flex gap-6 items-start transition-all duration-300 hover:shadow-md hover:border-primary/20 group">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-icons-round text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image container */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] opacity-40"></div>
            <div className="relative max-w-lg mx-auto group">
              <div className="absolute -inset-2 bg-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="https://as2.ftcdn.net/v2/jpg/02/32/92/13/1000_F_232921317_EdN5vIiYlUrng1Ti99Ngyb472NR2q3Mv.jpg" 
                  alt="Challenges and roadblocks" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Feature highlight box */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
