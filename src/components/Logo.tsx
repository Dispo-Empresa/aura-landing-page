
import Image from '@/components/ui/image';  // Assuming we'll use a custom image component

export function Logo() {
  return (
    <div className="text-[#2A98D2] font-outfit font-bold text-2xl flex items-center">
      <img 
        src="/lovable-uploads/09930b0b-1b4e-4143-8eb9-75cf4bbe3e10.png" 
        alt="Aura Logo" 
        className="h-10 mr-2" 
      />
      Aura
    </div>
  );
}
