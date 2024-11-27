import DotPattern from "@/components/magic-ui/dot-pattern";
import GridPattern from "@/components/magic-ui/grid-pattern";

import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <div className="w-full py-6">
      <div data-aos="fade-left" className="relative pb-12 lg:pb-20 xl:pb-24">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="w-full flex justify-between items-center">
          <div className="relative z-10 flex flex-col space-y-8 px-6 sm:px-0">
            <h1 className="text-3xl md:text-6xl font-bold">
              Serviços prestados
            </h1>

            <p className="max-w-2xl w-full text-base text-muted-foreground sm:text-lg">
              Na coderaw, oferecemos um portfólio completo de serviços para atender às necessidades
              de quem busca soluções tecnológicas personalizadas e eficientes. Nosso compromisso é
              entregar mais do que software: criamos ferramentas de transformação para os nossos clientes.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <svg
              width={300}
              height={300}
              viewBox="0 0 94 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="1px"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden lg:flex"
            >
              <path
                d="M31.1504 78.1465L31.2805 78.3765L31.4104 78.2965L31.1504 78.1465Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M71.0205 86.3864V111.206L63.9805 99.0764V82.3264L68.1204 84.7164L71.0205 86.3864Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M63.98 59.7363V60.9363L61.6699 62.0963L50.7898 67.5263L46.8398 69.5063L50.6699 67.3263L61.22 61.3163L63.98 59.7363Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M71.02 50.0764V78.3165L63.98 74.2565V59.7365L61.22 61.3165L50.6699 67.3264L46.8398 69.5065L41.9199 61.0164L51.28 55.6765L56.2898 52.8165L59.0598 51.2365L53.52 48.0365L46.3999 43.9265V35.8564L46.48 35.9064L46.8599 36.1264L67.3198 47.9364L71.02 50.0764Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M39.3701 31.7964V39.8664L34.7502 37.2064L27.7202 33.1464L24.7703 31.4464L17.7402 19.3164L27.7202 25.0764L34.7502 29.1264L36.4702 30.1264L39.3701 31.7964Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M52.24 90.3264L45.2 78.1964L34.75 60.1664L27.72 48.0364L7.01001 12.3164L2 15.1664L7.71997 25.0264V86.1664L60.99 116.926L66.71 126.776L71.72 123.926L52.24 90.3264ZM14.75 82.1564V37.1564L27.72 59.5364L31.8899 66.7264L27.72 69.1064L26.3599 69.8864L27.72 72.2364L29.26 74.8964L31.1499 78.1464L31.4099 78.2964L36.8198 75.2164L42.22 84.5364L53.96 104.796L14.75 82.1564Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M71.0195 78.2264V78.3164L71.0593 78.2964L71.0195 78.2264ZM46.4395 35.8364L46.3994 35.8564L46.4795 35.9064L46.4395 35.8364Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.72 113.926L86.71 116.776L66.71 126.776L71.72 123.926L86.5498 116.506L91.72 113.926Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.7197 113.926L86.5496 116.506L71.7197 123.926L52.2397 90.3264L45.1997 78.1964L34.7498 60.1664L27.7197 48.0364L7.00977 12.3164L27.0098 2.31641L32.5696 11.9064L27.4097 14.4864L17.7397 19.3164L24.7698 31.4464L27.7197 33.1464L34.7498 37.2064L39.3696 39.8664L41.4998 38.8064L46.3997 36.3564V43.9264L53.5198 48.0364L56.2896 52.8164L51.2798 55.6764L41.9197 61.0164L46.8396 69.5064L50.7896 67.5264L61.6697 62.0964L63.9797 66.0764V74.2564L71.0198 78.3164L71.0596 78.2964L71.2798 78.6764L66.1196 81.2564L63.9797 82.3264V99.0764L71.0198 111.206L80.3396 106.546L85.8496 103.796L91.7197 113.926Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.0195 76.3865V101.206L85.8494 103.796L80.3394 106.546L71.0195 111.206V86.3865L74.6895 84.5565L83.9795 79.9065L91.0195 76.3865Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M59.3701 21.7964L51.8701 25.5464L43.04 29.9664L39.3701 31.7964L36.4702 30.1264L34.7502 29.1264L27.7202 25.0764L17.7402 19.3164L27.4102 14.4864L32.5701 11.9064L37.7402 9.31641L59.3701 21.7964Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M53.96 104.796L14.75 82.1565L27.72 75.6765L29.26 74.8965L31.1499 78.1465L31.28 78.3765L31.4099 78.2965L36.8198 75.2165L42.22 84.5365L53.96 104.796Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M59.3701 21.7964V29.3764L58.9102 29.5964L46.4402 35.8364L46.4001 35.8564V36.3564L41.5002 38.8064L39.3701 39.8664V31.7964L43.04 29.9664L51.8701 25.5464L59.3701 21.7964Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.0195 40.0764L71.0195 50.0764L67.3193 47.9364L46.8594 36.1264L46.4795 35.9064L46.4395 35.8364L58.9094 29.5965L59.3694 29.3764L66.3994 25.8564L91.0195 40.0764Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.0195 40.0764V68.3164L71.0593 78.2964L71.0195 78.2264V50.0764L91.0195 40.0764Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M91.0205 76.3864L83.9805 79.9064L74.6904 84.5564L71.0205 86.3864L68.1204 84.7164L63.9805 82.3264L66.1204 81.2564L71.2805 78.6764L83.9805 72.3264L91.0205 76.3864Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M27.72 72.2365L29.26 74.8965L27.72 75.6765L14.75 82.1565V37.1565L27.72 59.5365L31.8899 66.7265L27.72 69.1065L26.3599 69.8865L27.72 72.2365Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className="relative py-16 lg:py-20 xl:py-24">
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex items-center space-x-6">
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
            />

            <div className="hidden lg:flex flex-col relative z-10 space-y-6">
              <svg
                width={300}
                height={300}
                viewBox="0 0 92 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden lg:flex"
              >
                <path
                  d="M47.24 77.8729V86.5229L2 60.403V51.7529L47.24 77.8729Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.24 64.5629V69.2229L10.03 47.7429L2 43.1029V34.4429L18.07 43.7229L22 45.9929L37.44 54.903C38.88 56.753 40.42 58.4829 42.06 60.1129C43.69 61.7429 45.42 63.2229 47.24 64.5629Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.89 38.793L33.26 39.603L29.33 41.573C28.51 39.803 27.82 38.0331 27.26 36.2631C27.24 36.2131 27.23 36.163 27.21 36.113C26.66 34.403 26.18 32.643 25.75 30.853L29.69 28.8831L32.22 27.623C32.27 28.583 32.37 29.5531 32.53 30.5231C32.94 33.2431 33.73 36.003 34.89 38.793Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.2402 67.873V76.5231L47.2402 86.5231V77.873L59.2102 71.8831L67.2402 67.873Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.24 67.8732L59.21 71.8832L47.24 77.8732L2 51.7532L10.03 47.7432L47.24 69.2231L51.18 67.2532L59.21 63.2332L67.24 67.8732Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.2402 58.353V59.223L59.2102 63.233L51.1802 67.2531L47.2402 69.223V64.563L54.8902 60.743L55.5002 60.433C58.8302 61.473 61.7802 61.253 64.3502 59.793L66.4302 58.7531L67.2402 58.353Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M55.5004 60.4329L54.8904 60.7429L47.2404 64.5629C45.4204 63.2229 43.6904 61.7429 42.0604 60.1129C40.4204 58.4829 38.8804 56.753 37.4404 54.903L41.3704 52.9329L43.1904 52.0229C45.5604 54.6429 48.1704 56.7728 51.0104 58.4128C52.5704 59.3228 54.0704 59.9929 55.5004 60.4329Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.5 21.853C32.27 23.083 32.16 24.4331 32.16 25.9031C32.16 26.4731 32.18 27.053 32.22 27.623L29.69 28.8831L25.75 30.853L22 28.693L18.06 26.413L2 17.1431L22 7.14307L35.84 15.1331C34.12 16.7331 33.01 18.973 32.5 21.853Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M89.8602 37.6729C89.8602 43.6529 88.0202 47.6929 84.3502 49.7929L83.5302 50.2029L67.2402 58.3529L66.4302 58.753L64.3502 59.7929C64.9702 59.4329 65.5402 59.0229 66.0602 58.5429C66.4902 58.1629 66.8902 57.733 67.2402 57.263C68.9802 54.993 69.8602 51.8029 69.8602 47.7029V47.6729C69.8602 42.0929 68.2602 36.3629 65.0802 30.4829C64.8402 30.0529 64.6002 29.6129 64.3502 29.1829C60.9402 23.3129 56.8802 18.873 52.1602 15.863C51.7802 15.613 51.4002 15.373 51.0102 15.153C46.0602 12.293 41.8102 11.7329 38.2402 13.4829L57.6702 3.78287C61.3502 1.68287 65.7902 2.14299 71.0102 5.15299C76.2202 8.16299 80.6702 12.8429 84.3502 19.1829C88.0202 25.5229 89.8602 31.6829 89.8602 37.6729Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M65.0802 30.4829C64.8402 30.0529 64.6002 29.6128 64.3502 29.1828C60.9402 23.3128 56.8802 18.8729 52.1602 15.8629C51.7802 15.6129 51.4002 15.3729 51.0102 15.1529C46.0602 12.2929 41.8102 11.7329 38.2402 13.4829H38.2102C38.0302 13.5829 37.8502 13.6828 37.6702 13.7828C37.0002 14.1628 36.3802 14.6129 35.8402 15.1329C34.1202 16.7329 33.0102 18.9729 32.5002 21.8529C32.2702 23.0829 32.1602 24.4329 32.1602 25.9029C32.1602 26.4729 32.1802 27.0529 32.2202 27.6229C32.2702 28.5829 32.3702 29.5529 32.5302 30.5229C32.9402 33.2429 33.7302 36.0028 34.8902 38.7928C35.2102 39.5728 35.5702 40.3728 35.9602 41.1628C36.4702 42.2328 37.0402 43.3129 37.6702 44.3929C39.3502 47.2829 41.1802 49.8229 43.1902 52.0229C45.5602 54.6429 48.1702 56.7728 51.0102 58.4128C52.5702 59.3228 54.0702 59.9928 55.5002 60.4328C58.8302 61.4728 61.7802 61.2528 64.3502 59.7928C64.9702 59.4328 65.5402 59.0228 66.0602 58.5428C66.4902 58.1628 66.8902 57.7329 67.2402 57.2629C68.9802 54.9929 69.8602 51.8029 69.8602 47.7029V47.6728C69.8602 42.0928 68.2602 36.3629 65.0802 30.4829ZM60.1202 38.2029L52.9802 42.3329L48.3702 44.9929L43.7302 36.9929L42.5602 34.9629L40.3602 31.1728L43.0002 29.5628L45.3202 33.5729L48.3702 38.8329L57.3002 33.7429L59.0202 32.7629L59.3602 33.3429L61.6602 37.3128L60.1202 38.2029Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M59.3601 33.3429L57.5801 34.2329L48.3701 38.8329L57.3001 33.7429L59.0201 32.7629L59.3601 33.3429Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M61.6604 37.313L60.1204 38.203L52.9804 42.333L48.3704 44.993L43.7304 36.993L42.5604 34.963L40.3604 31.173L43.0004 29.563L45.3204 33.573L48.3704 38.833L57.5804 34.233L59.3604 33.343L61.6604 37.313Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.19 52.0229L41.37 52.9329L37.44 54.903L22 45.9929L18.07 43.7229L2 34.4429L10.03 30.4329L29.33 41.5729L33.26 39.6029L34.89 38.7928C35.21 39.5728 35.57 40.3728 35.96 41.1628C36.47 42.2328 37.04 43.3129 37.67 44.3929C39.35 47.2829 41.18 49.8229 43.19 52.0229Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.33 41.573L10.03 30.433L2 25.793V17.1431L18.06 26.413L22 28.693L25.75 30.853C26.18 32.643 26.66 34.403 27.21 36.113C27.23 36.163 27.24 36.2131 27.26 36.2631C27.82 38.0331 28.51 39.803 29.33 41.573Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width={300}
                height={300}
                viewBox="0 0 119 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M46.2604 73.9902L39.0303 82.4202L50.9004 103.16L58.2303 94.5502L46.2604 73.9902Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M116.121 61.1305L108.691 69.8005L98.8906 52.6005L106.211 44.2305L116.121 61.1305Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M69.2697 69.18L70.2996 69.7M67.8096 23.75V23.77L67.8296 23.76H67.8096V23.75Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.85 45.5703L28.9399 46.6203L22.4199 54.1203L2.41992 44.1203L9.84998 35.5703L29.85 45.5703Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.9004 103.16L30.9004 93.1599L19.0303 72.4199L39.0303 82.4199L50.9004 103.16Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.88 69.6803L42.01 71.8603L36.45 78.3503L28.9 65.3103L22.4199 54.1203L28.9399 46.6203L29.85 45.5703L40.2899 63.5003L41.5599 65.6903L43.88 69.6803Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M70.8204 91.5403L50.8204 81.5403L42.9805 68.0703L56.4905 74.8303L62.9805 78.0703L70.8204 91.5403Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M70.3004 69.7001L69.8605 70.2001L62.9805 78.0702L56.4905 74.8302L42.9805 68.0702L44.0005 66.9102L59.3605 74.5901L65.5504 67.3202L69.2705 69.1802V69.1902L70.3004 69.7001Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M78.0404 82.9902L70.8204 91.5402L62.9805 78.0702L69.8605 70.2002L70.3004 69.7002L70.4504 69.9502L71.0404 70.9702V70.9802L78.0404 82.9902Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M97.3396 71.8505L90.0096 80.4605L71.8496 49.2705L79.1796 40.7705L79.6996 41.6705L80.8096 43.5605L89.6497 58.6805L90.9596 60.9305V60.9405L97.3396 71.8505Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.65 45.2706V45.2606L53 37.9406L49.2799 36.0806L48.74 35.1506L48.5299 34.7906L47.59 34.3206L40.5 22.1406L54.1 28.9406L58.75 31.2706L59.77 31.7706V31.7806L60.5 32.1406L68.34 45.6106L67.65 45.2706Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M75.6699 37.1198L75.5699 37.2398L74.5299 38.4398L68.34 45.6098L60.5 32.1398L60.9299 31.6498L67.8199 23.7698L67.83 23.7598L75.6699 37.1198Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M93.8796 47.3202V47.3102L80.5796 40.6702L76.3096 38.5302L75.5696 37.2402L75.6696 37.1202L67.8296 23.7602L67.8096 23.7502L60.3096 10.7002L77.5896 19.3402L80.3096 20.7002L88.8496 35.5502L96.3096 48.5302L93.8796 47.3202Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M87.6396 12.3203L80.3096 20.7003L77.5896 19.3403L60.3096 10.7003L67.6396 2.32031L87.6396 12.3203Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M103.74 39.8603L101.86 42.0503L96.3096 48.5303L88.8496 35.5503L80.3096 20.7003L87.6396 12.3203L103.74 39.8603Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M106.21 44.2299L98.8903 52.5999L96.0702 51.1899L80.8102 43.5599L79.7002 41.6699L80.5802 40.6699L93.8802 47.3099V47.3199L96.3102 48.5299L101.86 42.0499L106.21 44.2299Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M90.9596 60.9406V60.9305L89.6497 58.6805L80.8096 43.5605L96.0696 51.1906L98.8896 52.6005L108.69 69.8006L90.9596 60.9406Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M67.8199 23.7707L60.9299 31.6507L60.5 32.1407L59.77 31.7807V31.7707L58.75 31.2707L54.1 28.9407L40.5 22.1407L47.83 13.7607L67.8099 23.7507L67.8199 23.7707Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M79.1796 40.7704L71.8496 49.2704L69.2196 47.9604V47.9504L51.8496 39.2704L52.9996 37.9404L67.6497 45.2604V45.2704L68.3396 45.6104L74.5295 38.4404L79.1796 40.7704Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M71.0396 70.9805V70.9705L70.4496 69.9505L70.2996 69.7005L69.2697 69.1805L51.8496 39.2705L69.2196 47.9505V47.9605L71.8496 49.2705L90.0096 80.4605L71.0396 70.9805Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M66.6902 65.98L65.5502 67.32L59.3602 74.59L50.9003 60L41.2002 43.28L48.1302 35.25L48.5302 34.79L48.7402 35.15L49.2802 36.08L66.6902 65.98Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.5302 34.79L48.1302 35.25L41.2002 43.28L38.5103 41.94V41.93L21.2002 33.28L28.5302 24.79L47.5902 34.32L48.5302 34.79Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M59.3602 74.5903L44.0002 66.9103L41.5602 65.6903L40.2902 63.5003L29.8502 45.5703L27.7102 44.5003L21.2002 33.2803L38.5103 41.9303V41.9403L41.2002 43.2803L50.9003 60.0003L59.3602 74.5903Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.2604 73.9907L39.0303 82.4207L19.0303 72.4207L20.7003 70.4707L33.8704 77.0607L36.4503 78.3507L42.0104 71.8607L46.2604 73.9907Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.45 78.3501L33.87 77.0601L20.7 70.4701L16.45 68.3501L2.41992 44.1201L22.4199 54.1201L28.9 65.3101L36.45 78.3501Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-5xl w-full flex flex-col space-y-8 px-6 sm:px-0">
            <h1 className="text-3xl md:text-6xl font-bold">
              Desenvolvimento de Software Sob Medida
            </h1>

            <p className="max-w-2xl w-full text-base text-muted-foreground sm:text-lg">
              Cada empresa é única, e suas soluções também devem ser. Nosso serviço de
              desenvolvimento sob medida é focado em criar sistemas personalizados que
              atendam às necessidades específicas de cada cliente.
            </p>

            <ul className="list-disc space-y-6">
              <li>
                <strong>Levantamento de Requisitos:</strong> {" "}
                Entendemos a fundo os desafios e objetivos do seu negócio.
              </li>

              <li>
                <strong>Arquitetura de sistemas:</strong> {" "}
                Projetamos soluções robustas, escaláveis e alinhadas às melhores práticas de mercado.
              </li>

              <li>
                <strong>Desenvolvimento e Implantação:</strong> {" "}
                Cuidamos de todo o ciclo de vida do sistema, garantindo eficiência e agilidade.
              </li>

              <li>
                <strong>Manutenção e Suporte:</strong> {" "}
                Após a entrega, continuamos ao seu lado para evoluir e sustentar a solução.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="py-16 lg:py-20 xl:py-24">
        <div className="w-full flex justify-center items-center lg:justify-between">
          <div className="w-full flex flex-col space-y-8 px-6 sm:px-0 lg:max-w-5xl lg:w-full">
            <h1 className="text-3xl md:text-6xl font-bold">
              Evolução de Sistemas Existentes
            </h1>

            <p className="w-full text-base text-muted-foreground sm:text-lg lg:max-w-2xl lg:w-full">
              Não é sempre necessário começar do zero. Atuamos em sistemas já existentes,
              analisando sua arquitetura, identificando pontos de melhoria e aplicando as
              melhores práticas para modernizar e otimizar seu desempenho.
            </p>

            <ul className="list-disc space-y-6 px-6 sm:px-0">
              <li>
                <strong>Atualização de Tecnologias:</strong> {" "}
                Trazemos sistemas legados para padrões modernos.
              </li>

              <li>
                <strong>Melhorias de Performance:</strong> {" "}
                Identificamos e corrigimos gargalos, tornando sua solução mais eficiente.
                Projetamos soluções robustas, escaláveis e alinhadas às melhores práticas de mercado.
              </li>

              <li>
                <strong>Novos Recursos e Integrações:</strong> {" "}
                Adicionamos funcionalidades e conectamos seu sistema a novas tecnologias.
              </li>

              <li>
                <strong>Suporte Contínuo:</strong> {" "}
                Garantimos que sua solução esteja sempre atualizada e funcionando com excelência.
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex justify-end items-center relative w-full space-x-6">
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
              )}
            />

            <div className="flex flex-col space-y-6">
              <svg
                width={300}
                height={300}
                viewBox="0 0 127 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M51.6499 29.7799V49.7799L2.33984 49.6899V29.6899L49.5598 29.7799H51.6499Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M51.9602 48.7998V68.7998L51.6504 49.7798V29.7798L51.6604 30.1099L51.8704 43.1298L51.9602 48.7998Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M98.2305 47.3701V67.3701C96.9005 70.7101 94.8506 73.9801 92.0706 77.1901C89.2906 80.3901 85.7905 83.4501 81.5605 86.3601V66.3601C85.7905 63.4501 89.2906 60.3901 92.0706 57.1901C94.4606 54.4301 96.3206 51.62 97.6306 48.76C97.8506 48.3 98.0405 47.8301 98.2305 47.3701Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M85.9092 47.7002C85.7792 47.9702 85.649 48.2302 85.499 48.5002C84.349 50.7002 82.839 52.8402 80.989 54.9202C78.979 57.1902 76.5392 59.3802 73.6892 61.5002C73.6092 61.5602 73.529 61.6202 73.449 61.6802V68.1002L51.959 68.8002V48.8002L63.1692 48.4402L85.0391 47.7302L85.9092 47.7002Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M124.26 39.8301L124.1 46.4801L98.2297 47.3701C98.0397 47.8301 97.8499 48.3 97.6299 48.76C96.3199 51.62 94.4598 54.4301 92.0698 57.1901C89.2898 60.3901 85.7898 63.4501 81.5598 66.3601L73.4497 61.6801C73.5297 61.6201 73.6099 61.5601 73.6899 61.5001C76.5399 59.3801 78.9797 57.19 80.9897 54.92C82.8397 52.84 84.3498 50.7 85.4998 48.51C85.6498 48.23 85.7799 47.9701 85.9099 47.7001L85.0398 47.7301L63.1699 48.4401L51.9597 48.8L51.8699 43.13L51.6599 30.1101V29.78H49.5598L2.33984 29.6901L2.49976 23.04L38.5999 23.1101H38.7397L51.0698 23.13L63.1399 23.15V25.4901L63.1899 32.9301L63.2397 41.8201L79.1599 41.3301L88.0898 41.05C88.2598 39.8 88.3097 38.5601 88.2397 37.3301C88.0597 34.3201 87.1398 31.3801 85.4998 28.5001C83.1898 24.4501 79.2199 20.8101 73.6199 17.5701C68.8199 14.8001 63.3999 12.7 57.3599 11.27C51.3199 9.84002 45.0699 9.00012 38.5999 8.75012L38.7698 2.1001C46.7198 2.3501 54.3697 3.36012 61.7197 5.12012C69.0797 6.88012 75.7299 9.48004 81.6699 12.92C88.2999 16.74 93.0898 21.0401 96.0398 25.8101C98.9998 30.5801 100.19 35.5501 99.6099 40.7201L124.26 39.8301Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M124.26 39.8301V59.8301L124.1 66.4801V46.4801L124.26 39.8301Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M124.101 46.48V66.48L98.2305 67.37V47.37L124.101 46.48Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M88.0896 41.0499L79.1597 41.33C77.5397 40.02 75.6896 38.7699 73.6196 37.5699C70.4196 35.7199 66.9397 34.1699 63.1897 32.9299L63.1497 25.49V23.1499L51.0696 23.1299L38.7395 23.11H38.5996V8.75C45.0696 9 51.3196 9.8399 57.3596 11.2699C63.3996 12.6999 68.8196 14.7999 73.6196 17.5699C79.2196 20.8099 83.1895 24.45 85.4995 28.5C87.1395 31.38 88.0595 34.32 88.2395 37.33C88.3095 38.56 88.2596 39.7999 88.0896 41.0499Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M81.5593 66.3602V86.3602L73.4492 81.6802V61.6802L81.5593 66.3602Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width={300}
                height={300}
                viewBox="0 0 112 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M42.0801 25.3201L41.2402 24.9001L42.1001 25.3701L44.8301 26.8801L44.9102 26.7401L42.0801 25.3201Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.77 20.0801L47.27 22.6702L46.5 23.9901L44.9099 26.7401L42.0798 25.3201L41.24 24.9001L38.72 23.5101C38.72 23.5101 38.7 23.5901 38.7 23.6301C38.27 25.6401 37.97 27.5901 37.78 29.4901C37.59 31.4301 37.5 33.3401 37.5 35.2101C37.5 36.5201 37.5499 37.8002 37.6499 39.0302C37.9199 42.5302 38.5799 45.7201 39.6099 48.5901C39.8399 49.2101 40.0798 49.8201 40.3398 50.4001C41.6898 53.4801 43.5 56.0601 45.76 58.1301L43.0398 62.8301L41.73 65.0901C40.03 63.6301 38.5598 61.9301 37.2898 59.9601C36.1898 58.2601 35.25 56.3801 34.47 54.3101C34.45 54.2501 34.4199 54.1901 34.3999 54.1301C32.7099 49.5701 31.8699 44.3501 31.8699 38.4601C31.8699 36.5201 31.9599 34.5301 32.1499 32.4801C32.3199 30.6501 32.5599 28.7701 32.8799 26.8501C32.9099 26.6301 32.95 26.4002 32.99 26.1702L32.77 26.5601L26.4199 37.5101L22.48 35.2601L30.6499 21.1501L31.3499 19.9501L34.3699 14.7301L35.6199 12.5801L36.1899 12.9001L37.53 13.6702L47.9299 19.6001L48.77 20.0801Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M97.7 13.71L90.6499 20.79L91.97 24.02L88.3999 27.59L85.8298 20.95L84.5999 17.77L84.5498 17.63L84.48 17.7L83.5898 18.6L82.77 19.42L77.51 24.72L81.3599 34.5599L77.8799 38.08L75.3499 31.55L72.72 24.79L69.0999 28.4301L65.6699 31.87L70.8398 45.05L67.27 48.62L64.6699 41.97L59.5398 28.8099L58.8699 27.08L56.9399 22.15L55.96 23.14L53.3799 25.73L49.8999 29.23L52.5 35.88L61.73 59.47L50.8499 66.73H50.8398L47.27 77.74L76.0999 76.5L109.43 43.35L97.7 13.71Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.24 24.9003L42.0798 25.3202L42.0999 25.3702L41.24 24.9003ZM41.24 24.9003L38.7 23.6302C38.7 23.5902 38.72 23.5103 38.72 23.5103L41.24 24.9003ZM32.77 26.5602L32.8799 26.8502C32.9099 26.6302 32.95 26.4003 32.99 26.1703L32.77 26.5602Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M70.8398 45.0503L67.27 48.6202L64.6699 41.9702L70.8398 45.0503Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M70.8401 45.0502L64.6702 41.9701L59.54 28.8101L65.6702 31.8701L70.8401 45.0502Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M81.3596 34.5602L77.8796 38.0802L75.3496 31.5503L81.3596 34.5602Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M81.3596 34.5602L75.3496 31.5503L72.7197 24.7903L58.7097 17.7903V17.7803L57.5098 14.7202L77.5098 24.7202L81.3596 34.5602Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M61.73 59.4703L41.73 49.4703L37.6499 39.0304C37.5499 37.8004 37.5 36.5203 37.5 35.2103C37.5 33.3403 37.59 31.4304 37.78 29.4904C37.97 27.5904 38.27 25.6404 38.7 23.6304L41.24 24.9004L42.0999 25.3704L44.8298 26.8804L44.9099 26.7404L48.23 28.3904L49.8999 29.2303L52.5 35.8804L61.73 59.4703Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.73 65.0901L21.73 55.0901C18.53 52.3401 16.0899 48.6801 14.3999 44.1301C12.8799 40.0401 12.0499 35.4101 11.8999 30.2501L18.23 33.4102L26.4199 37.5101L32.77 26.5601L32.8799 26.8501C32.5599 28.7701 32.3199 30.6501 32.1499 32.4801C31.9599 34.5301 31.8699 36.5201 31.8699 38.4601C31.8699 44.3501 32.7099 49.5701 34.3999 54.1301C34.4199 54.1901 34.45 54.2501 34.47 54.3101C35.25 56.3801 36.1898 58.2601 37.2898 59.9501C38.5598 61.9301 40.03 63.6301 41.73 65.0901Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.23 33.4203V33.4103L11.8999 30.2502L6.41992 27.5103L2.47998 25.2603L6.5498 27.2903L11.8999 29.9702L18.1699 33.1002V33.1102L22.48 35.2603L26.4199 37.5103L18.23 33.4203Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M61.73 59.4702L50.8499 66.7302H50.8298L43.0398 62.8302L45.76 58.1302C43.5 56.0602 41.6898 53.4803 40.3398 50.4003L41.73 49.4702L61.73 59.4702Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.8398 66.7302L47.27 77.7402L27.27 67.7402L30.03 59.2402L41.73 65.0902L43.0398 62.8302L50.8298 66.7302H50.8398Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.6199 12.5801L34.3699 14.7301L31.3499 19.9501L30.6499 21.1501L22.48 35.2601L18.1699 33.1101V33.1001L11.8999 29.9701L6.5498 27.2902L2.47998 25.2601L15.6199 2.58008L35.6199 12.5801Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M72.72 24.79L69.0999 28.4301L65.6699 31.87L59.5398 28.8099V28.8L58.8699 27.08L56.9399 22.15L55.25 21.3099V21.3L49.23 18.29L52.72 14.79L58.71 17.78V17.79L72.72 24.79Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M56.9399 22.1501L55.96 23.1401L53.3799 25.7301L49.8999 29.2301L48.23 28.4001V28.3901L44.9099 26.7401L46.5 23.9901L47.27 22.6702L48.77 20.0801L47.9299 19.6001L37.53 13.6702L36.1899 12.9001L36.9399 12.1501L49.23 18.2902L55.25 21.3002V21.3101L56.9399 22.1501Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M84.5496 17.6301L84.4797 17.7001L83.5896 18.6001L82.7698 19.4202L77.5098 24.7201L57.5098 14.7201L64.5496 7.63013L70.7197 10.7201L82.8796 16.7902V16.8002L84.5496 17.6301Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M97.6997 13.71L90.6497 20.79L84.5996 17.77V17.76L84.5496 17.63L82.8796 16.8V16.79L70.7197 10.72L77.6997 3.70996L97.6997 13.71Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M91.9702 24.0203L88.4001 27.5902L85.8301 20.9502L91.9702 24.0203Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M91.9697 24.02L85.8296 20.95L84.5996 17.77L90.6497 20.79L91.9697 24.02Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className="relative py-16 lg:py-20 xl:py-24">
        <div className="w-full flex justify-center items-center lg:justify-between">
          <div className="hidden lg:flex w-full items-center space-x-6">
            <GridPattern
              width={20}
              height={20}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
              )}
            />

            <div className="flex flex-col relative z-10 space-y-6">
              <svg
                width={300}
                height={300}
                viewBox="0 0 106 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M60.77 45.9999L37.51 32.5698L22 23.6199L2 12.0698V74.3599L29.1401 90.0399L44.6501 81.1898L17.51 65.5199V56.6199L22 59.2098L25.77 61.3899L52.4102 76.7699L63.4302 70.4899L71.1899 66.0698L71.8 65.7198L73.02 66.4199L79.55 70.1898V56.8398L60.77 45.9999ZM40.77 61.1499L34.03 57.2599L22 50.3098L17.51 47.7198V38.8198L22 41.4099L25.77 43.5898L37.51 50.3699L40.77 52.2499V61.1499Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.77 52.2499V61.1499L34.03 57.2599L22 50.3098L17.51 47.7198L22 45.4799L25.77 43.5898L37.51 50.3699L40.77 52.2499Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M77.23 97.1099L70.22 101.11L51.4399 111.81L44.6501 107.89V100.1L70.4399 85.3999L71.05 86.4498L77.23 97.1099Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M97.23 87.1099L71.4399 101.81L51.4399 111.81L70.22 101.11L77.23 97.1099L97.23 87.1099Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M97.23 87.1097L77.23 97.1097L71.05 86.4497L70.4399 85.3998L72.8401 84.1997L73.3801 85.1198L79.55 95.7798L97.1501 86.9797L97.23 87.1097Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M83.53 92.8496C83.53 93.2896 83.37 93.6096 83.04 93.7896L79.55 95.7796L73.3801 85.1196L72.8401 84.1995L72.77 84.0695L76.26 82.0795C76.53 81.9295 76.8201 81.9195 77.1401 82.0495C77.2001 82.0795 77.2601 82.1096 77.3201 82.1396C77.5001 82.2496 77.6801 82.3895 77.8501 82.5795C78.0401 82.7795 78.2201 83.0195 78.3901 83.3195L83.04 91.3395C83.37 91.8995 83.53 92.3996 83.53 92.8496Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M99.55 46.8398V60.1898L79.55 70.1898V56.8398L99.55 46.8398Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.02 66.4198L72.4102 66.7698L52.4102 76.7698L63.4302 70.4897L71.1899 66.0697L71.8 65.7197L73.02 66.4198Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M64.6501 71.1899L49.1401 80.04L29.1401 90.04L44.6501 81.1899L48.1201 79.45L64.6501 71.1899Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M64.6501 71.1896L48.1201 79.4496L44.6501 81.1896L17.51 65.5197L22 63.2797L25.77 61.3896L52.4102 76.7697L64.1501 70.8997L64.6501 71.1896Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.77 43.5898L22 45.4799L17.51 47.7198V38.8198L22 41.4099L25.77 43.5898Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M99.55 46.8398L79.55 56.8398L60.77 45.9999L37.51 32.5698L22 23.6199L2 12.0698L22 2.06982L99.55 46.8398Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.77 61.3901L22 63.2802L17.51 65.5201V56.6201L22 59.2101L25.77 61.3901Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M103.53 82.85C103.53 83.29 103.37 83.6101 103.04 83.7901L99.55 85.78L79.55 95.78L83.04 93.7901C83.37 93.6101 83.53 93.29 83.53 92.85C83.53 92.41 83.37 91.9 83.04 91.34L78.3901 83.32C78.2201 83.02 78.0401 82.78 77.8501 82.58C77.6801 82.39 77.5001 82.25 77.3201 82.14C77.2601 82.11 77.2001 82.0799 77.1401 82.0499C76.8201 81.9199 76.53 81.93 76.26 82.08L96.26 72.08C96.58 71.9 96.9301 71.92 97.3201 72.14C97.7101 72.37 98.0701 72.76 98.3901 73.32L103.04 81.34C103.37 81.9 103.53 82.4 103.53 82.85Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width={300}
                height={300}
                viewBox="0 0 107 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M60.5114 42.2681V55.298C60.5114 55.298 60.4813 55.298 60.4713 55.308C58.3113 55.748 55.9914 55.958 53.5114 55.958C51.0314 55.958 48.5713 55.7181 46.3613 55.2381V42.248L60.5114 42.2681Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M83.9009 44.7479V59.8379C83.6509 59.9979 83.401 60.1579 83.141 60.3179C82.831 60.5079 82.5209 60.6979 82.2009 60.8779C79.5609 62.3979 76.741 63.6679 73.761 64.6779C67.731 66.7379 61.0109 67.7579 53.5809 67.7479C46.0609 67.7379 39.241 66.6679 33.141 64.5379C30.231 63.5279 27.471 62.2679 24.881 60.7679C24.501 60.5479 24.121 60.3279 23.761 60.0979C23.501 59.9379 23.251 59.7879 23.001 59.6179V44.6379C23.051 45.8779 23.311 47.0779 23.771 48.2279C24.611 50.3779 26.1609 52.3679 28.4009 54.1879C29.4509 55.0479 30.661 55.8679 32.021 56.6479C33.211 57.3379 34.4409 57.9479 35.7209 58.4979C38.9709 59.8979 42.511 60.8579 46.361 61.3779C48.651 61.6879 51.0409 61.8479 53.5409 61.8579C55.9709 61.8579 58.291 61.7179 60.511 61.4279C64.371 60.9379 67.9209 59.9979 71.1709 58.6279C72.5009 58.0679 73.781 57.4379 75.011 56.7279C76.311 55.9779 77.471 55.1979 78.481 54.3579C80.731 52.5579 82.291 50.5779 83.131 48.4379C83.601 47.2579 83.8609 46.0279 83.9009 44.7479Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M60.451 30.628L60.5111 42.268L46.3611 42.248L46.301 30.358L46.2711 24.558L28.291 29.748L53.2211 2.90796L78.451 29.8479L60.421 24.588L60.451 30.628Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M104.141 44.3678V44.4578C104.141 47.8378 103.121 51.1678 101.061 54.4478C100.881 54.7478 100.681 55.0478 100.481 55.3478C98.851 57.7478 96.6609 59.9778 93.9209 62.0378C92.5509 63.0778 91.041 64.0778 89.391 65.0278C87.451 66.1478 85.4209 67.1478 83.2809 68.0478C79.9709 69.4478 76.421 70.5678 72.631 71.4278C71.191 71.7578 69.7409 72.0478 68.2909 72.2978C63.4609 73.1378 58.571 73.5578 53.611 73.5478C48.551 73.5278 43.551 73.0878 38.621 72.1978C37.261 71.9578 35.9109 71.6778 34.5609 71.3678C30.6709 70.4678 27.031 69.2878 23.631 67.8378C21.581 66.9578 19.611 65.9778 17.741 64.8978C16.001 63.8878 14.411 62.8478 12.981 61.7578C10.311 59.7178 8.16088 57.5278 6.53088 55.1778C6.28088 54.8178 6.05093 54.4678 5.83093 54.1078C3.80093 50.8478 2.78099 47.5378 2.76099 44.1878C2.74099 40.4578 3.95089 36.7978 6.41089 33.2078C8.87089 29.6078 12.571 26.3778 17.511 23.5278L19.121 22.5978C19.651 22.2878 20.2509 22.0178 20.9109 21.7778L25.771 27.0578L24.7009 27.6778C16.7209 32.2778 12.7509 37.7878 12.7909 44.2078C12.7909 44.9978 12.861 45.7678 12.981 46.5178C13.421 49.2378 14.631 51.7778 16.611 54.1478C18.231 56.0878 20.361 57.9178 23.001 59.6178C23.251 59.7878 23.501 59.9378 23.761 60.0978C24.121 60.3278 24.501 60.5478 24.881 60.7678C27.471 62.2678 30.231 63.5278 33.141 64.5378C39.241 66.6678 46.0609 67.7378 53.5809 67.7478C61.0109 67.7578 67.731 66.7378 73.761 64.6778C76.741 63.6678 79.5609 62.3978 82.2009 60.8778C82.5209 60.6978 82.831 60.5078 83.141 60.3178C83.401 60.1578 83.6509 59.9978 83.9009 59.8378C86.5409 58.1478 88.6709 56.3378 90.2809 54.4078C92.2609 52.0478 93.4809 49.5078 93.9109 46.7978C94.0509 45.9978 94.111 45.1778 94.111 44.3478C94.081 37.9378 90.041 32.4178 82.021 27.7778L80.9409 27.1578L85.751 21.8978C86.411 22.1378 87.0109 22.4078 87.5409 22.7278L89.1609 23.6578C94.1309 26.5278 97.871 29.7678 100.361 33.3778C102.861 36.9778 104.121 40.6478 104.141 44.3678Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M104.141 44.458V64.368C104.161 68.088 102.941 71.748 100.481 75.348C98.0307 78.948 94.3307 82.168 89.3907 85.028C84.4507 87.878 78.8607 90.018 72.6307 91.428C66.4007 92.848 60.0607 93.558 53.6107 93.548C47.1607 93.528 40.8107 92.808 34.5607 91.368C28.3207 89.918 22.7107 87.768 17.7407 84.898C12.7607 82.028 9.03064 78.788 6.53064 75.178C4.04064 71.568 2.78074 67.908 2.76074 64.188V44.188C2.78074 47.538 3.80069 50.848 5.83069 54.108C6.05069 54.468 6.28064 54.818 6.53064 55.178C8.16064 57.528 10.3107 59.718 12.9807 61.758C14.4107 62.848 16.0007 63.888 17.7407 64.898C19.6107 65.978 21.5807 66.958 23.6307 67.838C27.0307 69.288 30.6707 70.468 34.5607 71.368C35.9107 71.678 37.2607 71.958 38.6207 72.198C43.5507 73.088 48.5507 73.528 53.6107 73.548C58.5707 73.558 63.4606 73.138 68.2906 72.298C69.7406 72.048 71.1907 71.758 72.6307 71.428C76.4207 70.568 79.9706 69.448 83.2806 68.048C85.4206 67.148 87.4507 66.148 89.3907 65.028C91.0407 64.078 92.5507 63.078 93.9207 62.038C96.6607 59.978 98.8507 57.748 100.481 55.348C100.681 55.048 100.881 54.748 101.061 54.448C103.121 51.168 104.141 47.838 104.141 44.458Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.7714 36.7779C23.9414 39.0079 23.0114 41.4279 22.9914 44.0379C22.9914 44.2379 22.9914 44.4379 23.0014 44.6379V48.7179C20.3514 50.4079 18.2314 52.2179 16.6114 54.1479C14.6314 51.7779 13.4214 49.2379 12.9814 46.5179C12.8614 45.7679 12.7913 44.9979 12.7913 44.2079C12.7513 37.7879 16.7213 32.2779 24.7013 27.6779L25.7714 27.0579V36.7779Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.2711 24.5579V44.5579L36.1311 47.4879V38.0879L30.811 32.4479C29.891 33.0379 29.051 33.6479 28.291 34.2779V29.7479L46.2711 24.5579Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M78.4509 29.8479V34.3279C77.6909 33.7079 76.8609 33.1079 75.9509 32.5279L70.7009 38.1579V47.5879L60.511 44.6179V42.2679L60.4509 30.6279L60.4209 24.5879L78.4509 29.8479Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M94.1115 44.3479C94.1115 45.1779 94.0514 45.998 93.9114 46.798C93.4814 49.508 92.2614 52.048 90.2814 54.408C88.6614 52.468 86.5414 50.6379 83.9014 48.9279V44.748C83.9114 44.478 83.9115 44.1979 83.8915 43.9279C83.8115 41.3479 82.8214 38.958 80.9414 36.748V27.158L82.0215 27.778C90.0415 32.418 94.0815 37.9379 94.1115 44.3479Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.1311 38.0879V50.3279C35.3311 49.6079 34.7011 48.8479 34.2211 48.0379C33.7511 47.2479 33.4311 46.4279 33.2611 45.5579C33.1911 45.2079 33.1511 44.8679 33.1411 44.5279C33.0111 42.2479 34.0111 40.0979 36.1311 38.0879Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.7512 44.828C73.7412 45.088 73.7011 45.358 73.6511 45.628C73.4811 46.508 73.1612 47.358 72.6812 48.168C72.1912 48.998 71.5312 49.788 70.7012 50.528V38.158C72.9112 40.238 73.9412 42.458 73.7512 44.828Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M83.9011 44.748C83.8611 46.028 83.6012 47.258 83.1312 48.438C82.2912 50.578 80.7312 52.558 78.4812 54.358C77.4712 55.198 76.3112 55.978 75.0112 56.728C73.7812 57.438 72.5011 58.068 71.1711 58.628C67.9211 59.998 64.3712 60.938 60.5112 61.428C58.2912 61.718 55.9711 61.858 53.5411 61.858C51.0411 61.858 48.6512 61.688 46.3612 61.378C42.5112 60.858 38.9712 59.898 35.7212 58.498C34.4412 57.948 33.2112 57.338 32.0212 56.648C30.6612 55.868 29.4511 55.048 28.4011 54.188C26.1611 52.368 24.6112 50.378 23.7712 48.228C23.3112 47.078 23.0512 45.878 23.0012 44.638C22.9912 44.438 22.9912 44.238 22.9912 44.038C23.0112 41.428 23.9412 39.008 25.7712 36.778C26.4712 35.908 27.3111 35.078 28.2911 34.278C29.0511 33.648 29.8912 33.038 30.8112 32.448L36.1312 38.088C34.0112 40.098 33.0112 42.248 33.1412 44.528C33.1512 44.868 33.1912 45.208 33.2612 45.558C33.4312 46.428 33.7512 47.248 34.2212 48.038C34.7012 48.848 35.3312 49.608 36.1312 50.328C36.9612 51.108 37.9811 51.838 39.1611 52.528C41.3011 53.758 43.6912 54.658 46.3212 55.228C46.3312 55.228 46.3412 55.228 46.3612 55.228C48.5712 55.708 50.9512 55.948 53.5112 55.948C56.0712 55.948 58.3112 55.738 60.4712 55.298C60.4812 55.288 60.5012 55.288 60.5112 55.288C63.2112 54.728 65.6512 53.828 67.8212 52.568C68.9412 51.928 69.9012 51.238 70.7012 50.518C71.5312 49.778 72.1912 48.988 72.6812 48.158C73.1612 47.348 73.4811 46.498 73.6511 45.618C73.7011 45.348 73.7412 45.078 73.7512 44.818C73.9412 42.448 72.9112 40.228 70.7012 38.148L75.9512 32.518C76.8612 33.098 77.6912 33.698 78.4512 34.318C79.4112 35.098 80.2412 35.908 80.9412 36.738C82.8212 38.948 83.8112 41.338 83.8912 43.918C83.9112 44.188 83.9111 44.468 83.9011 44.738V44.748Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.3615 42.2479V55.2379C46.3615 55.2379 46.3314 55.2379 46.3214 55.2379L46.2715 44.5679V24.5679L46.3014 30.3679L46.3615 42.2579V42.2479Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-8 px-6 sm:px-0 lg:max-w-5xl lg:w-full">
            <h1 className="text-3xl md:text-6xl font-bold">
              Consultoria Estratégica em Tecnologia
            </h1>

            <p className="w-full text-base text-muted-foreground sm:text-lg lg:max-w-2xl lg:w-full">
              Para quem precisa de orientação especializada, nosso serviço de consultoria
              estratégica é ideal. Trabalhamos lado a lado com sua equipe para identificar oportunidades,
              definir estratégias e implementar tecnologias que realmente fazem a diferença.
            </p>

            <ul className="list-disc space-y-6 px-6 sm:px-0">
              <li>
                Planejamento e execução de projetos tecnológicos.
              </li>

              <li>
                Identificação de ferramentas e soluções ideais para o seu negócio.
              </li>

              <li>
                Otimização de processos existentes com inovação e tecnologia.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="py-16 lg:py-20 xl:py-24">
        <div className="w-full flex justify-center items-center lg:justify-between">
          <div className="w-full flex flex-col space-y-8 px-6 sm:px-0 lg:max-w-5xl lg:w-full">
            <h1 className="text-3xl md:text-6xl font-bold">
              Soluções SaaS <br />
              <strong className="text-4xl">(Software as a Service)</strong>
            </h1>

            <p className="w-full text-base text-muted-foreground sm:text-lg lg:max-w-2xl lg:w-full">
              Além de desenvolver projetos personalizados, também criamos produtos SaaS prontos para
              transformar a gestão do seu negócio. Um exemplo é o SpendManagement,
              nosso gerenciador de gastos que ajuda empresas e pessoas a organizarem suas finanças com
              inteligência e simplicidade.
            </p>

            <ul className="list-disc space-y-6 px-6 sm:px-0">
              <li>
                Acesse de qualquer lugar, com total segurança.
              </li>

              <li>
                Reduza custos operacionais e ganhe produtividade.
              </li>

              <li>
                Conte com atualizações constantes e suporte especializado.
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex w-full relative justify-end items-center space-x-6">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
            />

            <div className="flex flex-col space-y-6">
              <svg
                width={300}
                height={300}
                viewBox="0 0 97 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M94.2087 33.8501V55.3801L86.6987 59.7201V52.8301L83.5987 58.1702L60.7987 97.5001L47.4787 92.0602L33.3987 116.34L22.8887 122.4L47.0987 80.6401L60.4287 86.0901L78.1787 55.4601L81.4487 49.8301L75.4387 53.3002V44.6802L94.2087 33.8501Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M71.6877 12.1802V55.9001L60.4277 75.3202V18.6802L71.6877 12.1802Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M47.0987 80.6404L22.8887 122.4L2.88867 112.4L7.62868 104.22L12.6887 106.75L22.8887 111.85L34.1487 92.4304V75.9404L41.6587 79.6904L42.4787 78.3303L47.0987 80.6404Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.8887 74.8103V111.85L12.6887 106.75L7.62868 104.22L2.88867 101.85V64.8103L22.8887 74.8103Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.6582 46.7402V79.6903L34.1482 75.9403V68.3103L25.2082 63.8402L21.6582 62.0703V36.7402L32.9182 42.3702L40.4282 46.1302L41.6582 46.7402Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M71.6877 12.1802L60.4277 18.6802L40.4277 8.68018L51.6877 2.18018L71.6877 12.1802Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M52.9182 40.2402V73.1903L49.9482 71.7202L47.2882 70.4103L42.4782 78.3302L41.6582 79.6903V46.7402L51.6882 40.9503L52.9182 40.2402Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M52.9182 40.2402L51.6882 40.9503L41.6582 46.7402L40.4282 46.1302L32.9182 42.3702L21.6582 36.7402L32.9182 30.2402L40.4282 34.0002L51.6882 39.6302L52.9182 40.2402Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M81.4485 49.8301L78.1785 55.4601L60.4285 86.0901L47.0985 80.6401L42.4785 78.3301L47.2885 70.4102L49.9485 71.7201L52.9185 73.1902V71.5702L60.4285 75.3202L71.6885 55.9001V51.4302L75.4385 53.3002L81.4485 49.8301Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M60.4277 18.6802V75.3202L52.9177 71.5702V40.2401L51.6877 39.6301L40.4277 34.0001V8.68018L60.4277 18.6802Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M75.4395 44.6801V53.3L71.6895 51.4301V42.8101L74.2095 44.0701L75.4395 44.6801Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M94.2094 33.8501L75.4395 44.6802L74.2095 44.0702L71.6895 42.8102V25.3002L74.2095 23.8501L94.2094 33.8501Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M86.6996 52.8301V59.7201L83.5996 58.1702L86.6996 52.8301Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1487 68.3101V92.4301L22.8887 111.85V74.8101L25.5787 73.25L27.0587 72.4L28.7087 71.4501L28.8587 71.36L34.1487 68.3101Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1487 68.3101L28.8587 71.36L28.7087 71.4501L27.0587 72.4L25.5787 73.25L22.8887 74.8101L2.88867 64.8101L14.1487 58.3101L21.6587 62.0701L25.2087 63.84L34.1487 68.3101Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width={300}
                height={300}
                viewBox="0 0 104 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1px"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M77.94 66.3005C76 59.9705 73.4 53.8905 70.12 48.0705C69.93 47.7205 69.72 47.3605 69.52 47.0105C69.38 46.7605 69.23 46.5205 69.08 46.2805C66.77 42.3605 64.19 38.6505 61.34 35.1305C60.47 34.0405 59.56 32.9605 58.63 31.9105C58.08 31.2805 57.52 30.6605 56.95 30.0505C56.91 30.0105 56.87 29.9705 56.83 29.9305C56.17 29.2205 55.49 28.5205 54.81 27.8505C50.61 23.7105 46.19 20.3005 41.53 17.6105C39.45 16.4005 37.41 15.4005 35.42 14.6005C32.22 13.3005 29.14 12.5205 26.18 12.2605C26.16 12.2505 26.13 12.2505 26.11 12.2505C22.08 11.9305 18.51 12.4505 15.37 13.8305L15.31 13.8505L13.58 14.7205C10.03 16.7505 7.18 19.9105 5.12 24.2605C3.03 28.5405 2 33.8405 2 40.1505C2 46.4605 3.03 52.9005 5.12 59.6405C7.18 66.3205 10.03 72.7705 13.58 78.9105C17.14 85.0405 21.29 90.6605 26.11 95.8505C30.94 100.99 36.08 105.18 41.53 108.33C46.99 111.48 52.13 113.22 56.95 113.65C61.25 113.99 65.05 113.39 68.35 111.81L68.95 111.51C69.14 111.41 69.33 111.31 69.52 111.2C72.51 109.49 74.97 106.96 76.9 103.64C77.27 103.02 77.61 102.36 77.94 101.68C78.91 99.6905 79.65 97.4805 80.16 95.0705C80.76 92.2605 81.06 89.1605 81.06 85.7905C81.06 79.4905 80.04 73.0005 77.94 66.3005ZM72.15 95.0605C72.1 95.1605 72.06 95.2605 72.01 95.3605C70.84 97.8005 69.4 99.7905 67.66 101.34C66.82 102.1 65.91 102.74 64.93 103.29C61.97 105.03 58.45 105.67 54.42 105.39C50.39 105.01 46.08 103.56 41.53 100.94C36.99 98.3105 32.68 94.7805 28.64 90.5005C24.61 86.1405 21.13 81.4505 18.17 76.2905C15.17 71.1605 12.79 65.7905 11.05 60.1605C9.31 54.5305 8.44 49.0905 8.44 43.8705C8.44 38.6505 9.31 34.1605 11.05 30.5905C12.79 26.9605 15.17 24.3005 18.17 22.6305C19.62 21.7805 21.19 21.1905 22.9 20.8505C24.67 20.4805 26.58 20.3905 28.64 20.5605C29.39 20.6205 30.15 20.7305 30.92 20.8705C34.29 21.4805 37.83 22.8705 41.53 25.0005C44.23 26.5605 46.84 28.4205 49.36 30.5805C49.8 30.9505 50.24 31.3405 50.67 31.7405C50.89 31.9305 51.11 32.1305 51.33 32.3305C52.06 33.0205 52.78 33.7305 53.49 34.4705C53.81 34.7905 54.11 35.1105 54.42 35.4405C55.08 36.1405 55.72 36.8605 56.35 37.5905C56.36 37.5905 56.36 37.6005 56.37 37.6105C59.59 41.3205 62.46 45.3205 64.93 49.6305C65.09 49.9005 65.24 50.1705 65.39 50.4405C66.23 51.9105 67.02 53.4005 67.74 54.9105C69.44 58.4305 70.86 62.0505 72.01 65.7805C72.7 68.0005 73.25 70.2005 73.67 72.3705C74.3 75.6705 74.62 78.9005 74.62 82.0705C74.62 87.1505 73.8 91.4905 72.15 95.0605Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.0901 63.6604L37.4301 64.9804L34.3801 66.5104L32.0801 66.2104L29.1201 65.8304L31.3101 64.7404L36.0301 62.3804L37.9001 61.4404C38.4001 61.9704 38.9201 62.5104 39.4801 63.0504L40.0901 63.6604Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M53.9401 79.4403C53.9401 81.7103 53.5601 83.4203 52.8001 84.5403C52.5101 84.9703 52.1701 85.3103 51.7701 85.5703L51.1001 85.9103C49.7101 86.4103 48.1501 86.5003 46.4001 86.1503C45.7001 86.0203 44.9701 85.8103 44.2201 85.5303V90.1103L38.6901 86.9103V82.1503C36.2001 80.0303 34.1401 77.6203 32.6001 74.9103C31.0201 72.1903 29.8301 69.1903 29.1201 65.8303L32.0801 66.2103L34.3801 66.5103C35.0101 69.3703 36.0001 71.8003 37.3801 73.8203C38.6901 75.8903 40.2701 77.3903 42.0101 78.4003C43.7501 79.4003 45.2501 79.8103 46.5101 79.5903C46.8801 79.5303 47.1801 79.3903 47.4401 79.1703C48.0701 78.6603 48.3701 77.6703 48.3701 76.2203C48.3701 74.4503 47.7401 72.6303 46.4301 70.7903C45.2101 69.0703 43.0901 66.7003 40.0901 63.6603L39.4801 63.0503C38.9201 62.5103 38.4001 61.9703 37.9001 61.4403C35.5601 58.9703 33.8001 56.6603 32.6001 54.5503C32.5401 54.4503 32.4901 54.3403 32.4401 54.2403C32.4401 54.2303 32.4401 54.2203 32.4401 54.2103C31.4201 52.2803 30.7701 50.3103 30.5201 48.3103V48.2903C30.5201 48.2903 30.5201 48.2803 30.5101 48.2703C30.4301 47.6203 30.3901 46.9803 30.3901 46.3303C30.3901 43.7903 31.1501 42.0003 32.6501 40.8703C32.8501 40.7103 33.0501 40.5603 33.2701 40.4503L33.7401 40.2103C35.0901 39.6603 36.8101 39.7203 38.8501 40.4203V35.8403L40.5401 36.8103L44.3901 39.0303V43.6103C46.3301 44.9103 48.0601 46.7803 49.6501 49.2803C51.1101 51.6203 52.1301 53.9603 52.7401 56.3003C52.7801 56.4403 52.8201 56.5703 52.8501 56.7103L49.2401 56.2903L48.4001 56.2003L47.7501 56.1203C47.3501 54.4903 46.6401 52.9003 45.6901 51.4003C44.7401 49.9403 43.4001 48.7103 41.7001 47.7303C39.8401 46.6603 38.4201 46.2403 37.4301 46.6303C36.4801 46.9903 35.9701 47.9103 35.9701 49.5503C35.9701 51.0903 36.5601 52.7003 37.8301 54.3403C38.7301 55.5503 40.2201 57.1803 42.2801 59.2503C42.9201 59.9103 43.6301 60.6003 44.3901 61.3503L44.5001 61.4603C48.2701 65.1803 50.8001 68.4803 52.0601 71.3103C53.3201 74.1703 53.9501 76.9003 53.9501 79.4403H53.9401Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.3699 76.2202C48.3699 77.6702 48.0699 78.6602 47.4399 79.1702C47.1799 79.3902 46.8799 79.5301 46.5099 79.5901C45.2499 79.8101 43.7499 79.4001 42.0099 78.4001C40.2699 77.3901 38.6899 75.8902 37.3799 73.8202C35.9999 71.8002 35.0099 69.3701 34.3799 66.5101L37.4299 64.9801L40.0899 63.6602C43.0899 66.7002 45.2099 69.0701 46.4299 70.7901C47.7399 72.6301 48.3699 74.4502 48.3699 76.2202Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M72.1499 95.0602C72.0999 95.1602 72.0599 95.2602 72.0099 95.3602C70.8399 97.8002 69.3999 99.7902 67.6599 101.34C66.8199 102.1 65.9099 102.74 64.9299 103.29C61.9699 105.03 58.4499 105.67 54.4199 105.39C50.3899 105.01 46.0799 103.56 41.5299 100.94C36.9899 98.3102 32.6799 94.7802 28.6399 90.5002C24.6099 86.1402 21.1299 81.4502 18.1699 76.2902C15.1699 71.1602 12.7899 65.7902 11.0499 60.1602C9.30994 54.5302 8.43994 49.0902 8.43994 43.8702C8.43994 38.6502 9.30994 34.1602 11.0499 30.5902C12.7899 26.9602 15.1699 24.3002 18.1699 22.6302C19.6199 21.7802 21.1899 21.1902 22.8999 20.8502C24.6699 20.4802 26.5799 20.3902 28.6399 20.5602C29.3899 20.6202 30.1499 20.7302 30.9199 20.8702C29.2699 24.3902 28.4399 28.7502 28.4399 33.8702C28.4399 38.5102 29.1299 43.3002 30.4999 48.2702C30.4999 48.2702 30.5033 48.2769 30.5099 48.2902V48.3102C30.7599 50.3102 31.4099 52.2802 32.4299 54.2102C32.4299 54.2202 32.4299 54.2302 32.4299 54.2402C33.4699 57.0202 34.6599 59.7302 36.0199 62.3802L31.2999 64.7402L29.1099 65.8302C29.8199 69.1902 31.0099 72.1902 32.5899 74.9102C34.1299 77.6202 36.1899 80.0302 38.6799 82.1502V86.9102L44.2099 90.1102L48.2799 88.0802L53.7199 85.3502C56.2299 87.5102 58.8399 89.3802 61.5199 90.9402C65.2199 93.0702 68.7699 94.4302 72.1399 95.0602H72.1499Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M56.3499 37.5902C56.3499 37.5902 56.3299 37.6202 56.3199 37.6402L50.8999 40.3502L44.3799 43.6102V39.0302L50.3899 36.0302L53.4899 34.4702C53.8099 34.7902 54.1099 35.1102 54.4199 35.4402C55.0799 36.1402 55.7199 36.8602 56.3499 37.5902Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M53.4898 34.4701L50.3898 36.0201L44.3798 39.0301L40.5298 36.8101L38.8398 35.8401L49.3598 30.5801C49.7998 30.9501 50.2398 31.3401 50.6698 31.7401C50.8898 31.9301 51.1098 32.1301 51.3298 32.3301C52.0598 33.0201 52.7798 33.7301 53.4898 34.4701Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M64.22 79.3403V80.1103L53.73 85.3503L48.29 88.0803L44.22 90.1103V85.5303C44.97 85.8103 45.7 86.0203 46.4 86.1503C48.15 86.5003 49.71 86.4103 51.1 85.9103L51.77 85.5703L53.17 84.8703L63.5 79.7003L64.22 79.3403Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M71.71 75.5903C71.51 75.7203 71.32 75.8303 71.1 75.9103C71.07 75.9203 71.04 75.9303 71 75.9403L71.71 75.5903Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M101.06 75.7904C101.06 82.0504 100.04 87.3604 97.9401 91.6804C95.8801 95.9804 93.0801 99.1704 89.5201 101.2C89.1001 101.44 88.6701 101.66 88.2301 101.87L68.9501 111.51C69.1401 111.41 69.3301 111.31 69.5201 111.2C72.5101 109.49 74.9701 106.96 76.9001 103.64C77.2701 103.02 77.6101 102.36 77.9401 101.68C78.9101 99.6904 79.6501 97.4804 80.1601 95.0704C80.7601 92.2604 81.0601 89.1604 81.0601 85.7904C81.0601 79.4904 80.0401 73.0004 77.9401 66.3004C76.0001 59.9704 73.4001 53.8904 70.1201 48.0704C69.9301 47.7204 69.7201 47.3604 69.5201 47.0104C69.3801 46.7604 69.2301 46.5204 69.0801 46.2804C66.7701 42.3604 64.1901 38.6504 61.3401 35.1304C60.4701 34.0404 59.5601 32.9604 58.6301 31.9104C58.0801 31.2804 57.5201 30.6604 56.9501 30.0504C56.9101 30.0104 56.8701 29.9704 56.8301 29.9304C56.1701 29.2204 55.4901 28.5204 54.8101 27.8504C50.6101 23.7104 46.1901 20.3004 41.5301 17.6104C39.4501 16.4004 37.4101 15.4004 35.4201 14.6004C32.2201 13.3004 29.1401 12.5204 26.1801 12.2604C26.1601 12.2504 26.1301 12.2504 26.1101 12.2504C22.0801 11.9304 18.5101 12.4504 15.3701 13.8304L33.5801 4.72037C37.1401 2.69037 41.2901 1.87037 46.1101 2.25037C50.9401 2.67037 56.0801 4.46037 61.5301 7.61037C66.9901 10.7604 72.1301 14.9104 76.9501 20.0504C81.7701 25.2404 85.9601 30.8804 89.5201 37.0104C93.0801 43.1504 95.8801 49.5804 97.9401 56.3004C100.04 63.0004 101.06 69.4904 101.06 75.7904Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M73.67 72.3704C73.34 73.8604 72.73 74.9105 71.84 75.5205L71.71 75.5904L71 75.9405L64.22 79.3404L63.5 79.7005L53.17 84.8704L51.77 85.5705C52.17 85.3105 52.51 84.9705 52.8 84.5405C53.56 83.4205 53.94 81.7105 53.94 79.4405C53.94 76.9005 53.31 74.1704 52.05 71.3104C50.79 68.4804 48.26 65.1805 44.49 61.4605L44.38 61.3505C43.62 60.6005 42.91 59.9105 42.27 59.2505C40.21 57.1805 38.72 55.5504 37.82 54.3404C36.55 52.7004 35.96 51.0905 35.96 49.5505C35.96 47.9105 36.47 46.9905 37.42 46.6305C38.41 46.2405 39.83 46.6604 41.69 47.7304C43.39 48.7104 44.73 49.9404 45.68 51.4004C46.63 52.9004 47.34 54.4904 47.74 56.1204L48.39 56.2004L49.23 56.2904L52.84 56.7105L53.47 56.3904L59.71 53.2804L64.1 51.0805C64.19 51.1605 64.28 51.2605 64.38 51.3505C65.63 52.5805 66.75 53.7705 67.74 54.9105C69.44 58.4305 70.86 62.0504 72.01 65.7804C72.7 68.0004 73.25 70.2004 73.67 72.3704Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M65.3899 50.4404L64.0999 51.0804L59.7099 53.2803L53.4699 56.3904L52.8399 56.7104C52.8099 56.5704 52.7699 56.4404 52.7299 56.3004C52.1199 53.9604 51.0999 51.6203 49.6399 49.2803C48.0499 46.7803 46.3199 44.9104 44.3799 43.6104L50.8999 40.3504L56.3199 37.6404L56.3699 37.6104C59.5899 41.3204 62.4599 45.3204 64.9299 49.6304C65.0899 49.9004 65.2399 50.1704 65.3899 50.4404Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.84 37.6602V40.4202C36.8 39.7202 35.08 39.6602 33.73 40.2102L38.84 37.6602Z"
                  stroke="#229EFF"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className="relative pt-16 lg:pt-20 xl:pt-24">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="w-full flex justify-center items-center lg:justify-between">
          <div className="hidden lg:flex w-full items-center space-x-6">
            <svg
              width={300}
              height={300}
              viewBox="0 0 97 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="1px"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M50.59 82.9454V92.2355L2 64.1854V54.8955L50.59 82.9454Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M70.5898 72.9453V82.2354L50.5898 92.2354V82.9453L70.5898 72.9453Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M34.55 24.2656C34.45 25.1656 34.4 26.1256 34.4 27.1356C34.4 27.7556 34.42 28.3656 34.46 28.9856L30.26 31.0756L27.51 32.4556L22 29.2756L19.24 27.6855L2 17.7256L22 7.72559L37.39 16.6056C35.83 18.5256 34.89 21.0756 34.55 24.2656Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M31.36 43.9656L10.62 31.9956L2 27.0156V17.7256L19.24 27.6855L22 29.2756L27.51 32.4556C27.98 34.4256 28.52 36.3656 29.13 38.2656C29.32 38.8756 29.53 39.4756 29.75 40.0856C30.23 41.3756 30.76 42.6756 31.36 43.9656Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M70.5898 62.7158V63.6559L61.9698 67.9658L53.3398 72.2759L50.5898 73.6559V68.6559L57.3298 65.2859L59.4498 64.2258H59.4598C63.0298 65.3358 66.1998 65.0959 68.9598 63.5259L69.7098 63.1459L70.5898 62.7158Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M46.25 55.1956L42.81 56.9056L40.06 58.2856L22 47.8556L19.25 46.2656L2 36.3055L10.62 31.9956L31.36 43.9656L34.1 42.5956L39.65 45.7955C39.87 46.1955 40.09 46.5856 40.32 46.9856C42.12 50.1056 44.1 52.8356 46.25 55.1956Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M73.8304 42.2954C73.5004 40.9854 73.1004 39.6755 72.6104 38.3455C71.6704 35.8055 70.4604 33.2455 68.9604 30.6555C65.0104 23.8455 60.2404 18.8255 54.6404 15.5955C54.5804 15.5555 54.5104 15.5255 54.4504 15.4855C49.3904 12.6055 45.0104 11.9855 41.3104 13.6255L40.3204 14.1155C39.1704 14.7655 38.1904 15.5955 37.3904 16.6055C35.8304 18.5255 34.8904 21.0755 34.5504 24.2655C34.4504 25.1655 34.4004 26.1255 34.4004 27.1355C34.4004 27.7555 34.4204 28.3655 34.4604 28.9855C34.5504 30.6055 34.7704 32.2355 35.1104 33.8755C35.6004 36.2155 36.3404 38.5855 37.3404 40.9755C37.9904 42.5755 38.7704 44.1754 39.6504 45.7954C39.8704 46.1954 40.0904 46.5855 40.3204 46.9855C42.1204 50.1055 44.1004 52.8354 46.2504 55.1954C48.8004 58.0154 51.6004 60.2954 54.6404 62.0554C56.3204 63.0254 57.9204 63.7455 59.4504 64.2255H59.4604C63.0304 65.3355 66.2004 65.0955 68.9604 63.5255C69.1904 63.3955 69.4104 63.2555 69.6304 63.1055C69.9704 62.8855 70.2904 62.6355 70.5904 62.3755C73.1604 60.1855 74.5704 56.7855 74.8304 52.1655C74.8604 51.6355 74.8804 51.0855 74.8804 50.5155C74.8804 47.8055 74.5304 45.0654 73.8304 42.2954ZM56.6604 53.9254L53.0004 51.8154L52.6104 51.5955V33.0055L56.6604 35.3455V53.9254ZM56.5604 28.9855C56.4804 29.2855 56.3104 29.5155 56.0604 29.6555C55.6504 29.8855 55.1804 29.8455 54.6404 29.5355C54.1004 29.2155 53.6304 28.7155 53.2204 28.0155C52.8204 27.3155 52.6104 26.6555 52.6104 26.0355C52.6104 25.4155 52.8204 24.9955 53.2204 24.7655C53.6304 24.5355 54.1004 24.5755 54.6404 24.8855C54.9604 25.0655 55.2604 25.3255 55.5204 25.6455C55.7204 25.8655 55.8904 26.1155 56.0604 26.3955C56.4604 27.0955 56.6604 27.7555 56.6604 28.3755C56.6604 28.6055 56.6304 28.8055 56.5604 28.9855Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M37.3398 40.9753L31.3598 43.9653C30.7598 42.6753 30.2298 41.3753 29.7498 40.0853C29.5298 39.4753 29.3198 38.8754 29.1298 38.2654C28.5198 36.3654 27.9798 34.4253 27.5098 32.4553L30.2598 31.0753L34.4598 28.9854C34.5498 30.6054 34.7698 32.2354 35.1098 33.8754C35.5998 36.2154 36.3398 38.5853 37.3398 40.9753Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M59.4496 64.2253L57.3296 65.2854L50.5896 68.6554C48.6296 67.2154 46.7796 65.6254 45.0196 63.8754C43.2696 62.1254 41.6196 60.2654 40.0596 58.2854L42.8096 56.9054L46.2496 55.1953C48.7996 58.0153 51.5996 60.2953 54.6396 62.0553C56.3196 63.0253 57.9196 63.7453 59.4496 64.2253Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M56.6604 49.5752V53.9252L53.0004 51.8152L52.6104 51.5952L56.6604 49.5752Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M56.6604 35.3453V49.5753L52.6104 51.5953V33.0054L56.6604 35.3453Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M56.6604 28.3756C56.6604 28.6056 56.6303 28.8056 56.5603 28.9856C56.4803 29.2856 56.3103 29.5156 56.0603 29.6556C55.6503 29.8856 55.1804 29.8456 54.6404 29.5356C54.1004 29.2156 53.6304 28.7156 53.2204 28.0156C52.8204 27.3156 52.6104 26.6556 52.6104 26.0356C52.6104 25.4156 52.8204 24.9956 53.2204 24.7656C53.6304 24.5356 54.1004 24.5756 54.6404 24.8856C54.9604 25.0656 55.2604 25.3256 55.5204 25.6456C55.7204 25.8656 55.8903 26.1156 56.0603 26.3956C56.4603 27.0956 56.6604 27.7556 56.6604 28.3756Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M50.59 68.6558V73.6558L10.62 50.5857L2 45.6057V36.3057L19.25 46.2657L22 47.8557L40.06 58.2858C41.62 60.2658 43.27 62.1257 45.02 63.8757C46.78 65.6257 48.63 67.2158 50.59 68.6558Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M70.59 72.9454L50.59 82.9454L2 54.8955L10.62 50.5854L50.59 73.6555L53.34 72.2755L61.97 67.9655L70.59 72.9454Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
              <path
                d="M94.8796 40.5155C94.8796 46.9355 92.9096 51.2755 88.9596 53.5255L87.9696 54.0155L70.5896 62.7155L69.7096 63.1455L68.9596 63.5255C69.1896 63.3955 69.4096 63.2555 69.6296 63.1055C69.9696 62.8855 70.2896 62.6355 70.5896 62.3755C73.1596 60.1855 74.5696 56.7856 74.8296 52.1656C74.8596 51.6356 74.8796 51.0855 74.8796 50.5155C74.8796 47.8055 74.5296 45.0654 73.8296 42.2954C73.4996 40.9854 73.0996 39.6755 72.6096 38.3455C71.6696 35.8055 70.4596 33.2455 68.9596 30.6555C65.0096 23.8455 60.2396 18.8255 54.6396 15.5955C54.5796 15.5555 54.5096 15.5255 54.4496 15.4855C49.3896 12.6055 45.0096 11.9855 41.3096 13.6255L60.3196 4.11551C64.2596 1.86551 69.0396 2.35549 74.6396 5.59549C80.2396 8.82549 85.0096 13.8455 88.9596 20.6555C92.9096 27.4655 94.8796 34.0855 94.8796 40.5155Z"
                stroke="#229EFF"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="w-full flex justify-center items-center lg:max-w-5xl lg:w-full lg:justify-end">
            <div className="relative z-10 flex flex-col space-y-8 px-6 sm:px-0">
              <h1 className="text-3xl md:text-6xl font-bold">
                Por que escolher a coderaw.io?
              </h1>

              <p className="w-full text-base text-muted-foreground sm:text-lg lg:max-w-2xl lg:w-full">
                Na coderaw, não somos apenas desenvolvedores. Somos parceiros estratégicos que
                combinam inovação tecnológica com uma abordagem consultiva para entregar resultados
                concretos. Seja para criar um sistema do zero, evoluir soluções existentes ou integrar
                tecnologias prontas ao seu negócio, estamos aqui para ajudar você a alcançar o próximo nível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}