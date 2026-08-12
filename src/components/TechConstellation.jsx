import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

const nodes = [
  {
    name: 'Spring Boot',
    position: [0, 0.2, 0],
    detail: 'Java · APIs · Microservices',
  },
  {
    name: 'Flutter',
    position: [-2.3, 1.5, 0.2],
    detail: 'Dart · Mobile · Cross-platform',
  },
  {
    name: 'React',
    position: [2.25, 1.55, -0.2],
    detail: 'TypeScript · Web · UI',
  },
  {
    name: 'AWS',
    position: [-2.1, -1.45, -0.15],
    detail: 'EC2 · S3 · DynamoDB · Lambda',
  },
  {
    name: 'OpenShift',
    position: [2.2, -1.35, 0.1],
    detail: 'Kubernetes · RBAC · Operators',
  },
]

function TechNode({ node }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()

    ref.current.position.y =
      Math.sin(time * 1.2 + node.position[0]) * 0.06

    ref.current.rotation.y += 0.003

    const targetScale = hovered ? 1.25 : 1
    ref.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.08
    )
  })

  return (
    <group position={node.position}>
      <mesh
        ref={ref}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.24, 1]} />
        <meshStandardMaterial
          color={hovered ? '#8bf8ff' : '#5f6cff'}
          emissive={hovered ? '#2bd8ff' : '#1c246d'}
          emissiveIntensity={hovered ? 1.6 : 0.65}
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>

      <Html
        center
        distanceFactor={7}
        style={{ pointerEvents: 'none' }}
      >
        <div
          className={`node-label ${
            hovered ? 'active' : ''
          }`}
        >
          <strong>{node.name}</strong>
          <span>{node.detail}</span>
        </div>
      </Html>
    </group>
  )
}

function Scene() {
  const center = nodes[0].position

  return (
    <>
      <ambientLight intensity={1.1} />

      <pointLight
        position={[3, 3, 4]}
        intensity={18}
        color="#5f6cff"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={10}
        color="#19d7c7"
      />

      {nodes.map((node, index) => {
        if (index === 0) return null

        return (
          <Line
            key={node.name}
            points={[center, node.position]}
            color="#354164"
            lineWidth={1}
            transparent
            opacity={0.65}
          />
        )
      })}

      {nodes.map((node) => (
        <TechNode key={node.name} node={node} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </>
  )
}

export default function TechConstellation() {
  return (
    <div
      className="constellation"
      aria-label="Interactive technology constellation"
    >
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 44 }}
        dpr={[1, 1.6]}
      >
        <Scene />
      </Canvas>

      <div className="constellation-hint">
        drag to orbit · hover nodes
      </div>
    </div>
  )
}
