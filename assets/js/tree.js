/* ==========================================================================
   EXORDIUM // MOTOR GESTALT DA ÁRVORE DE CARREIRAS (Edição em Português)
   Organizado estritamente por Árvores de Profissão Canônica, Sequências e Pistas Visuais
   ========================================================================== */

const CAREER_SECTORS = [
  {
    "id": "office",
    "name": "Lunar — Sensores Industriais (Sede Corporativa)",
    "brandTag": "Lunar // Tema Verde-Teal Industrial",
    "icon": "🏢",
    "subtitle": "10 Cargos Canônicos · Níveis 1 a 5 · Ponto de Partida Obrigatório na História",
    "ruleNotice": "Na Lunar, cargos superiores NÃO realizam as tarefas dos níveis inferiores. Começa como Auxiliar com escolhas de ramificação nos Níveis 1, 2 e 3.",
    "tracks": [
      {
        "id": "entry",
        "title": "Porta de Entrada Comum · Nível 1",
        "description": "Todo cidadão de SPRF inicia a vida corporativa nesta mesa de trabalho.",
        "positionIds": [
          "assistant"
        ]
      },
      {
        "id": "technical",
        "title": "Trilha Técnica & Ouvidoria · Níveis 2 a 4",
        "description": "Triagem de tickets técnicos, acordos de garantia e inteligência estratégica.",
        "positionIds": [
          "service_desk",
          "quality_supervisor",
          "analyst",
          "cfo"
        ]
      },
      {
        "id": "commercial",
        "title": "Trilha Comercial & Vendas Corporativas · Níveis 2 a 4",
        "description": "Negociação de sensores, gestão de vendedores e riscos de desvios ilícitos.",
        "positionIds": [
          "inside_sales",
          "external_sales",
          "sales_manager",
          "vice_director"
        ]
      },
      {
        "id": "summit",
        "title": "Cúpula Executiva Corporativa · Nível 5",
        "description": "O topo corporativo absoluto em SPRF. Decisões sumárias e coletivas de imprensa quentes.",
        "positionIds": [
          "ceo"
        ]
      }
    ]
  },
  {
    "id": "pharmacy",
    "name": "Rede de Drogarias Metropolitanas",
    "brandTag": "Varejo Farmacêutico // 7 Unidades na Cidade",
    "icon": "💊",
    "subtitle": "7 Cargos Canônicos · Níveis 1 a 5 · Cargos Superiores Cobrem os Inferiores",
    "ruleNotice": "A equipe da drogaria acumula e cobre todas as responsabilidades subordinadas em horários de pico. Ramifique para Gerência ou gradue-se em Farmácia para o desbloquear o bônus salarial permanente de híbrido.",
    "tracks": [
      {
        "id": "counter",
        "title": "Progressão de Balcão & Caixa · Níveis 1 a 3",
        "description": "Operação de caixa, auditoria de preços e retenção de receitas controladas.",
        "positionIds": [
          "attendant_1",
          "attendant_2",
          "pharmacy_supervisor"
        ]
      },
      {
        "id": "executive_clinical",
        "title": "Gestão de Loja vs Farmácia Clínica · Nível 4",
        "description": "Escolha entre a administração da filial ou a prática clínica graduada.",
        "positionIds": [
          "pharmacy_manager",
          "pharmacist",
          "manager_pharmacist"
        ]
      },
      {
        "id": "regional",
        "title": "Diretoria Regional de Saúde · Nível 5",
        "description": "Blitze sanitárias e auditorias de conformidade nas 7 filiais da metrópole.",
        "positionIds": [
          "regional_manager"
        ]
      }
    ]
  },
  {
    "id": "restaurant",
    "name": "Setor Gastronômico & Restaurantes",
    "brandTag": "Alta Gastronomia & Buffets // 13 Unidades na Cidade",
    "icon": "🍽️",
    "subtitle": "7 Cargos Canônicos · Níveis 1 a 4 · Salão vs Cozinha · Garçons Nunca Cozinham",
    "ruleNotice": "Divisão gastronômica estrita. Funcionários promovidos NÃO realizam tarefas inferiores. Garçons progridem exclusivamente no salão, enquanto ajudantes avançam para cozinheiros e chefs com diploma.",
    "tracks": [
      {
        "id": "front",
        "title": "Trilha de Salão & Hospitalidade · Níveis 1 a 3",
        "description": "Higienização do salão, reposição de guardanapos, adega climatizada e gestão de turno.",
        "positionIds": [
          "dining_helper",
          "waiter",
          "restaurant_manager"
        ]
      },
      {
        "id": "back",
        "title": "Trilha de Cozinha & Gastronomia · Níveis 1 a 3",
        "description": "Pré-preparo, corte de insumos, molhos, risotos e finalização artística de pratos nobres.",
        "positionIds": [
          "kitchen_helper",
          "cook",
          "chef"
        ]
      },
      {
        "id": "ownership",
        "title": "Propriedade da Franquia · Nível 4",
        "description": "Proprietário de múltiplas franquias na cidade; lucro líquido transferido direto para a conta corrente pessoal.",
        "positionIds": [
          "franchise_manager"
        ]
      }
    ]
  },
  {
    "id": "freelance",
    "name": "Serviços Terceirizados & Aplicativos",
    "brandTag": "Trabalho Autônomo & Contratado // Liberdade 24/7",
    "icon": "🛵",
    "subtitle": "4 Funções Autônomas & Terceirizadas · Liberdade Total de Horários",
    "ruleNotice": "Trabalhe quando quiser. Ciclistas continuam ativos mesmo como procurados, motoristas lidam com passageiros raros, e faxineiros conquistam sequências de 5 estrelas em duas agências distintas.",
    "tracks": [
      {
        "id": "apps",
        "title": "Mobilidade & Entregas por Aplicativo · Nível 1",
        "description": "Pagamento imediato por serviço. Entregas de bicicleta ou viagens noturnas de carro próprio.",
        "positionIds": [
          "courier",
          "driver"
        ]
      },
      {
        "id": "cleaning",
        "title": "Contratos Comerciais de Limpeza · Nível 1",
        "description": "Faxina em estabelecimentos comerciais. Passar rodo, regar plantas e destravar contratos de mansões.",
        "positionIds": [
          "cleaner_spotless",
          "cleaner_family"
        ]
      }
    ]
  },
  {
    "id": "supermarket",
    "name": "Super Takai - Rede de Supermercados",
    "brandTag": "スーパータカイ Supermarkets // 3 Filiais na Cidade",
    "icon": "🛒",
    "subtitle": "Reposição de Varejo · 3 Filiais em SPRF",
    "ruleNotice": "Reposição de gôndolas e prateleiras em 3 filiais do Super Takai antes e depois dos horários de pico matinal.",
    "tracks": [
      {
        "id": "retail",
        "title": "Operação de Reposição em Loja · Nível 1",
        "description": "Turnos matinais divididos antes dos clientes chegarem para as compras diárias.",
        "positionIds": [
          "stock_clerk"
        ]
      }
    ]
  }
];

const CAREERS_DATABASE = [
  {
    "id": "assistant",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 1,
    "name": "Auxiliar Administrativo",
    "salary": "$ 1.800 / semana",
    "hours": "Seg-Sex · 08:00 às 17:00",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Ponto de Partida Obrigatório",
    "leadsTo": "Escolha: Service Desk ou Inside Sales",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Início Canônico"
    ],
    "desc": "O ponto de partida de todos. Resolve as demandas imediatas do diretor em ritmo de gincana: recolhe notas fiscais, destrava impressoras emperradas e busca café antes das 3:20 no relógio.",
    "responsibilities": [
      "Minigame Closing Day: 5 minutos para entregar o fechamento semanal.",
      "Destravar a impressora mecânica (sequência de 5 etapas com [E]).",
      "Levar café quente ao diretor antes das 3:20 no relógio para evitar bronca.",
      "Conferência de balancete numérico e entrega física do relatório na sala da diretoria."
    ],
    "promotionNotes": "Observa a dinâmica dos colegas e ganha a chance de escolher migrar para Suporte Técnico (Inbox) ou Vendas Internas (Spec & Deal).",
    "dialogQuote": "A impressora travou de novo e o diretor quer o café na mesa dele antes da reunião das 2:30. Corre!",
    "dialogSpeaker": "Ana · Colega de Escritório",
    "dialogImage": "assets/img/closing_day_printer.png"
  },
  {
    "id": "service_desk",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 2,
    "name": "Service Desk (Suporte Técnico)",
    "salary": "$ 2.200 / semana",
    "hours": "Seg-Sex · 08:00 às 17:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Promoção Automática do Auxiliar",
    "leadsTo": "Supervisor de Qualidade e Atendimento",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Triagem em Tempo Real"
    ],
    "desc": "Na linha de frente dos tickets. Classifica e-mails em 5 categorias e decide solicitações de garantia de 24 meses sob pressão de cronômetro.",
    "responsibilities": [
      "Triar e-mails em Pergunta Técnica, Garantia, Reclamação, Vendas e Phishing.",
      "Identificar links maliciosos com tooltips destacando URLs suspeitas.",
      "Decidir garantia: Cobrir apenas defeito de fábrica; imersão apenas para sensores IP68 (CAM-4); raios/tempestades NUNCA têm cobertura.",
      "Encaminhar desvios sutis de calibragem à equipe de engenharia."
    ],
    "promotionNotes": "Promoção automática por bom desempenho para Supervisor de Qualidade e Atendimento.",
    "dialogQuote": "O cliente mergulhou o transmissor PT-200 no tanque, mas ele só é IP65! Se aprovar a garantia, a empresa perde $420 do nosso orçamento departamental!",
    "dialogSpeaker": "Ben · Analista de Suporte",
    "dialogImage": "assets/img/job_inbox.png"
  },
  {
    "id": "inside_sales",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 2,
    "name": "Inside Sales (Vendas Internas)",
    "salary": "$ 2.000 / sem + Comissão de Vendas",
    "hours": "Seg-Sex · 08:00 às 17:00",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Escolha a partir do Auxiliar",
    "leadsTo": "Escolha: Vendas Externas ou Gerente de Vendas",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Comissão por Venda"
    ],
    "desc": "Negocia sensores industriais pelo computador. Avalia temperatura, pressão e sinal elétrico (4-20mA, 0-10V) e barganha sem esgotar a paciência do cliente.",
    "responsibilities": [
      "Cruzar especificações de catálogo (PT-100 a PT-400, sondas térmicas TH-10 a TH-50).",
      "Evitar 'oversell' e nunca vender sensor fora da faixa técnica solicitada.",
      "Risco canônico: Vender sensor incompatível que derrete a 80 °C gera processo judicial e demissão imediata!",
      "Negociar margens de desconto escalonadas para fechar pedidos antes da 3ª recusa."
    ],
    "promotionNotes": "Permite escolher ramificação entre Vendas Externas (A Campo) ou Gerente Comercial de Vendas.",
    "dialogQuote": "O cliente quer pagar $900 numa sonda que aguente 80 °C. Se eu empurrar a de 45 °C baratinha, ela vai derreter na caldeira dele...",
    "dialogSpeaker": "Vendedor Interno",
    "dialogImage": "assets/img/job_deal.png"
  },
  {
    "id": "quality_supervisor",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 3,
    "name": "Supervisor de Qualidade e Atendimento",
    "salary": "$ 3.500 / semana",
    "hours": "Seg-Sex · 08:00 às 17:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Service Desk",
    "leadsTo": "Analista de Inteligência Competitiva",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Orçamento Vira Bônus"
    ],
    "desc": "Atua como ouvidoria de primeira instância. Analisa reclamações graves, concede compensações proporcionais à gravidade do caso e aprova garantias especiais.",
    "responsibilities": [
      "Gerenciar o orçamento semanal de indenizações e acordos de conciliação.",
      "Decisão estratégica: O dinheiro que sobra da verba no final da semana é convertido integralmente em performance e prestígio pessoal!",
      "Conceder brindes e estornos para conter crises de clientes indignados antes de processos."
    ],
    "promotionNotes": "Caminho direto e automático para Analista de Inteligência Competitiva.",
    "dialogQuote": "Sobraram $ 1.200 na minha verba de conciliação esta sexta-feira. Isso vai direto pra minha avaliação de promoção executiva!",
    "dialogSpeaker": "Supervisor de Atendimento",
    "dialogImage": "assets/img/job_office_elevator.png"
  },
  {
    "id": "external_sales",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 3,
    "name": "Vendas Externas (A Campo)",
    "salary": "$ 3.000 / sem + comissões",
    "hours": "Seg-Sex · 08:00 às 17:00 (Rua)",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Escolha do Inside Sales",
    "leadsTo": "Gerente de Vendas ou Vice-Diretor",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Desbloqueia Modificador Permanente"
    ],
    "desc": "Visitas técnicas a indústrias e clientes corporativos em SPRF. Quem passa por aqui conquista o cobiçado modificador permanente de Lábia Comercial em todas as remunerações de vendas.",
    "responsibilities": [
      "Prospectar polos fabris e fechar contratos de alto volume para a cidade.",
      "Garante a conquista do modificador permanente de Lábia Comercial (vantagem salarial vitalícia em funções comerciais)."
    ],
    "promotionNotes": "Promoção para Gerente de Vendas com bônus permanente mantido, ou salto para Vice-Diretor Executivo.",
    "dialogQuote": "Esse contrato de sensores para o polo industrial garantiu um bônus vitalício de comissão no meu bolso para sempre!",
    "dialogSpeaker": "Representante Comercial",
    "dialogImage": "assets/img/downtown.png"
  },
  {
    "id": "sales_manager",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 3,
    "name": "Gerente de Vendas",
    "salary": "$ 6.000 / semana",
    "hours": "Seg-Sex · Horário Flexível",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ De Vendas Externas ou Internas",
    "leadsTo": "Vice-Diretor Executivo",
    "cues": [
      "crime",
      "danger"
    ],
    "cuesLabels": [
      "Esquema Caixa 2",
      "Risco de Prisão (X9)"
    ],
    "desc": "Analisa métricas e monitora e-mails de vendedores. Pode entrar em esquemas de comissões paralelas, mas corre o perigo de cair em uma emboscada armada pela Diretoria com policiais!",
    "responsibilities": [
      "Pode bater o ponto e circular pela cidade se responder aos chamados corporativos.",
      "Pode demitir vendedores por justa causa.",
      "Esquema secreto: Participar de desvios ilícitos e lucrar com comissões paralelas.",
      "Operação Flagrante com Informante: Se o vendedor estiver colaborando com a Diretoria, a polícia dá voz de prisão imediata por corrupção corporativa!"
    ],
    "promotionNotes": "Promoção direta para Vice-Diretor Executivo da empresa.",
    "dialogQuote": "Você achou que eu ia te demitir? Quem disse que você será demitido? Policiais, podem entrar!",
    "dialogSpeaker": "Diretor da Empresa · Flagrante",
    "dialogImage": "assets/img/job_hire_dialog.png"
  },
  {
    "id": "analyst",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 4,
    "name": "Analista de Inteligência Competitiva",
    "salary": "$ 7.000 / semana",
    "hours": "Sem controle de ponto rígido",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Supervisor de Qualidade",
    "leadsTo": "Diretor Financeiro (CFO)",
    "cues": [
      "crime",
      "danger"
    ],
    "cuesLabels": [
      "Espionagem Industrial",
      "Relatórios Falsificados"
    ],
    "desc": "Avalia concorrentes e elabora relatórios semanais. É cortejado por corporações rivais para vazar projetos secretos de sensores em troca de quantias exorbitantes.",
    "responsibilities": [
      "Escrever relatórios maquiados dizendo que a empresa é líder invencível.",
      "Receber ofertas secretas no celular pessoal para vazar esquemas elétricos confidenciais.",
      "Risco: O TI monitora a rede e compradores concorrentes podem ser armadilha do Diretor."
    ],
    "promotionNotes": "Promoção direta para Diretor Financeiro (CFO).",
    "dialogQuote": "A concorrente me ofereceu $ 15.000 para vazar o esquema elétrico da nova sonda térmica. Se a diretoria descobrir, é cadeia na certa.",
    "dialogSpeaker": "Analista de Mercado",
    "dialogImage": "assets/img/job_office_elevator.png"
  },
  {
    "id": "vice_director",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 4,
    "name": "Vice-Diretor Executivo",
    "salary": "$ 15.000 / semana",
    "hours": "Seg, Qua, Sex · 09:00 às 11:00 (2h/dia!)",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ De Gerente de Vendas / Vendas Externas",
    "leadsTo": "Diretor Geral (CEO)",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "Regime 2h/dia · 3 dias/sem"
    ],
    "desc": "O ápice do conforto executivo. Trabalha apenas 2 horas por dia, três dias por semana. Sala privativa e acesso irrestrito às decisões corporativas.",
    "responsibilities": [
      "Carga horária ultrarreduzida (apenas 6 horas semanais totais de reunião).",
      "Autoridade para contratar e demitir funcionários de todos os escalões.",
      "Caminho mais curto e rápido para se tornar Diretor Geral (CEO)."
    ],
    "promotionNotes": "Caminho mais rápido e direto para Diretor Geral (CEO).",
    "dialogQuote": "Duas horinhas de reunião na segunda, quarta e sexta. O resto da semana é livre para aproveitar a vida em SPRF.",
    "dialogSpeaker": "Vice-Diretor",
    "dialogImage": "assets/img/job_director_press.png"
  },
  {
    "id": "cfo",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 4,
    "name": "Diretor Financeiro (CFO)",
    "salary": "$ 15.000 / semana",
    "hours": "Seg, Qua, Sex · 09:00 às 11:00 (2h/dia!)",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Analista de Inteligência",
    "leadsTo": "Diretor Geral (Exige 4x Mais Performance)",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "Exige 4x Mais Performance"
    ],
    "desc": "Idêntico ao Vice-Diretor na rotina relaxada de 2h diárias, mas exige 4 vezes mais performance para alcançar a cadeira de Diretor Geral.",
    "responsibilities": [
      "Aprovar balanços e orçamentos gerais da empresa de sensores.",
      "Regime de 6 horas semanais com salário de elite ($ 15.000/sem).",
      "Precisa quadruplicar a entrega de resultados se quiser ultrapassar o Vice-Diretor na disputa pelo cargo de CEO."
    ],
    "promotionNotes": "Caminho árduo por mérito financeiro para Diretor Geral (CEO).",
    "dialogQuote": "Os números do trimestre bateram recorde, mas o Conselho ainda exige 4 vezes mais que o vice para me dar a presidência.",
    "dialogSpeaker": "CFO · Diretor Financeiro",
    "dialogImage": "assets/img/closing_day_boss.png"
  },
  {
    "id": "ceo",
    "branch": "office",
    "branchName": "Lunar — Sensores Industriais",
    "level": 5,
    "name": "Diretor Geral (CEO)",
    "salary": "$ 40.000 / semana",
    "hours": "Sem horário fixo · Total liberdade",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Cúpula Corporativa",
    "leadsTo": "Pico Máximo na Cidade",
    "cues": [
      "executive",
      "bonus"
    ],
    "cuesLabels": [
      "Comando Total",
      "Minigame de Crise na TV"
    ],
    "desc": "O topo absoluto. Joga golfe no carpete do gabinete, carimba autorizações sem ler (arriscando falência) e encara coletivas de imprensa quentes na TV Maresol.",
    "responsibilities": [
      "Minigame 'Assinar sem ler': Carimbar centenas de notas em 5 segundos ou ler detalhadamente para caçar desvios.",
      "Minigame 'Coletiva de Imprensa': Defender a empresa ao vivo na TV Maresol com jargões corporativos quando estoura escândalo de sensores derretidos.",
      "Salário colossal de $ 40.000 por semana (pago toda sexta às 17h)."
    ],
    "promotionNotes": "Nenhum cargo acima na corporação. Prestígio máximo em SPRF.",
    "dialogQuote": "Senhores jornalistas da TV Maresol: o derretimento do sensor foi um evento pontual de sobrecarga exógena sob auditoria estrita!",
    "dialogSpeaker": "CEO da Empresa · Coletiva",
    "dialogImage": "assets/img/job_director_press.png"
  },
  {
    "id": "attendant_1",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 1,
    "name": "Atendente de Balcão 1",
    "salary": "$ 1.600 / semana",
    "hours": "Seg-Sex · Turno Manhã: 07:00 às 15:00",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Início na Farmácia",
    "leadsTo": "Atendente de Balcão 2",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Caixa & Reposição"
    ],
    "desc": "Opera o caixa da drogaria, atende clientes na loja e atualiza etiquetas de preços nas gôndolas conforme as diretrizes da autoridade sanitária.",
    "responsibilities": [
      "Atender clientes na fila e receber pagamentos no caixa.",
      "Remarcar produtos nas prateleiras conforme a tabela de preços do dia."
    ],
    "promotionNotes": "Promoção automática para Atendente 2.",
    "dialogQuote": "Preciso remarcar todas as vitaminas do corredor 3 antes do supervisor abrir o segundo caixa.",
    "dialogSpeaker": "Atendente 1",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  },
  {
    "id": "attendant_2",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 2,
    "name": "Atendente de Balcão 2",
    "salary": "$ 1.800 / semana",
    "hours": "Seg-Sex · Turno Tarde/Noite: 15:00 às 23:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Atendente 1",
    "leadsTo": "Supervisor de Drogaria",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Dispensação Controlada"
    ],
    "desc": "Atua no balcão de remédios e gerencia a dispensação de medicamentos controlados sob retenção obrigatória de receita médica.",
    "responsibilities": [
      "Verificação de receitas de antibióticos e controlados (paródia ANVISA).",
      "Conferência de dosagens e atendimento de prescrições médicas no sistema."
    ],
    "promotionNotes": "Promoção automática para Supervisor de Drogaria.",
    "dialogQuote": "Essa receita de clonazepam está sem o carimbo legível do médico do Hospital Regional. Não posso liberar!",
    "dialogSpeaker": "Atendente 2",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "pharmacy_supervisor",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 3,
    "name": "Supervisor de Drogaria",
    "salary": "$ 2.500 / semana",
    "hours": "Ter-Sáb · Abertura ou Fechamento",
    "sequenceType": "choice",
    "sequenceLabel": "🔀 Ramificação: Gerência vs Clínica",
    "leadsTo": "Gerente de Drogaria ou Farmacêutico",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Chaves da Loja · Carro-Forte"
    ],
    "desc": "Abre e fecha a loja física. Aplica descontos gerenciais, faz sangria de valores dos caixas para o cofre e aciona o carro-forte.",
    "responsibilities": [
      "Resolver impasses de clientes difíceis no balcão.",
      "Transferir dinheiro dos caixas para o cofre ao atingir o teto de segurança.",
      "Acionar a empresa de transporte de valores quando o cofre acumula o volume mínimo."
    ],
    "promotionNotes": "Pode seguir a trilha de Gerente de Loja ou, com diploma universitário, assumir como Farmacêutico Responsável.",
    "dialogQuote": "O cofre atingiu o teto de segurança de $ 20.000. Já protocolei o chamado para o carro-forte passar aqui às 18h.",
    "dialogSpeaker": "Supervisor de Loja",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  },
  {
    "id": "pharmacy_manager",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 4,
    "name": "Gerente de Drogaria",
    "salary": "$ 5.000 / sem + PLR generosa",
    "hours": "Sem horário fixo · Gestão da Drogaria",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Trilha Operacional",
    "leadsTo": "Gerente Regional de Farmácias",
    "cues": [
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Contrata/Demite · PLR",
      "Admissão Direta Permitida"
    ],
    "desc": "Comanda o funcionamento da unidade. Elabora escalas de folga, contrata e demite funcionários. Sofre perda de performance se filas demorarem.",
    "responsibilities": [
      "Montar escalas de atendentes e balconistas (máximo 5 dias/sem por CLT da cidade).",
      "Controlar o índice de satisfação dos clientes e tempos de fila.",
      "Pode ser contratado diretamente no cargo sem subir a escada."
    ],
    "promotionNotes": "Promoção para Gerente Regional da Rede.",
    "dialogQuote": "A fila do caixa 1 está dobrando a gôndola de perfumaria! Se a satisfação cair, a nossa PLR despenca na sexta.",
    "dialogSpeaker": "Gerente de Drogaria",
    "dialogImage": "assets/img/job_hire_dialog.png"
  },
  {
    "id": "pharmacist",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 4,
    "name": "Farmacêutico Responsável",
    "salary": "$ 5.000 / sem + PLR generosa",
    "hours": "Seg-Sex · Manhã · Sem ponto rígido",
    "sequenceType": "choice",
    "sequenceLabel": "🎓 Diploma Obrigatório · Trilha Clínica",
    "leadsTo": "Farmacêutico-Gerente (Híbrido)",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Diploma em Farmácia Obrigatório",
      "Admissão Direta Permitida"
    ],
    "desc": "Cargo técnico essencial. Aplica injeções, fura orelhas (com brincos da própria drogaria), afere pressão, mede glicose e realiza testes diagnósticos.",
    "responsibilities": [
      "Obrigatório ter graduação em Farmácia.",
      "Procedimentos clínicos na sala privativa (injeções, furos, testes).",
      "Pode realizar qualquer tarefa de balconista e supervisor."
    ],
    "promotionNotes": "Pode se fundir com o cargo de Gerente para formar o 'Farmacêutico-Gerente' (bônus salarial permanente no topo da carreira).",
    "dialogQuote": "A aplicação do antibiótico injetável está pronta na sala 2. Já conferi a prescrição com o médico.",
    "dialogSpeaker": "Dra. Farmacêutica",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "manager_pharmacist",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 4,
    "name": "Farmacêutico-Gerente (Híbrido)",
    "salary": "$ 7.500 / sem + PLR (Bônus Permanente!)",
    "hours": "Sem horário fixo · Autonomia Total",
    "sequenceType": "auto",
    "sequenceLabel": "⭐ Híbrido Supremo",
    "leadsTo": "Gerente Regional de Farmácias",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Bônus Permanente Vitalício",
      "Clínica & Gestão Dupla"
    ],
    "desc": "A combinação perfeita aprovada no cânone. O gerente que se forma em Farmácia (ou o farmacêutico promovido a gerente) ganha um bônus permanente no salário base para toda a vida!",
    "responsibilities": [
      "Substitui o farmacêutico em ausências e assume qualquer posto da loja.",
      "Bônus permanente mantido mesmo ao trocar de rede farmacêutica.",
      "Comanda contratações, demissões e a responsabilidade técnica do estabelecimento."
    ],
    "promotionNotes": "Promoção direta para Gerente Regional.",
    "dialogQuote": "Assumir a gerência e o CRF técnico da filial me garantiu $ 7.500 semanais fixos mais a participação nos lucros da rede inteira!",
    "dialogSpeaker": "Farmacêutico-Gerente",
    "dialogImage": "assets/img/job_pharmacy_rx.png"
  },
  {
    "id": "regional_manager",
    "branch": "pharmacy",
    "branchName": "Rede Farmacêutica",
    "level": 5,
    "name": "Gerente Regional de Farmácias",
    "salary": "$ 9.000 / semana",
    "hours": "Seg-Sex · 08:00 às 17:00 (Rotina Externa)",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Cúpula Farmacêutica",
    "leadsTo": "Topo Executivo de Saúde",
    "cues": [
      "executive"
    ],
    "cuesLabels": [
      "Inspeções Técnicas",
      "Demite Gerentes de Loja"
    ],
    "desc": "Supervisiona todas as 7 unidades da cidade. Faz blitz de conformidade (jalecos limpos, equipe completa, estoque regular) e prioriza filiais com queixas.",
    "responsibilities": [
      "Auditar o cumprimento das normas sanitárias e conferência de medicamentos nas 7 filiais de SPRF.",
      "Poder de demitir gerentes e supervisores de loja em caso de irregularidade.",
      "Apenas gerentes de loja internos podem ser promovidos para este cargo."
    ],
    "promotionNotes": "O ápice da carreira farmacêutica no jogo.",
    "dialogQuote": "A loja do centro está sem o farmacêutico em horário de pico e com jaleco fora de padrão. Notificação emitida e desconto na gerência!",
    "dialogSpeaker": "Gerente Regional",
    "dialogImage": "assets/img/downtown.png"
  },
  {
    "id": "dining_helper",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 1,
    "name": "Auxiliar de Salão",
    "salary": "$ 1.500 / semana",
    "hours": "Qua-Dom · 09:00 às 15:30 (Almoço)",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Entrada no Salão",
    "leadsTo": "Garçom / Operador de Caixa",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Organização do Salão"
    ],
    "desc": "Mantém mesas higienizadas, garrafas de café térmicas abastecidas e guardanapos repostos. Se faltar guardanapo, o cliente reclama e desconta pontos em dobro!",
    "responsibilities": [
      "Limpar mesas imediatamente após os clientes saírem.",
      "Nunca deixar faltar café cortesia ou guardanapos.",
      "No modo Brasil: cometer erro deduz o dobro dos pontos que a tarefa ganharia!"
    ],
    "promotionNotes": "Promoção automática para Garçom/Caixa.",
    "dialogQuote": "Tem mesa nova sentando no salão 2! Se faltar guardanapo na mesa deles, o chefe corta meu bônus!",
    "dialogSpeaker": "Auxiliar de Salão",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "kitchen_helper",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 1,
    "name": "Auxiliar de Cozinha",
    "salary": "$ 1.500 / semana",
    "hours": "Qua-Dom · 09:00 às 15:30",
    "sequenceType": "start",
    "sequenceLabel": "🚩 Entrada na Cozinha",
    "leadsTo": "Escolha: Cozinheiro ou Garçom",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Pré-Preparo & Louça"
    ],
    "desc": "Descasca batatas, corta cenouras, pica cebolinha, enche panelas com água e lava a louça com restos de comida orgânicos.",
    "responsibilities": [
      "Abastecer a bancada do cozinheiro e chef.",
      "Descartar imediatamente ingredientes fora do prazo de validade.",
      "Lavar louça suja com manchas dinâmicas."
    ],
    "promotionNotes": "Pode ser promovido a Cozinheiro de Linha ou migrar para Garçom/Caixa no salão.",
    "dialogQuote": "O chef pediu 10 kg de batatas descascadas para o almoço do meio-dia. Não posso atrasar o fogo!",
    "dialogSpeaker": "Auxiliar de Cozinha",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "waiter",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 2,
    "name": "Garçom / Operador de Caixa",
    "salary": "$ 1.700 / semana",
    "hours": "Qua-Dom · 10:30 às 15:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Auxiliar de Salão (Garçons Nunca Cozinham)",
    "leadsTo": "Gerente de Restaurante",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Buffet & À La Carte"
    ],
    "desc": "No Buffet, repõe cubas de aço aquecidas e cobra sobremesas/bebidas. No À La Carte fino, serve pratos à mesa e busca vinhos na adega refrigerada.",
    "responsibilities": [
      "Buffet: Manter as cubas quentes abastecidas e receber pagamentos.",
      "À La Carte: Atender mesas com botão de chamada, levar pedidos à janela da cozinha e operar a máquina de cartão.",
      "Restaurante Fino: Abrir vinhos selecionados na adega e servir taças adequadas."
    ],
    "promotionNotes": "Promoção para Gerente de Restaurante (Atenção: garçom nunca vira cozinheiro!).",
    "dialogQuote": "Mesa 4 pediu um tinto seco da adega e o salmão grelhado do chef. Indo buscar a garrafa na temperatura certa!",
    "dialogSpeaker": "Garçom À La Carte",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "cook",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 2,
    "name": "Cozinheiro de Linha",
    "salary": "$ 2.200 / semana",
    "hours": "Qua-Dom · 09:00 às 15:00",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Auto do Auxiliar de Cozinha",
    "leadsTo": "Chef Executivo (Exige Diploma de Gastronomia)",
    "cues": [
      "arcade"
    ],
    "cuesLabels": [
      "Guarnições & Acompanhamentos"
    ],
    "desc": "Prepara os carboidratos e entradas: arroz, massas, risotos e molhos conforme o ritmo ditado pelos pedidos do salão.",
    "responsibilities": [
      "Cozinhar todas as guarnições com precisão de tempo.",
      "Coordenar a bancada com o Auxiliar de Cozinha.",
      "Não faz proteínas nem empratamento final (tarefa exclusiva do Chef)."
    ],
    "promotionNotes": "Com diploma de Gastronomia, é promovido a Chef de Cozinha.",
    "dialogQuote": "O risoto e o purê trufado estão prontos na janela, chef! Só faltam os cortes de carne para finalizar.",
    "dialogSpeaker": "Cozinheiro",
    "dialogImage": "assets/img/job_restaurant_buffet.png"
  },
  {
    "id": "restaurant_manager",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 3,
    "name": "Gerente de Restaurante",
    "salary": "$ 4.000 / semana",
    "hours": "Horário Flexível",
    "sequenceType": "auto",
    "sequenceLabel": "⏩ Liderança de Salão",
    "leadsTo": "Proprietário / Gestor de Franquia",
    "cues": [
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Admissão Direta Permitida",
      "Supervisão de Turno"
    ],
    "desc": "Supervisiona a hospitalidade do salão, adquire suprimentos antes ou após o serviço (nunca durante), e coordena o fluxo dos garçons.",
    "responsibilities": [
      "Comprar insumos e produtos frescos antes das portas abrirem.",
      "Supervisionar a equipe de salão e gerenciar reclamações de clientes.",
      "Pode ser admitido diretamente no posto com base em reputação executiva prévia."
    ],
    "promotionNotes": "Promoção para Gestor de Franquia / Proprietário.",
    "dialogQuote": "A remessa de hortifrúti chegou na porta dos fundos. Todas as mesas estão montadas para o menu degustação da noite!",
    "dialogSpeaker": "Gerente de Restaurante",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "chef",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 3,
    "name": "Chef Executivo",
    "salary": "$ 8.000 / semana (Dobro do Gerente + Bônus Máximo)",
    "hours": "Qua-Dom · 09:30 às 15:00",
    "sequenceType": "choice",
    "sequenceLabel": "🎓 Diploma em Gastronomia Obrigatório",
    "leadsTo": "Proprietário / Gestor de Franquia",
    "cues": [
      "diploma",
      "bonus",
      "direct_hire"
    ],
    "cuesLabels": [
      "Diploma em Gastronomia",
      "Salário Dobro do Gerente + Bônus Máximo",
      "Admissão Direta"
    ],
    "desc": "A autoridade máxima da culinária. Prepara carnes, peixes e finaliza o empratamento artístico. Ganha o dobro do gerente mais um prestigioso bônus permanente!",
    "responsibilities": [
      "Obrigatório ter graduação em Gastronomia.",
      "Ponto perfeito de carnes, aves e frutos do mar.",
      "Montagem impecável dos pratos e liberação na janela para os garçons.",
      "Remuneração excepcional de $ 8.000 a $ 12.600 por semana."
    ],
    "promotionNotes": "Pode comprar a franquia e se tornar Gestor de Franquia / Dono.",
    "dialogQuote": "Prato finalizado com corte nobre e emulsão de ervas. Garçom, mesa 2 imediatamente enquanto está quente!",
    "dialogSpeaker": "Chef Executivo",
    "dialogImage": "assets/img/job_restaurant_fancy.png"
  },
  {
    "id": "franchise_manager",
    "branch": "restaurant",
    "branchName": "Restaurantes & Gastronomia",
    "level": 4,
    "name": "Gestor de Franquia / Proprietário",
    "salary": "Lucro Líquido ($ 25.000+/semana)",
    "hours": "Autonomia Empresarial Absoluta",
    "sequenceType": "summit",
    "sequenceLabel": "🏁 Cúpula Gastronômica",
    "leadsTo": "Empresário Gastronômico Independente",
    "cues": [
      "executive",
      "bonus"
    ],
    "cuesLabels": [
      "Dono da Rede",
      "Lucro Líquido na Conta"
    ],
    "desc": "Proprietário de múltiplos restaurantes em SPRF. Paga fornecedores, impostos e salários; todo o lucro líquido residual é transferido diretamente para sua conta pessoal!",
    "responsibilities": [
      "Auditar filiais, cardápios e qualidade de atendimento.",
      "Poder exclusivo de contratar e demitir chefs de cozinha.",
      "Todo o lucro líquido após custos operacionais vira patrimônio pessoal do jogador."
    ],
    "promotionNotes": "Patrão e investidor autônomo na economia viva da cidade.",
    "dialogQuote": "Todas as contas e fornecedores quitados esta sexta. O saldo líquido de $ 32.000 já foi transferido pra minha conta corrente!",
    "dialogSpeaker": "Gestor da Franquia",
    "dialogImage": "assets/img/condo_alphaville.png"
  },
  {
    "id": "courier",
    "branch": "freelance",
    "branchName": "Serviços Terceirizados & Aplicativos",
    "level": 1,
    "name": "Entregador Ciclista (App de Entregas)",
    "salary": "Pago por corrida (imediato)",
    "hours": "Livre · Ligue o app quando quiser",
    "sequenceType": "start",
    "sequenceLabel": "🛵 Bico Autônomo",
    "leadsTo": "Autônomo (Compre bikes na Spoke Cycles)",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Pagamento na Hora",
      "Sem Antecedentes"
    ],
    "desc": "Pedala pelas ruas e ciclovias entregando refeições, medicamentos da farmácia e malotes com documentos entre empresas e a Prefeitura de SPRF.",
    "responsibilities": [
      "Agilidade no trânsito sem atropelar pedestres.",
      "Pode continuar trabalhando mesmo com status [Potencial Criminoso] ou [Fugitivo]!",
      "Sem chefe, sem metas impostas: recebe o dinheiro imediatamente após a corrida."
    ],
    "promotionNotes": "Comprar bicicleta esportiva na Spoke Cycles para acelerar entregas.",
    "dialogQuote": "Mais uma entrega de remédios expressa da farmácia central para o condomínio de casas. Pagamento caiu na hora no aplicativo!",
    "dialogSpeaker": "Entregador de Bike",
    "dialogImage": "assets/img/player_home.png"
  },
  {
    "id": "driver",
    "branch": "freelance",
    "branchName": "Serviços Terceirizados & Aplicativos",
    "level": 1,
    "name": "Motorista de Aplicativo (Carro)",
    "salary": "Pago por corrida (com passageiros)",
    "hours": "Livre · Noites e fins de semana",
    "sequenceType": "start",
    "sequenceLabel": "🚗 Bico Autônomo",
    "leadsTo": "Autônomo (Compre carros nas Concessionárias)",
    "cues": [
      "arcade",
      "danger"
    ],
    "cuesLabels": [
      "Eventos Raros & Calotes",
      "Bloqueio Judicial"
    ],
    "desc": "Dirige seu próprio veículo transportando cidadãos de SPRF. Encara dezenas de eventos raros inspirados na vida real, desde caloteiros até passageiros enigmáticos murmurando sobre anomalias no céu noturno!",
    "responsibilities": [
      "Conduzir passageiros em segurança até o destino.",
      "Eventos raros canônicos: O passageiro que pede o PIX e promete pagar amanhã (alguns nunca pagam!); passageira nervosa da TV Maresol atrasada pro jornal ao vivo; 5 passageiros para 4 lugares (arrisca blitz policial!).",
      "Se for classificado como [Procurado] pela Justiça, o aplicativo é bloqueado imediatamente!"
    ],
    "promotionNotes": "Comprar sedãs de luxo na Motorama, Central Motors ou Eastside Auto para atrair clientes de alta renda.",
    "dialogQuote": "Moço, me passa seu PIX que eu pago assim que chegar em casa, prometo! (Spoiler: ele pode sumir e nunca transferir o dinheiro).",
    "dialogSpeaker": "Passageiro Suspeito",
    "dialogImage": "assets/img/crash_scene.png"
  },
  {
    "id": "cleaner_commercial",
    "branch": "freelance",
    "branchName": "Trabalhos Autônomos & Serviços Urbanos",
    "level": 1,
    "name": "Profissional de Limpeza Comercial",
    "salary": "$ 1.450 / semana + Bônus de Sequência",
    "hours": "24/7 Qualquer Horário em Dias Úteis · Total Liberdade",
    "sequenceType": "start",
    "sequenceLabel": "🧹 Limpeza Comercial",
    "leadsTo": "Sequência de 5 Estrelas Libera Mansões de Luxo",
    "cues": [
      "bonus"
    ],
    "cuesLabels": [
      "Bônus de Sequência Impecável",
      "Sistema de 5 Estrelas"
    ],
    "desc": "Contratado para higienizar escritórios, boutiques, farmácias e salões de restaurante em SPRF. Duas agências rivais — a Spotless Ltd. e a Clean Family Services — vivem em pé de guerra disputando quem tem a melhor reputação, mas ambas pagam dinheiro vivo para quem mantiver os pisos da cidade impecáveis.",
    "responsibilities": [
      "Passar o rodo e secar pisos molhados: se a umidade persistir, os clientes reclamam e descontam do pagamento!",
      "Regar plantas decorativas murchas (elas recuperam o verde vivo e florescem sob seus cuidados).",
      "Receba bônus em dinheiro ao acumular dias consecutivos de serviço impecável.",
      "Alcançar 5 estrelas mais a Estrela Roxa desbloqueia contratos de alto padrão para higienizar mansões luxuosas em condomínios fechados!"
    ],
    "promotionNotes": "Qualifique-se para contratos residenciais de alto padrão e sanitização institucional pela metrópole.",
    "dialogQuote": "Piso seco no rodo e todas as palmeiras do saguão regadas e verdejantes. Não importa se a ordem veio da Spotless ou da Clean Family, o chão não sabe quem assinou a fatura!",
    "dialogSpeaker": "Profissional de Limpeza Comercial",
    "dialogImage": "assets/img/job_cleaning_plants.png"
  },
  {
    "id": "stock_clerk",
    "branch": "supermarket",
    "branchName": "Supermercados Super Takai",
    "level": 1,
    "name": "Repositor de Supermercado",
    "salary": "$ 1.500 / semana",
    "hours": "Seg-Sex · 06:00-10:00 & 11:00-14:00",
    "sequenceType": "start",
    "sequenceLabel": "🛒 Repositor de Loja",
    "leadsTo": "3 Filiais na Cidade de SPRF",
    "cues": [
      "starting"
    ],
    "cuesLabels": [
      "Reposição de Gôndolas",
      "Turno Matinal Dividido"
    ],
    "desc": "Repõe produtos nas gôndolas e prateleiras das 3 filiais do Super Takai (スーパータカイ) em SPRF. Turno dividido antes e depois da primeira onda de compras matinais.",
    "responsibilities": [
      "Repor 26 posições de prateleira em 7 fileiras de gôndolas na matriz central.",
      "Organizar caixas de fornecedores e atualizar placas de sinalização interna.",
      "Manter os corredores desobstruídos antes dos clientes chegarem para as compras."
    ],
    "promotionNotes": "Emprego matinal vital que deixa o fim de tarde e a noite completamente livres.",
    "dialogQuote": "Todas as 7 fileiras de gôndolas foram abastecidas antes das portas abrirem para os clientes da manhã!",
    "dialogSpeaker": "Repositor Super Takai",
    "dialogImage": "assets/img/job_pharmacy_shelf.png"
  }
];

// --- RENDERIZAÇÃO DA ÁRVORE GESTALT ---
function renderCareerTree(sectorFilter = 'all', cueFilter = 'all') {
  const container = document.getElementById('treeHierarchyContainer');
  if (!container) return;

  container.innerHTML = '';

  const activeSectors = CAREER_SECTORS.filter(sec => {
    return (sectorFilter === 'all' || sec.id === sectorFilter);
  });

  let totalVisibleJobs = 0;

  activeSectors.forEach(sec => {
    const sectorJobs = CAREERS_DATABASE.filter(j => j.branch === sec.id);
    const visibleJobs = sectorJobs.filter(j => {
      return (cueFilter === 'all' || j.cues.includes(cueFilter));
    });

    if (visibleJobs.length === 0) return;
    totalVisibleJobs += visibleJobs.length;

    // Board da Profissão (Gestalt Região / Recipiente Comum)
    const board = document.createElement('div');
    board.className = `profession-board board-${sec.id}`;
    board.id = `board-${sec.id}`;

    board.innerHTML = `
      <div class="board-header">
        <div class="board-header-top">
          <div class="board-title-group">
            <span class="board-icon">${sec.icon}</span>
            <div>
              <div class="board-title">${sec.name}</div>
              <div class="board-subtitle">${sec.subtitle}</div>
            </div>
          </div>
          <span class="board-badge">${sec.brandTag}</span>
        </div>
        <div class="board-rules-banner">
          <span>⚖️ <strong>Regra Canônica:</strong> ${sec.ruleNotice}</span>
        </div>
      </div>
    `;

    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'board-tracks-container';

    sec.tracks.forEach(track => {
      const trackJobs = visibleJobs.filter(j => track.positionIds.includes(j.id));
      if (trackJobs.length === 0) return;

      const trackBlock = document.createElement('div');
      trackBlock.className = 'flow-track-block';

      trackBlock.innerHTML = `
        <div class="track-block-header">
          <span class="track-block-title">
            <span style="color: var(--brand-teal);">◆</span> ${track.title}
          </span>
          <span style="font-size: 11.5px; color: var(--text-muted);">${track.description}</span>
        </div>
      `;

      const nodesRow = document.createElement('div');
      nodesRow.className = 'track-nodes-row';

      trackJobs.forEach(job => {
        const node = document.createElement('div');
        node.className = 'tree-node';
        node.setAttribute('data-id', job.id);
        node.setAttribute('data-cue', job.cues.join(' '));

        let cuePillsHtml = '';
        if (job.cues.includes('bonus')) {
          cuePillsHtml += `<span class="cue-pill pill-bonus">⭐ BÔNUS</span>`;
        }
        if (job.cues.includes('crime')) {
          cuePillsHtml += `<span class="cue-pill pill-crime">⚖️ ESQUEMA</span>`;
        }
        if (job.cues.includes('danger')) {
          cuePillsHtml += `<span class="cue-pill pill-danger">🚨 RISCO POLICIAL</span>`;
        }
        if (job.cues.includes('diploma')) {
          cuePillsHtml += `<span class="cue-pill pill-diploma">🎓 DIPLOMA</span>`;
        }
        if (job.cues.includes('executive')) {
          cuePillsHtml += `<span class="cue-pill pill-executive">👔 EXECUTIVO</span>`;
        }
        if (job.cues.includes('direct_hire')) {
          cuePillsHtml += `<span class="cue-pill pill-direct">🚪 ADMISSÃO DIRETA</span>`;
        }

        let seqClass = '';
        if (job.sequenceType === 'start') seqClass = 'is-start';
        else if (job.sequenceType === 'choice') seqClass = 'is-choice';
        else if (job.sequenceType === 'summit') seqClass = 'is-summit';

        node.innerHTML = `
          <div>
            <div class="node-header">
              <span class="node-level-chip">${job.branch === 'freelance' ? 'Autônomo' : (job.branch === 'supermarket' ? 'Varejo' : `Nível ${job.level}`)}</span>
              <div class="node-cues-row">${cuePillsHtml}</div>
            </div>
            <div class="node-role-name">${job.name}</div>
            <div style="margin: 8px 0;">
              <span class="node-sequence-badge ${seqClass}">${job.sequenceLabel}</span>
            </div>
            <p class="node-desc">${job.desc.substring(0, 115)}...</p>
          </div>
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

        nodesRow.appendChild(node);
      });

      trackBlock.appendChild(nodesRow);
      tracksContainer.appendChild(trackBlock);
    });

    board.appendChild(tracksContainer);
    container.appendChild(board);
  });

  if (totalVisibleJobs === 0) {
    container.innerHTML = `
      <div class="callout-banner" style="text-align: center; padding: 40px;">
        <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">Nenhuma profissão corresponde a este filtro combinado.</h4>
        <p style="color: var(--text-muted); font-size: 14px;">Experimente alternar os setores ou clicar em "Todos os Ramos".</p>
      </div>
    `;
  }
}

// Exibe detalhes da profissão no painel inferior (Raio-X)
function showCareerDetails(job) {
  const panel = document.getElementById('careerDetailPanel');
  if (!panel) return;

  const respItems = job.responsibilities.map(r => `<li>${r}</li>`).join('');

  panel.innerHTML = `
    <div class="panel-header-badge">
      <div>
        <div class="eyebrow">${job.branchName} · ${job.branch === 'freelance' ? 'Autônomo' : (job.branch === 'supermarket' ? 'Varejo' : `Nível ${job.level}`)}</div>
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
        <span class="panel-stat-label">Horário de Trabalho</span>
        <span class="panel-stat-val" style="font-size: 15px;">${job.hours}</span>
      </div>
      <div class="panel-stat-card">
        <span class="panel-stat-label">Sequência de Progressão</span>
        <span class="panel-stat-val" style="font-size: 14px; color: #5eead4;">${job.leadsTo}</span>
      </div>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">📋 Rotina Operacional e Responsabilidades Canônicas</h4>
      <ul style="padding-left: 20px; line-height: 1.6; color: #cbd5e1; display: grid; gap: 6px;">
        ${respItems}
      </ul>
    </div>

    <div class="block">
      <h4 style="color: #fff; font-size: 18px; margin-bottom: 8px;">🚀 Trajetória de Promoção e Carreira</h4>
      <p style="color: var(--text-muted); font-size: 15px;">${job.promotionNotes}</p>
    </div>

    <!-- Cápsula de Diálogo e Captura Canônica -->
    <div class="dialog-capsule ${job.cues.includes('danger') ? 'capsule-police' : 'capsule-office'}" style="margin-top: 10px;">
      <div class="dialog-avatar">
        <img src="${job.dialogImage}" alt="Registro Canônico">
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

  renderCareerTree();

  if (CAREERS_DATABASE.length > 0) {
    showCareerDetails(CAREERS_DATABASE[0]);
    const firstNode = document.querySelector('.tree-node');
    if (firstNode) firstNode.classList.add('selected');
  }
});
