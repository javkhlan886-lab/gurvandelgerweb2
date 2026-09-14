import type { Lang } from "@/lib/i18n";

type L10n = Record<Lang, string>;

// Shared by the visible FAQ on /products/sd-wan and its FAQPage JSON-LD,
// so the structured data always matches the text shown on the page.
export const SDWAN_FAQ: { q: L10n; a: L10n }[] = [
  {
    q: {
      mn: "SD-WAN нь MPLS-ээс юугаараа ялгаатай вэ?",
      en: "How is SD-WAN different from MPLS?",
      ko: "SD-WAN은 MPLS와 무엇이 다른가요?",
      zh: "SD-WAN 与 MPLS 有何不同？",
    },
    a: {
      mn: "MPLS нь нэг операторын өндөр зардалтай хувийн шугам юм. SD-WAN нь MPLS, broadband, LTE/5G зэрэг олон төрлийн холболтыг зэрэг ашиглаж, урсгалыг програмаар удирддаг тул зардал багатай, уян хатан бөгөөд нэг операторын шугамаас хамаардаггүй.",
      en: "MPLS is a costly private line from a single carrier. SD-WAN uses several link types at once — MPLS, broadband, LTE/5G — and steers traffic in software, making it cheaper, more flexible and independent of any one carrier.",
      ko: "MPLS는 단일 통신사의 고가 전용 회선입니다. SD-WAN은 MPLS, 브로드밴드, LTE/5G 등 여러 회선을 동시에 사용하고 트래픽을 소프트웨어로 제어하므로 비용이 낮고 유연하며 특정 통신사에 종속되지 않습니다.",
      zh: "MPLS 是单一运营商提供的高成本专线。SD-WAN 同时使用 MPLS、宽带、LTE/5G 等多种链路，并通过软件调度流量，成本更低、更灵活，且不依赖任何单一运营商。",
    },
  },
  {
    q: {
      mn: "Ямар байгууллагад SD-WAN тохиромжтой вэ?",
      en: "Which organizations is SD-WAN suited for?",
      ko: "SD-WAN은 어떤 조직에 적합한가요?",
      zh: "SD-WAN 适合哪些企业？",
    },
    a: {
      mn: "Банк, санхүүгийн байгууллага, худалдааны сүлжээ, уул уурхай, логистик зэрэг олон салбар, алслагдсан цэгтэй, сүлжээний тасалдал нь бизнест шууд нөлөөлдөг байгууллагуудад хамгийн тохиромжтой.",
      en: "It fits organizations with many branches or remote sites where network outages directly hurt the business — banks and financial institutions, retail chains, mining and logistics companies.",
      ko: "은행·금융기관, 유통 체인, 광산, 물류 기업 등 지점이나 원격 현장이 많고 네트워크 장애가 비즈니스에 직접 영향을 주는 조직에 가장 적합합니다.",
      zh: "最适合拥有众多分支或偏远站点、网络中断会直接影响业务的企业，如银行及金融机构、零售连锁、矿业和物流公司。",
    },
  },
  {
    q: {
      mn: "Одоо байгаа интернэт холболтоо ашиглаж болох уу?",
      en: "Can we keep our existing internet connections?",
      ko: "기존 인터넷 회선을 그대로 사용할 수 있나요?",
      zh: "可以继续使用现有的网络连接吗？",
    },
    a: {
      mn: "Болно. SD-WAN нь одоо байгаа MPLS, broadband, LTE/5G болон Wi-Fi холболтуудыг хэвээр ашиглаж, тэдгээрийг нэг overlay сүлжээнд нэгтгэдэг. Ихэнх тохиолдолд шинээр шугам татах шаардлагагүй.",
      en: "Yes. SD-WAN works on top of your existing MPLS, broadband, LTE/5G and Wi-Fi links and unifies them into a single overlay network — in most cases no new lines are needed.",
      ko: "네. SD-WAN은 기존 MPLS, 브로드밴드, LTE/5G, Wi-Fi 회선을 그대로 활용해 하나의 오버레이 네트워크로 통합합니다. 대부분의 경우 새 회선을 설치할 필요가 없습니다.",
      zh: "可以。SD-WAN 基于您现有的 MPLS、宽带、LTE/5G 与 Wi-Fi 链路运行，并将其整合为统一的 overlay 网络，多数情况下无需新增线路。",
    },
  },
  {
    q: {
      mn: "Нэг ISP-ийн шугам тасарвал юу болох вэ?",
      en: "What happens if one ISP's line goes down?",
      ko: "한 ISP 회선이 끊기면 어떻게 되나요?",
      zh: "如果某家 ISP 的线路中断会怎样？",
    },
    a: {
      mn: "SD-WAN нь шугам бүрийн чанарыг тасралтгүй хянаж, аль нэг ISP-ийн холболт тасрах эсвэл муудах үед урсгалыг бусад холболт руу автоматаар шилжүүлдэг. Ингэснээр салбаруудын ажил тасалдахгүй.",
      en: "SD-WAN continuously monitors every link. When one ISP's connection fails or degrades, traffic is automatically moved to the other links, so branch operations keep running.",
      ko: "SD-WAN은 모든 회선의 품질을 지속적으로 모니터링하며, 특정 ISP 회선이 끊기거나 품질이 저하되면 트래픽을 자동으로 다른 회선으로 전환합니다. 따라서 지점 업무가 중단되지 않습니다.",
      zh: "SD-WAN 持续监测每条链路的质量，一旦某家 ISP 的连接中断或质量下降，流量会自动切换到其他链路，确保分支业务不中断。",
    },
  },
  {
    q: {
      mn: "SD-WAN нэвтрүүлэхэд хэр зардал гарах вэ?",
      en: "How much does SD-WAN cost?",
      ko: "SD-WAN 도입 비용은 얼마인가요?",
      zh: "部署 SD-WAN 需要多少费用？",
    },
    a: {
      mn: "Зардал нь салбарын тоо, тоног төхөөрөмжийн төрөл, лицензээс хамаарна. Эхний шат болох SD-WAN + NGFW нь ойролцоогоор $15,000-аас эхэлдэг. Бид 3–5 жилийн нийт өртөг (TCO)-өөр тооцоолж, үнийн санал гаргаж өгнө.",
      en: "Cost depends on the number of sites, the equipment type and licensing. A first phase of SD-WAN + NGFW typically starts at around $15,000. We calculate the 3–5 year total cost of ownership (TCO) and prepare a tailored quote.",
      ko: "비용은 지점 수, 장비 유형, 라이선스에 따라 달라집니다. 1단계인 SD-WAN + NGFW는 일반적으로 약 $15,000부터 시작합니다. 당사는 3–5년 총소유비용(TCO)을 기준으로 산정하여 맞춤 견적을 제공합니다.",
      zh: "费用取决于站点数量、设备类型和许可方式。第一阶段 SD-WAN + NGFW 通常约 $15,000 起。我们会按 3–5 年总拥有成本（TCO）测算并提供定制报价。",
    },
  },
];
