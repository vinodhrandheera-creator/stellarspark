
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 transition-all duration-300 h-full flex flex-col">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 border border-primary/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
        <span className="material-icons-round text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">{description}</p>
      <ul className="space-y-2 mt-auto">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="material-icons-round text-primary text-[16px]">check_circle</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
