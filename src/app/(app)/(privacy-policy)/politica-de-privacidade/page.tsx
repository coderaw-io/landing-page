import lgpdImg from "@/app/assets/images/lgpd.png";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <div className="relative">
        <div data-aos="fade-right" className="flex justify-center items-center size-full">
          <Image
            src={lgpdImg}
            width={1200}
            height={675}
            className="object cover w-[90%] rounded-[0.3rem]"
            alt="LGPD Imagem"
          />
        </div>

        <div data-aos="fade-left" className="max-w-3xl mx-auto w-full flex flex-col space-y-8 px-6 pt-12 sm:px-0 sm:pt-16">
          <h1 className="text-3xl text-left md:text-5xl font-bold">
            Política de privacidade
          </h1>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            A sua privacidade é importante para nós. É a política da Coderaw.io de respeitar a sua
            privacidade em relação a qualquer informação ou dados seu que possamos coletar no site
            da Coderaw.io e outros sistemas que possuímos e operamos.
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer
            um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
            Também informamos por que estamos coletando e como será usado.
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
            Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas
            e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de
            privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário
            e informações pessoais, entre em contacto connosco.
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
            possamos fornecer alguns dos serviços desejados.
          </p>
        </div>

        <div data-aos="fade-right" className="max-w-3xl mx-auto w-full flex flex-col space-y-8 px-6 pt-12 sm:px-0 sm:pt-16">
          <h1 className="text-3xl text-left md:text-5xl font-bold">
            Compromisso do Usuário
          </h1>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Coderaw.io
            oferece no site e com caráter enunciativo, mas não limitativo:
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            (1) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            (2) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, onde dá a Bola ou azar,
            qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </p>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            (3) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Coderaw.io, ou de seus
            fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas
            de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
          </p>
        </div>

        <div data-aos="fade-left" className="max-w-3xl mx-auto w-full flex flex-col space-y-8 px-6 pt-12 sm:px-0 sm:pt-16">
          <h1 className="text-3xl text-left md:text-5xl font-bold">
            Mais informações
          </h1>

          <p className="text-base text-left text-muted-foreground sm:text-lg">
            Informações sobre como optar por não receber publicidade com base em interesses. Além de qualquer recurso 
            fornecido por qualquer um dos serviços listados neste documento, os usuários podem aprender mais sobre como optar 
            por não receber publicidade com base em interesses na seção dedicada da Política de cookies e privacidade.
          </p>
        </div>
      </div>
    </div>
  )
}