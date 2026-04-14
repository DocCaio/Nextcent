import code from '../../assets/KnowHow/code.png';

const KnowHow = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-7xl mx-auto">
            {/* Coluna da Imagem */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    src={code} 
                    alt="Code Illustration" 
                    className="w-full max-w-md h-auto object-contain"
                />
            </div>

            {/* Coluna do Conteúdo */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight">
                    How to design your site footer like we did
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                    molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at 
                    libero ultrices mollis. In hac habitasse platea dictumst.
                </p>

                <a 
                    href="#" 
                    className="inline-block bg-[#43A046] text-white px-8 py-3 rounded-md font-medium hover:bg-[#388E3C] transition-colors"
                >
                    Learn More
                </a>
            </div>
        </section>
    )
}

export default KnowHow;