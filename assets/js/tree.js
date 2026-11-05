/* ==========================================================================
   EXORDIUM // CAREER TREE LOGIC: Base Canônica, Filtros e Painel Raio-X
   ========================================================================== */

const CAREERS_DATABASE = [
  // --- SETOR A: EMPRESA DE SENSORES INDUSTRIAIS ---
  {
    id: "aux_adm",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 1,
    name: "Auxiliar Administrativo",
    salary: "$ 1.800 / semana",
    hours: "Seg-Sex · 08:00 às 17:00",
    cues: ["starting"],
    cuesLabels: ["Ponto de Partida Obrigatório"],
    desc: "O ponto de partida de todos. Resolve as demandas imediatas do diretor em ritmo de gincana: recolhe notas fiscais, destrava impressoras emperradas e busca café.",
    responsibilities: [
      "Minigame Closing Day: 5 minutos para entregar o fechamento semanal.",
      "Destravar a impressora mecânica (5 interações [E]).",
      "Levar café ao diretor antes das 3:20 no relógio para evitar bronca.",
      "Conferência de balancete numérico e entrega física do relatório."
    ],
    promotionNotes: "Observa a dinâmica dos colegas e ganha a chance de migrar para Suporte Técnico (Inbox) ou Vendas Internas (Spec & Deal).",
    dialogQuote: "A impressora travou de novo e o diretor quer o café na mesa dele antes da reunião das 2:30. Corre!",
    dialogSpeaker: "Ana · Colega de Escritório",
    dialogImage: "assets/img/closing_day_printer.png"
  },
  {
    id: "service_desk",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 2,
    name: "Service Desk (Suporte Técnico)",
    salary: "$ 2.200 / semana",
    hours: "Seg-Sex · 08:00 às 17:00",
    cues: ["arcade"],
    cuesLabels: ["Triagem em Tempo Real"],
    desc: "Na linha de frente dos tickets. Classifica e-mails em 5 categorias e decide solicitações de garantia de 24 meses sob pressão de cronômetro.",
    responsibilities: [
      "Triar e-mails em Pergunta Técnica, Garantia, Reclamação, Vendas e Phishing.",
      "Identificar links maliciosos com tooltips destacando URLs suspeitas.",
      "Decidir garantia: Cobrir apenas defeito de fábrica; imersão apenas para sensores IP68 (CAM-4); raios/tempestades NUNCA têm cobertura.",
      "Encaminhar desvios de leitura sutis à engenharia."
    ],
    promotionNotes: "Promoção automática por bom desempenho para Supervisor de Qualidade e Atendimento.",
    dialogQuote: "O cliente mergulhou o transmissor PT-200 no tanque, mas ele só é IP65! Se aprovar a garantia, a empresa perde $420 do nosso bolso!",
    dialogSpeaker: "Ben · Analista de Suporte",
    dialogImage: "assets/img/job_inbox.png"
  },
  {
    id: "inside_sales",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 2,
    name: "Inside Sales (Vendas Internas)",
    salary: "$ 2.000 / sem + comissão de 3%",
    hours: "Seg-Sex · 08:00 às 17:00",
    cues: ["bonus"],
    cuesLabels: ["Comissão por Venda"],
    desc: "Negocia sensores industriais pelo computador. Avalia temperatura, pressão e sinal elétrico (4-20mA, 0-10V) e barganha sem esgotar a paciência do cliente.",
    responsibilities: [
      "Cruzar especificações de catálogo (PT-100 a PT-400, sondas térmicas TH-10 a TH-50).",
      "Evitar 'oversell' e nunca vender sensor fora da faixa técnica solicitada.",
      "Risco canônico: Vender sensor incompatível que derrete a 80 °C gera processo judicial e demissão!",
      "Negociar faixas de desconto (0% a 20%) para fechar antes da 3ª recusa."
    ],
    promotionNotes: "Permite escolher entre Supervisor Comercial, Vendas Externas ou Gerente de Vendas.",
    dialogQuote: "O cliente quer pagar $900 numa sonda que aguente 80 °C. Se eu empurrar a de 45 °C baratinha, ela vai derreter na caldeira dele...",
    dialogSpeaker: "Vendedor Interno",
    dialogImage: "assets/img/job_deal.png"
  },
  {
    id: "quality_supervisor",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 3,
    name: "Supervisor de Qualidade e Atendimento",
    salary: "$ 3.500 / semana",
    hours: "Seg-Sex · 08:00 às 17:00",
    cues: ["bonus"],
    cuesLabels: ["Orçamento Vira Bônus"],
    desc: "Atua como ouvidoria de primeira instância. Analisa reclamações graves, concede compensações de 10% a 200% do valor do produto e aprova garantias especiais.",
    responsibilities: [
      "Gerenciar o orçamento semanal de indenizações e acordos.",
      "Decisão estratégica: O dinheiro que sobra da verba no final da semana é convertido integralmente em performance e prestígio pessoal!",
      "Conceder brindes e estornos para conter crises de clientes indignados."
    ],
    promotionNotes: "Caminho direto para Analista de Inteligência Competitiva ou CFO.",
    dialogQuote: "Sobraram $ 1.200 na minha verba de conciliação esta sexta-feira. Isso vai direto pra minha avaliação de promoção!",
    dialogSpeaker: "Supervisor de Atendimento",
    dialogImage: "assets/img/job_office_elevator.png"
  },
  {
    id: "external_sales",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 3,
    name: "Vendas Externas (A Campo)",
    salary: "$ 3.000 / sem + comissões",
    hours: "Seg-Sex · 08:00 às 17:00 (Rua)",
    cues: ["bonus"],
    cuesLabels: ["Desbloqueia Modificador +20%"],
    desc: "Visitas técnicas a indústrias e clientes corporativos em SPRF. Quem passa por aqui e chega a Gerente de Vendas conquista o cobiçado modificador permanente.",
    responsibilities: [
      "Prospectar indústrias e fechar contratos de alto volume na cidade.",
      "Garante a conquista do título permanente: 'Eu vi, eu fui e eu conquistei' (+20% em todos os salários do setor comercial!)."
    ],
    promotionNotes: "Promoção para Gerente de Vendas com bônus de 20%, ou salto para Vice-Diretor.",
    dialogQuote: "Eu vi, eu fui e eu conquistei! Esse contrato de sensores para o polo industrial garantiu 20% a mais no meu bolso para sempre.",
    dialogSpeaker: "Representante Comercial",
    dialogImage: "assets/img/downtown.png"
  },
  {
    id: "sales_manager",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 3,
    name: "Gerente de Vendas",
    salary: "$ 6.000 / semana",
    hours: "Seg-Sex · Flexível",
    cues: ["crime", "danger"],
    cuesLabels: ["Esquema Caixa 2", "Risco de Prisão (X9)"],
    desc: "Analisa métricas e monitora e-mails de vendedores. Pode extorquir esquemas de desvio ('Caixa 2') recebendo 50% todo dia, mas corre 4% de risco de cair na armadilha do Diretor com 4 policiais!",
    responsibilities: [
      "Pode bater o ponto e circular pela cidade se responder aos chamados.",
      "Pode demitir vendedores por justa causa.",
      "Esquema secreto: Entrar no desvio de vendas e lucrar 50% diário das fraudes.",
      "Evento canônico X9 (4% de chance): O vendedor é informante do Diretor; a polícia dá voz de prisão imediata por corrupção corporativa!"
    ],
    promotionNotes: "Promoção para Vice-Diretor da empresa.",
    dialogQuote: "Você achou que eu ia te demitir? Quem disse que você será demitido? Policiais, podem entrar!",
    dialogSpeaker: "Diretor da Empresa · Flagrante",
    dialogImage: "assets/img/job_hire_dialog.png"
  },
  {
    id: "intel_analyst",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 4,
    name: "Analista de Inteligência Competitiva",
    salary: "$ 7.000 / semana",
    hours: "Sem controle de ponto rígido",
    cues: ["crime", "danger"],
    cuesLabels: ["Espionagem Industrial", "Relatórios Falsos"],
    desc: "Avalia concorrentes e elabora relatórios semanais. É cortejado por corporações rivais para vazar projetos secretos de sensores em troca de quantias exorbitantes.",
    responsibilities: [
      "Escrever relatórios maquiados dizendo que a empresa é líder invencível.",
      "Receber ofertas secretas no celular pessoal para vazar protótipos de sensores.",
      "Risco: O TI monitora a rede e os concorrentes podem ser armadilha do Diretor."
    ],
    promotionNotes: "Promoção direta para Diretor Financeiro (CFO).",
    dialogQuote: "A concorrente me ofereceu $ 15.000 para vazar o esquema elétrico da nova sonda térmica. Se a diretoria descobrir, é cadeia na certa.",
    dialogSpeaker: "Analista de Mercado",
    dialogImage: "assets/img/job_office_elevator.png"
  },
  {
    id: "vice_director",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 4,
    name: "Vice-Diretor Executivo",
    salary: "$ 15.000 / semana",
    hours: "Seg, Qua, Sex · 09:00 às 11:00 (2h/dia!)",
    cues: ["executive"],
    cuesLabels: ["Regime 2h/dia · 3 dias/sem"],
    desc: "O ápice do conforto executivo. Trabalha apenas 2 horas por dia, três dias por semana. Sala privativa e acesso irrestrito às decisões corporativas.",
    responsibilities: [
      "Carga horária ultrarreduzida (6 horas semanais totais).",
      "Autoridade para contratar e demitir funcionários de todos os escalões.",
      "Caminho mais curto e rápido para se tornar Diretor Geral (CEO)."
    ],
    promotionNotes: "Promoção direta para CEO.",
    dialogQuote: "Duas horinhas de reunião na segunda, quarta e sexta. O resto da semana é livre para aproveitar a vida em SPRF.",
    dialogSpeaker: "Vice-Diretor",
    dialogImage: "assets/img/job_director_press.png"
  },
  {
    id: "cfo",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 4,
    name: "Diretor Financeiro (CFO)",
    salary: "$ 15.000 / semana",
    hours: "Seg, Qua, Sex · 09:00 às 11:00 (2h/dia!)",
    cues: ["executive"],
    cuesLabels: ["Exige 4x Mais Performance"],
    desc: "Idêntico ao Vice-Diretor na rotina relaxada de 2h diárias, mas exige 4 vezes mais performance para alcançar a cadeira de Diretor Geral.",
    responsibilities: [
      "Aprovar balanços e orçamentos gerais da empresa de sensores.",
      "Regime de 6 horas semanais com salário de elite ($ 15.000/sem).",
      "Precisa quadruplicar a entrega de resultados se quiser ultrapassar o Vice-Diretor."
    ],
    promotionNotes: "Caminho difícil para Diretor Geral (CEO).",
    dialogQuote: "Os números do trimestre bateram recorde, mas o Conselho ainda exige 4 vezes mais que o vice para me dar a presidência.",
    dialogSpeaker: "CFO · Diretor Financeiro",
    dialogImage: "assets/img/closing_day_boss.png"
  },
  {
    id: "director_ceo",
    branch: "office",
    branchName: "Empresa de Sensores",
    level: 5,
    name: "Diretor Geral (CEO)",
    salary: "$ 40.000 / semana",
    hours: "Sem horário fixo · Total liberdade",
    cues: ["executive", "bonus"],
    cuesLabels: ["Comando Total", "Minigame de Crise"],
    desc: "O topo absoluto. Joga golfe no carpete do gabinete, carimba autorizações sem ler (arriscando falência) e encara coletivas de imprensa quentes na TV Maresol.",
    responsibilities: [
      "Minigame 'Assinar sem ler': Carimbar centenas de notas em 5 segundos ou ler detalhadamente para caçar desvios.",
      "Minigame 'Coletiva de Imprensa': Defender a empresa ao vivo na TV Maresol com jargões corporativos quando estoura escândalo de sensores derretidos.",
      "Salário colossal de $ 40.000 por semana (pago toda sexta às 17h)."
    ],
    promotionNotes: "Nenhum cargo acima na corporação. Prestígio máximo em SPRF.",
    dialogQuote: "Senhores jornalistas da TV Maresol: o derretimento do sensor foi um evento pontual de sobrecarga exógena sob auditoria estrita!",
    dialogSpeaker: "CEO da Empresa · Coletiva",
    dialogImage: "assets/img/job_director_press.png"
  },

  // --- SETOR B: REDE DE FARMÁCIAS ---
  {
    id: "pharm_att1",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 1,
    name: "Atendente de Balcão 1",
    salary: "$ 1.600 / semana",
    hours: "Seg-Sex · Turno Manhã: 07:00 às 15:00",
    cues: ["starting"],
    cuesLabels: ["Entrada Farmacêutica"],
    desc: "Opera o caixa da drogaria e atualiza etiquetas de preços nas gôndolas conforme o sistema ANVISA determina.",
    responsibilities: [
      "Atender clientes na fila e receber pagamentos.",
      "Remarcar produtos nas prateleiras conforme a tabela de preços do dia."
    ],
    promotionNotes: "Promoção para Atendente 2.",
    dialogQuote: "Preciso remarcar todas as vitaminas do corredor 3 antes do supervisor abrir o segundo caixa.",
    dialogSpeaker: "Atendente 1",
    dialogImage: "assets/img/job_pharmacy_shelf.png"
  },
  {
    id: "pharm_att2",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 2,
    name: "Atendente de Balcão 2",
    salary: "$ 1.800 / semana",
    hours: "Seg-Sex · Turno Tarde/Noite: 15:00 às 23:00",
    cues: ["arcade"],
    cuesLabels: ["Dispensação Controlada"],
    desc: "Atua no balcão de remédios e começa a lidar com a dispensação de medicamentos controlados sob retenção de receita.",
    responsibilities: [
      "Verificação de receitas de antibióticos e controlados (paródia ANVISA).",
      "Conferência de dosagens e atendimento de prescrições médicas."
    ],
    promotionNotes: "Promoção para Supervisor de Farmácia.",
    dialogQuote: "Essa receita de clonazepam está sem o carimbo legível do médico do Hospital Regional. Não posso liberar!",
    dialogSpeaker: "Atendente 2",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_sup",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 3,
    name: "Supervisor de Drogaria",
    salary: "$ 2.500 / semana",
    hours: "Ter-Sáb · Abertura ou Fechamento",
    cues: ["bonus"],
    cuesLabels: ["Abre/Fecha Loja · Carro-Forte"],
    desc: "Abre e fecha a loja física. Aplica descontos gerenciais, faz sangria de valores dos caixas para o cofre e aciona o carro-forte.",
    responsibilities: [
      "Resolver impasses de clientes difíceis no balcão.",
      "Transferir dinheiro dos caixas para o cofre ao atingir o teto de segurança.",
      "Acionar a empresa de transporte de valores quando o cofre acumula o volume mínimo."
    ],
    promotionNotes: "Caminho para Gerente ou Farmacêutico.",
    dialogQuote: "O cofre atingiu o teto de segurança de $ 20.000. Já protocolei o chamado para o carro-forte passar aqui às 18h.",
    dialogSpeaker: "Supervisor de Loja",
    dialogImage: "assets/img/job_pharmacy_shelf.png"
  },
  {
    id: "pharmacist",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 4,
    name: "Farmacêutico Responsável",
    salary: "$ 5.000 / sem + PLR generosa",
    hours: "Seg-Sex · Manhã · Sem ponto rígido",
    cues: ["diploma", "bonus"],
    cuesLabels: ["Exige Diploma em Farmácia", "Participação nos Lucros"],
    desc: "Cargo técnico essencial. Aplica injeções, fura orelhas (com brincos da própria drogaria), afere pressão, mede glicose e realiza testes de beta-hCG.",
    responsibilities: [
      "Obrigatório ter graduação em Farmácia.",
      "Procedimentos clínicos na sala privativa (injeções, furos, testes).",
      "Pode realizar qualquer tarefa de balconista e supervisor."
    ],
    promotionNotes: "Pode se fundir com o cargo de Gerente para formar o 'Farmacêutico-Gerente' (+50% salário!).",
    dialogQuote: "A aplicação do antibiótico injetável está pronta na sala 2. Já conferi a prescrição com o médico.",
    dialogSpeaker: "Dra. Farmacêutica",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_mgr",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 4,
    name: "Gerente de Loja",
    salary: "$ 5.000 / sem + PLR generosa",
    hours: "Sem horário fixo · Gestão da Drogaria",
    cues: ["bonus"],
    cuesLabels: ["Contrata/Demite · PLR"],
    desc: "Comanda o funcionamento da unidade. Elabora escalas de folga, contrata e demite funcionários. Sofre perda de performance se filas demorarem.",
    responsibilities: [
      "Montar escalas de atendentes e balconistas (máximo 5 dias/sem por CLT da cidade).",
      "Controlar o índice de satisfação dos clientes e tempos de fila.",
      "Pode ser contratado diretamente sem subir a escada."
    ],
    promotionNotes: "Promoção para Gerente Regional da Rede.",
    dialogQuote: "A fila do caixa 1 está dobrando a gôndola de perfumaria! Se a satisfação cair, a nossa PLR despenca na sexta.",
    dialogSpeaker: "Gerente de Drogaria",
    dialogImage: "assets/img/job_hire_dialog.png"
  },
  {
    id: "pharm_mgr_special",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 4,
    name: "Farmacêutico-Gerente (Híbrido)",
    salary: "$ 7.500 / sem + PLR (+50% Permanente!)",
    hours: "Sem horário fixo · Autonomia Total",
    cues: ["diploma", "bonus"],
    cuesLabels: ["Bônus Permanente +50%", "Aplica Injeções & Comanda"],
    desc: "A combinação perfeita aprovada no cânone. O gerente que se forma em Farmácia (ou o farmacêutico promovido a gerente) ganha +50% no salário base permanentemente!",
    responsibilities: [
      "Substitui o farmacêutico em ausências e assume qualquer posto da loja.",
      "Bônus permanente de 50% mantido mesmo ao trocar de rede farmacêutica.",
      "Comanda contratações, demissões e a responsabilidade técnica do estabelecimento."
    ],
    promotionNotes: "Promoção direta para Gerente Regional.",
    dialogQuote: "Assumir a gerência e o CRF técnico da filial me garantiu $ 7.500 semanais fixos mais a participação nos lucros da rede inteira!",
    dialogSpeaker: "Farmacêutico-Gerente",
    dialogImage: "assets/img/job_pharmacy_rx.png"
  },
  {
    id: "pharm_regional",
    branch: "pharmacy",
    branchName: "Rede Farmacêutica",
    level: 5,
    name: "Gerente Regional de Farmácias",
    salary: "$ 9.000 / semana",
    hours: "Seg-Sex · 08:00 às 17:00 (Rotina Externa)",
    cues: ["executive"],
    cuesLabels: ["Inspeções Técnicas", "Demite Gerentes"],
    desc: "Supervisiona todas as unidades da cidade. Faz blitz de conformidade (jalecos limpos, equipe completa, estoque regular) e prioriza filiais com queixas.",
    responsibilities: [
      "Auditar o cumprimento das normas sanitárias e conferência de medicamentos.",
      "Poder de demitir gerentes e supervisores de loja em caso de irregularidade.",
      "Apenas gerentes de loja internos podem ser promovidos para este cargo."
    ],
    promotionNotes: "O ápice da carreira farmacêutica no jogo.",
    dialogQuote: "A loja do centro está sem o farmacêutico em horário de pico e com jaleco fora de padrão. Notificação emitida e desconto na gerência!",
    dialogSpeaker: "Gerente Regional",
    dialogImage: "assets/img/downtown.png"
  },

  // --- SETOR C: RESTAURANTES ---
  {
    id: "rest_hall",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 1,
    name: "Auxiliar de Salão",
    salary: "$ 1.500 / semana",
    hours: "Qua-Dom · 09:00 às 15:30 (Almoço)",
    cues: ["starting"],
    cuesLabels: ["Organização do Salão"],
    desc: "Mantém mesas higienizadas, garrafas de café térmicas abastecidas e guardanapos repostos. Se faltar guardanapo, o cliente reclama e desconta pontos em dobro!",
    responsibilities: [
      "Limpar mesas imediatamente após os clientes saírem.",
      "Nunca deixar faltar café cortesia ou guardanapos.",
      "No modo Brasil: cometer erro deduz o dobro dos pontos que a tarefa ganharia!"
    ],
    promotionNotes: "Promoção para Garçom/Caixa.",
    dialogQuote: "Tem mesa nova sentando no salão 2! Se faltar guardanapo na mesa deles, o chefe corta meu bônus!",
    dialogSpeaker: "Auxiliar de Salão",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_kitchen_helper",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 1,
    name: "Auxiliar de Cozinha",
    salary: "$ 1.500 / semana",
    hours: "Qua-Dom · 09:00 às 15:30",
    cues: ["starting"],
    cuesLabels: ["Pré-Preparo & Pratos"],
    desc: "Descasca batatas, corta cenouras, pica cebolinha, enche panelas com água e lava a louça com restos de comida orgânicos.",
    responsibilities: [
      "Abastecer a bancada do cozinheiro e chef.",
      "Descartar imediatamente ingredientes fora do prazo de validade.",
      "Lavar louça suja com manchas dinâmicas."
    ],
    promotionNotes: "Pode ser promovido a Cozinheiro ou a Garçom/Caixa.",
    dialogQuote: "O chef pediu 10 kg de batatas descascadas para o almoço do meio-dia. Não posso atrasar o fogo!",
    dialogSpeaker: "Auxiliar de Cozinha",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_waiter",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 2,
    name: "Garçom / Operador de Caixa",
    salary: "$ 1.700 / semana",
    hours: "Qua-Dom · Almoço ou Jantar",
    cues: ["arcade"],
    cuesLabels: ["Buffet ou À La Carte"],
    desc: "No Buffet, repõe cubas de aço aquecidas e cobra sobremesas/bebidas. No À La Carte fino, serve pratos à mesa e busca vinhos na adega refrigerada.",
    responsibilities: [
      "Buffet: Manter as cubas quentes abastecidas e receber pagamentos.",
      "À La Carte: Atender mesas com botão de chamada, levar pedidos à janela da cozinha e operar a máquina de cartão.",
      "Restaurante Fino: Abrir vinhos selecionados na adega e servir taças adequadas."
    ],
    promotionNotes: "Promoção para Gerente de Restaurante (Atenção: garçom nunca vira cozinheiro!).",
    dialogQuote: "Mesa 4 pediu um tinto seco da adega e o salmão grelhado do chef. Indo buscar a garrafa na temperatura certa!",
    dialogSpeaker: "Garçom À La Carte",
    dialogImage: "assets/img/job_restaurant_fancy.png"
  },
  {
    id: "rest_cook",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 2,
    name: "Cozinheiro de Linha",
    salary: "$ 2.400 / semana",
    hours: "Qua-Dom · Turno de Cozinha",
    cues: ["arcade"],
    cuesLabels: ["Guarnições & Acompanhamentos"],
    desc: "Prepara os carboidratos e entradas: arroz, massas, risotos e molhos conforme o ritmo ditado pelos pedidos do salão.",
    responsibilities: [
      "Cozinhar todas as guarnições com precisão de tempo.",
      "Coordenar a bancada com o Auxiliar de Cozinha.",
      "Não faz proteínas nem empratamento final (tarefa exclusiva do Chef)."
    ],
    promotionNotes: "Com diploma de Gastronomia, é promovido a Chef de Cozinha.",
    dialogQuote: "O risoto e o purê trufado estão prontos na janela, chef! Só faltam os cortes de carne para finalizar.",
    dialogSpeaker: "Cozinheiro",
    dialogImage: "assets/img/job_restaurant_buffet.png"
  },
  {
    id: "rest_chef",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 3,
    name: "Chef Executivo",
    salary: "$ 12.600 / semana (Dobro do Gerente + 50%!)",
    hours: "Qua-Dom · Serviço Gastronômico",
    cues: ["diploma", "bonus"],
    cuesLabels: ["Exige Diploma Gastronomia", "Salário Triplo"],
    desc: "A autoridade máxima da culinária. Prepara carnes, peixes e finaliza o empratamento artístico. Ganha o dobro do gerente mais 50% de bônus permanente!",
    responsibilities: [
      "Obrigatório ter graduação em Gastronomia.",
      "Ponto perfeito de carnes, aves e frutos do mar.",
      "Montagem impecável dos pratos e liberação na janela para os garçons.",
      "Remuneração excepcional de $ 12.600 por semana."
    ],
    promotionNotes: "Pode comprar a franquia e se tornar Gestor de Franquia / Dono.",
    dialogQuote: "Prato finalizado com corte nobre e emulsão de ervas. Garçom, mesa 2 imediatamente enquanto está quente!",
    dialogSpeaker: "Chef Executivo",
    dialogImage: "assets/img/job_restaurant_fancy.png"
  },
  {
    id: "rest_franchise_owner",
    branch: "restaurant",
    branchName: "Restaurantes",
    level: 4,
    name: "Gestor de Franquia / Proprietário",
    salary: "$ 25.000+ / semana (Lucro Líquido)",
    hours: "Autonomia Empresarial Absoluta",
    cues: ["executive", "bonus"],
    cuesLabels: ["Dono da Rede", "Lucro na Conta Pessoal"],
    desc: "Proprietário de múltiplos restaurantes em SPRF. Paga fornecedores, impostos e salários; todo o lucro líquido residual é transferido diretamente para sua conta pessoal!",
    responsibilities: [
      "Auditar filiais, cardápios e qualidade de atendimento.",
      "Poder exclusivo de contratar e demitir chefs de cozinha.",
      "Todo o lucro líquido após custos operacionais vira patrimônio do jogador."
    ],
    promotionNotes: "Patrão e investidor autônomo na economia viva da cidade.",
    dialogQuote: "Todas as contas e fornecedores quitados esta sexta. O saldo líquido de $ 32.000 já foi transferido pra minha conta corrente!",
    dialogSpeaker: "Gestor da Franquia",
    dialogImage: "assets/img/condo_alphaville.png"
  },

  // --- SETOR D: AUTÔNOMOS E TERCEIRIZADOS ---
  {
    id: "cleaning_worker",
    branch: "freelance",
    branchName: "Serviços Terceirizados",
    level: 1,
    name: "Profissional de Limpeza (Faxina)",
    salary: "$ 1.400 a $ 1.500 / semana + bônus",
    hours: "Qualquer hora das 24h do dia!",
    cues: ["bonus"],
    cuesLabels: ["Bônus +$200 por Streak", "Sistema de 5 Estrelas"],
    desc: "Atende contratos comerciais (escritórios, lojas, farmácias e restaurantes). Lava pisos, passa pano nos móveis e rega as plantas. Trabalhar bem desbloqueia até a Estrela Roxa com Borda Dourada!",
    responsibilities: [
      "Passar rodo no chão molhado: se demorar para secar, clientes reclamam e descontam $20 do pagamento!",
      "Regar plantas murchas (ficam verde-vivo e radiantes quando cuidadas).",
      "Duas empresas para escolher: Spotless Ltd. (paga mais, mais rigorosa) ou Clean Family Services (mais tolerante).",
      "Bônus de $ 200 a cada 5 dias perfeitos seguidos.",
      "Com 5 estrelas e estrela roxa, libera contratos para limpar mansões de Alphaville!"
    ],
    promotionNotes: "No futuro, promoção para Limpeza Hospitalar (+40% de salário base).",
    dialogQuote: "O piso já está seco com o rodo e todas as plantas da recepção estão verdinhas. Mais um dia perfeito para subir pras 5 estrelas!",
    dialogSpeaker: "Faxineiro Profissional",
    dialogImage: "assets/img/job_cleaning_plants.png"
  },
  {
    id: "courier_bike",
    branch: "freelance",
    branchName: "Serviços Terceirizados",
    level: 1,
    name: "Entregador Ciclista (App de Entregas)",
    salary: "Pago por corrida (imediato)",
    hours: "Livre · Quando quiser ligar o app",
    cues: ["starting"],
    cuesLabels: ["Pagamento na Hora", "Sem Antecedentes"],
    desc: "Pedala pelas ruas e ciclovias entregando refeições, medicamentos da farmácia e malotes com documentos entre empresas e a Prefeitura de SPRF.",
    responsibilities: [
      "Agilidade no trânsito sem atropelar pedestres.",
      "Pode continuar trabalhando mesmo com status [Potencial Criminoso] ou [Fugitivo]!",
      "Sem chefe, sem metas impostas: recebe o dinheiro imediatamente após a corrida."
    ],
    promotionNotes: "Comprar bicicleta esportiva na Spoke Cycles para acelerar entregas.",
    dialogQuote: "Mais uma entrega de remédios expressa da farmácia central para o condomínio de casas. Pagamento caiu na hora no aplicativo!",
    dialogSpeaker: "Entregador de Bike",
    dialogImage: "assets/img/player_home.png"
  },
  {
    id: "ride_driver",
    branch: "freelance",
    branchName: "Serviços Terceirizados",
    level: 2,
    name: "Motorista de Aplicativo (Carro)",
    salary: "Pago por corrida (com passageiros)",
    hours: "Livre · Noites e fins de semana",
    cues: ["arcade", "danger"],
    cuesLabels: ["Eventos Raros & Calotes", "Bloqueio Judicial"],
    desc: "Dirige seu próprio veículo transportando cidadãos de SPRF. Encara dezenas de eventos raros inspirados na vida real, desde caloteiros até passageiros enigmáticos ligados à invasão!",
    responsibilities: [
      "Conduzir passageiros em segurança até o destino.",
      "Eventos raros canônicos: O passageiro que pede o PIX e promete pagar amanhã (alguns nunca pagam!); passageira nervosa da TV Maresol atrasada pro jornal ao vivo; 5 passageiros para 4 lugares (arrisca blitz policial!).",
      "Se for classificado como [Procurado] pela Justiça, o aplicativo é bloqueado imediatamente!"
    ],
    promotionNotes: "Comprar sedãs de luxo na Motorama ou Eastside Auto para atrair clientes de alta renda.",
    dialogQuote: "Moço, me passa seu PIX que eu pago assim que chegar em casa, prometo! (Spoiler: ele pode sumir e nunca transferir o dinheiro).",
    dialogSpeaker: "Passageiro Suspeito",
    dialogImage: "assets/img/crash_scene.png"
  }
];

// --- RENDERIZAÇÃO DA ÁRVORE INTERATIVA ---
function renderCareerTree(filter = 'all', cueFilter = 'all') {
  const container = document.getElementById('treeHierarchyContainer');
  if (!container) return;

  container.innerHTML = '';

  // Filtra profissões
  const filtered = CAREERS_DATABASE.filter(item => {
    const matchBranch = (filter === 'all' || item.branch === filter);
    const matchCue = (cueFilter === 'all' || item.cues.includes(cueFilter));
    return matchBranch && matchCue;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="text-align: center;">
        <h4>Nenhuma profissão encontrada para este filtro combinado.</h4>
        <p>Experimente alternar os ramos ou clicar em "Ver Todas as Carreiras".</p>
      </div>
    `;
    return;
  }

  // Agrupa por níveis (1 a 5)
  const levels = [1, 2, 3, 4, 5];
  levels.forEach(lvl => {
    const inLevel = filtered.filter(i => i.level === lvl);
    if (inLevel.length === 0) return;

    const row = document.createElement('div');
    row.className = 'tree-level-row';

    const header = document.createElement('div');
    header.className = 'level-header';
    header.innerHTML = `
      <span class="level-badge">Nível ${lvl}</span>
      <span class="level-title">${getLevelTitle(lvl)}</span>
    `;
    row.appendChild(header);

    const nodesGrid = document.createElement('div');
    nodesGrid.className = 'level-nodes';

    inLevel.forEach(job => {
      const node = document.createElement('div');
      node.className = 'tree-node';
      node.setAttribute('data-id', job.id);
      node.setAttribute('data-cue', job.cues.join(' '));

      // Visual cues badges
      let cuePillsHtml = '';
      if (job.cues.includes('bonus')) {
        cuePillsHtml += `<span class="cue-pill pill-bonus">⭐ BÔNUS ESPECIAL</span>`;
      }
      if (job.cues.includes('crime')) {
        cuePillsHtml += `<span class="cue-pill pill-crime">⚖️ ESQUEMA ILÍCITO</span>`;
      }
      if (job.cues.includes('danger')) {
        cuePillsHtml += `<span class="cue-pill pill-danger">🚨 RISCO DE PRISÃO</span>`;
      }
      if (job.cues.includes('diploma')) {
        cuePillsHtml += `<span class="cue-pill pill-diploma">🎓 DIPLOMA OBRIGATÓRIO</span>`;
      }
      if (job.cues.includes('executive')) {
        cuePillsHtml += `<span class="cue-pill pill-executive">👔 REGIME EXECUTIVO</span>`;
      }

      node.innerHTML = `
        <div class="node-header">
          <div>
            <div class="node-branch-tag">${job.branchName}</div>
            <div class="node-role-name">${job.name}</div>
          </div>
        </div>
        <div class="node-cues-row">${cuePillsHtml}</div>
        <p class="node-desc">${job.desc.substring(0, 110)}...</p>
        <div class="node-footer">
          <span class="node-salary">${job.salary}</span>
          <span class="node-hours">${job.hours.split('·')[0]}</span>
        </div>
      `;

      node.addEventListener('click', () => {
        document.querySelectorAll('.tree-node').forEach(n => n.classList.remove('selected'));
        node.classList.add('selected');
        showCareerDetails(job);
        if (typeof SFX !== 'undefined') SFX.select();
      });

      nodesGrid.appendChild(node);
    });

    row.appendChild(nodesGrid);
    container.appendChild(row);
  });
}

function getLevelTitle(lvl) {
  switch(lvl) {
    case 1: return "Porta de Entrada · Operacional";
    case 2: return "Linha de Frente Técnica & Vendas";
    case 3: return "Supervisão, Campo e Especialistas";
    case 4: return "Gerência Alta & Executivos";
    case 5: return "Diretoria Geral & Donos de Rede";
    default: return "";
  }
}

// Exibe os detalhes da carreira no painel inferior
function showCareerDetails(job) {
  const panel = document.getElementById('careerDetailPanel');
  if (!panel) return;

  const respItems = job.responsibilities.map(r => `<li>${r}</li>`).join('');

  panel.innerHTML = `
    <div class="panel-header-badge">
      <div>
        <div class="eyebrow">${job.branchName} · Nível ${job.level}</div>
        <h3 class="panel-title">${job.name}</h3>
      </div>
      <div class="node-cues-row">
        ${job.cuesLabels.map(l => `<span class="cue-pill pill-bonus">${l}</span>`).join('')}
      </div>
    </div>

    <div class="panel-stats-grid">
      <div class="panel-stat-card">
        <span class="panel-stat-label">Remuneração Semanal</span>
        <span class="panel-stat-val salary-highlight">${job.salary}</span>
      </div>
      <div class="panel-stat-card">
        <span class="panel-stat-label">Jornada de Trabalho</span>
        <span class="panel-stat-val" style="font-size: 15px;">${job.hours}</span>
      </div>
      <div class="panel-stat-card">
        <span class="panel-stat-label">Requisito para Ingresso</span>
        <span class="panel-stat-val" style="font-size: 15px;">${job.cues.includes('diploma') ? 'Diploma Universitário' : 'Promoção por Performance'}</span>
      </div>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">📋 Rotina Operacional e Responsabilidades</h4>
      <ul style="padding-left: 20px; line-height: 1.6; color: #cbd5e1; display: grid; gap: 6px;">
        ${respItems}
      </ul>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">🚀 Progressão e Oportunidades</h4>
      <p style="color: var(--text-muted); font-size: 15px;">${job.promotionNotes}</p>
    </div>

    <!-- Cápsula de Diálogo e Captura Canônica -->
    <div class="dialog-capsule ${job.cues.includes('danger') ? 'capsule-police' : 'capsule-office'}" style="margin-top: 10px;">
      <div class="dialog-avatar">
        <img src="${job.dialogImage}" alt="Registro do Jogo">
        <span class="status-indicator"></span>
      </div>
      <div class="dialog-body">
        <div class="dialog-meta">
          <div class="speaker-info">
            <span class="speaker-name">${job.dialogSpeaker}</span>
            <span class="speaker-role">${job.branchName}</span>
          </div>
          <span class="dialog-time">REGISTRO CANÔNICO #EX-${job.id.toUpperCase()}</span>
        </div>
        <div class="dialog-bubble">
          <p class="speech-text">"${job.dialogQuote}"</p>
          <div class="dialog-media" style="margin-top: 12px; cursor: pointer;">
            <img src="${job.dialogImage}" alt="Gameplay ${job.name}">
            <div class="media-caption">
              <span>Captura Real do Jogo · ${job.name}</span>
              <span class="media-badge">INTERATIVO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Scroll suave até o painel
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Inicialização dos Filtros na Página
document.addEventListener('DOMContentLoaded', () => {
  let currentBranch = 'all';
  let currentCue = 'all';

  const branchButtons = document.querySelectorAll('.branch-filter-btn');
  branchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      branchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBranch = btn.getAttribute('data-branch');
      renderCareerTree(currentBranch, currentCue);
    });
  });

  const cueButtons = document.querySelectorAll('.cue-filter-btn');
  cueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cueButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCue = btn.getAttribute('data-cue');
      renderCareerTree(currentBranch, currentCue);
    });
  });

  // Render inicial
  renderCareerTree();

  // Seleciona a primeira profissão de exemplo
  if (CAREERS_DATABASE.length > 0) {
    showCareerDetails(CAREERS_DATABASE[0]);
  }
});
