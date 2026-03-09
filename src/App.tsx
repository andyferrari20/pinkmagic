import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Truck, 
  Sparkles, 
  Zap, 
  Heart, 
  Clock, 
  ChevronDown, 
  Star,
  Menu,
  X,
  Cherry,
  MessageCircle
} from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

// --- Configuration ---

// SUBSTITUA OS LINKS ABAIXO PELAS SUAS FOTOS REAIS
const IMAGES = {
  logo: "", // Coloque o link do logo aqui. Se vazio, usa o texto "VALOR NOBRE"
  productHero: "https://i.postimg.cc/C50Z92Lw/IMG_0776.jpg", // Foto principal do produto
  testimonial1: "https://i.postimg.cc/26ZvsvQP/edb3307a_26b2_4e5a_9c2d_b053c86bbadd.jpg", // Foto do depoimento (Antes/Depois)
  beforeAfter: [
    "https://i.postimg.cc/KcCYRjXS/Imagem-(1).jpg",
    "https://i.postimg.cc/pV3dprNt/Imagem_(2).jpg",
    "https://i.postimg.cc/HWFLVnGG/Imagem-(3).jpg"
  ],
  gallery: [
    "https://i.postimg.cc/B6HLY3sZ/IMG_0815.jpg",
    "https://i.postimg.cc/6qK7FP5Z/IMG-20250107-WA0004.jpg",
    "https://i.postimg.cc/BvyH7NKY/1b46d134_2f17_4c46_bb07_5577157abf2a.jpg",
    "https://i.postimg.cc/rpbxZgrQ/2efd1669_2d47_48e9_ae73_f696991f9d01.jpg",
    "https://i.postimg.cc/HntJmtVy/IMG_20250109_WA0005.jpg",
    "https://i.postimg.cc/j2hWThDY/IMG_20250131_WA0009.jpg",
    "https://i.postimg.cc/TwgL7xGG/IMG_2650.jpg",
    "https://i.postimg.cc/prB9vBp1/IMG_20250118_WA0003.jpg"
  ],
  kits: {
    one: "https://i.postimg.cc/SsC2T4qR/IMG_2651.jpg",
    three: "https://i.postimg.cc/6qK7FP52/IMG_4807.jpg",
    six: "https://i.postimg.cc/4y1KG1mb/IMG_20250113_WA0000.jpg"
  }
};

// --- Components ---

const FloatingFruits = () => {
  const fruits = useMemo(() => Array.from({ length: 12 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4, // 4s to 8s
    opacity: 0.2 + Math.random() * 0.3 // 0.2 to 0.5
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {fruits.map((fruit, i) => (
        <div
          key={i}
          className="absolute"
          style={{ 
            left: `${fruit.x}%`, 
            top: `${fruit.y}%`,
            opacity: fruit.opacity,
            animation: `float ${fruit.duration}s ease-in-out infinite`,
            animationDelay: `${fruit.delay}s`
          }}
        >
          <Cherry 
            size={fruit.size} 
            className="text-pink-500 fill-pink-200/30" 
          />
        </div>
      ))}
    </div>
  );
};

const Navbar = ({ onPurchaseClick }: { onPurchaseClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <div className="h-12 w-auto flex items-center justify-center">
               {IMAGES.logo ? (
                 <img src={IMAGES.logo} alt="Pink Magic Logo" className="h-12 w-auto object-contain" />
               ) : (
                 <div className="flex items-center gap-2">
                    <div className="bg-pink-100 p-2 rounded-full">
                        <Sparkles className="text-pink-600" size={24} />
                    </div>
                    <span className="text-2xl font-serif font-bold text-pink-600 tracking-widest">PINK MAGIC</span>
                 </div>
               )}
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <ScrollLink to="beneficios" smooth={true} className="text-gray-600 hover:text-pink-600 cursor-pointer transition font-medium">Benefícios</ScrollLink>
            <ScrollLink to="formula" smooth={true} className="text-gray-600 hover:text-pink-600 cursor-pointer transition font-medium">Fórmula</ScrollLink>
            <ScrollLink to="galeria" smooth={true} className="text-gray-600 hover:text-pink-600 cursor-pointer transition font-medium">Galeria</ScrollLink>
            <ScrollLink to="resultados" smooth={true} className="text-gray-600 hover:text-pink-600 cursor-pointer transition font-medium">Resultados</ScrollLink>
            <button 
                onClick={onPurchaseClick}
                className="bg-pink-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 cursor-pointer animate-pulse"
            >
              Pedir Agora
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-pink-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <ScrollLink onClick={() => setIsOpen(false)} to="beneficios" smooth={true} className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Benefícios</ScrollLink>
            <ScrollLink onClick={() => setIsOpen(false)} to="formula" smooth={true} className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Fórmula</ScrollLink>
            <ScrollLink onClick={() => setIsOpen(false)} to="galeria" smooth={true} className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Galeria</ScrollLink>
            <ScrollLink onClick={() => setIsOpen(false)} to="resultados" smooth={true} className="block px-3 py-3 text-gray-600 font-medium border-b border-gray-50">Resultados</ScrollLink>
            <button 
                onClick={() => { setIsOpen(false); onPurchaseClick(); }}
                className="block w-full text-left px-3 py-3 text-pink-600 font-bold"
            >
                Pedir Agora
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onPurchaseClick }: { onPurchaseClick: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <FloatingFruits />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 -ml-20 -mb-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm mb-6 border border-pink-200">
              <Sparkles size={16} className="mr-2" />
              O Segredo da Juventude e Leveza
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Desinche e Rejuvenesça: <span className="text-pink-600 italic">O Ritual de Beleza</span> que Você Merece.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Recupere sua autoestima e suas curvas. Sem dietas malucas e com risco zero: 
              <span className="font-bold text-gray-900"> peça agora e pague apenas na entrega.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onPurchaseClick}
                className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-500/30 hover:bg-pink-700 transition transform hover:-translate-y-1 flex items-center justify-center cursor-pointer animate-pulse"
              >
                <Truck className="mr-2" />
                Pedir agora e pagar na entrega
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center lg:justify-start">
              <ShieldCheck size={16} className="mr-1 text-green-500" />
              Compra 100% Segura • Pagamento na Entrega
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Product Image */}
            <div className="relative z-10 mx-auto w-full max-w-md">
                <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl shadow-2xl border-4 border-white flex items-center justify-center overflow-hidden">
                    <img 
                        src={IMAGES.productHero}
                        alt="Pink Magic Suplemento" 
                        className="object-cover w-full h-full opacity-90 hover:scale-105 transition duration-700"
                    />
                </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Você sente que seu corpo <span className="text-pink-600">mudou após os 30?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Não é culpa sua. Com o tempo, o metabolismo desacelera e a produção de colágeno cai drasticamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mb-4"><Zap size={24} /></div>,
              title: "Inchaço Constante",
              desc: "Aquela sensação de peso e roupas apertadas, mesmo sem comer muito."
            },
            {
              icon: <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4"><Clock size={24} /></div>,
              title: "Metabolismo Lento",
              desc: "A queima de gordura parece impossível e o cansaço bate forte no meio do dia."
            },
            {
              icon: <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-4"><Sparkles size={24} /></div>,
              title: "Pele e Unhas Fracas",
              desc: "Flacidez, celulite e unhas que quebram facilmente pela falta de colágeno."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = ({ onPurchaseClick }: { onPurchaseClick: () => void }) => {
  return (
    <section id="beneficios" className="py-20 bg-pink-900 text-white relative overflow-hidden">
      <FloatingFruits />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              O Ritual Pink Magic: <br/>
              <span className="text-pink-300">Beleza e Emagrecimento</span> em um só copo.
            </h2>
            <p className="text-pink-100 text-lg mb-8 leading-relaxed">
              Desenvolvemos uma fórmula exclusiva que ataca as duas maiores queixas da mulher moderna: a dificuldade de emagrecer e o envelhecimento precoce.
            </p>
            
            <ul className="space-y-4">
              {[
                "Queima de gordura abdominal (efeito termogênico)",
                "Redução drástica do inchaço e retenção",
                "Pele mais firme e com menos celulite",
                "Cabelos e unhas fortalecidos",
                "Energia renovada para o seu dia"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg">
                  <CheckCircle className="text-pink-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
                <button 
                    onClick={onPurchaseClick}
                    className="inline-block bg-white text-pink-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition shadow-lg cursor-pointer animate-pulse"
                >
                    Quero experimentar o Ritual
                </button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[9/16] max-w-[350px] mx-auto bg-black rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/W8UjOztnPSE" 
                    title="Ritual Pink Magic" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ingredients = () => {
  return (
    <section id="formula" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            A Ciência por trás da <span className="text-pink-600">Mágica</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uma combinação potente de ativos naturais selecionados para agir em sinergia no seu organismo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Laranja Moro (300mg)",
              desc: "O ativo queridinho para redução de medidas. Atua diretamente na gordura abdominal e controle de peso.",
              color: "bg-orange-50 border-orange-100 text-orange-700"
            },
            {
              name: "Colágeno Hidrolisado",
              desc: "Essencial para a firmeza da pele. Devolve a elasticidade e combate a flacidez de dentro para fora.",
              color: "bg-pink-50 border-pink-100 text-pink-700"
            },
            {
              name: "Coenzima Q10",
              desc: "Poderoso antioxidante que melhora a energia celular e protege contra o envelhecimento precoce.",
              color: "bg-yellow-50 border-yellow-100 text-yellow-700"
            },
            {
              name: "Vitamina C + Peptídeos",
              desc: "Potencializa a absorção do colágeno e fortalece o sistema imunológico.",
              color: "bg-green-50 border-green-100 text-green-700"
            }
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${item.color} transition hover:shadow-md`}>
              <h3 className="font-bold text-lg mb-3">{item.name}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 px-6 py-3 bg-gray-50 rounded-full border border-gray-200 mb-12">
                <span className="flex items-center text-sm font-medium text-gray-600"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>Zero Açúcar</span>
                <span className="flex items-center text-sm font-medium text-gray-600"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>Sem Cafeína</span>
                <span className="flex items-center text-sm font-medium text-gray-600"><div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>Sabor Premium</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://i.postimg.cc/RhQNQTm6/Materiais-de-Apoio.jpg" 
                alt="Materiais de Apoio Pink Magic" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Galeria <span className="text-pink-600">Pink Magic</span>
          </h2>
          <p className="text-gray-600">Veja mais detalhes do nosso produto e resultados.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.gallery.map((img, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
              <img 
                src={img} 
                alt={`Galeria ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Resultados Reais: <span className="text-pink-600">Antes e Depois</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja a transformação de mulheres que incluíram o Pink Magic em sua rotina diária.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {IMAGES.beforeAfter.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300"
            >
              <img 
                src={img} 
                alt={`Antes e Depois ${index + 1}`} 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-pink-50 text-center">
                <span className="text-pink-700 font-bold text-sm uppercase tracking-wider">Resultado Real</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Quem usa, <span className="text-pink-600">recomenda</span>
                    </h2>
                    <p className="text-gray-600">Junte-se a milhares de mulheres que transformaram sua autoestima.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2">
                            {/* Testimonial Image */}
                            <div className="aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden relative">
                                <img 
                                    src={IMAGES.testimonial1}
                                    alt="Resultado Antes e Depois" 
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <p className="text-white font-medium text-sm">Resultado após 30 dias de uso contínuo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="flex text-yellow-400 mb-2">
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                                <Star fill="currentColor" size={20} />
                            </div>
                            <blockquote className="text-xl text-gray-700 italic font-serif leading-relaxed">
                                "Eu trabalho com a internet já tem mais de 5 anos! E só vim conhecer o produto no final do ano passado. Quando comprei o produto comprei por indicação e amei o resultado. Estou tomando desde dezembro, e de lá pra cá não parei mais de tomar."
                            </blockquote>
                            <div>
                                <p className="font-bold text-gray-900">Emanuelly Grangeiro</p>
                                <p className="text-sm text-pink-600">Cliente Verificada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SecuritySection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                    <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Segurança Máxima: Risco Zero para Você</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Sabemos que comprar na internet pode gerar insegurança. Por isso, este site é operado pela <strong>Pague ao Chegar</strong>, garantindo que você só paga no momento da entrega.
                </p>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex items-center text-left">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <Truck className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Entrega Garantida</h4>
                            <p className="text-sm text-gray-600">Logística Pague ao Chegar.</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                    <div className="flex items-center text-left">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <CheckCircle className="text-green-600" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Produto Original</h4>
                            <p className="text-sm text-gray-600">Fórmula exclusiva e certificada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Pricing = ({ onPurchaseClick }: { onPurchaseClick: (link: string) => void }) => {
    return (
        <section id="ofertas" className="py-24 bg-white relative overflow-hidden">
            <FloatingFruits />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Escolha seu Tratamento
                    </h2>
                    <p className="text-gray-600">
                        Reserve agora e pague somente na entrega. Frete Grátis para todo o Brasil nos kits promocionais.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* Kit 1 */}
                    <div className="bg-pink-50 p-8 rounded-3xl border border-pink-200 hover:border-pink-400 transition duration-300 flex flex-col items-center text-center shadow-sm">
                        <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-white/50">
                            <img src={IMAGES.kits.one} alt="Kit 1 Pote" className="w-full h-full object-contain p-4" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Experimentação</h3>
                        <p className="text-gray-500 text-sm mb-6">Para quem quer conhecer</p>
                        <div className="text-4xl font-bold text-gray-900 mb-4">1 Pote</div>
                        <div className="w-full py-4 rounded-2xl mb-6">
                            <div className="text-green-600 font-bold text-2xl mb-1">R$ 139,90</div>
                            <div className="text-gray-600 text-sm">ou em até 12x no cartão</div>
                        </div>
                        <div className="text-pink-600 font-medium mb-8">Tratamento para 30 dias</div>
                        <button 
                            onClick={() => onPurchaseClick("https://app.coinzz.com.br/checkout/3-unidade-msnv4-0")}
                            className="w-full bg-white text-gray-900 border border-pink-200 font-bold py-4 rounded-xl hover:bg-pink-100 transition shadow-sm"
                        >
                            Reservar Kit 1
                        </button>
                    </div>

                    {/* Kit 3 - Best Seller */}
                    <div className="bg-pink-100 p-8 rounded-3xl border-2 border-pink-500 shadow-2xl relative transform scale-105 z-10 flex flex-col items-center text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            Mais Vendido
                        </div>
                        <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-white">
                            <img src={IMAGES.kits.three} alt="Kit 3 Potes" className="w-full h-full object-contain p-4" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tratamento Recomendado</h3>
                        <p className="text-gray-500 text-sm mb-6">Resultados visíveis e duradouros</p>
                        <div className="text-5xl font-bold text-gray-900 mb-4">3 Potes</div>
                        <div className="w-full py-6 rounded-2xl mb-6 bg-white/40 border border-pink-200">
                            <div className="text-green-600 font-bold mb-2">MAIS VENDIDO</div>
                            <div className="text-green-600 font-bold text-3xl mb-1">R$ 299,90</div>
                            <div className="text-gray-600 text-sm">ou em até 12x no cartão</div>
                        </div>
                        <div className="text-pink-600 font-medium mb-8">Tratamento para 90 dias</div>
                        <button 
                            onClick={() => onPurchaseClick("https://app.coinzz.com.br/checkout/3-unidade-msnv4-0")}
                            className="w-full bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 animate-pulse"
                        >
                            Quero reservar meu kit e pagar só na entrega
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-4">Frete Grátis incluso</p>
                    </div>

                    {/* Kit 6 */}
                    <div className="bg-pink-50 p-8 rounded-3xl border border-pink-200 hover:border-pink-400 transition duration-300 flex flex-col items-center text-center shadow-sm">
                        <div className="w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-white/50">
                            <img src={IMAGES.kits.six} alt="Kit 6 Potes" className="w-full h-full object-contain p-4" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Tratamento Completo</h3>
                        <p className="text-gray-500 text-sm mb-6">Máxima economia</p>
                        <div className="text-4xl font-bold text-gray-900 mb-4">6 Potes</div>
                        <div className="w-full py-4 rounded-2xl mb-6">
                            <div className="text-green-600 font-bold text-2xl mb-1">R$ 449,90</div>
                            <div className="text-gray-600 text-sm">ou em até 12x no cartão</div>
                        </div>
                        <div className="text-green-600 font-bold mb-8">MÁXIMA ECONOMIA</div>
                        <button 
                            onClick={() => onPurchaseClick("https://app.coinzz.com.br/checkout/6-unidade-srui9-0")}
                            className="w-full bg-white text-gray-900 border border-pink-200 font-bold py-4 rounded-xl hover:bg-pink-100 transition shadow-sm"
                        >
                            Reservar Kit 6
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Como faço o pagamento na entrega?",
            a: "É muito simples e seguro. Você faz o pedido aqui no site sem precisar colocar cartão de crédito. Quando o entregador chegar na sua casa com o produto, você realiza o pagamento (pode ser em dinheiro, pix ou cartão na maquininha dele)."
        },
        {
            q: "Tem contraindicação?",
            a: "O Pink Magic é formulado com ingredientes naturais. No entanto, gestantes, lactantes e crianças devem sempre consultar um médico antes de iniciar qualquer suplementação."
        },
        {
            q: "Quanto tempo para ver resultados?",
            a: "Muitas clientes relatam redução do inchaço já na primeira semana. Para resultados visíveis na pele e medidas, recomendamos o uso contínuo por pelo menos 3 meses (Kit 3 Potes)."
        },
        {
            q: "O site é seguro?",
            a: "Sim! Utilizamos tecnologia de criptografia de ponta. Além disso, como você só paga na entrega, o risco de golpe é ZERO."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                            >
                                <span className="font-bold text-gray-900">{faq.q}</span>
                                <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div 
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                                }`}
                            >
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Footer = ({ onPurchaseClick }: { onPurchaseClick: () => void }) => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-pink-900 p-2 rounded-full border border-pink-700">
                                <Sparkles className="text-pink-400" size={20} />
                            </div>
                            <span className="text-2xl font-serif font-bold text-white tracking-widest">PINK MAGIC</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Comprometidos em trazer o melhor da nutrição e beleza para você, com total segurança e transparência.
                        </p>
                        <div className="mt-6">
                            <img 
                                src="https://i.postimg.cc/X7zHdMjH/Pague-ao-chegar.jpg" 
                                alt="Pague ao Chegar" 
                                className="h-24 rounded-md opacity-80 hover:opacity-100 transition"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><ScrollLink to="beneficios" smooth={true} className="hover:text-pink-400 cursor-pointer">Benefícios</ScrollLink></li>
                            <li><ScrollLink to="formula" smooth={true} className="hover:text-pink-400 cursor-pointer">Fórmula</ScrollLink></li>
                            <li><button onClick={onPurchaseClick} className="hover:text-pink-400 cursor-pointer">Comprar</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Atendimento</h4>
                        <p className="text-gray-400">pinkmagic@pagueaochegar.com</p>
                        <p className="text-gray-400">Seg a Sab das 9hs às 18hs</p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Pink Magic. Todos os direitos reservados.</p>
                    <p className="mt-2 font-medium text-gray-400">Este site pertence e é operado por <strong>Pague ao Chegar</strong>.</p>
                    <p className="mt-2">Pink Magic é um suplemento alimentar. Os resultados podem variar de pessoa para pessoa.</p>
                </div>
            </div>
        </footer>
    )
}

const InfoModal = ({ isOpen, onClose, finalLink }: { isOpen: boolean; onClose: () => void; finalLink?: string }) => {
    const [step, setStep] = useState(1);

    if (!isOpen) return null;

    const steps = [
        {
            title: "✨ Fórmula & Ingredientes",
            content: (
                <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                        <h4 className="font-bold text-pink-700 mb-1 text-sm uppercase tracking-wider">Péptidos & Colágeno</h4>
                        <p className="text-xs text-gray-600">Firmeza, elasticidade da pele e fortalecimento de unhas e cabelos.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                        <h4 className="font-bold text-orange-700 mb-1 text-sm uppercase tracking-wider">Laranja Moro (300mg)</h4>
                        <p className="text-xs text-gray-600">Ação termogênica natural que auxilia na queima de gordura abdominal.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-700 mb-1 text-sm uppercase tracking-wider">Coenzima Q10 & Vitamina C</h4>
                        <p className="text-xs text-gray-600">Energia celular, ação antioxidante e estímulo natural de colágeno.</p>
                    </div>
                </div>
            )
        },
        {
            title: "✅ Resumo do Produto",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm">
                        O <strong>Pink Magic</strong> é um suplemento premium sabor frutas vermelhas desenvolvido para mulheres que buscam:
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                        {["Desinchar o corpo", "Ativar metabolismo", "Emagrecer com saúde", "Cuidar de cabelo, pele e unha"].map((item, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-gray-500 italic border-t pt-4">
                        Fórmula baseada em ativos modernos e cientificamente comprovados.
                    </p>
                </div>
            )
        },
        {
            title: "💖 Benefícios Prometidos",
            content: (
                <div className="space-y-4">
                    <div className="space-y-3">
                        {[
                            "Ação anti-inflamatória e antioxidante (adeus inchaço)",
                            "Aceleração do metabolismo para queima de gordura",
                            "Melhora visível na firmeza da pele e celulites",
                            "Aumento da energia e vitalidade celular"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="mt-1 bg-pink-100 p-1 rounded-full">
                                    <Heart size={14} className="text-pink-600" />
                                </div>
                                <p className="text-sm text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else {
            window.open(finalLink || "https://app.coinzz.com.br/checkout/3-unidade-msnv4-0", "_blank");
            onClose();
            setStep(1);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
            >
                <button 
                    onClick={() => { onClose(); setStep(1); }}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <div className="flex gap-2 mb-6">
                        {[1, 2, 3].map((s) => (
                            <div 
                                key={s} 
                                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${s <= step ? 'bg-pink-500' : 'bg-gray-100'}`}
                            />
                        ))}
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                        {steps[step - 1].title}
                    </h3>

                    <div className="min-h-[260px]">
                        {steps[step - 1].content}
                    </div>

                    <button 
                        onClick={handleNext}
                        className="w-full mt-8 bg-pink-600 text-white font-bold py-4 rounded-xl hover:bg-pink-700 transition shadow-lg shadow-pink-200 flex items-center justify-center gap-2"
                    >
                        {step === 3 ? "Finalizar Reserva" : "Próximo"}
                        <Zap size={18} />
                    </button>
                    
                    {step > 1 && (
                        <button 
                            onClick={() => setStep(step - 1)}
                            className="w-full mt-3 text-gray-400 text-sm font-medium hover:text-gray-600 transition"
                        >
                            Voltar
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const KitSelectionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    const kits = [
        {
            name: "1 Pote",
            price: "R$ 139,90",
            img: IMAGES.kits.one,
            link: "https://app.coinzz.com.br/checkout/3-unidade-msnv4-0"
        },
        {
            name: "3 Potes",
            price: "R$ 299,90",
            img: IMAGES.kits.three,
            link: "https://app.coinzz.com.br/checkout/3-unidade-msnv4-0",
            popular: true
        },
        {
            name: "6 Potes",
            price: "R$ 449,90",
            img: IMAGES.kits.six,
            link: "https://app.coinzz.com.br/checkout/6-unidade-srui9-0"
        }
    ];

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden relative"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition z-10"
                >
                    <X size={28} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Escolha seu Kit</h3>
                        <p className="text-gray-500">Selecione a melhor opção para o seu tratamento</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {kits.map((kit, i) => (
                            <div 
                                key={i} 
                                className={`relative flex flex-col items-center p-6 rounded-3xl border-2 transition-all duration-300 ${
                                    kit.popular ? 'border-pink-500 bg-pink-50/30 shadow-xl scale-105' : 'border-gray-100 bg-white hover:border-pink-200'
                                }`}
                            >
                                {kit.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Mais Vendido
                                    </div>
                                )}
                                <div className="w-24 h-24 mb-4">
                                    <img src={kit.img} alt={kit.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-1">{kit.name}</div>
                                <div className="text-green-600 font-bold text-xl mb-4">{kit.price}</div>
                                <a 
                                    href={kit.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 rounded-xl text-center font-bold text-sm transition ${
                                        kit.popular ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg shadow-pink-200' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                                >
                                    Selecionar
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                            <CheckCircle size={14} className="text-green-500" /> Pagamento 100% Seguro na Entrega
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.link/frzz4r" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-[60] flex flex-col items-center group"
    >
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-pulse hover:scale-110 transition-transform duration-300">
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </div>
      <span className="mt-2 bg-white px-3 py-1 rounded-lg shadow-md text-[10px] font-bold text-gray-700 uppercase tracking-tighter whitespace-nowrap border border-gray-100">
        fale com o consultor
      </span>
    </a>
  );
};

export default function App() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isKitModalOpen, setIsKitModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const openInfoWithLink = (link: string) => {
    setSelectedLink(link);
    setIsInfoModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar onPurchaseClick={() => setIsKitModalOpen(true)} />
      <Hero onPurchaseClick={() => setIsKitModalOpen(true)} />
      <PainPoints />
      <Solution onPurchaseClick={() => setIsKitModalOpen(true)} />
      <Ingredients />
      <Gallery />
      <BeforeAfter />
      <SecuritySection />
      <Testimonials />
      <Pricing onPurchaseClick={openInfoWithLink} />
      <FAQ />
      <Footer onPurchaseClick={() => setIsKitModalOpen(true)} />
      
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
        finalLink={selectedLink}
      />
      <KitSelectionModal isOpen={isKitModalOpen} onClose={() => setIsKitModalOpen(false)} />
      
      <WhatsAppButton />
      
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button 
          onClick={() => setIsKitModalOpen(true)}
          className="block w-full bg-green-600 text-white text-center font-bold py-3 rounded-xl shadow-lg animate-pulse"
        >
          Pedir agora e pagar na entrega
        </button>
      </div>
    </div>
  );
}
