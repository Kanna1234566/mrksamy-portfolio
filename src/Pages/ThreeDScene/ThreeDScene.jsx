import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import threed from "../../assets/3D/Obj1.glb";
import threedev from "../../assets/3D/Dev3D.glb";
import githubModel from "../../assets/3D/GitHub.glb"; // Rename to avoid confusion

const Model = ({ modelPath }) => {
    const gltf = useLoader(GLTFLoader, modelPath);
    const modelRef = useRef();
    const [rotationY, setRotationY] = useState(0);
    const [prevMouseX, setPrevMouseX] = useState(0);
    const [isMoving, setIsMoving] = useState(false); // State to track if mouse is moving
    const [timer, setTimer] = useState(null); // Timer state

    // Animation loop to set model rotation
    useFrame(() => {
        if (modelRef.current && isMoving) {
            modelRef.current.rotation.y += rotationY; // Rotate only when mouse is moving
        }
    });

    // Handle mouse movement to update rotation
    const handleMouseMove = (event) => {
        const mouseX = event.clientX;

        // Calculate the difference from the previous mouse position
        const deltaX = mouseX - prevMouseX;

        // Update Y rotation based on the difference in mouse movement
        setRotationY(deltaX * 0.01); // Scale for rotation speed

        // Update the previous mouse position
        setPrevMouseX(mouseX);

        // Set mouse moving state
        setIsMoving(true);

        // Clear any existing timer
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer to stop rotation after 3 seconds of inactivity
        const newTimer = setTimeout(() => {
            setIsMoving(false); // Stop rotation when mouse is inactive
        }, 3000);

        setTimer(newTimer); // Update the timer state
    };

    // Reset previous mouse position on mouse leave
    const handleMouseLeave = () => {
        setPrevMouseX(0);
        setIsMoving(false); // Stop rotation on mouse leave
        if (timer) {
            clearTimeout(timer); // Clear timer on mouse leave
        }
    };

    useEffect(() => {
        return () => {
            // Clean up the timer on component unmount
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={[6, 6, 6]} // Set scale to 4x4x4
            onPointerMove={handleMouseMove} // Rotate based on mouse move
            onPointerLeave={handleMouseLeave} // Reset on mouse leave
        />
    );
};

// Common Canvas component
const ModelCanvas = ({ modelPath }) => {
    return (
        <Canvas style={{ height: '30vh', width: '120px' }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model modelPath={modelPath} />
        </Canvas>
    );
};

// Individual Model Components
const GitHub = () => <ModelCanvas modelPath={githubModel} />;
const JavaScript = () => <ModelCanvas modelPath={threedev} />;
const ReactJs = () => <ModelCanvas modelPath={threed} />;

// Export the components
export { ReactJs, JavaScript, GitHub };
