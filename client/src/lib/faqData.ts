/*
 * FAQ data para Portal USF Vereador Durval Samuel de Souza
 * Fluxogramas Assistenciais de Vigilância em Saúde — equipe PET
 * Dados extraídos do documento FLUXOGRAMAS_-_PET.docx
 */

export interface FaqStep {
  step: number;
  instruction: string;
}

export interface FaqItem {
  id: string;
  question: string;
  department: string;
  answer: string;
  steps?: FaqStep[];
  note?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  // ─────────────────────────────────────────────────────────────
  // TUBERCULOSE
  // ─────────────────────────────────────────────────────────────
  {
    id: "tuberculose",
    label: "Tuberculose",
    description:
      "Fluxo de atendimento para casos suspeitos ou confirmados de tuberculose pulmonar, incluindo coleta de escarro, notificação e tratamento.",
    color: "border-emerald-500",
    bgColor: "bg-emerald-50 text-emerald-700",
    icon: "Activity",
    items: [
      {
        id: "tb-01",
        question: "Como recepcionar um paciente com suspeita de tuberculose (usuário não referenciado)?",
        department: "Recepção",
        answer:
          "Ao chegar à USF relatando tosse persistente (> 3 semanas) ou outros sintomas respiratórios, o usuário deve receber atenção imediata para evitar transmissão.",
        steps: [
          { step: 1, instruction: "Usuário chega na unidade, se identifica na recepção e relata sintomas (geralmente tosse persistente > 3 semanas ou outros sintomas respiratórios)." },
          { step: 2, instruction: "Recepcionista aciona o médico ou enfermeira para saber quem vai fazer o atendimento conforme disponibilidade da agenda." },
          { step: 3, instruction: "Entregar máscara cirúrgica ao paciente imediatamente (IMPORTANTE!)." },
        ],
        note: "No deslocamento do paciente pela unidade, ele deverá usar máscara cirúrgica durante todo o tempo. Adotar precaução para aerossóis: máscara PFF2/N95, higienização das mãos antes e após o contato com o paciente.",
      },
      {
        id: "tb-02",
        question: "Como recepcionar um paciente referenciado por outro serviço, já com amostra de escarro?",
        department: "Recepção / Enfermagem",
        answer:
          "Usuário que já vem com solicitação e amostra de outro serviço segue um fluxo simplificado focado no recebimento correto do material.",
        steps: [
          { step: 1, instruction: "Usuário chega, se identifica na recepção e informa que veio trazer a amostra de escarro, apresentando a solicitação de análise." },
          { step: 2, instruction: "Entregar máscara cirúrgica ao paciente (IMPORTANTE!)." },
          { step: 3, instruction: "Encaminhar o paciente para a enfermeira." },
          { step: 4, instruction: "Enfermeira recebe a amostra e armazena na caixa térmica específica." },
          { step: 5, instruction: "Conferir a quantidade de amostra, a identificação do paciente e os dados antes de armazenar." },
        ],
        note: "É EXPRESSAMENTE PROIBIDO armazenar amostras nas geladeiras da unidade. Utilizar exclusivamente a caixa térmica específica para esse fim.",
      },
      {
        id: "tb-03",
        question: "Como realizar a triagem e classificação de risco para suspeita de TB?",
        department: "Técnica de Enfermagem / Triagem",
        answer:
          "A triagem identifica sinais de gravidade e garante o encaminhamento adequado, com registro dos dados vitais e reforço das precauções respiratórias.",
        steps: [
          { step: 1, instruction: "Técnica de enfermagem realiza triagem e escuta inicial, identificando suspeita de tuberculose." },
          { step: 2, instruction: "Registrar dados vitais no prontuário." },
          { step: 3, instruction: "Reforçar o uso correto da máscara cirúrgica (precaução respiratória)." },
          { step: 4, instruction: "Avaliar se há sinais de gravidade." },
          { step: 5, instruction: "Com sinais de gravidade: encaminhar imediatamente para médico ou enfermeira com agenda disponível." },
          { step: 6, instruction: "Sem sinais de gravidade: orientar aguardar atendimento na sala de espera com máscara." },
        ],
      },
      {
        id: "tb-04",
        question: "Qual é a conduta na consulta clínica inicial para suspeita de TB?",
        department: "Médico / Enfermeira",
        answer:
          "O médico ou enfermeira realiza anamnese detalhada, define a suspeita clínica e solicita os exames complementares necessários para o diagnóstico.",
        steps: [
          { step: 1, instruction: "Realizar anamnese detalhada e exame físico completo." },
          { step: 2, instruction: "Definir se há suspeita de TB ativa." },
          { step: 3, instruction: "Solicitar baciloscopia de escarro (2 amostras)." },
          { step: 4, instruction: "Solicitar Teste Rápido Molecular para TB (TRM-TB) — SUS." },
          { step: 5, instruction: "Solicitar raio-X de tórax (encaminhar para o serviço via cadastro no IDS)." },
        ],
        note: "Para solicitação de exames, é necessário: cópia do cartão do SUS (CNS) e/ou CPF, identificação correta da amostra (nome completo sem abreviaturas, data de nascimento ou CPF e data da coleta). A 1ª amostra é recolhida pela VIEP para envio ao HEOM. A 2ª amostra deve ser cadastrada pelo profissional da APS no IDS, gerando a chave de acesso com o CPF do paciente.",
      },
      {
        id: "tb-05",
        question: "Como orientar e realizar a coleta de escarro corretamente?",
        department: "Coleta",
        answer:
          "A qualidade da coleta de escarro é determinante para o resultado do exame. Seguir rigorosamente as normas de identificação, volume e armazenamento.",
        steps: [
          { step: 1, instruction: "A coleta deve ocorrer em área aberta ou ventilada (a unidade não dispõe de sala específica). Geralmente solicita-se que o paciente traga sua coleta no dia seguinte." },
          { step: 2, instruction: "Orientar o paciente sobre como coletar corretamente o escarro." },
          { step: 3, instruction: "Volume ideal da amostra: 5–10 ml." },
          { step: 4, instruction: "1ª amostra: preferencialmente ao despertar (melhor qualidade, pois provém das secreções acumuladas durante a noite). 2ª amostra: mesmo horário, no dia seguinte." },
          { step: 5, instruction: "Usar potes plásticos descartáveis, de boca larga, transparente, com tampa de rosca, capacidade de 35–50 ml." },
          { step: 6, instruction: "Identificar no CORPO do pote (nunca na tampa): nome completo do paciente e data da coleta — usar esparadrapo, fita crepe ou caneta de tinta permanente." },
          { step: 7, instruction: "Acondicionar e enviar as amostras ao laboratório de referência. As amostras são recolhidas pela VIEP." },
        ],
        note: "Conservar sob refrigeração por no máximo 7 dias após o recebimento. Não conservar em temperatura ambiente por mais de 24 horas. PROIBIDO armazenar nas geladeiras da unidade.",
      },
      {
        id: "tb-06",
        question: "Qual é a conduta após o resultado dos exames e como fazer o acompanhamento do caso de TB?",
        department: "Médico / Equipe de Saúde",
        answer:
          "A conduta pós-resultado deve ser ágil. Casos confirmados iniciam tratamento imediatamente na USF, com notificação obrigatória e acompanhamento mensal.",
        steps: [
          { step: 1, instruction: "TB CONFIRMADA: notificar o caso no SINAN." },
          { step: 2, instruction: "Iniciar o tratamento na própria USF (medicamentos dispensados pela farmácia/unidade, vindos da VIEP)." },
          { step: 3, instruction: "Acompanhamento MENSAL pela equipe de saúde da família." },
          { step: 4, instruction: "Busca ativa: orientações sobre adesão, rastreamento de contactantes domiciliares e medidas de prevenção." },
          { step: 5, instruction: "TB NÃO CONFIRMADA: realizar reavaliação clínica ou encaminhar para outros diagnósticos diferenciais." },
          { step: 6, instruction: "Se necessário exame de imagem ou cultura fora da unidade: encaminhar para serviço de referência." },
          { step: 7, instruction: "Casos graves ou com complicações: encaminhar para hospital." },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // COVID-19
  // ─────────────────────────────────────────────────────────────
  {
    id: "covid19",
    label: "COVID-19",
    description:
      "Protocolos de acolhimento, triagem, testagem, isolamento domiciliar e monitoramento para casos suspeitos e confirmados de COVID-19.",
    color: "border-blue-500",
    bgColor: "bg-blue-50 text-blue-700",
    icon: "AlertTriangle",
    items: [
      {
        id: "cv-01",
        question: "Como recepcionar e acolher um paciente com sintomas de COVID-19?",
        department: "Recepção",
        answer:
          "O usuário que chega com sintomas gripais deve ser identificado e isolado imediatamente para evitar transmissão na unidade.",
        steps: [
          { step: 1, instruction: "Usuário chega na unidade, se identifica na recepção e relata sintomas gripais (febre, tosse, dor de garganta, coriza, dispneia, perda de olfato/paladar, cefaleia, mialgia, fadiga)." },
          { step: 2, instruction: "Recepcionista aciona o médico ou enfermeira para definir quem realizará o atendimento conforme disponibilidade da agenda." },
          { step: 3, instruction: "Entregar máscara cirúrgica ao paciente e higienizar as mãos com álcool 70% (IMPORTANTE!)." },
          { step: 4, instruction: "Caso sintomático respiratório: orientar imediatamente para distanciamento e uso de máscara." },
          { step: 5, instruction: "Encaminhar para a área de isolamento respiratório da unidade." },
        ],
        note: "Organizar fluxo separado para sintomáticos respiratórios. Garantir ventilação natural e distanciamento físico. Usar EPI completo (máscara N95, avental, luvas, protetor facial). Realizar limpeza e desinfecção de superfícies após cada atendimento.",
      },
      {
        id: "cv-02",
        question: "Como realizar a triagem e classificação de gravidade para COVID-19?",
        department: "Técnica de Enfermagem / Triagem",
        answer:
          "A triagem avalia os sinais vitais e a gravidade do quadro, definindo se o paciente será atendido na USF ou encaminhado para unidade de referência.",
        steps: [
          { step: 1, instruction: "Técnica de enfermagem faz triagem e escuta inicial, identificando suspeita de COVID-19." },
          { step: 2, instruction: "Registrar dados vitais no prontuário: temperatura, saturação (SpO₂), pressão arterial, FC, FR." },
          { step: 3, instruction: "Avaliar gravidade: dispneia, saturação < 95%, confusão mental, cianose, taquipneia." },
          { step: 4, instruction: "Reforçar o uso correto da máscara cirúrgica (precaução respiratória)." },
          { step: 5, instruction: "Com sinais de gravidade: encaminhar imediatamente para médico/enfermeira ou referenciar para UPA/HRSAJ." },
          { step: 6, instruction: "Sem sinais de gravidade: aguardar atendimento na sala de espera." },
          { step: 7, instruction: "Registrar dados no prontuário e notificar suspeita no sistema IDS." },
        ],
      },
      {
        id: "cv-03",
        question: "Qual é a conduta médica e como classificar a gravidade do caso de COVID-19?",
        department: "Médico",
        answer:
          "Na consulta clínica, o médico classifica o caso em leve, moderado ou grave e define a conduta: tratamento domiciliar ou encaminhamento hospitalar.",
        steps: [
          { step: 1, instruction: "Realizar anamnese e exame físico direcionados." },
          { step: 2, instruction: "Classificar o caso conforme gravidade: leve, moderado ou grave." },
          { step: 3, instruction: "Solicitar testagem (RT-PCR ou teste rápido de antígeno) conforme protocolo no CENTROSAJ." },
          { step: 4, instruction: "CASO LEVE: tratar sintomas (antitérmicos, hidratação, repouso); orientar isolamento domiciliar por 10 dias a partir do início dos sintomas; avaliar necessidade de atestado médico; notificar no sistema oficial." },
          { step: 5, instruction: "CASO MODERADO A GRAVE: encaminhar para unidade de referência hospitalar com relatório de encaminhamento." },
        ],
      },
      {
        id: "cv-04",
        question: "Como realizar a testagem e coleta de swab para COVID-19?",
        department: "Técnica de Enfermagem / Enfermeira",
        answer:
          "A coleta de swab deve ser feita em sala específica com EPI completo, com identificação correta da amostra e envio adequado ao laboratório.",
        steps: [
          { step: 1, instruction: "Realizar coleta em sala específica, com privacidade e biossegurança." },
          { step: 2, instruction: "Utilizar EPI completo para a coleta de swab nasal/orofaríngeo." },
          { step: 3, instruction: "Identificar e armazenar a amostra corretamente." },
          { step: 4, instruction: "Enviar para laboratório de referência (ou VIEP)." },
          { step: 5, instruction: "Registrar no sistema e informar o paciente sobre o tempo de resultado e meios de recebimento (através da ACS)." },
        ],
      },
      {
        id: "cv-05",
        question: "Como orientar o isolamento domiciliar e monitorar o paciente com COVID-19?",
        department: "Enfermeira / Médico / ACS",
        answer:
          "O telemonitoramento ativo é essencial para casos leves. As orientações devem ser reforçadas por qualquer profissional da equipe e o caso encerrado corretamente no sistema.",
        steps: [
          { step: 1, instruction: "Reforçar isolamento domiciliar por 10 dias a partir do início dos sintomas." },
          { step: 2, instruction: "Orientar familiares e contatos próximos sobre monitoramento de sintomas e testagem." },
          { step: 3, instruction: "Agendar retorno ou telemonitoramento (por telefone ou WhatsApp)." },
          { step: 4, instruction: "ACS ou enfermeiro realiza contato diário (telemonitoramento) para avaliar evolução clínica." },
          { step: 5, instruction: "Se piora clínica: agendar reavaliação médica presencial ou encaminhar à UPA." },
          { step: 6, instruction: "Após alta clínica: registrar encerramento do caso no e-SUS." },
        ],
        note: "Critérios para alta: 10 dias após início dos sintomas + 24h sem febre e sem uso de antitérmicos + melhora geral do quadro clínico. REFORÇAR VACINAÇÃO E MEDIDAS PREVENTIVAS (máscara, higiene, distanciamento quando indicado).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ARBOVIROSES
  // ─────────────────────────────────────────────────────────────
  {
    id: "arboviroses",
    label: "Arboviroses",
    description:
      "Fluxos de atendimento para dengue, chikungunya e Zika, incluindo classificação de risco pelo protocolo do MS, condutas por grupo e notificação.",
    color: "border-orange-500",
    bgColor: "bg-orange-50 text-orange-700",
    icon: "Bug",
    items: [
      {
        id: "arb-01",
        question: "Como recepcionar e realizar a triagem de um paciente com suspeita de arbovirose?",
        department: "Recepção / Técnica de Enfermagem",
        answer:
          "O paciente com sintomas sugestivos de arbovirose deve ser triado com avaliação de sinais de alarme e classificação conforme o protocolo do Ministério da Saúde.",
        steps: [
          { step: 1, instruction: "Usuário chega à recepção relatando sintomas sugestivos de arbovirose: febre, dor de cabeça, dor retro-orbitária, mialgia, artralgia, exantema, náuseas, prostração." },
          { step: 2, instruction: "Recepcionista ou técnica de enfermagem identifica os sintomas, oferece máscara e orienta higienização das mãos." },
          { step: 3, instruction: "Encaminhar para a triagem de enfermagem." },
          { step: 4, instruction: "Técnica de enfermagem aferir sinais vitais e avaliar o nível de hidratação." },
          { step: 5, instruction: "Avaliar presença de sinais de alarme: dor abdominal intensa, sangramentos, vômitos persistentes, irritabilidade, sonolência, hipotensão, dispneia." },
          { step: 6, instruction: "Registrar informações no prontuário." },
        ],
      },
      {
        id: "arb-02",
        question: "Como classificar o risco em casos suspeitos de dengue (Grupos A, B, C e D)?",
        department: "Técnica de Enfermagem / Médico",
        answer:
          "A classificação pelo protocolo do Ministério da Saúde é o passo mais crítico no manejo da dengue. Erros de classificação são a principal causa de óbitos evitáveis.",
        steps: [
          { step: 1, instruction: "GRUPO A: sem sinais de alarme e sem comorbidades → encaminhar para consulta médica na própria USF." },
          { step: 2, instruction: "GRUPO B: sem sinais de alarme, mas com risco (idosos, gestantes, comorbidades) → encaminhar para consulta médica na própria USF." },
          { step: 3, instruction: "GRUPO C: com sinais de alarme → encaminhar imediatamente para hospital de referência com relatório." },
          { step: 4, instruction: "GRUPO D: com choque ou sangramento grave → encaminhar imediatamente para hospital de referência com relatório." },
        ],
        note: "Sinais de alarme surgem entre o 3º e 7º dia da doença, geralmente com a defervescência da febre. Reforçar este alerta ao paciente no momento da consulta.",
      },
      {
        id: "arb-03",
        question: "Quais são as condutas médicas conforme o grupo de classificação da dengue?",
        department: "Médico",
        answer:
          "Após anamnese e exame físico, o médico define a conduta baseada na classificação de risco, solicitando exames e prescrevendo tratamento adequado para cada grupo.",
        steps: [
          { step: 1, instruction: "Realizar anamnese detalhada e exame físico." },
          { step: 2, instruction: "Solicitar exames conforme protocolo: hemograma, hematócrito, sorologia, NS1, teste rápido. O encaminhamento para testagem é feito no CTA (funciona de segunda a quinta)." },
          { step: 3, instruction: "CASOS LEVES (Grupo A): hidratação oral supervisionada; prescrever sintomáticos (paracetamol ou dipirona); orientar sinais de alarme e retorno diário para reavaliação. EVITAR AAS E ANTI-INFLAMATÓRIOS!" },
          { step: 4, instruction: "CASOS MODERADOS (Grupo B): iniciar hidratação oral intensificada; solicitar hemograma de controle; manter acompanhamento diário pela equipe de enfermagem." },
          { step: 5, instruction: "CASOS GRAVES (Grupos C e D): encaminhar para UPA ou hospital de referência, comunicando previamente." },
        ],
        note: "IMPORTANTE: evitar AAS, ibuprofeno, diclofenaco ou similares em todos os casos de dengue.",
      },
      {
        id: "arb-04",
        question: "Como orientar o paciente e a família sobre cuidados e sinais de alarme nas arboviroses?",
        department: "Médico / Enfermeira / ACS",
        answer:
          "As orientações ao paciente e à família são fundamentais para a segurança no acompanhamento domiciliar e para a prevenção de novos casos.",
        steps: [
          { step: 1, instruction: "Explicar a importância da hidratação (ingerir líquidos claros: água, soro caseiro, sucos, sopas)." },
          { step: 2, instruction: "Reforçar sinais de alarme que exigem retorno imediato: dor abdominal intensa, vômitos persistentes, tontura, sangramentos, sonolência, irritabilidade, extremidades frias, ausência de diurese." },
          { step: 3, instruction: "Alertar para NÃO usar AAS, ibuprofeno, diclofenaco ou similares." },
          { step: 4, instruction: "Orientar sobre prevenção: eliminar criadouros, tampar reservatórios, usar repelente e telas." },
          { step: 5, instruction: "Em caso de chikungunya: explicar que a dor articular pode persistir e orientar retorno se não houver melhora." },
          { step: 6, instruction: "Em caso de gestante: manter vigilância e acompanhamento conjunto com o pré-natal." },
        ],
      },
      {
        id: "arb-05",
        question: "Como realizar a notificação, acompanhamento e encerramento do caso de arbovirose?",
        department: "Enfermeira / ACS",
        answer:
          "A notificação é obrigatória para todos os casos suspeitos. O acompanhamento domiciliar e o encerramento correto no sistema são responsabilidade da equipe.",
        steps: [
          { step: 1, instruction: "Notificar o caso suspeito de arbovirose no SINAN. A notificação e comunicação com a VIEP é feita pela enfermeira." },
          { step: 2, instruction: "Informar à Vigilância Epidemiológica Municipal." },
          { step: 3, instruction: "Atualizar o mapa de áreas com casos suspeitos." },
          { step: 4, instruction: "Realizar visitas domiciliares ou telemonitoramento diário (no período febril e até 7 dias após)." },
          { step: 5, instruction: "Reavaliar sinais clínicos e verificar hidratação." },
          { step: 6, instruction: "Reencaminhar o paciente à unidade em caso de agravamento." },
          { step: 7, instruction: "Confirmar recuperação clínica; encerrar o caso no sistema de notificação; reforçar ações educativas e de prevenção na comunidade." },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // HANSENÍASE
  // ─────────────────────────────────────────────────────────────
  {
    id: "hanseniase",
    label: "Hanseníase",
    description:
      "Detecção precoce, exame dermatoneurológico, classificação operacional (PB/MB) e tratamento com Poliquimioterapia (PQT) na atenção primária.",
    color: "border-pink-500",
    bgColor: "bg-pink-50 text-pink-700",
    icon: "Hand",
    items: [
      {
        id: "han-01",
        question: "Como recepcionar e triar um paciente com suspeita de hanseníase?",
        department: "Recepção / Enfermagem",
        answer:
          "O paciente que procura atendimento com manchas na pele, dormência, formigamento ou perda de sensibilidade deve ser encaminhado para triagem e avaliação médica.",
        steps: [
          { step: 1, instruction: "Paciente relata manchas na pele, dormência, formigamento ou perda de sensibilidade." },
          { step: 2, instruction: "Profissional da recepção realiza acolhimento e aciona médico ou enfermeira para definir quem fará o atendimento." },
          { step: 3, instruction: "Encaminhar para a triagem de enfermagem se houver sinais sugestivos de hanseníase." },
          { step: 4, instruction: "Enfermeira ou técnica de enfermagem realiza avaliação preliminar: identifica lesões suspeitas e verifica histórico familiar e tempo de evolução." },
          { step: 5, instruction: "Se houver suspeita consistente: encaminhar para avaliação médica." },
          { step: 6, instruction: "Se não houver suspeita: orientar o paciente e agendar retorno conforme necessidade." },
        ],
      },
      {
        id: "han-02",
        question: "Como realizar o exame dermatoneurológico e confirmar o diagnóstico de hanseníase?",
        department: "Médico",
        answer:
          "O diagnóstico é clínico, baseado no exame dermatoneurológico completo. Avalia-se manchas, sensibilidade, nervos periféricos e força muscular.",
        steps: [
          { step: 1, instruction: "Realizar anamnese detalhada e exame dermatoneurológico completo." },
          { step: 2, instruction: "Avaliar manchas hipocrômicas, eritematosas ou infiltradas." },
          { step: 3, instruction: "Testar sensibilidade térmica, tátil e dolorosa nas lesões." },
          { step: 4, instruction: "Verificar espessamento ou dor em nervos periféricos (nervo ulnar, fibular, auricular magno)." },
          { step: 5, instruction: "Avaliar força muscular e presença de neurites." },
          { step: 6, instruction: "Se suspeita confirmada: solicitar exames complementares (baciloscopia de linfa, quando disponível)." },
          { step: 7, instruction: "Classificar operacionalmente: Paucibacilar (PB) = até 5 lesões e poucos nervos acometidos; Multibacilar (MB) = mais de 5 lesões e/ou múltiplos nervos acometidos." },
          { step: 8, instruction: "Registrar o caso como confirmado no prontuário e no SINAN." },
        ],
        note: "Garantir privacidade e sigilo no atendimento para evitar estigma. Não é necessário isolamento (doença de baixa transmissibilidade). Usar luvas para manipular lesões e curativos; higienizar as mãos antes e após o contato.",
      },
      {
        id: "han-03",
        question: "Como iniciar e acompanhar o tratamento com Poliquimioterapia (PQT)?",
        department: "Médico / Enfermeira",
        answer:
          "A PQT é o tratamento padrão, gratuito no SUS. O início deve ser imediato após a confirmação diagnóstica, com doses supervisionadas mensais na USF.",
        steps: [
          { step: 1, instruction: "PB (Paucibacilar): Rifampicina + Dapsona — 6 doses supervisionadas mensais." },
          { step: 2, instruction: "MB (Multibacilar): Rifampicina + Clofazimina + Dapsona — 12 doses supervisionadas mensais." },
          { step: 3, instruction: "Enfermeira supervisiona as doses mensais e orienta quanto à adesão." },
          { step: 4, instruction: "Médico avalia reações adversas e acompanha a evolução clínica." },
          { step: 5, instruction: "Avaliar em cada consulta: adesão, evolução clínica e presença de reações hansênicas." },
          { step: 6, instruction: "Reforçar autocuidado: hidratação da pele, proteção dos olhos e pés, calçados adequados, evitar queimaduras e ferimentos por perda de sensibilidade." },
          { step: 7, instruction: "Orientar que a hanseníase tem cura, o tratamento é gratuito no SUS e a transmissão cessa após a 1ª dose supervisionada." },
        ],
        note: "O paciente deixa de transmitir a doença após a 1ª dose supervisionada. Informar isso ao paciente e à família para combater o estigma social.",
      },
      {
        id: "han-04",
        question: "Como realizar a notificação, investigação dos contatos domiciliares e encerramento do caso?",
        department: "Enfermeira / ACS",
        answer:
          "A busca ativa de contatos domiciliares é obrigatória. A notificação no SINAN e o acompanhamento pós-alta garantem a vigilância epidemiológica adequada.",
        steps: [
          { step: 1, instruction: "Notificar o caso no SINAN. Profissional responsável: enfermeira." },
          { step: 2, instruction: "Informar a Vigilância Epidemiológica Municipal." },
          { step: 3, instruction: "Organizar acompanhamento mensal e controle de doses supervisionadas." },
          { step: 4, instruction: "ACS e enfermeira realizam visita domiciliar e exame dermatoneurológico de todos os contatos próximos." },
          { step: 5, instruction: "Orientar contatos sobre sinais e sintomas da doença e importância do retorno periódico à unidade." },
          { step: 6, instruction: "Após completar o esquema de PQT e cessar sinais de atividade: avaliar possíveis incapacidades e sequelas (IMPORTANTE!)." },
          { step: 7, instruction: "Encerrar o caso no SINAN, programar reavaliações pós-alta e reforçar ações educativas e busca ativa de novos casos." },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // TOXOPLASMOSE
  // ─────────────────────────────────────────────────────────────
  {
    id: "toxoplasmose",
    label: "Toxoplasmose",
    description:
      "Rastreamento sorológico, diagnóstico e manejo da toxoplasmose gestacional e congênita no pré-natal da USF.",
    color: "border-violet-500",
    bgColor: "bg-violet-50 text-violet-700",
    icon: "Cat",
    items: [
      {
        id: "tox-01",
        question: "Como realizar o rastreamento de toxoplasmose no pré-natal?",
        department: "Enfermeira / Médica / Pré-Natal",
        answer:
          "O rastreamento sorológico (IgG e IgM) deve ser solicitado na primeira consulta de pré-natal e repetido conforme o resultado, com orientações preventivas em todos os atendimentos.",
        steps: [
          { step: 1, instruction: "Gestante comparece à USF para consulta de pré-natal ou relatando sintomas inespecíficos." },
          { step: 2, instruction: "Recepção realiza acolhimento e registro no sistema. Se em início de pré-natal: encaminhar para triagem de enfermagem." },
          { step: 3, instruction: "Técnica de enfermagem realiza acolhimento inicial, avaliação dos sinais e sintomas e registra sinais vitais." },
          { step: 4, instruction: "Enfermeira coleta informações sobre hábitos alimentares, contato com gatos, jardinagem e ingestão de carne crua." },
          { step: 5, instruction: "Solicitar sorologia para toxoplasmose (IgM e IgG) como parte dos exames de rotina do pré-natal." },
          { step: 6, instruction: "Encaminhar para consulta médica ou com a enfermeira do pré-natal." },
        ],
      },
      {
        id: "tox-02",
        question: "Como interpretar os resultados sorológicos e qual a conduta em cada situação?",
        department: "Médica / Enfermeira",
        answer:
          "A interpretação correta da sorologia define a conduta imediata. Casos com IgM positivo requerem ação rápida para reduzir o risco de transmissão fetal.",
        steps: [
          { step: 1, instruction: "IgG negativo + IgM negativo (Suscetível): gestante não imune → reforçar orientações preventivas e repetir sorologia trimestralmente." },
          { step: 2, instruction: "IgG positivo + IgM negativo (Imune): gestante imune → manter acompanhamento de rotina do pré-natal." },
          { step: 3, instruction: "IgM positivo (com ou sem IgG): suspeita de infecção aguda → solicitar teste de avidez do IgG." },
          { step: 4, instruction: "Teste de avidez — ALTA avidez: infecção antiga (antes da gestação), sem risco fetal." },
          { step: 5, instruction: "Teste de avidez — BAIXA avidez: infecção recente (durante a gestação) → iniciar tratamento e notificar." },
        ],
        note: "Caso haja infecção recente confirmada: notificar e encaminhar para o Pré-Natal de Alto Risco (PNAR) e iniciar condutas terapêuticas conforme protocolo.",
      },
      {
        id: "tox-03",
        question: "Qual é a conduta terapêutica inicial e como encaminhar para o pré-natal de alto risco?",
        department: "Médica",
        answer:
          "O tratamento deve ser iniciado o mais precocemente possível após a confirmação de infecção recente, com encaminhamento imediato para serviço especializado.",
        steps: [
          { step: 1, instruction: "Iniciar Espiramicina 500 mg a cada 8 horas até avaliação especializada." },
          { step: 2, instruction: "Reforçar a importância da adesão ao tratamento e dos retornos mensais." },
          { step: 3, instruction: "Registrar o caso no prontuário e comunicar à Vigilância Epidemiológica Municipal." },
          { step: 4, instruction: "Encaminhar a gestante para o Pré-Natal de Alto Risco (PNAR) em unidade de referência especializada." },
          { step: 5, instruction: "No serviço de referência serão realizados: ultrassonografia morfológica seriada; avaliação fetal para sinais de infecção congênita; PCR para Toxoplasma gondii no líquido amniótico, se indicado." },
          { step: 6, instruction: "Manter retorno à USF para seguimento conjunto e monitoramento da adesão. O serviço de alto risco ajusta a conduta conforme fase gestacional e resultados." },
        ],
      },
      {
        id: "tox-04",
        question: "Quais orientações preventivas devem ser reforçadas para gestantes suscetíveis?",
        department: "Equipe de Pré-Natal / ACS",
        answer:
          "Gestantes suscetíveis (IgG e IgM negativos) devem receber orientações claras a cada consulta, pois não há vacina disponível contra a toxoplasmose.",
        steps: [
          { step: 1, instruction: "Evitar comer carne crua ou malpassada." },
          { step: 2, instruction: "Lavar bem frutas, verduras e utensílios de cozinha com água corrente." },
          { step: 3, instruction: "Usar luvas ao manipular solo e ao praticar jardinagem; lavar as mãos após." },
          { step: 4, instruction: "Evitar contato direto com fezes de gatos; delegar a limpeza da caixa de areia para outra pessoa." },
          { step: 5, instruction: "Consumir apenas água tratada ou fervida." },
          { step: 6, instruction: "Manter higiene rigorosa das mãos e utensílios em toda a manipulação de alimentos." },
          { step: 7, instruction: "Garantir apoio psicológico e social à gestante, quando necessário." },
        ],
        note: "Gatos domésticos alimentados com ração industrializada e sem acesso à rua têm baixo risco de transmissão. O risco está na eliminação fecal de oocistos. Reforçar essas orientações em todas as consultas enquanto a gestante permanecer suscetível.",
      },
      {
        id: "tox-05",
        question: "Como monitorar o recém-nascido e encerrar o caso após o parto?",
        department: "Enfermeira / Médica",
        answer:
          "Após o parto, a USF deve garantir a continuidade do cuidado, notificando casos confirmados e acompanhando o recém-nascido em conjunto com o pediatra.",
        steps: [
          { step: 1, instruction: "Notificar o caso confirmado de toxoplasmose gestacional e/ou congênita no SINAN. Profissional responsável: enfermeira da USF." },
          { step: 2, instruction: "Comunicar à Vigilância Epidemiológica Municipal." },
          { step: 3, instruction: "Acompanhar o recém-nascido em conjunto com o pediatra." },
          { step: 4, instruction: "Realizar sorologia e exames complementares no recém-nascido conforme orientação pediátrica." },
          { step: 5, instruction: "Encaminhar para serviço de referência neonatal se houver sinais de infecção congênita." },
          { step: 6, instruction: "Após parto e finalização do acompanhamento: avaliar desfechos clínicos, encerrar o caso no SINAN, registrar no prontuário e reforçar orientações preventivas para futuras gestações." },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // IST / HIV
  // ─────────────────────────────────────────────────────────────
  {
    id: "ist-hiv",
    label: "IST's / HIV",
    description:
      "Testagem rápida para HIV, sífilis e hepatites B e C, aconselhamento pré e pós-teste, notificação sigilosa e encaminhamento para o SAE/CTA.",
    color: "border-red-500",
    bgColor: "bg-red-50 text-red-700",
    icon: "Shield",
    items: [
      {
        id: "hiv-01",
        question: "Como realizar o acolhimento e a triagem de enfermagem para testagem de IST/HIV?",
        department: "Recepção / Enfermeira",
        answer:
          "O acolhimento deve garantir sigilo e escuta humanizada desde a recepção. A triagem avalia fatores de risco e oferece testagem para HIV, sífilis e hepatites.",
        steps: [
          { step: 1, instruction: "Recepção realiza acolhimento inicial, garantindo sigilo e escuta humanizada." },
          { step: 2, instruction: "Profissional da recepção ou ACS identifica o motivo da visita (suspeita, sintomas ou solicitação de testagem)." },
          { step: 3, instruction: "Direcionar o usuário para a triagem de enfermagem, onde será feito o teste rápido." },
          { step: 4, instruction: "Enfermeira realiza escuta qualificada: histórico sexual, presença de ISTs, uso de preservativos e fatores de risco." },
          { step: 5, instruction: "Oferecer testes rápidos para ISTs: HIV, sífilis, hepatites B e C." },
        ],
        note: "Em casos de feriados e fins de semana, a testagem e o protocolo de PEP são feitos no Hospital Luís Argolo.",
      },
      {
        id: "hiv-02",
        question: "Como realizar o teste rápido com aconselhamento pré e pós-teste?",
        department: "Enfermeira",
        answer:
          "O teste deve ser feito em sala específica com privacidade e biossegurança, seguindo as diretrizes da Política Nacional de IST/AIDS para aconselhamento.",
        steps: [
          { step: 1, instruction: "Realizar o teste em sala específica, com privacidade e medidas de biossegurança." },
          { step: 2, instruction: "ACONSELHAMENTO PRÉ-TESTE: explicação sobre o exame, formas de prevenção e significado dos possíveis resultados." },
          { step: 3, instruction: "Realizar a coleta conforme protocolo do Ministério da Saúde." },
          { step: 4, instruction: "RESULTADO NÃO REAGENTE (Negativo): reforçar orientações de prevenção combinada (preservativos, PrEP/PEP quando indicado, com retirada no CTA) e periodicidade da testagem. Liberar com acompanhamento de rotina." },
          { step: 5, instruction: "RESULTADO REAGENTE (Positivo): comunicar o resultado de forma sigilosa, empática e acolhedora. Realizar teste confirmatório conforme fluxo laboratorial preconizado. Notificar sigilosamente ao SINAN." },
        ],
      },
      {
        id: "hiv-03",
        question: "Como encaminhar e acompanhar o paciente com resultado reagente para HIV?",
        department: "Médico / Enfermeira",
        answer:
          "O resultado reagente requer encaminhamento imediato ao serviço especializado e acompanhamento conjunto e longitudinal entre o SAE/CTA e a USF.",
        steps: [
          { step: 1, instruction: "Encaminhar ao SAE (Serviço de Atenção Especializada) ou CTA (Centro de Testagem e Aconselhamento) para: confirmação diagnóstica (Western Blot ou carga viral), avaliação clínica inicial e início do tratamento antirretroviral (TARV)." },
          { step: 2, instruction: "O acompanhamento multiprofissional no SAE/CTA inclui: infectologista, enfermeiro, farmacêutico, psicólogo e assistente social." },
          { step: 3, instruction: "A USF continua responsável pelo seguimento longitudinal: monitoramento da adesão ao TARV, prevenção e tratamento de infecções oportunistas, suporte psicológico e social." },
          { step: 4, instruction: "Orientar sobre formas de transmissão e prevenção, inclusive para parceiros." },
          { step: 5, instruction: "IMPORTANTE: encaminhar parceiros sexuais para testagem!" },
          { step: 6, instruction: "Acompanhamento periódico no SAE e na USF; atualizar resultados laboratoriais (carga viral e CD4) no CTA." },
        ],
        note: "Garantir sigilo e respeito à confidencialidade em todo o processo. A notificação ao SINAN deve ser sigilosa. Aconselhamento sobre a importância do uso contínuo da medicação, mesmo sem sintomas.",
      },
      {
        id: "hiv-04",
        question: "Como realizar ações de vigilância e prevenção comunitária de ISTs/HIV?",
        department: "ACS / Equipe de Saúde",
        answer:
          "As ações educativas no território são fundamentais para a prevenção primária e o combate ao estigma relacionado às ISTs e ao HIV.",
        steps: [
          { step: 1, instruction: "ACS e equipe de saúde desenvolvem campanhas sobre ISTs e prevenção combinada no território." },
          { step: 2, instruction: "Distribuir preservativos e material informativo." },
          { step: 3, instruction: "Incentivar a testagem voluntária e o combate ao estigma." },
          { step: 4, instruction: "Avaliação de condições clínicas associadas: coinfecções e comorbidades." },
          { step: 5, instruction: "Revisão contínua do plano de cuidado e fortalecimento do vínculo com a equipe." },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // ESPOROTRICOSE
  // ─────────────────────────────────────────────────────────────
  {
    id: "esporotricose",
    label: "Esporotricose",
    description:
      "Identificação, diagnóstico, coleta de material para cultura, classificação clínica, tratamento antifúngico e vigilância epidemiológica da esporotricose humana e sua relação com a transmissão zoonótica felina.",
    color: "border-teal-500",
    bgColor: "bg-teal-50 text-teal-700",
    icon: "FlaskConical",
    items: [
      {
        id: "esp-01",
        question: "Como recepcionar e triar um paciente com suspeita de esporotricose?",
        department: "Recepção / Enfermagem",
        answer:
          "O paciente pode chegar por identificação do ACS na comunidade ou por demanda espontânea relatando lesões cutâneas sugestivas e histórico de contato com animais ou matéria orgânica contaminada.",
        steps: [
          { step: 1, instruction: "ACS identifica caso suspeito e encaminha para atendimento, ou o usuário chega por demanda espontânea na UBS." },
          { step: 2, instruction: "Usuário relata: lesões cutâneas nodulares ou ulceradas; feridas que não cicatrizam; lesões com secreção ou crostas; nódulos que seguem o trajeto dos vasos linfáticos; histórico de arranhadura/mordedura de gato ou contato nos últimos 6 meses com gato, cão ou outro animal com suspeita/diagnóstico de esporotricose; ou manipulação sem luvas de solo/plantas contaminadas." },
          { step: 3, instruction: "Recepcionista registra a queixa principal no prontuário/sistema e aciona o médico ou enfermeira conforme disponibilidade da agenda." },
          { step: 4, instruction: "Enfermeira ou técnica de enfermagem realiza avaliação preliminar: localização e quantidade das lesões, nódulos subcutâneos, secreção/ulceração e presença de linfangite nodular." },
          { step: 5, instruction: "Verificar histórico epidemiológico dos últimos 6 meses (contato com gatos feridos, arranhaduras/mordidas, manipulação de solo/plantas, animais doentes na residência) e avaliar tempo de evolução e queixas sistêmicas (febre, dor local, mal-estar)." },
          { step: 6, instruction: "Com suspeita consistente: encaminhar para avaliação médica e realizar notificação semanal. Sem suspeita: orientar o paciente e agendar retorno conforme necessidade." },
        ],
        note: "Sinais de gravidade — febre persistente, dispneia, alteração neurológica, lesões disseminadas, acometimento ocular, imunossupressão — indicam prioridade para avaliação médica imediata.",
      },
      {
        id: "esp-02",
        question: "Como conduzir a consulta clínica e o diagnóstico diferencial da esporotricose?",
        department: "Médico(a)",
        answer:
          "O diagnóstico combina parâmetros epidemiológicos, clínicos e laboratoriais, com exame dermatoneurológico detalhado e diagnóstico diferencial com outras dermatoses granulomatosas.",
        steps: [
          { step: 1, instruction: "Realizar anamnese detalhada: início e evolução das lesões, trauma cutâneo prévio, contato com animais doentes e presença de outras doenças ou imunossupressão." },
          { step: 2, instruction: "Exame dermatoneurológico: avaliar lesões cutâneas (pápulas, nódulos subcutâneos, úlceras, lesões crostosas), o trajeto linfático (forma cutâneo-linfática) e outras regiões corporais." },
          { step: 3, instruction: "Definir hipótese diagnóstica com base em parâmetros epidemiológicos (trauma com gatos doentes ou não, plantas, subprodutos vegetais ou solo contaminados), clínicos (formas cutânea, mucosa ou extracutânea) e laboratoriais." },
          { step: 4, instruction: "Se clínica e epidemiologia forem sugestivas: solicitar cultura micológica para isolamento e identificação de Sporothrix spp." },
          { step: 5, instruction: "Solicitar exames de rotina para seguimento: hemograma, hepatograma e função renal." },
          { step: 6, instruction: "Realizar diagnóstico diferencial com: leishmaniose tegumentar, tuberculose cutânea, blastomicose sul-americana (Paracoccidioides brasiliensis) e cromoblastomicose (considerar ainda outras viroses, bacterioses, micoses, protozooses, helmintoses e doenças não infecciosas com apresentação semelhante)." },
        ],
        note: "Encaminhar para serviço especializado quando houver: formas disseminadas, comprometimento sistêmico, imunossupressão (HIV, transplantados), falha terapêutica ou necessidade de anfotericina B. Encaminhar para infectologia/telerregulação em casos de forma disseminada, forma extracutânea, refratariedade terapêutica, eventos adversos importantes, imunossupressão, gestação, crianças <14 anos, hepatopatia, diabetes descompensado, alcoolismo crônico ou contraindicação ao itraconazol.",
      },
      {
        id: "esp-03",
        question: "Como coletar o material para cultura (biópsia ou aspirado de lesão)?",
        department: "Enfermagem / Coleta",
        answer:
          "A coleta só é feita na USF quando há disponibilidade de material, seguindo rigorosamente as normas de assepsia, acondicionamento e transporte até o LACEN/BA.",
        steps: [
          { step: 1, instruction: "Tecido obtido por biópsia: lavar/higienizar as mãos; usar EPI (luvas estéreis, máscara, touca, óculos, avental); realizar assepsia do local com SF 0,9% e colocar campos estéreis." },
          { step: 2, instruction: "Coletar fragmento da lesão com instrumento estéril, ou encostar um swab estéril em ângulo de 30° e girar sobre a ferida por alguns segundos para absorver o material." },
          { step: 3, instruction: "Colocar a amostra em frasco transparente estéril com soro fisiológico 0,9% (embeber completamente). ATENÇÃO: não usar nenhum líquido fixador (formol ou álcool)." },
          { step: 4, instruction: "Secreção obtida por aspirado de lesão: realizar assepsia e campos estéreis; aspirar com agulha e seringa descartável o conteúdo da lesão cutânea; acondicionar em frasco estéril com pequena quantidade de SF 0,9%." },
          { step: 5, instruction: "Encaminhar ao Laboratório Central de Saúde Pública Profº Gonçalo Moniz (LACEN/BA), mantendo e transportando as amostras sob refrigeração (2°C a 8°C)." },
          { step: 6, instruction: "Na esporotricose extracutânea, colher outros materiais conforme o comprometimento clínico: líquido sinovial, escarro, líquor ou sangue." },
        ],
        note: "Amostras são rejeitadas em caso de envio em frasco não estéril e sem tampa, envio em seringa, volume menor que 500 µL ou após 48 horas da coleta. O resultado do isolamento e identificação do fungo fica disponível em até 30 dias. O método definitivo de confirmação é o isolamento do fungo em cultura seguido da prova térmica de dimorfismo.",
      },
      {
        id: "esp-04",
        question: "Como classificar clinicamente o caso confirmado de esporotricose?",
        department: "Médico(a)",
        answer:
          "Após confirmação, o caso é classificado em cutâneo ou extracutâneo, cada um com subtipos e características próprias que orientam a gravidade e o encaminhamento.",
        steps: [
          { step: 1, instruction: "Formas cutâneas — linfocutânea (≈60–70% dos casos): forma mais comum, com nódulos e úlceras no local do trauma que se disseminam ao longo dos vasos linfáticos." },
          { step: 2, instruction: "Cutânea fixa (≈25% dos casos): lesão única e localizada no ponto de inoculação, sem disseminação linfática nem acometimento de órgãos internos." },
          { step: 3, instruction: "Cutânea disseminada (<5% dos casos): múltiplas lesões cutâneas não contíguas, mais comum em imunossuprimidos (AIDS, etilistas, uso de imunossupressores) ou após contato repetido com gatos infectados." },
          { step: 4, instruction: "Formas extracutâneas: mucosas (boca, nariz, faringe, laringe); oculares (conjuntivite granulomatosa, dacriocistite, ceratite, uveíte, retinite, esclerite, endoftalmite); osteoarticulares (osteomielite e artrite); pulmonares (tosse persistente, febre, sudorese noturna, perda de peso); neurológicas (meningoencefalite crônica, mais frequente em HIV/AIDS); outras localizações/sepse (linfonodos, medula óssea, sangue, urina)." },
          { step: 5, instruction: "Registrar o caso como confirmado no prontuário e no SINAN." },
        ],
        note: "Caso seja identificado algum animal doente, é importante realizar sua coleta e investigação junto com o caso humano, complementando o diagnóstico e contribuindo para o controle e prevenção do agravo.",
      },
      {
        id: "esp-05",
        question: "Como conduzir o tratamento antifúngico da esporotricose?",
        department: "Médico(a) / Farmácia",
        answer:
          "O tratamento é iniciado na própria USF, com dispensação vinda da VIEP e acompanhamento mensal, podendo durar de três meses a um ano conforme a resposta clínica.",
        steps: [
          { step: 1, instruction: "Itraconazol — Adultos: 200 mg/dia; Crianças: 5 a 10 mg/kg/dia; via oral, 1x/dia após refeição, até 1 mês após o desaparecimento dos sinais clínicos/lesões." },
          { step: 2, instruction: "Terbinafina — Adultos: 500 mg/dia; Crianças: <20 kg = 62,5 mg; 20–40 kg = 125 mg; >40 kg = 250 mg; via oral, 1x/dia, mesma duração do itraconazol." },
          { step: 3, instruction: "Solução saturada de iodeto de potássio — iniciar com 5 gotas, aumentando 1 gota/dia (ambas as tomadas) até atingir a dose alvo (adultos 20–25 gotas 2x/dia; crianças conforme peso: <20kg = 10 gotas, 20–40kg = 15 gotas, >40kg = 20–25 gotas); manipular 50g de iodeto de potássio em 35mL de água destilada; tomar após refeições, com suco ou leite, nunca puro." },
          { step: 4, instruction: "Posaconazol 400 mg (10mL da solução oral), via oral, 2x/dia após refeição — terapia de resgate para casos refratários graves." },
          { step: 5, instruction: "Anfotericina B — complexo lipídico 5 mg/kg/dia ou lipossomal 3 mg/kg/dia, via intravenosa, 1x/dia, até resposta clínica (em torno de 10 a 14 dias); substituir por itraconazol assim que possível." },
          { step: 6, instruction: "Duração total do tratamento: de três a seis meses, podendo se estender até um ano de acordo com a resposta clínica. Início do tratamento na própria USF e acompanhamento MENSAL pela equipe de saúde da família." },
        ],
        note: "Em casos especiais (adultos ou crianças que não conseguem deglutir cápsulas), o itraconazol pode ser aberto e dissolvido em sucos cítricos ou xarope. Orientar durante o tratamento: não interromper antes da orientação médica; comparecer às consultas de acompanhamento; manter higiene das lesões (limpeza com água e sabão, mantê-las cobertas quando necessário, evitar manipulação); evitar contato direto com secreções e usar luvas ao manipular feridas; e, quanto aos animais, evitar contato com gatos doentes, encaminhá-los para avaliação veterinária e mantê-los isolados até o tratamento.",
      },
      {
        id: "esp-06",
        question: "Como realizar a notificação, o acompanhamento mensal, o encerramento do caso e as medidas de prevenção?",
        department: "Enfermeira / Equipe de Saúde",
        answer:
          "A vigilância inclui notificação no SINAN, busca ativa de casos humanos e animais, acompanhamento mensal da resposta ao tratamento e orientações de prevenção e controle ambiental.",
        steps: [
          { step: 1, instruction: "Notificar o caso no SINAN (enfermeira) e informar a Vigilância Epidemiológica Municipal para fornecimento de medicamentos." },
          { step: 2, instruction: "Organizar o acompanhamento mensal e o controle de doses supervisionadas; realizar busca ativa de casos humanos e animais na região de ocorrência, com colaboração dos ACE e ACS; investigar gatos com feridas, animais com secreção nasal/cutânea e surtos locais; realizar visita domiciliar quando necessário." },
          { step: 3, instruction: "Acompanhamento mensal: avaliar regressão das lesões, surgimento de novas lesões, adesão ao tratamento, efeitos adversos e sinais de hepatotoxicidade. Observar clinicamente redução de nódulos, cicatrização das úlceras e ausência de novas lesões." },
          { step: 4, instruction: "Sem melhora: reavaliar diagnóstico, ajustar dose ou trocar medicamento e encaminhar para serviço especializado." },
          { step: 5, instruction: "Encerramento do caso: cura definida pelo desaparecimento completo das lesões (reepitelização, ausência de infiltração local, de crosta e de hiperemia) e tratamento mantido por pelo menos 1 mês após a cura clínica. Avaliar possíveis incapacidades/sequelas, registrar cura no prontuário, encerrar no SINAN e programar reavaliações pós-alta." },
          { step: 6, instruction: "Orientações de prevenção e controle: limpeza periódica de quintais; remoção de restos de materiais de construção e detritos orgânicos em decomposição; uso de hipoclorito de sódio na limpeza de superfícies manipuladas pelo animal doente; destinação correta de carcaças de animais infectados (saco branco leitoso com símbolo de risco biológico, sob refrigeração até incineração); controle reprodutivo (castração); diagnóstico precoce; tratamento correto e isolamento apropriado." },
        ],
        note: "Uso de EPIs (luvas descartáveis de látex, avental descartável de mangas compridas, máscara N95/PFF2 e óculos de segurança) durante atividades de alto risco com animais. Após manipular o animal e retirar as luvas, lavar mãos e antebraços com sabão. A eutanásia pode ser indicada para animais com lesões extensas e sem possibilidade terapêutica.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // VIOLÊNCIA DOMÉSTICA
  // ─────────────────────────────────────────────────────────────
  {
    id: "violencia-domestica",
    label: "Violência Doméstica",
    description:
      "Acolhimento humanizado, identificação do tipo de violência, avaliação de risco, condutas clínicas específicas, notificação compulsória e encaminhamento de mulheres em situação de violência doméstica na Atenção Primária.",
    color: "border-rose-500",
    bgColor: "bg-rose-50 text-rose-700",
    icon: "ShieldAlert",
    items: [
      {
        id: "vd-01",
        question: "Como acolher inicialmente uma mulher em situação de violência doméstica?",
        department: "Recepção / Enfermeira",
        answer:
          "O primeiro contato deve garantir privacidade e sigilo desde a recepção, direcionando a usuária para a triagem e classificação de risco pela enfermeira.",
        steps: [
          { step: 1, instruction: "Usuária chega à recepção relatando violência doméstica, é encaminhada por outro serviço da rede ou pelo ACS, ou chega com suspeita de violência." },
          { step: 2, instruction: "Recepção realiza acolhimento inicial garantindo privacidade, confidencialidade, empatia, escuta qualificada, atenta e livre de julgamentos." },
          { step: 3, instruction: "Direcionar a usuária para a triagem, onde será feita a classificação de risco e o acolhimento pela enfermeira." },
        ],
        note: "Garantir que a mulher esteja sozinha (sem acompanhantes ou crianças acima de 2 anos) para que se sinta mais confortável para falar sobre a violência.",
      },
      {
        id: "vd-02",
        question: "Como identificar o tipo de violência e avaliar o risco na triagem?",
        department: "Enfermeira",
        answer:
          "A enfermeira deve usar perguntas assertivas — diretas ou indiretas conforme o caso — para identificar a violência, avaliar o risco de vida e informar o plano de segurança.",
        steps: [
          { step: 1, instruction: "Se a usuária relata violência: proceder ao atendimento para identificar o tipo sofrido. Se encaminhada por outro serviço: confirmar se a notificação no SINAN já foi realizada." },
          { step: 2, instruction: "Se a usuária nega violência: atentar para sinais de alerta; se presentes, proceder à identificação do tipo de violência." },
          { step: 3, instruction: "Usar perguntas assertivas diretas (se há queixa de violência) e indiretas (se há apenas suspeita), por exemplo: \"Você já sentiu medo de alguém em casa?\" ou \"Você já foi agredida fisicamente ou por palavras em casa por alguém da família?\"." },
          { step: 4, instruction: "Avaliar a história da violência, o relacionamento com o agressor, a possibilidade de risco de vida, o nível de motivação para lidar com a situação, limitações, possibilidades pessoais e recursos sociais/familiares." },
          { step: 5, instruction: "Avaliação de risco: definir se é situação de urgência ou se pode aguardar atendimento agendado; avaliar risco de suicídio, feminicídio, homicídio ou violência contra crianças." },
          { step: 6, instruction: "Registrar detalhadamente a data da ocorrência e todos os achados clínicos e emocionais da usuária, com destaque para o(s) tipo(s) de violência sofrido(s)." },
          { step: 7, instruction: "Oferecer testes rápidos para IST's (HIV, sífilis e hepatites B e C), com aconselhamento pré e pós-teste." },
          { step: 8, instruction: "Informar o plano de segurança para a vítima." },
        ],
        note: "Plano de segurança: identificar vizinhos de confiança para pedir ajuda; garantir que, se a briga for inevitável, seja em local sem armas; planejar como fugir de casa e para onde ir; deixar em local seguro cópias de documentos, dinheiro, roupas e cópia da chave de casa; combinar um código de comunicação de emergência com uma vizinha de confiança; nunca discutir na cozinha ou em local com armas ou facas.",
      },
      {
        id: "vd-03",
        question: "Quais sinais observar e como conduzir a consulta odontológica?",
        department: "Odontologia",
        answer:
          "A consulta odontológica é uma porta de entrada importante para identificar sinais físicos e comportamentais de violência, especialmente lesões em cabeça, pescoço e região intraoral.",
        steps: [
          { step: 1, instruction: "Identificar sinais físicos sugestivos de violência: lesões em cabeça e pescoço, hematomas, fraturas, marcas de mordida e traumas intraorais (lesões em lábios, gengivas e palato)." },
          { step: 2, instruction: "Observar sinais comportamentais e emocionais: ansiedade, depressão, isolamento social, medo, insegurança ou mudanças repentinas de comportamento." },
          { step: 3, instruction: "Investigar a possibilidade de diferentes formas de violência: física, psicológica/emocional, sexual, negligência e importunação sexual." },
          { step: 4, instruction: "Realizar acolhimento com escuta qualificada, empatia e sigilo; oferecer assistência clínica de acordo com as necessidades identificadas e prestar apoio emocional." },
          { step: 5, instruction: "Orientar sobre direitos e serviços da rede de proteção; articular o cuidado com a equipe multiprofissional e a Estratégia Saúde da Família; encaminhar para serviços especializados quando necessário." },
          { step: 6, instruction: "Realizar a notificação compulsória dos casos suspeitos ou confirmados, conforme a legislação vigente." },
        ],
      },
      {
        id: "vd-04",
        question: "Como conduzir a consulta clínica conforme o tipo de violência (física, psicológica, patrimonial)?",
        department: "Médico(a) / Enfermeira",
        answer:
          "Após identificar o tipo de violência, a consulta clínica deve registrar detalhadamente os achados, notificar em até 24h e seguir condutas específicas para cada tipo de violência.",
        steps: [
          { step: 1, instruction: "Explicar à paciente todos os procedimentos que serão realizados, para que não sejam percebidos como agressão. Autorizar a presença de acompanhante se a paciente concordar." },
          { step: 2, instruction: "Realizar exame clínico com ênfase nas queixas e nas lesões; registrar no prontuário o tipo de lesão, quem foi o agressor, quando/onde/como aconteceu e outros dados significativos." },
          { step: 3, instruction: "Preencher e dar andamento às 2 vias da ficha de notificação de violência em até 24 horas: uma via ao prontuário, outra ao SINAN." },
          { step: 4, instruction: "Orientar sobre a importância do Boletim de Ocorrência; se a usuária não desejar registrá-lo, sua vontade deve ser respeitada, orientando-a sobre seus direitos." },
          { step: 5, instruction: "Violência física: exame físico completo com descrição detalhada das lesões (tipo, localização, tamanho, evolução), registro em mapa corporal, verificação de compatibilidade com o relato, investigação de lesões em diferentes estágios, avaliação de sinais de gravidade (TCE, sangramentos, déficit neurológico), manejo clínico imediato e encaminhamento ao HRSAJ em casos graves; orientar sobre registro no IML e exame pericial." },
          { step: 6, instruction: "Violência psicológica: avaliar estado mental (humor, pensamento, comportamento, afetividade), identificar sofrimento psíquico e risco de suicídio, avaliar medo/culpa/baixa autoestima/dependência emocional e grau de isolamento social; elaborar plano de segurança emocional e encaminhar para psicologia e/ou CAPS." },
          { step: 7, instruction: "Violência patrimonial: investigar controle financeiro exercido pelo agressor, retenção de documentos/bens, impedimento de trabalhar/estudar e dependência econômica; encaminhar para assistência social, CRAS, CREAS e Defensoria Pública." },
        ],
        note: "Reforçar sempre: a violência é crime, com respaldo na Lei Maria da Penha; o registro do B.O. é um direito, não uma obrigação; a decisão de denunciar ou não o agressor será respeitada.",
      },
      {
        id: "vd-05",
        question: "Qual a conduta no atendimento à violência sexual dentro das primeiras 72 horas?",
        department: "Médico(a) / Enfermeira",
        answer:
          "O atendimento à violência sexual é realizado por médico acompanhado de enfermeiro, com foco em contracepção de emergência, profilaxias, coleta de vestígios e encaminhamento ao IML.",
        steps: [
          { step: 1, instruction: "Explicar a importância do exame físico e a possibilidade de coleta de material no IML, detalhando os procedimentos e locais do corpo a serem tocados. Havendo recusa, a decisão e autonomia da paciente devem ser respeitadas." },
          { step: 2, instruction: "Registrar a anamnese: uso de drogas, local e hora aproximada do crime, e o que a vítima fez depois (banhou-se, lavou a área genital, fez ducha vaginal, removeu/inseriu algo na vagina, mudou de roupa ou tomou algum medicamento)." },
          { step: 3, instruction: "Realizar exame físico completo, descrevendo as lesões em localização, tamanho, número e forma, preferencialmente no sentido craniocaudal, incluindo lesões genitais e extragenitais." },
          { step: 4, instruction: "Se ocorreu até 72 horas: realizar anticoncepção de emergência nas usuárias sem contraceptivo eficaz ou quando não for possível avaliar o método em uso (levonorgestrel 1,5mg dose única, ou 0,75mg de 12/12h — total 2 comprimidos — ou opções de anticoncepcional combinado). Usar antieméticos em caso de vômito; repetir a dose se o vômito ocorrer nas primeiras 2 horas após a ingestão." },
          { step: 5, instruction: "Iniciar profilaxia das IST/AIDS, Hepatite B e de gravidez (quando necessário); solicitar β-hCG, sorologias (Anti-HIV, Hepatite B — HbsAg e anti-Hbs —, Hepatite C — anti-HCV —, VDRL), hemograma, TGO, TGP, bilirrubinas, ureia e creatinina." },
          { step: 6, instruction: "Orientar a não higienizar nem remover roupas ou secreções antes do exame pericial, salvo ameaça de vida; encaminhar ao Instituto Médico Legal para coleta de vestígios; agendar consulta de retorno." },
        ],
        note: "A anticoncepção de emergência é encaminhada ao Centro de Testagem e Aconselhamento (CTA), que funciona de segunda a quinta-feira. Se ocorreu com mais de 72 horas ou em casos crônicos: solicitar exames laboratoriais, avaliar atraso menstrual, ofertar preservativos e agendar retorno; em caso de urgência, encaminhar ao Hospital Regional de Santo Antônio de Jesus.",
      },
      {
        id: "vd-06",
        question: "Como organizar o seguimento laboratorial nas consultas médica e de retorno?",
        department: "Médico(a) / Ginecologia",
        answer:
          "O seguimento clínico-ginecológico deve estar disponível desde o primeiro atendimento, com um cronograma de exames que considera sempre a data da agressão (ou da última, em casos crônicos).",
        steps: [
          { step: 1, instruction: "No primeiro atendimento, realizar exame clínico e ginecológico minucioso, incluindo verificação de lesões, corrimentos, quadros sugestivos de IST e amenorreia compatível com gravidez." },
          { step: 2, instruction: "Solicitar sempre o β-hCG no primeiro atendimento, mesmo em usuárias com ciclo menstrual regular, além de VDRL (sífilis), Anti-HIV, HbsAg/anti-Hbs (Hepatite B), Anti-HCV (Hepatite C) e pesquisa de gonococo/tricomonas/clamídia." },
          { step: 3, instruction: "Cronograma pós-agressão: 30 dias → β-hCG (gravidez); 6 semanas → VDRL e Anti-HIV; 3 meses → VDRL, Anti-HIV e HbsAg; 6 meses → Anti-HIV e Anti-HCV." },
          { step: 4, instruction: "Fazer manejo clínico sindrômico das ISTs conforme resultados dos exames e protocolos ministeriais." },
          { step: 5, instruction: "Encorajar a realização da denúncia policial, caso ainda não tenha sido feita, explicando sua importância especialmente diante da possibilidade de gravidez e opção pelo aborto; oferecer o endereço da Delegacia da Mulher." },
          { step: 6, instruction: "Agendar consulta de retorno e as consultas de acompanhamento com os resultados dos exames indicados para cada época." },
        ],
        note: "Para todos os casos, mesmo assintomáticos e/ou com exames negativos no primeiro atendimento, devem ser solicitados os exames de gravidez, sífilis, HIV e hepatites B/C nas consultas de acompanhamento previamente agendadas.",
      },
      {
        id: "vd-07",
        question: "Como conduzir os casos de gravidez decorrente de violência sexual?",
        department: "Médico(a) / Serviço Social",
        answer:
          "Confirmada a gravidez, a usuária deve ser esclarecida sobre as três possibilidades legais existentes, com pleno respeito à sua autonomia e sigilo.",
        steps: [
          { step: 1, instruction: "Desejo de continuar a gravidez e permanecer com o filho: seguir pré-natal na Unidade de Saúde." },
          { step: 2, instruction: "Desejo de continuar a gravidez e dar a criança para adoção: pré-natal na Unidade de Saúde e encaminhamento à 2ª Vara da Infância e da Juventude para o processo de adoção legal." },
          { step: 3, instruction: "Desejo de realizar a interrupção da gravidez (aborto): encaminhar imediatamente a mulher para o Hospital Maternidade Luiz Argolo (referência para Interrupção Legal da Gestação — ILG), onde a solicitação será avaliada do ponto de vista técnico." },
        ],
        note: "O aborto legal é garantido pela lei de forma gratuita, sigilosa e sem necessidade de autorização judicial ou registro de Boletim de Ocorrência, bastando o relato da paciente e o registro em prontuário da agressão, da data da ocorrência e dos achados clínicos e emocionais. No caso de entrega para adoção, há acompanhamento e audiência pós-parto para confirmação da decisão, com prazo de arrependimento de até 10 dias corridos; não há obrigatoriedade de informar o pai da criança nem possibilidade de escolha dos adotantes; o sigilo total é garantido, inclusive em relação à família.",
      },
      {
        id: "vd-08",
        question: "Quais encaminhamentos à rede intersetorial e condutas subsequentes devem ser garantidos?",
        department: "Equipe Multiprofissional",
        answer:
          "O cuidado à mulher em situação de violência exige articulação contínua com a rede de proteção e acompanhamento longitudinal pela USF, com monitoramento permanente do risco.",
        steps: [
          { step: 1, instruction: "Encaminhar para atendimento psicológico individual e/ou familiar e para assistência social, com avaliação de vulnerabilidade." },
          { step: 2, instruction: "Articular com o CRAS (apoio social e acesso a benefícios), o CREAS (casos de maior complexidade e violação de direitos) e a Defensoria Pública (orientação jurídica e acesso à justiça)." },
          { step: 3, instruction: "Orientar e, se a usuária desejar, encaminhar para a Delegacia Especializada de Atendimento à Mulher (DEAM) para registro da ocorrência e solicitação de medidas protetivas. Acionar o Conselho Tutelar quando houver crianças ou adolescentes em risco." },
          { step: 4, instruction: "Garantir acompanhamento longitudinal na UBS/USF: visita domiciliar, consultas de retorno para reavaliação clínica/emocional/social, monitoramento contínuo do risco de revitimização, feminicídio e suicídio, e atualização do plano de segurança em cada atendimento." },
          { step: 5, instruction: "Realizar e acompanhar a notificação compulsória no SINAN; promover acompanhamento multiprofissional (enfermagem, medicina, psicologia, serviço social e e-Multi); fortalecer a autonomia e o protagonismo da usuária no cuidado." },
        ],
        note: "Encaminhar imediatamente para hospital de referência em casos de lesões graves, risco de morte ou violência sexual recente.",
      },
      {
        id: "vd-09",
        question: "Quais orientações principais devem ser dadas à usuária em todos os atendimentos?",
        department: "Equipe de Saúde",
        answer:
          "Informar direitos, desmistificar a obrigatoriedade do B.O. e fornecer canais de ajuda são orientações que devem ser reforçadas continuamente, respeitando sempre a autonomia da usuária.",
        steps: [
          { step: 1, instruction: "Informar que a violência é crime, com respaldo legal na Lei Maria da Penha, e esclarecer os diferentes tipos de violência (física, psicológica, sexual, patrimonial e moral)." },
          { step: 2, instruction: "Orientar sobre o direito às medidas protetivas de urgência; informar que o registro do Boletim de Ocorrência é um direito, não uma obrigação; reforçar que a decisão de denunciar ou não o agressor será respeitada." },
          { step: 3, instruction: "Orientar sobre os serviços disponíveis na rede de apoio (saúde, assistência social e jurídico) e incentivar a construção de uma rede de apoio pessoal (familiares, amigos, serviços)." },
          { step: 4, instruction: "Informar os canais de ajuda: Disque 180 (Central de Atendimento à Mulher) e Disque 190 (situações de emergência)." },
          { step: 5, instruction: "Discutir estratégias práticas de plano de segurança (documentos e itens essenciais acessíveis, local seguro para se abrigar, contatos de emergência) e reforçar a importância do retorno ao serviço de saúde." },
        ],
      },
    ],
  },
];
