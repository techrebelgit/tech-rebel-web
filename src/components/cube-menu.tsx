"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Box, OrbitControls } from "@react-three/drei"
import type { Group, Mesh } from "three"

const pages = [
  { name: "About", path: "/about", color: "#ff3131" },
  { name: "Mint", path: "/mint", color: "#ff3131" },
  { name: "Projects", path: "/projects", color: "#ff3131" },
  { name: "Book", path: "/book", color: "#ff3131" },
  { name: "Invest", path: "/invest", color: "#ff3131" },
  { name: "Learn", path: "/lean", color: "#ff3131" },
]

function CubeFaces() {
  const router = useRouter()
  const groupRef = useRef<Group>(null)
  const meshRefs = useRef<(Mesh | null)[]>([])
  const [hoveredFace, setHoveredFace] = useState<number | null>(null)
  const [autoRotate, setAutoRotate] = useState(true)

  // Auto-rotation
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.x += 0.002
    }
  })

  const handleClick = (index: number) => {
    router.push(pages[index].path)
  }

  // Size of the cube
  const cubeSize = 1.15
  // Thickness of the border (smaller = thinner border)
  const borderThickness = 0.05

  // Define positions as tuples with exactly 3 elements
  const positions: [number, number, number][] = [
    [0, 0, cubeSize], // front
    [0, 0, -cubeSize], // back
    [cubeSize, 0, 0], // right
    [-cubeSize, 0, 0], // left
    [0, cubeSize, 0], // top
    [0, -cubeSize, 0], // bottom
  ]

  // Define rotations as tuples with exactly 3 elements
  const rotations: [number, number, number][] = [
    [0, 0, 0], // front
    [0, Math.PI, 0], // back
    [0, Math.PI / 2, 0], // right
    [0, -Math.PI / 2, 0], // left
    [-Math.PI / 2, 0, 0], // top
    [Math.PI / 2, 0, 0], // bottom
  ]

  return (
    <group ref={groupRef}>
      {/* Create the outer colored faces */}
      {positions.map((position, index) => (
        <mesh
          key={index}
          ref={(el) => (meshRefs.current[index] = el)}
          position={position}
          rotation={rotations[index]}
          onClick={() => handleClick(index)}
          onPointerOver={() => {
            setHoveredFace(index)
            setAutoRotate(false)
          }}
          onPointerOut={() => {
            setHoveredFace(null)
            setAutoRotate(true)
          }}
        >
          <planeGeometry args={[cubeSize * 1.98, cubeSize * 1.98]} />
          <meshBasicMaterial color={hoveredFace === index ? "#1A1A1A" : "#ff3131"} transparent={false} opacity={1} />
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.3}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
            material-toneMapped={false}
          >
            {pages[index].name}
          </Text>
        </mesh>
      ))}

      {/* Create the inner black cube (slightly smaller than the outer cube) */}
      <Box args={[cubeSize * 2, cubeSize * 2, cubeSize * 2]}>
        <meshBasicMaterial color="#1A1A1A" transparent={false} opacity={1} />
      </Box>
    </group>
  )
}

export default function CubeMenu() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <CubeFaces />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate={false} />
      </Canvas>
    </div>
  )
}

