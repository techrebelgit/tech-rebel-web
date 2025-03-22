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
  title: "Blockchain Fundamentals",
  description:
    "Understand the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptography.",
  level: "Beginner",
  introduction: `
# Introduction to Blockchain Fundamentals

Blockchain technology represents a paradigm shift in how we think about digital transactions and trust. At its core, a blockchain is a distributed ledger that records transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.

![Blockchain Concept](/images/courses/blockchain-fundamentals/blockchain-concept.jpg)

This revolutionary technology has applications far beyond cryptocurrencies, extending to supply chain management, voting systems, identity verification, and much more.

## What You'll Learn

In this course, you'll gain a comprehensive understanding of:

* The fundamental concepts behind blockchain technology
* How distributed ledgers work and why they're important
* Different consensus mechanisms that secure blockchain networks
* The role of cryptography in blockchain security
* Various types of blockchains and their use cases

<div class="aspect-video mt-8 mb-8">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/SSo_EIwHSd4" 
    title="Blockchain Explained" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
  `,
  subtopics: [
    {
      id: "what-is-blockchain",
      title: "What is Blockchain?",
      content: `
## What is Blockchain?

A blockchain is a distributed, decentralized, public ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively without the alteration of all subsequent blocks and the collusion of the network.

![Blockchain Structure](/images/courses/blockchain-fundamentals/blockchain-structure.jpg)

Key characteristics of blockchain technology include:

* **Decentralization:** No single entity has control over the entire network
* **Transparency:** All transactions are visible to anyone on the network
* **Immutability:** Once recorded, data cannot be altered
* **Security:** Cryptographic techniques ensure data integrity

Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, but it wasn't until 2008 when Satoshi Nakamoto published the Bitcoin whitepaper that blockchain found its first major application.

### How Blocks Are Connected

Each block in a blockchain contains:

1. A set of transactions or data
2. A timestamp
3. A cryptographic hash of the previous block
4. A nonce (in Proof of Work systems)

![Block Structure](/images/courses/blockchain-fundamentals/block-structure.jpg)

This structure creates a chain where each block references the one before it, making it extremely difficult to alter past records without detection.
      `,
    },
    {
      id: "distributed-ledgers",
      title: "Distributed Ledgers",
      content: `
## Distributed Ledgers

A distributed ledger is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies. It allows transactions to have public "witnesses," thereby making a cyberattack more difficult.

![Distributed vs. Centralized](/images/courses/blockchain-fundamentals/distributed-vs-centralized.jpg)

Unlike traditional databases, distributed ledgers have no central administrator or centralized data storage. Instead:

* Each node processes and verifies every item, generating a record of each item and creating a consensus on its veracity
* A distributed ledger can be used to record static data (a registry) or dynamic data (transactions)
* The distributed consensus model enables the continuation of the network even if some nodes are compromised

Blockchain is a type of distributed ledger, but not all distributed ledgers use blockchain technology.

### Benefits of Distributed Ledgers

1. **Resilience:** No single point of failure
2. **Transparency:** All participants have access to the same information
3. **Immutability:** Once recorded, data is difficult to alter
4. **Disintermediation:** Reduced need for intermediaries
5. **Automation:** Ability to automate processes through smart contracts

<div class="aspect-video mt-8 mb-8">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/QCvL-DWcojc" 
    title="Distributed Ledger Technology Explained" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
      `,
    },
    {
      id: "consensus-mechanisms",
      title: "Consensus Mechanisms",
      content: `
## Consensus Mechanisms

Consensus mechanisms are protocols that ensure all nodes in a blockchain network agree on the current state of the blockchain. They are essential for maintaining the integrity and security of blockchain networks.

![Consensus Mechanisms](/images/courses/blockchain-fundamentals/consensus-mechanisms.jpg)

Common consensus mechanisms include:

* **Proof of Work (PoW):** Used by Bitcoin, requires miners to solve complex mathematical puzzles to validate transactions and create new blocks
* **Proof of Stake (PoS):** Validators are selected to create new blocks based on the number of coins they hold and are willing to "stake" as collateral
* **Delegated Proof of Stake (DPoS):** Token holders vote for "delegates" who are responsible for validating transactions and maintaining the blockchain
* **Practical Byzantine Fault Tolerance (PBFT):** Designed to work efficiently in asynchronous systems and can tolerate up to 1/3 of nodes being malicious

Each consensus mechanism has its own advantages and trade-offs in terms of security, decentralization, and scalability.

### Comparison of Major Consensus Mechanisms

| Mechanism | Energy Usage | Scalability | Decentralization | Security |
|-----------|-------------|-------------|------------------|----------|
| Proof of Work | Very High | Low | High | Very High |
| Proof of Stake | Low | Medium-High | Medium-High | High |
| Delegated PoS | Low | Very High | Medium | Medium-High |
| PBFT | Low | Medium | Low | High |

\`\`\`javascript
// Example of a simple PoW implementation
function proofOfWork(previousHash, data, difficulty) {
  let nonce = 0;
  let hash = '';
  
  while (!isValidHash(hash, difficulty)) {
    nonce++;
    hash = calculateHash(previousHash, data, nonce);
  }
  
  return { hash, nonce };
}
\`\`\`
      `,
    },
    {
      id: "cryptography",
      title: "Cryptography in Blockchain",
      content: `
## Cryptography in Blockchain

Cryptography is a fundamental component of blockchain technology, ensuring the security and integrity of the data stored on the blockchain.

![Cryptography](/images/courses/blockchain-fundamentals/cryptography.jpg)

Key cryptographic elements in blockchain include:

* **Hash Functions:** One-way functions that convert data of any size to a fixed-size output, used to create block identifiers and verify data integrity
* **Public-Key Cryptography:** Uses pairs of keys (public and private) to secure transactions and establish ownership of assets
* **Digital Signatures:** Prove the authenticity of transactions by verifying that they were initiated by the owner of the private key
* **Merkle Trees:** Data structures that efficiently verify the contents of large data sets, allowing for quick verification of blockchain data

These cryptographic techniques work together to create a secure, transparent, and tamper-resistant system for recording transactions.

### How Digital Signatures Work

![Digital Signatures](/images/courses/blockchain-fundamentals/digital-signatures.jpg)

1. A user creates a message (transaction)
2. The message is hashed
3. The hash is encrypted with the user's private key to create a digital signature
4. The message and signature are sent to the recipient
5. The recipient decrypts the signature using the sender's public key
6. If the decrypted hash matches a newly calculated hash of the received message, the signature is valid

\`\`\`javascript
// Example of digital signature verification
function verifySignature(message, signature, publicKey) {
  const messageHash = hash(message);
  const decryptedSignature = decrypt(signature, publicKey);
  
  return messageHash === decryptedSignature;
}
\`\`\`
      `,
    },
    {
      id: "blockchain-types",
      title: "Types of Blockchains",
      content: `
## Types of Blockchains

Blockchains can be categorized based on their permission model and use cases:

![Blockchain Types](/images/courses/blockchain-fundamentals/blockchain-types.jpg)

* **Public Blockchains:** Open to anyone, fully decentralized (e.g., Bitcoin, Ethereum)
* **Private Blockchains:** Restricted to specific participants, often used within organizations
* **Consortium Blockchains:** Operated by a group of organizations rather than a single entity
* **Hybrid Blockchains:** Combine elements of both public and private blockchains

Each type of blockchain has different characteristics in terms of:

* Decentralization
* Transparency
* Scalability
* Privacy
* Governance

The choice of blockchain type depends on the specific requirements and constraints of the use case.

### Comparison of Blockchain Types

| Feature | Public | Private | Consortium | Hybrid |
|---------|--------|---------|------------|--------|
| Access | Open to anyone | Restricted | Restricted to member organizations | Mixed |
| Speed | Slower | Faster | Faster | Variable |
| Identity | Anonymous/Pseudonymous | Known identities | Known identities | Mixed |
| Transparency | Fully transparent | Limited transparency | Limited transparency | Configurable |
| Use Cases | Cryptocurrencies, DApps | Internal systems, Supply chain | Banking consortiums, Industry groups | Situations requiring both privacy and transparency |

<div class="aspect-video mt-8 mb-8">
  <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/2DFYBb_zOpc" 
    title="Types of Blockchain Networks" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
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

          <Accordion type="single" collapsible value={openAccordion} onValueChange={setOpenAccordion}>
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
            <Button asChild>
              <Link href={`/learn/${courseData.nextCourse.slug}`}>Next: {courseData.nextCourse.title}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn">All Topics</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

