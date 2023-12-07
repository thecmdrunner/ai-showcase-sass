type LogoProps = React.SVGProps<SVGSVGElement>;

function Logo(props: LogoProps) {
  return (
    <svg
      width="163"
      height="16"
      viewBox="0 0 163 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.7 15.3C3.38 15.3 0.68 12.14 0.68 7.84C0.68 3.54 3.38 0.4 7.7 0.4C12 0.4 14.72 3.54 14.72 7.84C14.72 12.14 12 15.3 7.7 15.3ZM7.7 13.26C10.98 13.26 12.34 10.74 12.34 7.84C12.34 4.96 10.98 2.44 7.7 2.44C4.42 2.44 3.04 4.96 3.04 7.84C3.04 10.74 4.42 13.26 7.7 13.26ZM15.3906 4.78H17.6106L20.1906 12.78H20.2106L22.7906 4.78H25.0106L21.3906 15H19.0106L15.3906 4.78ZM30.2856 13.58C32.0256 13.58 32.7256 12.5 32.9056 11.88H35.0056C34.4856 13.82 32.9656 15.3 30.3456 15.3C27.1656 15.3 25.2256 13.1 25.2256 9.9C25.2256 6.58 27.1656 4.5 30.2456 4.5C33.5456 4.5 35.1656 6.8 35.1656 10.44H27.3256C27.3256 12.16 28.4256 13.58 30.2856 13.58ZM30.2456 6.16C28.5456 6.16 27.3256 7.3 27.3256 8.88H33.0656C33.0656 7.3 31.9456 6.16 30.2456 6.16ZM41.4655 4.54C41.8255 4.54 42.0855 4.56 42.3855 4.6V6.58H42.3455C40.3255 6.24 38.7055 7.6 38.7055 9.78V15H36.6055V4.78H38.7055V6.7H38.7455C39.2855 5.42 40.1255 4.54 41.4655 4.54ZM43.9544 15V0.699999H50.0344C52.7744 0.699999 54.7544 1.98 54.7544 4.98C54.7544 7.98 52.7744 9.28 50.0344 9.28H46.3344V15H43.9544ZM46.3344 2.72V7.24H49.9344C51.5344 7.24 52.3744 6.56 52.3744 4.98C52.3744 3.42 51.5344 2.72 49.9344 2.72H46.3344ZM60.3852 15.3C57.1852 15.3 55.2452 13.08 55.2452 9.9C55.2452 6.72 57.1852 4.5 60.3852 4.5C63.5852 4.5 65.5252 6.72 65.5252 9.9C65.5252 13.08 63.5852 15.3 60.3852 15.3ZM60.3852 13.58C62.3852 13.58 63.4252 12 63.4252 9.9C63.4252 7.78 62.3852 6.22 60.3852 6.22C58.3852 6.22 57.3452 7.78 57.3452 9.9C57.3452 12 58.3852 13.58 60.3852 13.58ZM65.7627 4.78H67.9827L70.0627 12.54H70.1027L72.1827 4.78H74.2427L76.3427 12.54H76.3827L78.4427 4.78H80.6627L77.5427 15H75.4227L73.2227 7.2H73.1827L71.0027 15H68.9027L65.7627 4.78ZM85.9888 13.58C87.7288 13.58 88.4288 12.5 88.6088 11.88H90.7088C90.1888 13.82 88.6688 15.3 86.0488 15.3C82.8688 15.3 80.9288 13.1 80.9288 9.9C80.9288 6.58 82.8688 4.5 85.9488 4.5C89.2488 4.5 90.8688 6.8 90.8688 10.44H83.0288C83.0288 12.16 84.1288 13.58 85.9888 13.58ZM85.9488 6.16C84.2488 6.16 83.0288 7.3 83.0288 8.88H88.7688C88.7688 7.3 87.6488 6.16 85.9488 6.16ZM97.1686 4.54C97.5286 4.54 97.7886 4.56 98.0886 4.6V6.58H98.0486C96.0286 6.24 94.4086 7.6 94.4086 9.78V15H92.3086V4.78H94.4086V6.7H94.4486C94.9886 5.42 95.8286 4.54 97.1686 4.54ZM103.625 13.58C105.365 13.58 106.065 12.5 106.245 11.88H108.345C107.825 13.82 106.305 15.3 103.685 15.3C100.505 15.3 98.5655 13.1 98.5655 9.9C98.5655 6.58 100.505 4.5 103.585 4.5C106.885 4.5 108.505 6.8 108.505 10.44H100.665C100.665 12.16 101.765 13.58 103.625 13.58ZM103.585 6.16C101.885 6.16 100.665 7.3 100.665 8.88H106.405C106.405 7.3 105.285 6.16 103.585 6.16ZM117.125 0.699999H119.225V15H117.125V13.82H117.085C116.545 14.52 115.545 15.3 113.965 15.3C111.345 15.3 109.405 13.26 109.405 9.9C109.405 6.54 111.345 4.5 113.965 4.5C115.545 4.5 116.545 5.24 117.085 6.02H117.125V0.699999ZM114.325 13.58C116.045 13.58 117.105 12.16 117.105 9.9C117.105 7.62 116.045 6.22 114.325 6.22C112.485 6.22 111.505 7.9 111.505 9.9C111.505 11.9 112.485 13.58 114.325 13.58Z"
        fill="white"
      />
      <path
        d="M129.414 10.52C129.414 12.98 128.454 15.3 125.014 15.3C121.574 15.3 120.614 12.98 120.614 10.52V9.86H122.874V10.52C122.874 12.12 123.154 13.26 124.954 13.26C126.734 13.26 127.054 12.12 127.054 10.52V0.699999H129.414V10.52ZM136.069 15.3C132.869 15.3 130.929 13.08 130.929 9.9C130.929 6.72 132.869 4.5 136.069 4.5C139.269 4.5 141.209 6.72 141.209 9.9C141.209 13.08 139.269 15.3 136.069 15.3ZM136.069 13.58C138.069 13.58 139.109 12 139.109 9.9C139.109 7.78 138.069 6.22 136.069 6.22C134.069 6.22 133.029 7.78 133.029 9.9C133.029 12 134.069 13.58 136.069 13.58ZM147.92 4.5C150.54 4.5 152.48 6.54 152.48 9.9C152.48 13.26 150.54 15.3 147.92 15.3C146.34 15.3 145.34 14.52 144.8 13.82H144.76V15H142.66V0.699999H144.76V6.02H144.8C145.34 5.24 146.34 4.5 147.92 4.5ZM147.56 13.58C149.4 13.58 150.38 11.9 150.38 9.9C150.38 7.9 149.4 6.22 147.56 6.22C145.84 6.22 144.78 7.62 144.78 9.9C144.78 12.16 145.84 13.58 147.56 13.58ZM158.369 8.82C160.249 9.26 162.289 9.68 162.289 12.12C162.289 14.08 160.609 15.3 158.129 15.3C154.829 15.3 153.409 13.76 153.309 11.6H155.349C155.449 12.7 155.929 13.64 158.089 13.64C159.549 13.64 160.169 12.92 160.169 12.28C160.169 11 158.949 10.9 157.449 10.54C155.829 10.16 153.629 9.84 153.629 7.52C153.629 5.84 155.109 4.5 157.669 4.5C160.449 4.5 161.769 6 161.909 7.78H159.869C159.729 6.98 159.329 6.16 157.689 6.16C156.429 6.16 155.749 6.64 155.749 7.36C155.749 8.4 156.889 8.48 158.369 8.82Z"
        fill="#75FA8D"
      />
    </svg>
  );
}

export default Logo;
