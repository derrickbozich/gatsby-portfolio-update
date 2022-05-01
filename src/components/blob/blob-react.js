import * as React from "react"
import { spline } from "./spline"
import SimplexNoise from 'simplex-noise';
import { useAnimationFrame } from "../../hooks/useAnimationFrame";
import Box from '@mui/material/Box'

// Reference:
// https://georgefrancis.dev/writing/build-a-smooth-animated-blob-with-svg-and-js/

const Blob = () => {
    const [points, setPoints] = React.useState(createPoints())
    const [d, setD] = React.useState(null)
    let hueNoiseOffset = 0;
    let noiseStep = 0.005;
    const simplex = new SimplexNoise();

    function map(n, start1, end1, start2, end2) {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function noise(x, y) {
        return simplex.noise2D(x, y);
    }

    function createPoints() {
        const points = [];
        // how many points do we need
        const numPoints = 6;
        // used to equally space each point around the circle
        const angleStep = (Math.PI * 2) / numPoints;
        // the radius of the circle
        const rad = 75;

        for (let i = 1; i <= numPoints; i++) {
            // x & y coordinates of the current point
            const theta = i * angleStep;

            const x = 100 + Math.cos(theta) * rad;
            const y = 100 + Math.sin(theta) * rad;

            // store the point's position
            points.push({
                x: x,
                y: y,
                // we need to keep a reference to the point's original point for when we modulate the values later
                originX: x,
                originY: y,
                // more on this in a moment!
                noiseOffsetX: Math.random() * 1000,
                noiseOffsetY: Math.random() * 1000
            });
        }

        return points;
    }

    useAnimationFrame(deltaTime => {
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        setD(spline(points, 1, true))
        const pointsClone = [...points];

        // for every point...
        pointsClone.forEach((point, i) => {
            const depth = 10;

            // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
            // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
            const x = map(nX, -1, 1, point.originX - depth, point.originX + depth);
            const y = map(nY, -1, 1, point.originY - depth, point.originY + depth);

            // update the point's current coordinates
            point.x = x;
            point.y = y;

            // progress the point's x, y values through "time"
            point.noiseOffsetX += noiseStep;
            point.noiseOffsetY += noiseStep;
        } )

        setPoints(pointsClone)
        

        const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
        const hue = map(hueNoise, -1, 1, 0, 360);
        const root = document.documentElement;
        root.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
        root.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);

        hueNoiseOffset += noiseStep / 6;
    })

    return (
        <Box maxWidth='200px'>
            <svg viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop id="gradientStop1" offset="0%" stopColor="var(--startColor)" />
                        <stop id="gradientStop2 " offset="100%" stopColor="var(--stopColor)" />
                    </linearGradient>
                </defs>
                <path d={d} fill="url('#gradient')"></path>
            </svg>

        </Box>
      
    )
}

export default Blob