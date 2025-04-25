
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, Smartphone, Scissors, Calendar } from 'lucide-react';

export function Hero() {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
  const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scissors className="w-6 h-6 text-[#2A98D2]" />
            <span className="text-sm md:text-base font-medium uppercase tracking-wider text-[#2A98D2]">
              Exclusivo para barbearias
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-6">
            Controle total da sua agenda, sem complicação
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Feito para quem vive da barbearia. Configure horários, folgas e intervalos do seu jeito, sem afetar os agendamentos existentes.
          </p>
          
          <div className="flex flex-col gap-4 items-center">
            <Button 
              onClick={() => setShowDownloadOptions(!showDownloadOptions)} 
              className="bg-[#2A98D2] hover:bg-[#2A98D2]/80 text-white px-8 py-6 text-lg rounded-xl flex items-center gap-2"
            >
              Começar agora
              {showDownloadOptions ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
            </Button>
            
            {showDownloadOptions && (
              <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <a
                  href={GOOGLE_PLAY_URL}
                  className="w-full sm:w-auto inline-flex justify-center"
                  aria-label="Baixar para Android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/lovable-uploads/google-play.png" 
                    alt="Disponível no Google Play" 
                    className="h-14 w-auto max-w-[200px]" 
                  />
                </a>
                <a
                  href={APP_STORE_URL}
                  className="w-full sm:w-auto inline-flex justify-center"
                  aria-label="Baixar para iOS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/lovable-uploads/ios.png" 
                    alt="Disponível na App Store" 
                    className="h-16 w-auto max-w-[200px]" 
                  />
                </a>
              </div>
            )}
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#34C759]" />
              <span className="text-sm">Agenda personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#34C759]" />
              <span className="text-sm">Link de agendamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
