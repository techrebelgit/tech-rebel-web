"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { marked } from "marked"

// Course metadata
const courseData = {
  title: "Blockchain Layer 1s: Fundamentos, Arquitectura y Ecosistema",
  description:
    "Explora el corazón de las blockchains: las Capa 1. Aprende cómo funcionan Bitcoin, Ethereum, Stellar y otras redes desde su arquitectura técnica hasta sus ecosistemas, capacidades de escalado e interoperabilidad.",
  level: "Beginner",
  introduction: `
# 🧱 Introducción a las Blockchains de Capa 1

Las blockchains de Capa 1 (Layer 1) son la base de toda la infraestructura descentralizada. Son responsables de procesar transacciones, mantener la seguridad y permitir la ejecución de contratos inteligentes.

Este curso va más allá de lo básico y te llevará por un recorrido completo a través de las principales redes L1 — Bitcoin, Ethereum, Stellar — y conceptos críticos como escalabilidad, interoperabilidad y diseño de nuevas blockchains.

![Layer 1 Networks Overview](/images/courses/layer-1/layer-1-overview.png)

## 🌍 ¿Qué aprenderás?

- Qué es una blockchain de Capa 1 y cómo se diferencia de una L2
- Cómo funciona la arquitectura técnica de Bitcoin, Ethereum y Stellar
- Cuáles son sus mecanismos de consenso, modelos de cuentas y diseño económico
- Qué retos enfrentan y cómo están evolucionando (L2s, rollups, smart contracts, etc.)
- Cómo interactúan entre sí mediante interoperabilidad y Layer 0s
- Cuándo vale (y no vale) la pena construir una nueva L1

  `,
  subtopics: [
    {
      id: "what-is-blockchain",
      title: "Introducción a las Blockchains de Capa 1",
      content: `
## **1.1 ¿Qué es una Blockchain de Capa 1?**

- **Definición**: Una blockchain de Capa 1 (L1) es la red base que procesa y finaliza transacciones sin depender de otra red. Mantiene su propio mecanismo de consenso, libro mayor y toda su infraestructura.

![Layer 1 Networks Overview](/images/courses/layer-1/ayer-1-triangle.png)

- **Características clave**:
  - Token nativo (por ejemplo: BTC, ETH, XLM)
  - Disponibilidad de datos *on-chain*
  - Seguridad integrada (a través de mineros o validadores)


![Layer 1 Networks Overview](/images/courses/layer-1/layer-1-overview.png)


## **1.2 Responsabilidades Clave de las Capas 1**

- **Seguridad**: Asegura la integridad de las transacciones (por ejemplo, inmutabilidad gracias al consenso)
- **Consenso**: Mecanismo por el cual los participantes acuerdan el estado de la red (PoW, PoS, SCP, etc.)
- **Disponibilidad de datos**: Historial completo accesible para validadores y usuarios
- **Ejecución**: Procesamiento de contratos inteligentes y transacciones

## **1.3 El Trilema de la Blockchain**

El Trilema de la Blockchain, acuñado por Vitalik Buterin, describe la dificultad de optimizar simultáneamente tres propiedades:

1. **Descentralización** – Qué tanto se distribuye el control y la toma de decisiones
2. **Seguridad** – Resistencia a ataques y protección de datos
3. **Escalabilidad** – Capacidad de manejar muchas transacciones de forma rápida y económica

![Layer 1 Networks Overview](/images/courses/layer-1/blockchain-trilemma.png)



## **1.4 Trade-offs en las Principales Capas 1**

| Blockchain        | Optimizan                        | Sacrifican         | Comentario                                               |
|------------------|----------------------------------|--------------------|----------------------------------------------------------|
| **Bitcoin**       | Seguridad, Descentralización     | Escalabilidad      | Robusto y confiable, pero lento y limitado en TPS        |
| **Ethereum (antes de escalado)** | Seguridad, Descentralización | Escalabilidad      | Congestión y altos fees debido a su enfoque en dApps     |
| **Solana**        | Escalabilidad, Rendimiento       | Descentralización  | Alta velocidad, pero requisitos técnicos altos           |
| **Ripple (XRP)**  | Escalabilidad, Seguridad         | Descentralización  | Algoritmo propio, validadores confiables                 |
| **Stellar**       | Escalabilidad, Seguridad         | Algo de descentralización | Consenso eficiente (SCP), ideal para pagos             |

## **1.5 Capa 1 vs. Capa 2**

- **Capa 1**: Maneja la seguridad base, consenso y datos principales
- **Capa 2**: Se construye encima para escalar transacciones (rollups, sidechains, canales de pago)
![Layer 1 Networks Overview](/images/courses/layer-1/layer-1-triangle.png)

## **1.6 Evolución del Diseño de Capas 1**

### 🟦 Primera Generación – *Bitcoin (2009)*
- Efectivo digital peer-to-peer
- Modelo UTXO, consenso PoW
- Alta descentralización, baja programabilidad

### 🟨 Segunda Generación – *Ethereum (2015), Ripple (2012)*
- Ethereum: contratos inteligentes, dApps
- Ripple: enfoque en pagos bancarios rápidos
- Introducción del modelo de cuentas

### 🟩 Rutas Alternativas (2da Gen) – *Stellar (2014)*
- Fork de Ripple con enfoque en inclusión financiera
- Emisión de activos, consenso SCP
- Soporte actual para contratos inteligentes con **Soroban**

### 🟥 Tercera Generación – *Cardano, Polkadot, Cosmos, Solana*
- Interoperabilidad y escalabilidad
- Arquitectura modular (Cosmos SDK, Substrate)
- Nuevos mecanismos de consenso (Ouroboros, Tendermint)

### 🔵 Tendencias Futuras
- **Capas 1 específicas para aplicaciones** (Sui, Aptos con Move)
- **Cadenas centradas en disponibilidad de datos** (Celestia)
- Integración de tecnologías como **ZK proofs**, **IA en cadena**, entornos modulares



<!-- 🔗 Recursos recomendados:
- https://ethereum.org/en/roadmap/
- https://docs.cosmos.network/
- https://soroban.stellar.org/
-->
`,
    },
    {
      id: "Bitcoin",
      title: "Bitcoin",
      content: `
![Layer 1 Networks Overview](/images/courses/layer-1/bitcoin.png)

- **Creado por**: Satoshi Nakamoto (whitepaper en 2008)
- **Caso de uso principal**: Reserva de valor digital y moneda peer-to-peer
- **Propiedades clave**:
  - Suministro finito: 21 millones de BTC
  - Sin permisos (*permissionless*), resistente a la censura
  - Alta seguridad gracias a Proof of Work (PoW)

![Layer 1 Networks Overview](/images/courses/layer-1/bitcoin-genesis-block.png)

---

## **2.2 Arquitectura Técnica**

- **Mecanismo de Consenso**: Proof of Work (Nakamoto Consensus)
  - Los mineros compiten resolviendo acertijos criptográficos (SHA-256)
  - Alto consumo energético, pero muy seguro

- **Modelo UTXO (Unspent Transaction Output)**:
  - Cada transacción consume salidas existentes y genera nuevas
  - Mejora la escalabilidad y privacidad

- **Tiempo de bloque**: ~10 minutos
- **Finalidad de transacción**: Alcanzada tras múltiples confirmaciones (usualmente 6)

![Layer 1 Networks Overview](/images/courses/layer-1/UTXO.png)

---

## **2.3 Limitaciones de Bitcoin**

- **Escalabilidad**: ~7 transacciones por segundo (TPS)
- **Contratos inteligentes**: Lenguaje Script limitado y no Turing completo
- **Latencia**: Confirmaciones toman tiempo (no ideal para pagos minoristas)

---

## **2.4 Extensiones y Capas 2 en Bitcoin**

### 🔁 **A. Lightning Network**

- **Objetivo**: Microtransacciones instantáneas y con bajas comisiones
- **Cómo funciona**:
  - Canales de pago *off-chain* entre usuarios
  - Solo los balances finales se liquidan *on-chain*

- **Ventajas**:
  - Pagos escalables y rápidos
  - Reduce la carga sobre la Capa 1

- **Desventajas**:
  - Requiere enrutamiento de liquidez
  - Puede ser complejo para el usuario final

### 🌊 **B. Liquid Network (de Blockstream)**

- *Sidechain* para transacciones más rápidas y confidenciales
- Consenso federado con "funcionarios" (*functionaries*)
- **Enfoque**: uso institucional y emisión de tokens (stablecoins, valores financieros)

### ⚙️ **C. RSK (Rootstock)**

- Contratos inteligentes sobre Bitcoin vía una *sidechain* de *merge-mining*
- Compatible con EVM (Ethereum)
- Combina la seguridad de Bitcoin con la programabilidad de Ethereum

### 📚 **D. Stacks**

- Contratos inteligentes y DeFi en Bitcoin con modelo PoX (*Proof of Transfer*)
- Las apps se liquidan sobre Bitcoin, pero ejecutan lógica en otra capa

---

## **2.5 Filosofía y Cultura de Desarrollo**

- **Minimalismo y Conservadurismo**: Los cambios son lentos, deliberados y deben ser retrocompatibles
- **BIPs (Bitcoin Improvement Proposals)**: Propuestas formales para actualizar el protocolo
- **Actualizaciones clave**: *SegWit*, *Taproot* (mejoran escalabilidad y privacidad)

> 📌 Repositorio de BIPs: https://github.com/bitcoin/bips

---

## **2.6 Ecosistema en Evolución**

- Soluciones de **custodia**, **ETFs de Bitcoin** e integración institucional
- Creciente interés en:
  - **DeFi nativo en Bitcoin** (Stacks, RSK)
  - **NFTs Ordinales** y **tokens BRC-20** (usando Taproot y witness data)

---

## Recursos recomendados

<!-- Puedes enlazar estos en tu app usando íconos o botones bonitos -->

- 🧾 Whitepaper original de Bitcoin: https://bitcoin.org/bitcoin.pdf  
- 📺 Explicación en video (Andreas Antonopoulos): https://www.youtube.com/watch?v=l1si5ZWLgy0  
- 📚 Repositorio de BIPs: https://github.com/bitcoin/bips  
- 🔗 Lightning Network visual: https://1ml.com/

---


      `,
    },
    {
      id: "ethereum",
      title: "Ethereum",
      content: `
# 🌐 Ethereum

![Layer 1 Networks Overview](/images/courses/layer-1/ethereum.png)


- **Lanzado en**: 2015 por Vitalik Buterin y su equipo
- **Objetivo**: Una blockchain programable para aplicaciones descentralizadas (dApps)
- **Innovación clave**: **Contratos inteligentes** — código autoejecutable almacenado y ejecutado en la cadena
- **Moneda nativa**: ETH, utilizada para pagar *gas* (comisiones computacionales)

---

## Arquitectura Técnica

- **Modelo basado en cuentas**:
  - Dos tipos de cuentas: Cuentas Externas (EOAs) y Cuentas de Contrato
  - Más simple para la interacción entre contratos que el modelo UTXO

- **Máquina Virtual de Ethereum (EVM)**:
  - Entorno de ejecución aislado (*sandboxed*)
  - Permite ejecutar la lógica de dApps de forma confiable y sin necesidad de confianza (*trustless*)

- **Lenguajes de Contrato Inteligente**: Principalmente **Solidity**, también **Vyper**

- **Consenso**:
  - Anteriormente Proof of Work → ahora **Proof of Stake** (desde **The Merge**, 2022)
  - Validadores aseguran la red apostando ETH

  ![Layer 1 Networks Overview](/images/courses/layer-1/PoWPoS.png)

---

## **2.3 Limitaciones de Ethereum**

- **Escalabilidad**: Mainnet puede procesar ~15 TPS
- **Comisiones de Gas**: Aumentan significativamente durante la congestión de red
- **Latencia**: La finalidad toma tiempo (aunque mejorada con PoS)

---

## **2.4 Escalado de Ethereum: Capas 2**

La estrategia de Ethereum es la **escalabilidad modular**: mantener la capa base segura y descentralizada, y mover la ejecución a entornos más rápidos y baratos.
![Layer 1 Networks Overview](/images/courses/layer-1/layer-1-triangle.png)

### 🔁 **Rollups (Estrategia principal de L2)**

- Agrupan múltiples transacciones *off-chain* y las liquidan en Ethereum
- Dos tipos:

  - **Rollups Optimistas** (ej: Optimism, Base, Arbitrum)
    - Asumen validez a menos que se demuestre lo contrario (*fraud proofs*)
    - Tiempo de retiro retrasado por el período de desafío

  - **ZK-Rollups** (ej: zkSync, Scroll, Starknet)
    - Usan pruebas de conocimiento cero para garantizar validez
    - Finalidad más rápida, pero con ingeniería más compleja

### ⚙️ **Otros Tipos de L2**

- **Validium**: Datos fuera de la cadena
- **Plasma**: Modelo de cadena jerárquica (menos popular hoy)

### 🚀 **L2 Populares en Ethereum**

- **Arbitrum**: Mayor TVL, usa el motor Nitro
- **Optimism**: Base está construido sobre él; base del OP Stack
- **zkSync**: Pionero en UX de ZK-Rollups
- **Scroll, Polygon zkEVM**: Compatibles con la EVM y usan pruebas ZK

---

## **2.5 Capas 3 (Emergentes)**

Capas construidas *sobre* L2 para necesidades especializadas:

- **Rollups específicos de apps**
- **Entornos de ejecución privados**
- Ejemplos: Xai (gaming en Arbitrum), L3s para DeFi

Aún experimentales, con debate sobre su necesidad vs. zonas L2.

---

## **2.6 Ecosistema de Ethereum**

- Mayor base de desarrolladores de contratos inteligentes
- **Casos de uso clave**:
  - **DeFi**: Uniswap, Aave, MakerDAO
  - **NFTs**: OpenSea, Blur
  - **DAOs y gobernanza en cadena**: ENS, Aragon
  - **Stablecoins**: DAI, USDC, USDT en Ethereum

- **Herramientas e infraestructura**:
  - **Infura**, **Alchemy**: acceso a nodos
  - **Hardhat**, **Foundry**: herramientas de desarrollo
  - **MetaMask**, **WalletConnect**: conexión de usuarios

---

## **2.7 Futuro de Ethereum**

- **Danksharding y Proto-Danksharding (EIP-4844)**:
  - Introduce “blobs” para reducir costos de rollups en L2

- **Restaking y EigenLayer**:
  - Permite usar ETH apostado para asegurar otros protocolos

- **Verkle Trees, Clientes sin estado**:
  - Mejoras para el rendimiento y escalabilidad de la red

---

## 📚 Recursos Recomendados sobre Ethereum

### 🔰 1. Para Comprender Ethereum

- [**Ethereum.org Learn Hub**](https://ethereum.org/en/learn/) — *El mejor punto de partida*. Desde principiante hasta avanzado.
- [**Whitepaper de Ethereum**](https://ethereum.org/en/whitepaper/) — Fundamentos y visión del protocolo.

---

### 🧑‍💻 2. Desarrollo de Contratos Inteligentes

- [**CryptoZombies**](https://cryptozombies.io) — Curso gamificado de Solidity.
- [**Ethernaut de OpenZeppelin**](https://ethernaut.openzeppelin.com/) — Desafíos de seguridad en Solidity.
- [**Documentación de Solidity**](https://docs.soliditylang.org/) — Detalles técnicos y buenas prácticas.

---

### 🧱 3. Escalado con Capas 2

- [**L2Beat**](https://l2beat.com/) — Seguimiento visual de proyectos L2.
- [**Docs de Optimism**](https://docs.optimism.io/)
- [**Docs de Arbitrum**](https://developer.arbitrum.io/)
- [**Docs de zkSync**](https://docs.zksync.io/)

---

### 🧠 4. Conceptos Avanzados

- [**Ethereum Yellow Paper**](https://ethereum.github.io/yellowpaper/paper.pdf) — Para profundizar en la capa de protocolo.
- [**Ethereum Research Forum**](https://ethresear.ch/) — Investigaciones sobre mejoras del protocolo.

---

### 🧰 5. Herramientas y Ecosistema Dev

- [**Hardhat Docs**](https://hardhat.org/)
- [**Foundry Book**](https://book.getfoundry.sh/)

      `,
    },
    {
      id: "stellar",
      title: "Stellar",
      content: `
# Stellar

  ![Layer 1 Networks Overview](/images/courses/layer-1/stellar.png)

- **Lanzamiento**: 2014 por Jed McCaleb (cofundador de Ripple)
- **Misión**: Inclusión financiera y transferencias internacionales de bajo costo
- **Token nativo**: **XLM (Lumen)**
- **Enfoque central**: Transferencia eficiente de activos digitales a través de fronteras, sin contratos inteligentes generalizados (hasta hace poco)
---

## **2.2 Arquitectura y Consenso**

- **Stellar Consensus Protocol (SCP)**:
  - Variante de **Federated Byzantine Agreement (FBA)**
  - Cada nodo elige un grupo de confianza (llamado **quorum slice**).
  - Cuando varios grupos de confianza se superponen y coinciden, se logra **consenso** (es decir, acuerdo).
  - ¡Y así se valida una transacción de forma segura y rápida!

    ![Layer 1 Networks Overview](/images/courses/layer-1/Stellar-consensus.png)

No hay mineros. No hay un jefe. Solo nodos confiando en otros nodos.
  - Ofrece finalidad rápida (~5 segundos) y alto rendimiento
  - Compromiso: eficiencia sobre descentralización total

- **Modelo de Cuentas**:
  - Similar al de Ethereum, pero más simple
  - Los activos pueden ser emitidos por *anchors* (instituciones reguladas) y se comercian en la cadena

- **DEX incorporado**:
  - Soporte nativo para *order books* y pagos con rutas
  - Permite intercambios estilo Forex y conversiones automáticas entre activos

---

## **2.3 Casos de Uso Clave**

- **Pagos internacionales**:
  - Stellar impulsa los servicios de remesas en USDC de MoneyGram
  - Los *anchors* conectan sistemas fiat con infraestructura cripto

- **Tokenización**:
  - Monedas fiat, commodities e incluso créditos de carbono

- **ONGs y distribución de ayuda**:
  - Usado por organizaciones como ACNUR (UNHCR) para ayuda programable

---

## **2.4 Soroban — Contratos Inteligentes en Stellar**

- **Propósito**: Traer programabilidad al ecosistema Stellar, similar a Ethereum pero con un enfoque más seguro y eficiente

### 🔧 **Stack Tecnológico**:

- Contratos inteligentes basados en **WASM**
- **Rust** como lenguaje principal
- Diseñado para:
  - Medición predecible de *gas*
  - Ejecución paralela
  - Componibilidad *on-chain*

### 🔐 **¿Cómo se diferencia Soroban de Ethereum?**

- **Enfocado en seguridad**: sin reentradas, uso de memoria controlado
- **Costos de gas predecibles**: facilita la planificación para desarrolladores
- **Enfoque financiero**: alineado con activos del mundo real y cumplimiento regulatorio

### 🧑‍💻 **Experiencia para Desarrolladores**:

- Documentación clara y SDKs (como Soroban CLI)
- Incentivos vía el **Stellar Community Fund (SCF)** y programas de adopción

---

## **2.5 Ecosistema e Interoperabilidad**

- Integración con **MoneyGram**, **Circle (USDC)**
- **Alianzas**: IBM World Wire, Flutterwave, entre otros
- Crecimiento de herramientas para desarrolladores alrededor de Soroban
- Aparecen esfuerzos iniciales para conexión con el ecosistema EVM

---

## 📚 Recursos sobre Stellar y Soroban

---

### 🔰 1. Recursos Introductorios y Oficiales

- [**Portal de Aprendizaje de Stellar**](https://stellar.org/learn)
  - Introducción amigable a Stellar, con guías sobre activos, cuentas y *anchors*
- [**SCP explicado**](https://stellar.org/learn/proof-of-agreement)
  - Detalle técnico sobre el protocolo de consenso y *quorum slices*

---

### 🛠 2. Herramientas para Desarrolladores y Documentación

- [**Stellar Dev Docs**](https://developers.stellar.org/docs/)
  - Referencia completa para construir sobre Stellar Core
  - Cubre transacciones, pagos con rutas, emisión de activos y construcción de wallets

- [**Documentación oficial de Soroban**](https://soroban.stellar.org/docs/)
  - Entrada para construir contratos inteligentes en Stellar
  - Incluye:
    - Desarrollo con Rust y WASM
    - Uso de Soroban CLI
    - Almacenamiento, autorización y eventos en contratos

- [**Stellar Quest**](https://quest.stellar.org/)
  - Aprendizaje gamificado con desafíos prácticos y recompensas
  - Nuevas misiones están enfocadas en Soroban

---

### 💡 3. Ejemplos y Tutoriales

- [**Ejemplos de Soroban en GitHub**](https://github.com/stellar/soroban-examples)
  - Plantillas reales: creación de tokens, votación, DeFi básico

- **Guías rápidas**:
  - [Despliega tu primer contrato Soroban](https://soroban.stellar.org/docs/get-started)
  - [Escribir contratos inteligentes en Rust](https://soroban.stellar.org/docs/learn/writing-your-first-contract)

---

### 🌐 4. Ecosistema y Comunidad

- [**Stellar Community Fund (SCF)**](https://communityfund.stellar.org/)
  - Financiamiento para aplicaciones innovadoras y herramientas en Stellar y Soroban


- [**Blog de Stellar**](https://stellar.org/blog)
  - Noticias sobre el crecimiento del ecosistema, casos de uso y avances de Soroban

---

### 🎥 5. Videos y Conferencias

- **Stellar Meridian**:
  - Conferencias anuales con charlas sobre el ecosistema y desarrollo en Stellar


      `,
    },
    {
      id: "Interoperabilidad",
      title: "Interoperabilidad y Layer 0",
      content: `

## **3.1 ¿Por qué importa la interoperabilidad?**

- A medida que surgen más blockchains (Layer 1), los activos y aplicaciones se vuelven silos.
- La interoperabilidad permite:
  - **Transferencias de activos entre cadenas** (por ejemplo, ETH a Solana)
  - **dApps intercadena** (liquidez unificada, identidades compartidas, etc.)
  - **Seguridad o consenso compartido** entre cadenas

  ![Layer 1 Networks Overview](/images/courses/layer-1/Layer0.png)
---

## **3.2 Formas de Interoperabilidad**

### 🪙 A. Puentes de Tokens (*Token Bridges*)

- **Qué hacen**: bloquean tokens en una cadena y acuñan versiones envueltas (*wrapped*) en otra
- **Ejemplos**:
  - **Wormhole** – puente multichain que conecta Ethereum, Solana, Avalanche, etc.
  - **Portal** – puente de tokens basado en Wormhole
  - **Polygon Bridge** – conecta Ethereum ↔ Polygon

- **Riesgos**:
  - Vulnerabilidades en contratos inteligentes
  - Históricos hackeos de puentes (Ronin, Wormhole, Nomad)

---

### 💬 B. Mensajería entre Cadenas (*Cross-Chain Messaging*)

- Permite que contratos en una cadena envíen mensajes a otra
- **Ejemplos**:
  - **Chainlink CCIP** – Protocolo de interoperabilidad entre cadenas
  - **LayerZero** – Protocolo de mensajería *omnichain*
  - **Axelar** – Conectividad universal para dApps

---

### 🛡 C. Modelos de Seguridad Compartida (*Shared Security*)

- Las plataformas Layer 0 permiten que cadenas de aplicaciones hereden la seguridad de una capa base

- **Ejemplos**:
  - **Polkadot** – Las parachains comparten seguridad vía la relay chain
  - **Cosmos Hub** – Las zonas pueden alquilar el set de validadores del hub
  - **EigenLayer** – Plataforma basada en Ethereum para *restaking* y seguridad compartida

---

## **3.3 Plataformas Layer 0: Infraestructura para Interoperabilidad**

### 🌐 A. Cosmos (IBC)

- **IBC = Inter-Blockchain Communication**
- Modelo de *hub* y *zonas*
- Cada app puede tener su propia cadena (*appchain*) conectada vía **Cosmos SDK**

- **Ejemplos**:
  - **Osmosis** (DeFi)
  - **Juno** (contratos inteligentes)
  - **Evmos** (cadena compatible con EVM)

---

### 🕸 B. Polkadot

- **Relay Chain** provee seguridad compartida
- **Parachains**: cadenas soberanas que ganan acceso vía subastas
- **XCMP**: sistema de mensajería entre parachains

- **Ejemplos**:
  - **Acala** (hub DeFi)
  - **Moonbeam** (compatibilidad con EVM)

---

### 🏔 C. Avalanche (Subnets)

- Se pueden crear múltiples cadenas como *subnets*, cada una con sus propias reglas y validadores
- Todas conectadas al ecosistema Avalanche y el token AVAX

---

### 🧬 D. Ethereum (como Layer 0 emergente)

- Ethereum evoluciona hacia un papel tipo Layer 0 para sus propias L2s:
  - Las **rollups se liquidan en Ethereum**
  - Uso de **capas de disponibilidad de datos** (como **EIP-4844**) y **secuenciadores neutrales**

---

## **3.4 El Futuro de la Interoperabilidad**

- **dApps multichain componibles**: Operarán de forma fluida entre cadenas
- **Gobernanza intercadena**: DAOs coordinando decisiones a través de varias blockchains
- **Interoperabilidad con ZK**: Uso de pruebas ZK para comunicación segura (ej: zkBridge)
- **IA + Interoperabilidad**: Traducción semántica de datos y lógica autónoma multichain

---

## 📚 Recursos recomendados sobre Interoperabilidad y Layer 0

---


### 🌐 2. Cosmos e IBC

- [**Cosmos Academy**](https://academy.cosmos.network/)
  - Cursos interactivos sobre Cosmos SDK, IBC y desarrollo modular
- [**IBC Protocol Docs**](https://ibcprotocol.org/)
  - Guía técnica para entender mensajería entre blockchains

---

### 🧬 3. Polkadot y Parachains

- [**Polkadot Wiki**](https://wiki.polkadot.network/)
  - Documentación completa sobre parachains, relay chain, XCMP
- [**Substrate Dev Portal**](https://substrate.dev/)
  - Aprende a lanzar tu propia parachain

---

### 🏔 4. Avalanche y Subnets

- [**Docs oficiales de Avalanche**](https://docs.avax.network/)
  - Guía paso a paso para crear y personalizar subnets

---

### 🔗 5. Interoperabilidad en general

- [**Chainlink CCIP Docs**](https://docs.chain.link/ccip/)
- [**LayerZero Docs**](https://docs.layerzero.network/)

---

### ⚠️ 6. Seguridad y Riesgos en Interoperabilidad

- [**Casos de estudio de hacks – Rekt.news**](https://rekt.news/)
  - Post-mortems detallados sobre exploits (Ronin, Wormhole, Nomad)


      `,
    },
    {
      id: "Layer1Pros",
      title: "¿Por Qué Construir una Nueva Capa 1 (Layer 1)?",
      content: `

### 🚀 A. Necesidades de Rendimiento y Escalabilidad

- Las cadenas existentes (como Ethereum o Bitcoin) tienen límites de capacidad y latencia.
- Aplicaciones de alta velocidad (trading de alta frecuencia, videojuegos, finanzas globales) pueden requerir:
  - Entornos de ejecución personalizados
  - Paralelización (ej: Solana, Aptos)
  - Finalidad sub-segundo

---

### 🏛 B. Gobernanza o Diferencias Ideológicas

- Algunos equipos buscan estructuras de gobernanza más flexibles y en cadena.
- La insatisfacción con la gobernanza central de Bitcoin o Ethereum puede llevar a:
  - *Forks* (ej: Ethereum Classic, Bitcoin Cash)
  - Cadenas completamente nuevas con modelos centrados en DAOs (ej: Tezos, Internet Computer)

---

### 🔁 C. Nuevos Mecanismos de Consenso

- La innovación en consenso (ej: DAGs, HotStuff, Avalanche, Proof-of-History) puede requerir comenzar desde cero.
- Las cadenas existentes podrían no ser compatibles o lo suficientemente flexibles para adaptarse a estas tecnologías.

---

### ⚖️ D. Regulación y Cumplimiento

- Algunas Capa 1 están diseñadas para entornos regulados, con características como:
  - Capas de identidad con KYC
  - Listas blancas de activos
  - Ejemplos: Concordium, Hedera Hashgraph

---

### 🧩 E. Control de Ecosistema o Vertical

- Proyectos que quieren control total del stack tecnológico y el modelo económico.
- L1s pueden ser diseñadas para verticales específicas:
  - **Finanzas**: Ripple, Stellar
  - **Gaming**: Immutable, Xai
  - **Datos/IA**: Ocean Protocol, Bittensor

---

### 💰 F. Incentivos Estratégicos y Financieros

- Lanzar una nueva L1 puede:
  - Atraer inversión de riesgo (VCs)
  - Diseñar nuevos modelos económicos y de tesorería
  - Construir una comunidad leal alrededor de una narrativa nueva (ej: cadenas modulares, L1s nativas de IA)

---

## **4.2 Estudios de Caso**

- **Solana** – Creada para rendimiento extremo (TPS alto, comisiones bajas), con arquitectura basada en *Proof of History*.
- **Aptos y Sui** – Fundadas por el equipo de Diem, utilizan el lenguaje *Move*, enfocadas en seguridad y rendimiento.
- **Celestia** – Diseñada como capa modular de disponibilidad de datos para servir a otras L1s y L2s.
- **Radix** – Nueva arquitectura de ejecución y lenguaje (*Scrypto*) para evitar problemas de composabilidad estilo Ethereum.

---

## 📚 Recursos: ¿Por Qué Construir una Nueva Capa 1?

---

### 🧠 1. Contexto Estratégico e Ideológico


- [**a16z – Futuro de las Capa 1**](https://a16zcrypto.com/)
  - Artículos sobre cadenas modulares, appchains y diseño de L1s.

---

### 🔍 2. Análisis Técnicos sobre Diseño de L1

- [**Documentación de Solana**](https://docs.solana.com/introduction)
  - Arquitectura centrada en rendimiento (Proof of History, ejecución paralela).
- [**Docs de Sui**](https://docs.sui.io/) y [**Docs de Aptos**](https://aptos.dev/)
  - L1s basadas en Move con modelos de datos novedosos.
- [**Celestia Docs**](https://docs.celestia.org/)
  - Blockchain modular centrada en disponibilidad de datos.
- [**Polkadot Lightpaper**](https://polkadot.network/Polkadot-lightpaper.pdf)
  - Explica por qué se construyó una L1 escalable con seguridad compartida.

---

### 💻 3. Lenguajes y Nuevos Entornos de Ejecución

- [**Move Language Resources**](https://move-language.github.io/move/)
  - Lenguaje enfocado en seguridad, modularidad y determinismo.

---

### 🌱 4. Comunidad y Ecosistema

- [**Playbooks de Layer 1 – Messari & Electric Capital**](https://messari.io/)
  - Métricas de crecimiento de desarrolladores y estrategias de incentivos de tokens.
- [**Outlier Ventures – Base Camp**](https://outlierventures.io/)
  - Aceleradora enfocada en desarrollo de protocolos Web3.



      `,
    },
    {
      id: "Layer1Cons",
      title: "¿Por Qué NO Construir una Nueva Capa 1 (Layer 1)?",
      content: `
# 🚫 ¿Por Qué NO Construir una Nueva Blockchain de Capa 1?

Aunque crear una nueva L1 puede parecer atractivo, hay numerosos desafíos técnicos, económicos y regulatorios. 
---

## **5.1 El Desafío de los Efectos de Red**

- Las L1 existentes como Ethereum o Solana ya cuentan con:
  - Ecosistemas de desarrolladores enormes
  - Integraciones con wallets y herramientas
  - Confianza institucional y de comunidad

- **Es extremadamente difícil iniciar desde cero**:
  - Los usuarios van donde está la liquidez
  - Los desarrolladores van donde están los usuarios y las herramientas

---

## **5.2 La Seguridad No es Trivial**

- Una L1 necesita una red de validadores o mineros que sea:
  - Descentralizada
  - Incentivada económicamente
  - Resistente a ataques

- Las nuevas L1 suelen tener conjuntos de validadores pequeños, lo que las hace:
  - Vulnerables a censura
  - Menos confiables para gobiernos y empresas

---

## **5.3 Bootstrapping de Comunidades de Devs y Usuarios**

- Construir un ecosistema vibrante toma **años**.
- Requiere:
  - Buena documentación y SDKs
  - Programas de grants y hackathons
  - Cultura alineada con la comunidad técnica

---

## **5.4 Mantenimiento y Actualizaciones**

- Las L1 necesitan equipos que:
  - Mantengan la lógica de consenso
  - Coordinen upgrades del protocolo vía gobernanza
  - Aseguren compatibilidad hacia atrás

> ⚙️ Mucho más complejo que construir una dApp o una L2

---

## **5.5 Alternativas Viables: L2s y Appchains**

- Puedes alcanzar tus metas construyendo sobre una L1 existente:
  - **Rollups en Ethereum**: Seguridad + usuarios + costos reducidos
  - **Zonas de Cosmos**: Soberanía sin cargar con seguridad de L1
  - **Parachains de Polkadot**: Seguridad compartida + lógica personalizable
  - **Subnets de Avalanche**: Ejecución aislada + economía a medida

---

## **5.6 Riesgos Regulatorios y de Diseño de Token**

- Lanzar una L1 implica crear un token nativo:
  - Esto atrae **atención regulatoria** (especialmente en EE.UU.)
  - Requiere un modelo económico sostenible

- Incentivos mal diseñados pueden crear ecosistemas tipo **"pump and dump"** en lugar de valor real

---

## **5.7 Sustentabilidad y Viabilidad a Largo Plazo**

- Si tu L1 no gana tracción:
  - Puede tener un set de validadores inseguro
  - No genera tarifas suficientes para sostenerse
  - Puede ser abandonada o bifurcada

---


Fin :)
      `,
    },
  ],
  nextCourse: {
    slug: "layer-1",
    title: "Layer 1 Blockchains",
  },
}

// Custom component to render markdown with support for images and videos
function MarkdownContent({ content }: { content: string }) {
  const [html, setHtml] = useState("")
  // Parse markdown to HTML
  useEffect(() => {
    async function parseMarkdown() {
      const parsed = await marked.parse(content)
      setHtml(parsed)
    }
    parseMarkdown()
  }, [content])

  return (
    <div
      className="prose max-w-none prose-img:rounded-lg prose-headings:text-rebel-black prose-a:text-rebel-red"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function BlockchainFundamentalsPage() {
  const [openAccordion, setOpenAccordion] = useState<string>("what-is-blockchain")

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4 -ml-4 text-rebel-red" asChild>
            <Link href="/learn">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Topics
            </Link>
          </Button>

          <h1 className="text-5xl font-bold mb-4">{courseData.title}</h1>
          <div className="flex items-center mb-6">
            <span className="bg-rebel-light text-rebel-black px-3 py-1 rounded-full text-sm">{courseData.level}</span>
          </div>
          <p className="text-xl mb-8">{courseData.description}</p>
        </div>

        <MarkdownContent content={courseData.introduction} />

        <div className="mb-12 mt-12">
          <h2 className="text-3xl font-bold mb-6">Subtopics</h2>

          <Accordion type="multiple" >
            {courseData.subtopics.map((subtopic) => (
              <AccordionItem
                key={subtopic.id}
                value={subtopic.id}
                className="border border-rebel-gray rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-rebel-light hover:no-underline">
                  <h3 className="text-xl font-medium text-left">{subtopic.title}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <MarkdownContent content={subtopic.content} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Continue Learning</h3>
          <p className="mb-6">Ready to dive deeper into blockchain technology? Explore our other learning resources.</p>
          <div className="flex flex-wrap gap-4">

            <Button variant="outline" asChild>
              <Link href="/learn">All Topics</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

