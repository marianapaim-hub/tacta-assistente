# uShalom — especificações técnicas da placa-base do Tacta

Fonte: documento `uShalom.pdf` enviado pela Mariana em 24/07/2026. Organizado aqui como referência técnica central — é a base para a audiodescrição por componente e para o "protocolo padrão" sugerido pelo mentor (ver `/docs/reunioes-mentoria/2026-07-24-reuniao-gleisson.md`).

## Nota sobre o nome

O documento chama a placa de **uShalom** (lê-se "microShalom"). O README do projeto Tacta usa a grafia "Microshlaon" — parece ser a mesma placa, só com grafia diferente. Vale confirmar com o grupo qual grafia usar oficialmente no site, pra manter consistência (isso também importa pra narração por voz — a Web Speech API vai pronunciar de forma diferente dependendo da grafia escrita).

## O que é

Placa de prototipagem educativa compatível com Arduino (v2), baseada e totalmente compatível com o Arduino UNO, mas com componentes extras já embutidos — pensada para facilitar aprendizado de eletrônica, programação, automação e robótica sem precisar de protoboard/jumpers extras na maioria dos projetos simples.

## Diferenciais em relação ao Arduino UNO

- Alimentação adicional via conector micro-USB (dá pra usar carregador de celular)
- 8 LEDs já conectados aos pinos D0–D7
- 2 push-buttons programáveis nos pinos D8 e D9
- 2 saídas para servomotores nos pinos D10 e D11
- Buzzer conectado (via jumper) no pino D12
- Componentes majoritariamente through-hole (fáceis de soldar/substituir)
- Furações com mais espaçamento, facilitando montagem em caixas

## Mapa de pinos (essencial para a audiodescrição)

| Pino | Componente |
|---|---|
| D0–D7 | 8 LEDs individuais (um por pino) |
| D8 | Push-button 1 (SW1 / PB0) |
| D9 | Push-button 2 (SW2 / PB1) |
| D10 | Saída Servo 1 |
| D11 | Saída Servo 2 |
| D12 | Buzzer (ativável via jumper) |
| Pino 13 | LED adicional (indicador, ligado ao PB5) |

## Características técnicas gerais

- Microcontrolador: ATmega328P (o mesmo do Arduino UNO)
- Chip USB: CH340G
- Regulador de tensão: 7805
- Alimentação: 7–12V via jack DC, ou 5V via USB-B / micro-USB
- Botão de reset físico + LED indicador de power
- Dimensões: 76,8 x 67,3mm
- Projeto Open Hardware (esquemático/layout feitos no Kicad, divulgado no GitHub)
- Indicado para escolas, cursos técnicos e robótica infantil

## Lista de materiais (BOM completo da placa)

| Referência | Componente |
|---|---|
| U1 | Microcontrolador ATmega328-PU |
| U2 | CI CH340G |
| U3 | CI regulador L7805 |
| D1–D9, D11 | LEDs de 3mm |
| D10 | Diodo 1N4007 |
| D12 | Diodo 1N5819 |
| R1, R2, R13 | Resistores 1k ohm |
| R3–R10, R12 | Resistores 470 ohm |
| R11 | Resistor 47 ohm |
| R14 | Resistor 10k ohm |
| C1–C4 | Capacitores cerâmicos 100nF |
| C5, C6 | Capacitores eletrolíticos 47uF x 16V |
| J1 | Conector USB tipo B |
| J2 | Conector micro USB tipo B (opcional) |
| J3 | Barra de 6 pinos (2x3) — ICSP |
| J4, J5, J7 | Barra de 3 pinos (1x3) |
| J6 | Conector fêmea Jack DC |
| J8, J9 | Barra soquete de 8 pinos |
| J10 | Barra soquete de 6 pinos |
| J11 | Barra soquete de 10 pinos |
| J12 | Soquete de 28 pinos (p/ o microcontrolador) |
| BZ1 | Buzzer comum |
| SW1, SW2, SW3 | Push button (SW3 = reset) |
| Y1 | Cristal HC49 12MHz |
| Y2 | Cristal HC49 16MHz |
| PP1 | Parafuso/arruela/porca do 7805 |
| CB1 | Cabo USB tipo B ou micro USB |

## Relevante para o site do Tacta

- **Essa tabela de pinos é literalmente o conteúdo-base da audiodescrição por componente** — cada linha vira um botão/narração na tela de audiodescrição (Semana 2 do cronograma).
- É também a base pronta para o "protocolo padrão" / arquivo de dados (`componentes.json`) discutido na reunião com o mentor — nome do componente, pino, e descrição podem vir direto dessa tabela.
- Como o Tacta é a versão "cubo, com braile e cores" dessa placa, o site deveria descrever tanto a função elétrica (o que está nesta tabela) quanto a adaptação física feita pelo grupo (identificação em braile/cor de cada componente) — essa segunda parte ainda precisa vir do grupo, não está neste documento.
