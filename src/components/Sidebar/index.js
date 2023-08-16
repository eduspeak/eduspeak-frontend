// import modelUtama from "../assets/gambar/model-utama.png";

// import iconEndrolled from "../../assets/gambar/enrolled.png";
// import iconActive from "../../assets/gambar/active.png";
// import iconComplated from "../../assets/gambar/complated.png";
// import dumyCourses from "../../assets/gambar/dumy_courses.png";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="">
              <Link to="/dashboard/user">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_85_6782)">
                      <path
                        d="M15.8888 6.38926V16.167M10.9999 10.0559V16.167M6.11106 13.7226V16.167M3.66661 21.0559H18.3333C18.9816 21.0559 19.6033 20.7984 20.0618 20.34C20.5202 19.8815 20.7777 19.2598 20.7777 18.6115V3.94481C20.7777 3.2965 20.5202 2.67475 20.0618 2.21633C19.6033 1.75791 18.9816 1.50037 18.3333 1.50037H3.66661C3.01831 1.50037 2.39655 1.75791 1.93813 2.21633C1.47971 2.67475 1.22217 3.2965 1.22217 3.94481V18.6115C1.22217 19.2598 1.47971 19.8815 1.93813 20.34C2.39655 20.7984 3.01831 21.0559 3.66661 21.0559Z"
                        stroke="#282938"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_85_6782">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0 0.278198)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <a
                href="/dashboard/enrolled"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_85_6786)">
                    <path
                      d="M14.3001 1.50037L7.7001 5.16703M7.7001 21.0559L1.7084 17.7266C1.52571 17.6252 1.37204 17.4692 1.26461 17.2762C1.15717 17.0832 1.10021 16.8608 1.1001 16.6339V3.47792C1.1002 3.26967 1.14819 3.06489 1.23952 2.88303C1.33084 2.70117 1.46248 2.54826 1.62193 2.4388C1.78138 2.32933 1.96336 2.26696 2.1506 2.25759C2.33784 2.24822 2.52413 2.29216 2.6918 2.38526L7.7001 5.16703V21.0559ZM7.7001 21.0559L14.3001 17.3893L7.7001 21.0559ZM7.7001 21.0559V5.16703V21.0559ZM14.3001 17.3893L19.3084 20.171C19.4761 20.2641 19.6623 20.3081 19.8496 20.2987C20.0368 20.2893 20.2188 20.227 20.3783 20.1175C20.5377 20.008 20.6694 19.8551 20.7607 19.6733C20.852 19.4914 20.9 19.2866 20.9001 19.0784V5.92237C20.9 5.69545 20.843 5.47304 20.7356 5.28006C20.6282 5.08707 20.4745 4.93113 20.2918 4.8297L14.3001 1.50037V17.3893ZM14.3001 17.3893V1.50037V17.3893Z"
                      stroke="#9197B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_6786">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.278198)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-3">Endrolled Courses</span>
              </a>
            </li>
            <li>
              <Link to="/dashboard/review">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_85_6790)">
                      <path
                        d="M18.7001 21.0559H3.3001C2.71662 21.0559 2.15704 20.7984 1.74446 20.34C1.33188 19.8815 1.1001 19.2598 1.1001 18.6115V3.94481C1.1001 3.2965 1.33188 2.67475 1.74446 2.21633C2.15704 1.75791 2.71662 1.50037 3.3001 1.50037H14.3001C14.8836 1.50037 15.4432 1.75791 15.8557 2.21633C16.2683 2.67475 16.5001 3.2965 16.5001 3.94481V5.16703L18.7001 21.0559ZM18.7001 21.0559C18.1166 21.0559 17.557 20.7984 17.1445 20.34C16.7319 19.8815 16.5001 19.2598 16.5001 18.6115V5.16703L18.7001 21.0559ZM18.7001 21.0559C19.2836 21.0559 19.8432 20.7984 20.2557 20.34C20.6683 19.8815 20.9001 19.2598 20.9001 18.6115V7.61148C20.9001 6.96317 20.6683 6.34142 20.2557 5.88299C19.8432 5.42457 19.2836 5.16703 18.7001 5.16703H16.5001L18.7001 21.0559ZM12.1001 1.50037H7.7001H12.1001ZM5.5001 16.167H12.1001H5.5001ZM5.5001 6.38925H12.1001V11.2781H5.5001V6.38925Z"
                        stroke="#9197B3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_85_6790">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0 0.278198)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-3">Review</span>
                </div>
              </Link>
            </li>
            <li>
              <a
                href="/dashboard/history"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_85_6794)">
                    <path
                      d="M9.1576 2.82687C9.6262 0.895274 12.374 0.895274 12.8426 2.82687C12.9129 3.11705 13.0507 3.38653 13.2449 3.61337C13.439 3.84022 13.684 4.01801 13.9598 4.13229C14.2357 4.24658 14.5346 4.29411 14.8323 4.27103C15.1299 4.24795 15.418 4.15491 15.6729 3.99947C17.3702 2.96547 19.3139 4.90807 18.2799 6.60647C18.1247 6.86129 18.0318 7.14914 18.0088 7.44662C17.9857 7.7441 18.0332 8.04282 18.1474 8.31849C18.2615 8.59416 18.4391 8.83901 18.6657 9.03313C18.8923 9.22725 19.1615 9.36517 19.4514 9.43567C21.383 9.90427 21.383 12.6521 19.4514 13.1207C19.1612 13.191 18.8917 13.3288 18.6649 13.523C18.4381 13.7171 18.2603 13.9621 18.146 14.2379C18.0317 14.5137 17.9842 14.8127 18.0072 15.1103C18.0303 15.408 18.1234 15.696 18.2788 15.951C19.3128 17.6483 17.3702 19.592 15.6718 18.558C15.417 18.4028 15.1291 18.3099 14.8316 18.2868C14.5342 18.2638 14.2355 18.3113 13.9598 18.4255C13.6841 18.5396 13.4393 18.7172 13.2451 18.9438C13.051 19.1704 12.9131 19.4396 12.8426 19.7295C12.374 21.6611 9.6262 21.6611 9.1576 19.7295C9.08729 19.4393 8.94945 19.1698 8.75532 18.943C8.56118 18.7161 8.31622 18.5383 8.04038 18.4241C7.76454 18.3098 7.46562 18.2622 7.16793 18.2853C6.87025 18.3084 6.58222 18.4014 6.3273 18.5569C4.63 19.5909 2.6863 17.6483 3.7203 15.9499C3.87551 15.6951 3.9684 15.4072 3.99143 15.1097C4.01446 14.8122 3.96696 14.5135 3.85282 14.2379C3.73867 13.9622 3.56108 13.7173 3.3345 13.5232C3.10791 13.3291 2.83872 13.1912 2.5488 13.1207C0.617198 12.6521 0.617198 9.90427 2.5488 9.43567C2.83898 9.36536 3.10845 9.22753 3.3353 9.03339C3.56214 8.83925 3.73994 8.5943 3.85422 8.31846C3.9685 8.04262 4.01603 7.74369 3.99295 7.44601C3.96987 7.14833 3.87683 6.8603 3.7214 6.60537C2.6874 4.90807 4.63 2.96437 6.3284 3.99837C7.424 4.66717 8.854 4.07537 9.1576 2.82687Z"
                      stroke="#9197B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.3 11.2781C14.3 12.1534 13.9523 12.9927 13.3334 13.6116C12.7145 14.2305 11.8752 14.5781 11 14.5781C10.1247 14.5781 9.28537 14.2305 8.6665 13.6116C8.04763 12.9927 7.69995 12.1534 7.69995 11.2781C7.69995 10.4029 8.04763 9.56357 8.6665 8.9447C9.28537 8.32583 10.1247 7.97815 11 7.97815C11.8752 7.97815 12.7145 8.32583 13.3334 8.9447C13.9523 9.56357 14.3 10.4029 14.3 11.2781V11.2781Z"
                      stroke="#9197B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_6794">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.278198)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-3">My Quiz Attempts</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/upgrade"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_85_6801)">
                    <path
                      d="M6.8509 7.97817C7.4548 6.69667 9.0839 5.77817 11.0001 5.77817C13.4311 5.77817 15.4001 7.25547 15.4001 9.07817C15.4001 10.6182 13.9943 11.9107 12.0935 12.2759C11.4973 12.3903 11.0111 13.6698 11.0111 14.2781M11.0001 16.7782H11.0111M20.9001 11.2782C20.9001 12.5783 20.644 13.8656 20.1465 15.0667C19.649 16.2679 18.9198 17.3592 18.0005 18.2785C17.0812 19.1978 15.9898 19.9271 14.7887 20.4246C13.5875 20.9221 12.3002 21.1782 11.0001 21.1782C9.70001 21.1782 8.41265 20.9221 7.21153 20.4246C6.01041 19.9271 4.91904 19.1978 3.99974 18.2785C3.08044 17.3592 2.35121 16.2679 1.85369 15.0667C1.35617 13.8656 1.1001 12.5783 1.1001 11.2782C1.1001 8.65253 2.14313 6.13443 3.99974 4.27782C5.85635 2.42121 8.37445 1.37817 11.0001 1.37817C13.6257 1.37817 16.1438 2.42121 18.0005 4.27782C19.8571 6.13443 20.9001 8.65253 20.9001 11.2782Z"
                      stroke="#9197B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_6801">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.278198)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ml-3">Upgrade to Membership</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
