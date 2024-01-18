import Image from 'next/image';
import Link from 'next/link';

import Heart from '../../assets/img/heart.png';
import GalhoDeFlores from '../../assets/img/galho-de-flor.png';
import BordaDourada from '../../assets/img/borda-dourada.png';
import BordaTop from '../../assets/img/border-data-top.png';
import BordaBottom from '../../assets/img/border-data-bottom.png';
import Foto3 from '../../assets/img/foto-3.svg';
import Botao1 from '../../assets/img/localizacao.png';
import Botao2 from '../../assets/img/lista.png';
import Botao3 from '../../assets/img/presentes.png';

import style from './styles/main.module.scss';

export const MainSection = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h1>Amanda</h1>
        <Image src={Heart} alt="e" />
        <h2>Rodrigo</h2>
      </div>
      <div className={style.parteDois}></div>
      <div className={style.parteTres}>
        <Image src={GalhoDeFlores} alt="" />
        <div>
          <p>
            “Deus mudou o teu caminho até juntares com o meu e guardou a tua
            vida separando-a para mim. Para onde fores, irei. Onde tu
            repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu
            será.”
          </p>
          <p>– Rute 1:16-17</p>
          <Image src={BordaDourada} alt="" />
        </div>
      </div>
      <div className={style.parteQuatro}></div>
      <div className={style.parteCinco}>
        <p>
          É com muita alegria que convidamos você para a celebação do nosso
          casamento
        </p>
        <Image src={BordaTop} alt="" />
        <h3>21 de Setembro de 2024</h3>
        <Image src={BordaBottom} alt="" />
        <Image src={Foto3} alt="" className={style.parteCincoFoto} />
      </div>
      <div className={style.parteSeis}>
        <div>
          <button>
            <Link href="./">
              <Image src={Botao1} alt="" />
            </Link>
          </button>
          <button>
            <Link href="./">
              <Image src={Botao2} alt="" />
            </Link>
          </button>
          <button>
            <Link href="./">
              <Image src={Botao3} alt="" />
            </Link>
          </button>
        </div>
        <p>Clique nos botões acima para mais informações</p>
      </div>
    </section>
  );
};
