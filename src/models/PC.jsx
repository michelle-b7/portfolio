import React, {useRef, useState} from 'react'
import {useGLTF, useTexture, Decal, Html} from '@react-three/drei'
import {a} from '@react-spring/three' 
import PCscene from '../assets/pc.glb'
import myCustomShell from '../assets/edited_pc_mesh.png'


import instaPixel from '../assets/insta_pixel.png'
import githubPixel from '../assets/github_pixel.png'
import linkedinPixel from '../assets/linked_in_pixel.png'
import resumePixel from '../assets/resume_pixel.png'
import uclaPixel from '../assets/ucla_pixel.png'
import emailPixel from '../assets/email_pixel.png'

export function PC(props) {
  const pcRef = useRef()
  const [hoveredLogo, setHoveredLogo] = useState(null)
  
  
  const { nodes, materials } = useGLTF(PCscene)
  const texture = useTexture(myCustomShell)

  const [instaTex, githubTex, linkedinTex, resumeTex, uclaTex, emailTex] = useTexture([instaPixel, githubPixel, linkedinPixel, resumePixel, uclaPixel, emailPixel])
  const [copied, setCopied] = React.useState(false);


  const handleHover = (name, isHovering) => {
    setHoveredLogo(isHovering ? name : null)
    document.body.style.cursor = isHovering ? 'pointer' : 'auto'
  }

  return (
    <a.group ref={pcRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="pasokon_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.pasokon}
                >
                    <meshStandardMaterial map={texture} />
                    

                    {/* insta */}
                    <Decal 
                        position={[-0.9, 1.6, -1.2]} 
                        rotation={[.03, -Math.PI / 2, 0]} 
                        scale={[0.4, 0.4, 0.4]}
                        onClick={() => window.open('https://instagram.com/yun._.michelle', '_blank')}
                        onPointerOver={() => handleHover('insta', true)}
                        onPointerOut={() => handleHover('insta', false)}
                    >

                        <meshStandardMaterial 
                            map={instaTex} 
                            transparent
                            polygonOffset
                            polygonOffsetFactor={-10}
                            emissive={hoveredLogo === 'insta' ? '#ffffff' : '#000000'}
                            emissiveIntensity={2}
                        />
                    </Decal>

                    {/* ucla */}
                    <Decal 
                        position={[-0.9, 1.15, -0.7]} 
                        rotation={[-.1, -Math.PI / 2, 0]} 
                        scale={[0.5, 0.3, 0.4]}
                    >

                        <meshStandardMaterial 
                            map={uclaTex} 
                            transparent
                            polygonOffset
                            polygonOffsetFactor={-10}
                            emissive={hoveredLogo === 'ucla' ? '#ffffff' : '#000000'}
                            emissiveIntensity={0}
                        />
                    </Decal>

                    {/* github */}
                    <Decal 
                    position={[1, 1.62, -.85]} 
                    rotation={[0, Math.PI / 2, 0]} 
                    scale={[0.3, 0.3, 0.3]} 
                    onClick={() => window.open('https://github.com/michelle-b7', '_blank')}
                    onPointerOver={() => handleHover('github', true)}
                    onPointerOut={() => handleHover('github', false)}
                    >
                    <meshStandardMaterial 
                        map={githubTex} 
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-10}
                        emissive={hoveredLogo === 'github' ? '#ffffff' : '#000000'}
                        emissiveIntensity={1.5}
                    />
                    </Decal>

                    {/* email */}
                    <Decal 
                    position={[1.0, 1.85, -1.4]} 
                    rotation={[-.1, Math.PI / 2, 0]} 
                    scale={[0.4, 0.4, 0.3]} 
                    onClick={() => {navigator.clipboard.writeText('mibai@g.ucla.edu'); setCopied(true); setTimeout( () => setCopied(false), 10000);}}
                    onPointerOver={() => handleHover('email', true)}
                    onPointerOut={() => handleHover('email', false)}
                    >
                    <meshStandardMaterial 
                        map={emailTex} 
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-10}
                        emissive={hoveredLogo === 'email' ? '#ffffff' : '#000000'}
                        emissiveIntensity={1.5}
                    />
                    {copied && (
                      <Html position={[1.0, 2.1, -1.4]} center>
                        <div style={{
                          background: 'pink',
                          color: 'white',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '16px',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          fontFamily: 'sans-serif'
                        }}>
                          Email copied!
                        </div>
                      </Html>
                    )}


                    </Decal>

                    {/* linked in */}
                    <Decal 
                    position={[0.9, 1.08, -1.23]} // Positive X (0.9) to put it on the opposite side
                    rotation={[-.04, Math.PI / 2, 0]} // Flipped rotation (PI/2) to face the right wall
                    scale={[0.5, 0.2, 0.3]} 
                    onClick={() => window.open('https://www.linkedin.com/in/michelle-y-bai', '_blank')}
                    onPointerOver={() => handleHover('linkedin', true)}
                    onPointerOut={() => handleHover('linkedin', false)}
                    >
                    <meshStandardMaterial 
                        map={linkedinTex} 
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-10}
                        emissive={hoveredLogo === 'linkedin' ? '#ffffff' : '#000000'}
                        emissiveIntensity={1.5}
                    />
                    </Decal>

                    {/* resume */}
                    <Decal 
                    position={[0.9, 0.18, -0.74]} // Positive X (0.9) to put it on the opposite side
                    rotation={[0, Math.PI / 2, 0]} // Flipped rotation (PI/2) to face the right wall
                    scale={[0.8, 0.6, 0.4]} 
                    onClick={() => window.open('https://drive.google.com/drive/folders/1lK8R4rUkW13xJqYgMzPobLs0cm0YScgT?usp=sharing', '_blank')}
                    onPointerOver={() => handleHover('resume', true)}
                    onPointerOut={() => handleHover('resume', false)}
                    >
                    <meshStandardMaterial 
                        map={resumeTex} 
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-10}
                        emissive={hoveredLogo === 'resume' ? '#ffffff' : '#000000'}
                        emissiveIntensity={1.5}
                    />
                    </Decal>
                </mesh>


                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.terrarium1}
                />
              </group>
              
              

              {/* Isopod Group */}
              <group name="isopod002_49" position={[0, 0.864, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.073}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_65"
                    geometry={nodes.Object_65.geometry}
                    material={materials.terrarium1}
                    skeleton={nodes.Object_65.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload(PCscene)