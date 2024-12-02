// document.addEventListener('DOMContentLoaded', () => {
//     const svg = document.querySelector('.plate');

//     function createCrack() {
//         const crack = document.createElementNS("http://www.w3.org/2000/svg", "path");
//         crack.classList.add('crack');


//         const startX = Math.random() * 400;
//         const startY = Math.random() * 200;
//         const controlX = startX + Math.random() * 50 - 25;
//         const controlY = startY + Math.random() * 100 + 50;
//         const endX = startX + Math.random() * 100 - 50;
//         const endY = controlY + Math.random() * 150;

//         crack.setAttribute('d', `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
//         crack.setAttribute('stroke', 'url(#goldGradient)');
//         crack.setAttribute('stroke-width', '6');
//         crack.setAttribute('fill', 'none');
//         crack.style.filter = 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.7))';

//         svg.appendChild(crack);


//         crack.addEventListener('mouseover', () => {
//             crack.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 1))';
//         });
//         crack.addEventListener('mouseout', () => {
//             crack.style.filter = 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.7))';
//         });
//     }

//     svg.addEventListener('click', (e) => {
//         createCrack();
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const wall = document.querySelector('.wall');

    function createCrack(x, y) {
        const crack = document.createElementNS("http://www.w3.org/2000/svg", "path");
        crack.classList.add('crack');

        let d = `M ${x},${y}`;
        for (let i = 0; i < 6; i++) {
            const dx = Math.random() * 200 - 100; 
            const dy = Math.random() * 200 - 100; 
            d += ` l ${dx},${dy}`;
        }

        crack.setAttribute('d', d);
        wall.appendChild(crack);

        crack.addEventListener('mouseover', () => {
            crack.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 1))';
        });

        crack.addEventListener('mouseout', () => {
            crack.style.filter = 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))';
        });
    }

    wall.addEventListener('click', (event) => {
        const rect = wall.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        createCrack(x, y);
    });
});
