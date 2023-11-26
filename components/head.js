document.querySelector('head').innerHTML += `
<link rel="stylesheet" href="/global/global.css">
<link rel="shortcut icon" type="image/png" href="/assets/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="arrow" viewBox="0 0 44 49">
            <path d="M27.0015 32.1284L27.0015 5.00317C27.0015 2.24175 24.7629 0.00317383 22.0015 0.00317383C19.24 0.00317383 17.0015 2.24175 17.0015 5.00317L17.0015 32.1294L8.57872 23.7916C6.61622 21.849 3.43438 21.849 1.47188 23.7916C-0.490626 25.7343 -0.490625 28.8841 1.47188 30.8268L18.3617 47.5461C19.3648 48.539 20.6864 49.0245 22.001 49.0024C23.3155 49.0245 24.6372 48.539 25.6402 47.5461L42.5301 30.8268C44.4926 28.8841 44.4926 25.7343 42.5301 23.7916C40.5676 21.849 37.3857 21.849 35.4232 23.7916L27.0015 32.1284Z" fill="black"/>
        </symbol>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" >
        <symbol id="gear-1" viewBox="0 0 200 200">
            <path d="M79.4908 32.401V5H120.511V32.0139V35.4931L123.774 36.7022C125.204 37.2322 126.611 37.8098 127.993 38.433L131.141 39.8525L133.583 37.4104L152.672 18.3218L181.678 47.3276L162.59 66.4156L160.148 68.8578L161.567 72.0064C162.191 73.3891 162.769 74.7968 163.299 76.2275L164.508 79.4898H167.987H195V120.51H167.6H164.177L162.939 123.701C162.423 125.03 161.866 126.338 161.269 127.624L159.799 130.794L162.27 133.264L181.677 152.671L152.671 181.677L132.877 161.883L130.463 159.469L127.336 160.839C126.165 161.351 124.978 161.831 123.773 162.277L120.511 163.487V166.966V195H79.4908V166.579V163.156L76.2999 161.917C75.1947 161.488 74.1037 161.031 73.0277 160.546L69.8792 159.126L67.437 161.568L47.3275 181.678L18.3217 152.672L38.4318 132.562L40.8739 130.12L39.4544 126.971C38.9695 125.896 38.5123 124.806 38.0836 123.701L36.8452 120.51H33.4224H5V79.4898H33.0353H36.5145L37.7236 76.2275C38.1699 75.0234 38.6499 73.8355 39.1625 72.6651L40.5319 69.5379L38.1179 67.1239L18.321 47.3269L47.3268 18.3211L66.737 37.7314L69.2074 40.2018L72.3767 38.7316C73.6629 38.1349 74.9712 37.5779 76.2999 37.0622L79.4908 35.8238V32.401ZM100.51 122.347C113.134 122.347 123.367 112.113 123.367 99.4898C123.367 86.8661 113.134 76.6327 100.51 76.6327C87.8866 76.6327 77.6531 86.8661 77.6531 99.4898C77.6531 112.113 87.8866 122.347 100.51 122.347Z" fill="#AAAAAA" stroke="black" stroke-width="10"/>
        </symbol>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="gear-2" viewBox="0 0 124 124">
            <path d="M84.1659 24.5378L94.6569 14.0468L109.953 29.3434L99.4625 39.8344L97.0203 42.2766L98.4399 45.4251C98.8086 46.2429 99.1503 47.0753 99.4639 47.9213L100.673 51.1837H104.152H119V72.8163H103.912H100.489L99.2507 76.0071C98.9458 76.7926 98.6166 77.566 98.2638 78.3265L96.7937 81.4957L99.264 83.9661L109.953 94.6552L94.6565 109.952L83.7281 99.0233L81.314 96.6093L78.1868 97.9788C77.4942 98.2821 76.7914 98.5661 76.079 98.8301L72.8167 100.039V103.518V119H51.184V103.278V99.8554L47.9932 98.617C47.34 98.3635 46.6952 98.0931 46.0592 97.8063L42.9107 96.3868L40.4686 98.8289L29.3435 109.954L14.0469 94.6574L25.1717 83.5326L27.6139 81.0904L26.1943 77.9419C25.9074 77.3057 25.6369 76.6606 25.3833 76.0072L24.1449 72.8164H20.7221H5V51.1838H20.4818H23.961L25.1701 47.9214C25.4342 47.2088 25.7183 46.5058 26.0217 45.8131L27.3912 42.6858L24.9772 40.2718L14.0466 29.3412L29.3432 14.0446L40.0346 24.736L42.505 27.2064L45.6742 25.7363C46.4345 25.3836 47.2078 25.0544 47.9932 24.7496L51.184 23.5111V20.0883V5H72.8167V19.8481V23.3273L76.079 24.5364C76.925 24.85 77.7575 25.1917 78.5752 25.5604L81.7238 26.98L84.1659 24.5378ZM62.5001 71.9992C68.2991 71.9992 73.0001 67.2982 73.0001 61.4992C73.0001 55.7002 68.2991 50.9992 62.5001 50.9992C56.7011 50.9992 52.0001 55.7002 52.0001 61.4992C52.0001 67.2982 56.7011 71.9992 62.5001 71.9992Z" fill="#6A6A6A" stroke="black" stroke-width="10"/>
        </symbol>
    </svg>
</div>
`