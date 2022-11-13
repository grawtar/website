import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex mx-auto mt-4 lg:mt-12">
      <div className="w-full mt-4 lg:mt-20 lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-semibold">Hey, I'm Uroš!</h1>
        <div className="text-3xl lg:text-4xl font-semibold mt-4">
          A full-stack developer with a passion for{" "}
          <span className="highlight highlight-nodejs">Node.js</span>,{" "}
          <span className="highlight highlight-react">React</span> &{" "}
          <span className="highlight highlight-docker">Docker</span>
        </div>
        <div className="mt-8 sm:mt-6 flex justify-center sm:justify-start">
          <Link passHref href="mailto:contact@urosstok.com">
            <a className="bg-black px-6 py-4 rounded-full text-xl text-white font-semibold cursor-pointer hover:bg-gray-700">
              Get In Touch
            </a>
          </Link>
          <div className="flex items-center space-x-4 ml-6">
            <Link passHref href="https://www.linkedin.com/in/urosstok">
              <a>
                <svg
                  className="h-[38px] text-gray-500 hover:text-gray-900 cursor-pointer"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_237_43)">
                    <path
                      d="M15.8165 1.18359H1.611C0.960084 1.18359 0.431213 1.71986 0.431213 2.37818V16.5578C0.431213 17.2161 0.960084 17.7524 1.611 17.7524H15.8165C16.4675 17.7524 17 17.2161 17 16.5578V2.37818C17 1.71986 16.4675 1.18359 15.8165 1.18359ZM5.43884 15.3854H2.98311V7.47826H5.44254V15.3854H5.43884ZM4.21097 6.39833C3.42321 6.39833 2.78709 5.75851 2.78709 4.97445C2.78709 4.19039 3.42321 3.55057 4.21097 3.55057C4.99503 3.55057 5.63485 4.19039 5.63485 4.97445C5.63485 5.76221 4.99873 6.39833 4.21097 6.39833ZM14.6441 15.3854H12.1884V11.5391C12.1884 10.6219 12.1699 9.44211 10.9125 9.44211C9.63282 9.44211 9.4368 10.4407 9.4368 11.4725V15.3854H6.98107V7.47826H9.33695V8.55819H9.37023C9.69939 7.93686 10.5019 7.28225 11.6965 7.28225C14.1818 7.28225 14.6441 8.92063 14.6441 11.0509V15.3854Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_237_43">
                      <rect
                        width="16.5688"
                        height="18.9358"
                        fill="white"
                        transform="translate(0.431213)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
            <Link passHref href="https://github.com/grawtar">
              <a>
                <svg
                  className="h-[38px] text-gray-500 hover:text-gray-900 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2">
        <svg
          height="450"
          viewBox="0 0 420 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M189.053 0.537554C251.02 -1.71174 316.762 1.28431 359.99 45.6434C407.965 94.8744 429.713 166.057 415.909 233.33C401.748 302.348 353.638 360.347 289.413 389.609C226.731 418.168 152.536 415.253 93.1444 380.388C38.781 348.474 17.6659 285.198 6.14555 223.321C-4.63689 165.406 -4.37941 103.078 33.0315 57.5114C69.9557 12.5375 130.826 2.6511 189.053 0.537554Z"
            fill="#f5f5f5"
          />
          <path
            d="M116.975 56.4092C119.715 54.8406 123.285 54.8335 126.023 56.4092C139.797 64.1926 153.576 71.9637 167.348 79.7519C169.939 81.211 171.672 84.0938 171.645 87.0786V133.906C171.664 137.015 169.761 139.967 167.028 141.393C153.298 149.133 139.576 156.883 125.849 164.624C123.052 166.223 119.411 166.1 116.701 164.369C112.585 161.983 108.462 159.609 104.346 157.225C103.505 156.724 102.556 156.325 101.962 155.509C102.487 154.801 103.426 154.713 104.189 154.404C105.907 153.858 107.485 152.981 109.064 152.13C109.463 151.857 109.95 151.961 110.333 152.206C113.852 154.224 117.341 156.301 120.873 158.299C121.626 158.734 122.389 158.157 123.033 157.798C136.505 150.183 149.995 142.598 163.465 134.981C163.964 134.741 164.24 134.211 164.2 133.664C164.209 118.216 164.202 102.766 164.204 87.3187C164.261 86.6984 163.902 86.1281 163.341 85.8742C149.66 78.1691 135.985 70.4523 122.306 62.7452C122.069 62.5823 121.788 62.4949 121.5 62.4945C121.213 62.494 120.932 62.5806 120.694 62.7429C107.015 70.4523 93.3425 78.1762 79.6632 85.8809C79.1042 86.1351 78.7291 86.696 78.7956 87.3187C78.798 102.766 78.7956 118.216 78.7956 133.666C78.7719 133.933 78.8305 134.201 78.9635 134.433C79.0965 134.666 79.2976 134.852 79.5396 134.966C83.19 137.037 86.8451 139.092 90.4979 141.155C92.5557 142.263 95.0823 142.921 97.3496 142.072C99.3503 141.354 100.753 139.313 100.715 137.188C100.733 121.831 100.705 106.471 100.729 91.1164C100.679 90.4346 101.325 89.8714 101.988 89.9355C103.742 89.9237 105.499 89.9119 107.253 89.9402C107.985 89.9237 108.489 90.6578 108.398 91.3447C108.391 106.799 108.417 122.254 108.386 137.709C108.391 141.828 106.699 146.309 102.889 148.325C98.1955 150.756 92.3943 150.24 87.7575 147.909C83.7434 145.905 79.9127 143.541 75.9699 141.395C73.2299 139.976 71.3354 137.013 71.3547 133.907V87.0786C71.326 84.032 73.1276 81.0968 75.7986 79.659C89.5256 71.9122 103.25 64.1595 116.975 56.4092Z"
            fill="#8CC84B"
          />
          <path
            d="M128.95 88.8472C134.937 88.4619 141.347 88.6189 146.734 91.5683C150.905 93.8284 153.218 98.5719 153.291 103.206C153.175 103.831 152.521 104.176 151.925 104.133C150.188 104.131 148.45 104.157 146.713 104.121C145.976 104.149 145.548 103.47 145.456 102.819C144.956 100.601 143.747 98.4054 141.66 97.336C138.457 95.732 134.742 95.8127 131.249 95.8461C128.698 95.9815 125.956 96.2023 123.796 97.702C122.137 98.838 121.633 101.131 122.225 102.978C122.783 104.304 124.314 104.732 125.566 105.126C132.781 107.013 140.427 106.826 147.504 109.309C150.434 110.321 153.301 112.289 154.304 115.357C155.616 119.469 155.04 124.384 152.115 127.685C149.743 130.401 146.288 131.879 142.841 132.682C138.257 133.705 133.499 133.731 128.844 133.277C124.466 132.778 119.91 131.627 116.531 128.645C113.641 126.135 112.229 122.226 112.369 118.452C112.403 117.815 113.037 117.37 113.648 117.423C115.397 117.408 117.146 117.404 118.895 117.425C119.594 117.375 120.112 117.979 120.148 118.637C120.471 120.75 121.265 122.967 123.107 124.22C126.662 126.513 131.123 126.356 135.194 126.42C138.566 126.271 142.352 126.225 145.104 123.996C146.556 122.725 146.986 120.598 146.594 118.768C146.169 117.223 144.553 116.503 143.165 116.032C136.042 113.779 128.311 114.597 121.258 112.049C118.394 111.037 115.625 109.124 114.525 106.182C112.99 102.018 113.693 96.868 116.925 93.6785C120.076 90.5059 124.625 89.2841 128.95 88.8468V88.8472Z"
            fill="#8CC84B"
          />
          <path
            d="M282.5 166C313.152 166 338 141.152 338 110.5C338 79.8482 313.152 55 282.5 55C251.848 55 227 79.8482 227 110.5C227 141.152 251.848 166 282.5 166Z"
            fill="#0091E2"
          />
          <path
            d="M316.678 105.026C316.505 104.885 314.933 103.703 311.616 103.703C310.738 103.703 309.86 103.768 308.993 103.931C308.353 99.5192 304.711 97.3729 304.548 97.2754L303.659 96.7551L303.074 97.6006C302.337 98.7388 301.806 99.9854 301.491 101.308C300.895 103.823 301.253 106.186 302.532 108.202C300.993 109.058 298.51 109.275 298.012 109.286H257.026C255.953 109.286 255.086 110.153 255.086 111.226C255.043 114.814 255.65 118.381 256.875 121.752C258.284 125.459 260.387 128.18 263.118 129.849C266.175 131.724 271.151 132.798 276.798 132.798C279.346 132.808 281.893 132.57 284.397 132.104C287.877 131.464 291.226 130.25 294.305 128.505C296.841 127.031 299.128 125.166 301.069 122.966C304.31 119.291 306.25 115.194 307.692 111.562H308.266C311.822 111.562 314.011 110.142 315.215 108.95C316.017 108.191 316.646 107.27 317.047 106.24L317.296 105.492L316.678 105.026V105.026ZM260.82 108.104H266.316C266.576 108.104 266.793 107.888 266.793 107.627V102.739C266.793 102.479 266.576 102.262 266.316 102.251H260.82C260.56 102.251 260.343 102.468 260.343 102.728V107.627C260.343 107.898 260.56 108.104 260.82 108.104M268.397 108.104H273.893C274.153 108.104 274.37 107.888 274.37 107.627V102.739C274.37 102.479 274.153 102.262 273.893 102.251H268.397C268.126 102.251 267.91 102.468 267.91 102.739V107.627C267.91 107.898 268.126 108.104 268.397 108.104ZM276.072 108.115H281.568C281.828 108.115 282.045 107.898 282.045 107.638V102.75C282.045 102.489 281.828 102.273 281.568 102.262H276.072C275.812 102.262 275.595 102.479 275.595 102.739V107.638C275.595 107.898 275.812 108.104 276.072 108.115M283.671 108.115H289.167C289.427 108.115 289.643 107.898 289.654 107.638V102.75C289.654 102.479 289.437 102.262 289.167 102.262H283.671C283.411 102.262 283.194 102.479 283.194 102.739V107.638C283.194 107.898 283.4 108.115 283.671 108.115M268.387 101.069H273.882C274.142 101.069 274.359 100.853 274.359 100.582V95.6928C274.359 95.4326 274.142 95.2158 273.882 95.2158H268.387C268.116 95.2158 267.91 95.4326 267.899 95.6928V100.582C267.91 100.853 268.126 101.069 268.387 101.069ZM276.072 101.069H281.568C281.828 101.069 282.045 100.853 282.045 100.582V95.6928C282.045 95.4326 281.828 95.2158 281.568 95.2158H276.072C275.812 95.2158 275.595 95.4326 275.595 95.6928V100.582C275.595 100.853 275.812 101.069 276.072 101.069ZM283.671 101.069H289.167C289.437 101.069 289.643 100.853 289.654 100.582V95.6928C289.654 95.4218 289.437 95.2158 289.167 95.2158H283.671C283.411 95.2158 283.194 95.4326 283.194 95.6928V100.582C283.194 100.853 283.4 101.069 283.671 101.069ZM283.671 94.0343H289.167C289.437 94.0343 289.654 93.8175 289.654 93.5465V88.6469C289.654 88.3867 289.437 88.1699 289.167 88.1699H283.671C283.411 88.1699 283.194 88.3867 283.194 88.6469V93.5465C283.194 93.8175 283.4 94.0343 283.671 94.0343ZM291.324 108.115H296.819C297.08 108.115 297.296 107.898 297.296 107.638V102.75C297.296 102.479 297.08 102.273 296.819 102.262H291.324C291.063 102.262 290.847 102.479 290.847 102.739V107.638C290.847 107.898 291.063 108.115 291.324 108.115"
            fill="white"
          />
          <path
            d="M318.264 254.08C317.113 253.683 315.92 253.308 314.691 252.954C314.893 252.13 315.078 251.316 315.243 250.517C317.948 237.387 316.179 226.81 310.14 223.327C304.35 219.988 294.88 223.47 285.315 231.793C284.396 232.594 283.473 233.441 282.551 234.329C281.937 233.741 281.324 233.174 280.712 232.63C270.688 223.73 260.641 219.98 254.608 223.472C248.823 226.821 247.11 236.765 249.544 249.208C249.78 250.41 250.054 251.637 250.365 252.885C248.943 253.289 247.57 253.719 246.257 254.177C234.505 258.274 227 264.695 227 271.356C227 278.235 235.057 285.135 247.297 289.319C248.263 289.649 249.266 289.961 250.298 290.257C249.963 291.607 249.672 292.93 249.427 294.22C247.105 306.447 248.918 316.156 254.688 319.483C260.647 322.92 270.649 319.388 280.388 310.874C281.158 310.201 281.931 309.488 282.705 308.74C283.708 309.706 284.709 310.62 285.706 311.477C295.139 319.595 304.456 322.873 310.221 319.536C316.174 316.09 318.109 305.66 315.597 292.971C315.405 292.002 315.182 291.012 314.931 290.004C315.634 289.796 316.323 289.582 316.996 289.359C329.721 285.143 338 278.327 338 271.356C338 264.671 330.253 258.207 318.264 254.08ZM315.504 284.858C314.897 285.059 314.275 285.253 313.64 285.441C312.235 280.994 310.339 276.265 308.019 271.379C310.233 266.61 312.056 261.941 313.421 257.523C314.557 257.851 315.659 258.198 316.721 258.563C326.993 262.099 333.258 267.328 333.258 271.356C333.258 275.647 326.491 281.217 315.504 284.858ZM310.945 293.892C312.056 299.503 312.215 304.576 311.479 308.542C310.818 312.105 309.488 314.481 307.845 315.432C304.346 317.457 296.866 314.825 288.798 307.883C287.873 307.087 286.942 306.237 286.007 305.338C289.135 301.917 292.261 297.94 295.311 293.524C300.677 293.048 305.747 292.269 310.345 291.207C310.571 292.12 310.772 293.016 310.945 293.892ZM264.842 315.083C261.425 316.29 258.703 316.324 257.057 315.375C253.556 313.356 252.1 305.561 254.086 295.104C254.313 293.906 254.584 292.676 254.896 291.419C259.443 292.424 264.476 293.148 269.854 293.584C272.926 297.906 276.142 301.878 279.383 305.356C278.675 306.04 277.97 306.691 277.268 307.304C272.962 311.068 268.646 313.739 264.842 315.083ZM248.831 284.832C243.418 282.982 238.949 280.577 235.885 277.954C233.132 275.596 231.742 273.255 231.742 271.356C231.742 267.314 237.768 262.159 247.818 258.655C249.037 258.23 250.314 257.829 251.639 257.452C253.028 261.971 254.85 266.695 257.049 271.471C254.821 276.319 252.973 281.118 251.571 285.69C250.626 285.418 249.711 285.132 248.831 284.832ZM254.198 248.297C252.112 237.637 253.497 229.594 256.984 227.576C260.697 225.426 268.909 228.492 277.564 236.176C278.117 236.668 278.672 237.182 279.229 237.714C276.004 241.177 272.817 245.119 269.773 249.415C264.553 249.899 259.556 250.676 254.961 251.717C254.672 250.555 254.416 249.414 254.198 248.297ZM302.078 260.12C300.98 258.223 299.853 256.371 298.703 254.569C302.245 255.017 305.638 255.611 308.824 256.338C307.868 259.405 306.675 262.61 305.272 265.897C304.265 263.985 303.2 262.058 302.078 260.12ZM282.553 241.102C284.74 243.472 286.93 246.118 289.085 248.988C286.914 248.885 284.716 248.832 282.5 248.832C280.305 248.832 278.123 248.884 275.966 248.985C278.122 246.141 280.332 243.499 282.553 241.102ZM262.902 260.153C261.805 262.056 260.76 263.973 259.769 265.893C258.388 262.618 257.207 259.398 256.242 256.288C259.409 255.58 262.786 255 266.305 254.561C265.139 256.379 264.003 258.245 262.902 260.153V260.153ZM266.406 288.489C262.771 288.084 259.343 287.534 256.176 286.845C257.157 283.68 258.364 280.391 259.774 277.046C260.768 278.965 261.817 280.882 262.921 282.789H262.921C264.046 284.731 265.211 286.634 266.406 288.489ZM282.684 301.944C280.437 299.519 278.195 296.837 276.006 293.952C278.131 294.035 280.298 294.078 282.5 294.078C284.762 294.078 286.999 294.027 289.2 293.929C287.039 296.866 284.857 299.552 282.684 301.944ZM305.317 276.875C306.801 280.257 308.051 283.528 309.044 286.64C305.826 287.374 302.351 287.965 298.69 288.405C299.842 286.578 300.98 284.694 302.097 282.756C303.228 280.796 304.302 278.832 305.317 276.875ZM297.99 280.387C296.255 283.396 294.473 286.268 292.665 288.979C289.371 289.214 285.968 289.336 282.5 289.336C279.046 289.336 275.686 289.228 272.45 289.018C270.569 286.272 268.749 283.391 267.025 280.413H267.025C265.306 277.443 263.723 274.448 262.289 271.47C263.723 268.485 265.301 265.486 267.011 262.522L267.01 262.522C268.724 259.55 270.529 256.683 272.392 253.954C275.694 253.704 279.079 253.574 282.5 253.574H282.5C285.936 253.574 289.326 253.705 292.626 253.957C294.462 256.666 296.253 259.523 297.974 262.496C299.715 265.503 301.314 268.481 302.76 271.402C301.318 274.374 299.723 277.382 297.99 280.387ZM307.772 227.435C311.489 229.579 312.934 238.224 310.599 249.56C310.45 250.283 310.282 251.02 310.1 251.766C305.495 250.704 300.494 249.913 295.259 249.422C292.209 245.079 289.048 241.13 285.875 237.711C286.728 236.891 287.58 236.108 288.428 235.37C296.623 228.238 304.282 225.423 307.772 227.435ZM282.5 261.444C287.974 261.444 292.412 265.882 292.412 271.356C292.412 276.83 287.974 281.268 282.5 281.268C277.026 281.268 272.588 276.83 272.588 271.356C272.588 265.882 277.026 261.444 282.5 261.444Z"
            fill="#00D8FF"
          />
          <path
            d="M131.358 217.217C130.555 217.217 129.81 217.389 129.122 217.618C130.584 218.593 131.387 219.883 131.788 221.345C131.817 221.545 131.874 221.689 131.903 221.889C131.932 222.061 131.96 222.233 131.96 222.405C132.075 224.928 131.301 225.243 130.756 226.734C129.925 228.655 130.154 230.718 131.157 232.381C131.243 232.582 131.358 232.811 131.501 233.012C130.412 225.759 136.461 224.67 137.579 222.405C137.665 220.427 136.031 219.109 134.741 218.191C133.508 217.446 132.39 217.217 131.358 217.217ZM140.474 218.851C140.359 219.51 140.445 219.338 140.417 219.682C140.388 219.911 140.388 220.198 140.359 220.427C140.302 220.657 140.245 220.886 140.159 221.115C140.101 221.345 140.015 221.574 139.929 221.803C139.815 222.033 139.729 222.233 139.614 222.463C139.528 222.577 139.471 222.692 139.385 222.807C139.327 222.893 139.27 222.979 139.213 223.065C139.069 223.265 138.926 223.466 138.783 223.638C138.611 223.81 138.467 224.011 138.267 224.154C138.267 224.183 138.267 224.183 138.267 224.183C138.095 224.326 137.923 224.498 137.722 224.641C137.12 225.1 136.432 225.444 135.801 225.874C135.601 226.017 135.4 226.132 135.228 226.304C135.027 226.447 134.855 226.591 134.683 226.763C134.483 226.935 134.339 227.107 134.167 227.307C134.024 227.479 133.852 227.68 133.737 227.881C133.594 228.081 133.451 228.282 133.336 228.483C133.221 228.712 133.135 228.913 133.021 229.142C132.935 229.371 132.849 229.572 132.791 229.801C132.705 230.059 132.648 230.288 132.591 230.518C132.562 230.633 132.562 230.776 132.534 230.89C132.505 231.005 132.505 231.12 132.476 231.234C132.476 231.464 132.448 231.722 132.448 231.951C132.448 232.123 132.448 232.295 132.476 232.467C132.476 232.696 132.505 232.926 132.562 233.184C132.591 233.413 132.648 233.642 132.706 233.872C132.792 234.101 132.849 234.33 132.935 234.56C132.992 234.703 133.078 234.846 133.136 234.961L126.542 232.41C125.424 232.094 124.335 231.808 123.217 231.55C122.615 231.406 122.013 231.263 121.411 231.12C119.691 230.776 117.943 230.518 116.194 230.346C116.137 230.346 116.108 230.317 116.051 230.317C114.331 230.145 112.639 230.059 110.919 230.059C109.658 230.059 108.397 230.116 107.164 230.202C105.416 230.317 103.667 230.546 101.918 230.833C101.488 230.89 101.058 230.976 100.628 231.062C99.7397 231.234 98.8798 231.435 98.0485 231.636C97.6185 231.75 97.1885 231.865 96.7585 231.98C96.3285 232.152 95.9272 232.352 95.5258 232.524C95.2105 232.668 94.8952 232.811 94.5799 232.954C94.5226 232.983 94.4652 232.983 94.4366 233.012C94.1499 233.155 93.8919 233.27 93.6339 233.413C93.5479 233.442 93.4906 233.47 93.4332 233.499C93.1179 233.642 92.8026 233.814 92.5446 233.958C92.3439 234.044 92.1433 234.158 91.9713 234.244C91.8853 234.302 91.7706 234.359 91.7133 234.388C91.4553 234.531 91.1973 234.674 90.968 234.818C90.71 234.961 90.4807 235.104 90.28 235.248C90.0793 235.391 89.8787 235.506 89.7067 235.649C89.6779 235.678 89.6494 235.678 89.6207 235.706C89.4487 235.821 89.248 235.964 89.076 236.108C89.076 236.108 89.0473 236.136 89.0187 236.165C88.8754 236.28 88.7321 236.394 88.5887 236.509C88.5315 236.538 88.474 236.595 88.4167 236.624C88.2734 236.738 88.1301 236.882 87.9868 236.996C87.9581 237.053 87.9008 237.082 87.8721 237.111C87.7001 237.283 87.5281 237.426 87.3561 237.598C87.3274 237.598 87.3274 237.627 87.2988 237.656C87.1268 237.799 86.9548 237.971 86.7828 238.143C86.7541 238.172 86.7541 238.2 86.7255 238.2C86.5822 238.343 86.4388 238.487 86.2955 238.659C86.2382 238.716 86.1522 238.773 86.0949 238.831C85.9515 239.003 85.7795 239.175 85.6075 239.347C85.5788 239.404 85.5215 239.433 85.4928 239.49C85.2635 239.719 85.0628 239.949 84.8335 240.178C84.8048 240.207 84.7762 240.235 84.7475 240.264C84.2889 240.751 83.8015 241.239 83.2856 241.669C82.7696 242.127 82.2249 242.557 81.6803 242.93C81.1069 243.331 80.5623 243.675 79.9603 244.019C79.387 244.335 78.785 244.621 78.1543 244.879C77.5524 245.137 76.9217 245.367 76.2911 245.567C75.0871 245.825 73.8545 246.313 72.7938 246.399C72.5645 246.399 72.3065 246.456 72.0772 246.485C71.8192 246.542 71.5899 246.599 71.3605 246.657C71.1312 246.743 70.9019 246.829 70.6725 246.915C70.4432 247.001 70.2139 247.115 69.9846 247.23C69.7839 247.373 69.5546 247.488 69.3539 247.631C69.1533 247.775 68.9526 247.947 68.7806 248.119C68.5799 248.262 68.3793 248.463 68.2073 248.635C68.0353 248.835 67.8633 249.007 67.72 249.208C67.5766 249.437 67.4046 249.638 67.29 249.867C67.1466 250.068 67.0033 250.297 66.8886 250.526C66.7739 250.784 66.6593 251.014 66.5733 251.272C66.4873 251.501 66.4013 251.759 66.3153 252.017C66.258 252.246 66.2006 252.476 66.172 252.705C66.172 252.734 66.1433 252.762 66.1433 252.791C66.086 253.049 66.086 253.393 66.0573 253.565C66.0286 253.766 66 253.938 66 254.138C66 254.253 66 254.396 66.0287 254.511C66.0574 254.712 66.086 254.884 66.1434 255.056C66.2007 255.228 66.2581 255.4 66.3441 255.572C66.3441 255.6 66.3441 255.6 66.3441 255.6C66.4301 255.772 66.5447 255.944 66.6594 256.116C66.7741 256.288 66.8887 256.46 67.0321 256.632C67.1754 256.776 67.3474 256.948 67.5194 257.091C67.6914 257.263 67.8634 257.406 68.064 257.55C68.752 258.152 68.924 258.352 69.8127 258.811C69.956 258.897 70.0993 258.954 70.2713 259.04C70.3 259.04 70.3286 259.069 70.3573 259.069C70.3573 259.126 70.3573 259.155 70.386 259.212C70.4147 259.442 70.472 259.671 70.5294 259.9C70.5866 260.158 70.6727 260.388 70.7587 260.588C70.8447 260.76 70.902 260.932 70.988 261.104C71.0167 261.162 71.0453 261.219 71.074 261.248C71.1887 261.477 71.3033 261.678 71.418 261.878C71.5613 262.079 71.7047 262.28 71.848 262.48C71.9913 262.652 72.1633 262.853 72.3353 263.025C72.5073 263.197 72.6793 263.34 72.88 263.512C72.88 263.512 72.9087 263.541 72.9373 263.541C73.1093 263.684 73.2812 263.828 73.4532 263.942C73.6539 264.086 73.8546 264.2 74.0839 264.315C74.2846 264.43 74.5139 264.544 74.7432 264.63C74.9152 264.716 75.1159 264.774 75.3165 264.831C75.3452 264.86 75.3738 264.86 75.4312 264.888C75.5459 264.917 75.6892 264.946 75.8039 264.974C75.7179 266.522 75.6892 267.984 75.9186 268.5C76.1766 269.073 77.4379 267.325 78.6992 265.318C78.5272 267.296 78.4125 269.618 78.6992 270.306C79.0145 271.023 80.7345 268.787 82.2251 266.322C102.549 261.62 121.096 275.667 123.045 295.503C122.673 292.407 118.86 290.688 117.112 291.118C116.252 293.239 114.79 295.962 112.439 297.653C112.64 295.761 112.554 293.812 112.152 291.92C111.522 294.557 110.289 297.023 108.598 299.144C105.874 299.345 103.151 298.026 101.718 296.048C101.603 295.962 101.575 295.79 101.489 295.675C101.403 295.475 101.317 295.274 101.259 295.073C101.173 294.873 101.116 294.672 101.087 294.471C101.059 294.271 101.059 294.07 101.059 293.841C101.059 293.697 101.059 293.554 101.059 293.411C101.087 293.21 101.145 293.009 101.202 292.809C101.259 292.608 101.317 292.407 101.403 292.207C101.517 292.006 101.603 291.806 101.747 291.605C102.234 290.229 102.234 289.111 101.345 288.452C101.173 288.337 101.001 288.251 100.801 288.165C100.686 288.136 100.543 288.079 100.428 288.05C100.342 288.022 100.285 287.993 100.199 287.964C99.9979 287.907 99.7972 287.85 99.5966 287.821C99.3959 287.764 99.1953 287.735 98.9946 287.735C98.7939 287.706 98.5646 287.678 98.364 287.678C98.2206 287.678 98.0773 287.706 97.934 287.706C97.7046 287.706 97.504 287.735 97.3033 287.792C97.1026 287.821 96.902 287.85 96.7013 287.907C96.5007 287.964 96.3 288.022 96.0993 288.108C95.8987 288.194 95.7267 288.28 95.526 288.366C95.354 288.452 95.182 288.566 94.9814 288.652C88.3022 293.01 92.2868 303.215 96.8447 306.167C95.1247 306.483 93.3761 306.855 92.8888 307.228C92.8601 307.257 92.8315 307.285 92.8315 307.285C94.0641 308.03 95.3541 308.661 96.7014 309.206C98.536 309.808 100.485 310.352 101.345 310.582V310.61C103.725 311.098 106.132 311.27 108.569 311.126C121.268 310.238 131.674 300.577 133.566 287.85C133.623 288.108 133.68 288.337 133.738 288.595C133.824 289.111 133.938 289.656 133.996 290.2C133.996 290.2 133.996 290.2 133.996 290.229C134.053 290.487 134.082 290.745 134.11 290.974C134.11 291.032 134.11 291.06 134.11 291.089C134.139 291.347 134.168 291.605 134.168 291.834C134.196 292.15 134.225 292.465 134.225 292.78C134.225 292.924 134.225 293.067 134.225 293.239C134.225 293.382 134.254 293.554 134.254 293.698C134.254 293.87 134.225 294.042 134.225 294.214C134.225 294.357 134.225 294.5 134.225 294.615C134.225 294.816 134.196 294.988 134.196 295.188C134.196 295.303 134.196 295.418 134.168 295.561C134.168 295.762 134.139 295.962 134.139 296.192C134.11 296.278 134.11 296.364 134.11 296.45C134.081 296.679 134.053 296.88 134.024 297.109C134.024 297.195 134.024 297.281 133.995 297.367C133.967 297.654 133.909 297.912 133.881 298.198V298.227V298.256C133.823 298.514 133.766 298.8 133.709 299.058C133.709 299.087 133.709 299.116 133.709 299.144C133.651 299.402 133.594 299.66 133.537 299.918C133.537 299.947 133.508 300.004 133.508 300.033C133.451 300.291 133.393 300.549 133.307 300.807C133.307 300.836 133.307 300.864 133.307 300.893C133.221 301.18 133.135 301.438 133.078 301.696C133.049 301.724 133.049 301.753 133.049 301.753C132.963 302.04 132.877 302.326 132.791 302.613C132.677 302.9 132.591 303.158 132.476 303.444C132.361 303.731 132.275 304.018 132.161 304.275C132.046 304.562 131.931 304.82 131.817 305.107H131.788C131.673 305.365 131.559 305.651 131.415 305.909C131.387 305.995 131.358 306.053 131.329 306.11C131.301 306.139 131.301 306.167 131.272 306.196C129.409 309.951 126.657 313.248 123.217 315.828C122.988 315.971 122.758 316.143 122.529 316.315C122.472 316.372 122.386 316.401 122.328 316.458C122.128 316.602 121.927 316.745 121.698 316.888L121.784 317.06H121.812C122.214 317.003 122.615 316.946 123.016 316.888H123.045C123.79 316.774 124.536 316.631 125.281 316.487C125.482 316.458 125.711 316.401 125.912 316.344C126.055 316.315 126.17 316.287 126.313 316.258C126.514 316.229 126.714 316.172 126.915 316.143C127.087 316.086 127.259 316.057 127.431 316C130.297 315.312 133.078 314.366 135.744 313.248C131.186 319.468 125.08 324.485 117.942 327.781C121.239 327.552 124.536 327.008 127.718 326.09C139.27 322.679 148.988 314.91 154.807 304.447C153.632 311.069 150.994 317.376 147.096 322.88C149.876 321.045 152.428 318.924 154.749 316.516C161.171 309.808 165.385 301.294 166.818 292.15C167.792 296.679 168.079 301.352 167.649 305.967C188.346 277.1 169.369 247.173 161.429 239.29C161.4 239.233 161.371 239.204 161.371 239.146C161.343 239.175 161.343 239.175 161.343 239.204C161.343 239.175 161.343 239.175 161.314 239.146C161.314 239.49 161.285 239.834 161.257 240.178C161.171 240.838 161.085 241.468 160.97 242.099C160.827 242.73 160.655 243.36 160.483 243.991C160.282 244.593 160.053 245.224 159.795 245.826C159.537 246.399 159.25 247.001 158.935 247.574C158.619 248.119 158.275 248.692 157.903 249.208C157.53 249.753 157.129 250.269 156.727 250.756C156.297 251.272 155.839 251.731 155.38 252.189C155.093 252.447 154.835 252.677 154.549 252.906C154.319 253.107 154.119 253.279 153.889 253.479C153.373 253.881 152.858 254.253 152.284 254.597C151.74 254.941 151.166 255.285 150.593 255.572C149.991 255.859 149.389 256.117 148.787 256.375C148.185 256.604 147.554 256.805 146.924 256.977C146.293 257.149 145.634 257.292 145.003 257.407C144.344 257.521 143.684 257.579 143.054 257.636C142.595 257.665 142.136 257.693 141.678 257.693C141.018 257.693 140.359 257.636 139.729 257.579C139.069 257.521 138.41 257.435 137.779 257.292C137.12 257.177 136.489 257.005 135.859 256.805H135.83C136.461 256.747 137.091 256.69 137.722 256.575C138.381 256.461 139.012 256.317 139.642 256.145C140.273 255.973 140.904 255.773 141.506 255.543C142.136 255.314 142.738 255.027 143.312 254.741C143.914 254.454 144.458 254.139 145.032 253.795C145.576 253.422 146.121 253.049 146.637 252.648C147.153 252.247 147.64 251.817 148.099 251.358C148.586 250.928 149.016 250.441 149.446 249.953C149.876 249.437 150.278 248.921 150.65 248.405C150.707 248.319 150.765 248.205 150.822 248.119C151.109 247.66 151.395 247.202 151.653 246.743C151.969 246.17 152.255 245.596 152.513 244.994C152.771 244.392 153.001 243.79 153.201 243.16C153.402 242.558 153.545 241.927 153.689 241.296C153.803 240.637 153.918 240.006 153.975 239.376C154.033 238.716 154.09 238.057 154.09 237.426C154.09 236.968 154.061 236.509 154.033 236.05C153.976 235.391 153.89 234.76 153.804 234.13C153.689 233.471 153.546 232.84 153.374 232.209C153.173 231.607 152.972 230.977 152.743 230.375C152.514 229.773 152.227 229.171 151.94 228.597C151.625 228.024 151.31 227.451 150.966 226.906C150.593 226.361 150.22 225.845 149.819 225.329C149.389 224.842 148.959 224.355 148.5 223.867C148.271 223.638 148.013 223.38 147.755 223.151C146.465 222.147 145.118 221.202 143.77 220.342C143.57 220.227 143.398 220.141 143.197 220.055C142.251 219.453 141.363 219.138 140.474 218.851L140.474 218.851Z"
            fill="#E0234E"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;