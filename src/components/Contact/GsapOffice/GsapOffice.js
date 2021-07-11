import { gsap } from 'gsap';
import { useEffect } from 'react';


export default function GsapOffice() {

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.inOut"
    });

    tl.set("#notebook", {
      transformOrigin: '50% 100%',
      opacity: 1,
      scaleY: 0
    })
      .set("#fog", {
        transformOrigin: '50% 100%',
        scale: 1
      })
      .set('#person', {
        scale: 0,
        opacity: 1,
        transformOrigin: '50% 100%'
      })


    tl.to(['#desk', '#ornament'], {
      duration: 1,
      opacity: 1
    })
      .to('#person', {
        duration: 2.5,
        scale: 1
      })
      .to(["#mug", "#fog"], {
        duration: 1,
        opacity: 1
      })
      .to("#notebook", {
        duration: 1,
        scaleY: 1
      })
      .to("#fog", {
        duration: 1.5,
        scale: 1.15,
        yoyo: true,
        repeat: -1
      })

  }, [])


  return (
    <>
      <svg style={{ width: '80%', height: 'auto' }} viewBox="0 0 1946 1314" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1">
          <g id="ornament">
            <path id="Vector"
              d="M292.137 1066.68C278.145 1119.44 229.118 1152.4 229.118 1152.4C229.118 1152.4 202.775 1099.84 216.766 1047.09C230.758 994.332 279.785 961.365 279.785 961.365C279.785 961.365 306.128 1013.93 292.137 1066.68Z"
              fill="#3F3D56" />
            <path id="Vector_2"
              d="M270.915 1055.52C231.727 1093.86 227.342 1152.37 227.342 1152.37C227.342 1152.37 286.494 1148.74 325.682 1110.41C364.87 1072.07 369.254 1013.56 369.254 1013.56C369.254 1013.56 310.102 1017.19 270.915 1055.52Z"
              fill="#6C63FF" />
            <path id="Vector_3"
              d="M320.057 1136.96H166.769C149.956 1136.96 136.325 1150.45 136.325 1167.1V1197.05C136.325 1213.7 149.956 1227.19 166.769 1227.19H320.057C336.871 1227.19 350.501 1213.7 350.501 1197.05V1167.1C350.501 1150.45 336.871 1136.96 320.057 1136.96Z"
              fill="#6C63FF" />
          </g>
          <g id="person">
            <g id="Group" opacity="0.7">
              <path id="Vector_4" opacity="0.7"
                d="M1353.62 977.414C1327.61 883.962 1180.19 815.721 1069.27 800.589C1069.29 799.9 1069.32 799.216 1069.32 798.523V718.527C1069.44 718.484 1069.56 718.448 1069.68 718.405V715.373C1109.05 700.878 1144.57 677.711 1173.56 647.624C1202.56 617.537 1224.26 581.318 1237.04 541.704C1243.9 529.431 1249.86 516.693 1254.9 503.584C1266.74 499.315 1275.68 479.982 1275.68 456.752C1275.73 448.806 1274.6 440.896 1272.34 433.271C1273.8 421.44 1274.54 409.534 1274.56 397.616C1274.61 355.952 1265.81 314.744 1248.73 276.666C1231.64 238.588 1206.67 204.492 1175.42 176.59C1176.35 171.804 1176.66 166.921 1176.36 162.057C1173.85 123.661 1132.43 97.5763 1093.61 95.8316C1103.86 84.3137 1110.6 70.1505 1113.05 54.9887C1115.49 39.8269 1113.54 24.2892 1107.42 10.182C1082.67 45.8876 1031.85 49.6831 988.109 49.9639C1006.98 42.7272 1015.48 16.8353 1004.5 0.00012207C958.784 60.6677 869.669 71.9017 815.296 125.109C803.451 136.747 793.523 150.153 785.876 164.838C750.54 192.71 722.011 228.116 702.414 268.419C682.816 308.723 672.656 352.885 672.689 397.616C672.714 409.426 673.441 421.224 674.868 432.95C672.537 440.672 671.375 448.693 671.421 456.752C671.421 480.089 680.448 499.481 692.37 503.631C697.425 516.785 703.42 529.566 710.309 541.877C723.042 581.261 744.604 617.285 773.383 647.254C802.162 677.223 837.413 700.361 876.498 714.937V798.523C876.498 799.166 876.534 799.801 876.547 800.442C765.204 815.313 616.607 884.092 590.834 978.296C568.578 1059.65 544.821 1148.99 533 1201.44C634.32 1271.93 846.922 1313.32 980.161 1313.32C1106.75 1313.32 1313.66 1275.97 1412 1211.78C1401.35 1154.14 1376.84 1060.88 1353.62 977.414Z"
                fill="url(#paint0_linear)" />
            </g>
            <path id="Vector_5"
              d="M979.89 1290.12C1102.01 1290.12 1301.61 1254.08 1396.47 1192.16C1386.19 1136.57 1362.55 1046.6 1340.15 966.08C1311.62 863.538 1131.54 792.449 1024.11 792.449H920.593C812.835 792.449 632.494 863.95 604.321 966.93C582.851 1045.41 559.933 1131.59 548.53 1182.19C646.27 1250.19 851.36 1290.12 979.89 1290.12Z"
              fill="#6C63FF" />
            <path id="Vector_6"
              d="M973.585 694.198C1133.91 694.198 1263.89 565.512 1263.89 406.769C1263.89 248.027 1133.91 119.34 973.585 119.34C813.256 119.34 683.283 248.027 683.283 406.769C683.283 565.512 813.256 694.198 973.585 694.198Z"
              fill="black" />
            <path id="Vector_7" opacity="0.1"
              d="M879.89 646.173H1065.9V793.51C1065.9 817.933 1056.1 841.355 1038.66 858.624C1021.22 875.894 997.563 885.596 972.897 885.596H972.897C948.23 885.596 924.573 875.894 907.131 858.624C889.689 841.355 879.89 817.933 879.89 793.51V646.173H879.89Z"
              fill="black" />
            <path id="Vector_8"
              d="M906.571 639.352H1039.22C1046.3 639.352 1053.08 642.135 1058.09 647.089C1063.09 652.043 1065.9 658.762 1065.9 665.769V786.689C1065.9 811.112 1056.1 834.534 1038.66 851.803C1021.22 869.073 997.563 878.775 972.897 878.775H972.897C948.23 878.775 924.573 869.073 907.131 851.803C889.689 834.534 879.89 811.112 879.89 786.689V665.769C879.89 658.762 882.701 652.043 887.705 647.089C892.709 642.135 899.495 639.352 906.571 639.352V639.352Z"
              fill="#FDA57D" />
            <path id="Vector_9" opacity="0.1"
              d="M880.235 715.714C940.184 737.892 1006.17 738.073 1066.25 716.223V693.599H880.235V715.714Z" fill="black" />
            <path id="Vector_10"
              d="M973.585 728.046C1120.83 728.046 1240.2 609.859 1240.2 464.067C1240.2 318.276 1120.83 200.088 973.585 200.088C826.336 200.088 706.967 318.276 706.967 464.067C706.967 609.859 826.336 728.046 973.585 728.046Z"
              fill="#FDA57D" />
            <path id="Vector_11" opacity="0.1"
              d="M783.673 223.95C783.673 223.95 896.037 449.773 1213 318.596L1139.21 204.024L1008.4 157.531L783.673 223.95Z"
              fill="black" />
            <path id="Vector_12"
              d="M783.673 220.629C783.673 220.629 896.036 446.452 1213 315.275L1139.21 200.703L1008.4 154.21L783.673 220.629Z"
              fill="black" />
            <path id="Vector_13"
              d="M782.675 205.372C790.249 182.15 803.341 161.066 820.851 143.892C873.303 92.565 959.269 81.7281 1003.37 23.2041C1013.96 39.4445 1005.76 64.4215 987.557 71.4023C1029.75 71.1314 1078.77 67.4702 1102.65 33.0262C1108.56 46.6349 1110.44 61.6236 1108.08 76.2497C1105.72 90.8758 1099.22 104.538 1089.33 115.649C1126.77 117.332 1166.73 142.496 1169.15 179.534C1170.76 204.21 1155.14 227.573 1134.66 241.724C1114.18 255.875 1089.4 262.371 1065.01 267.695C993.819 283.236 736.22 348.375 782.675 205.372Z"
              fill="black" />
            <path id="Vector_14"
              d="M706.861 509.859C720.559 509.859 731.663 489.245 731.663 463.816C731.663 438.387 720.559 417.773 706.861 417.773C693.164 417.773 682.06 438.387 682.06 463.816C682.06 489.245 693.164 509.859 706.861 509.859Z"
              fill="#FDA57D" />
            <path id="Vector_15"
              d="M1240.17 509.859C1253.87 509.859 1264.97 489.245 1264.97 463.816C1264.97 438.387 1253.87 417.773 1240.17 417.773C1226.47 417.773 1215.37 438.387 1215.37 463.816C1215.37 489.245 1226.47 509.859 1240.17 509.859Z"
              fill="#FDA57D" />
          </g>
          <g id="notebook">
            <g id="Group_2" opacity="0.7">
              <path id="Vector_16" opacity="0.7"
                d="M1357.74 749.132H588.259C572.217 749.132 559.213 762.008 559.213 777.892V1192.21C559.213 1208.09 572.217 1220.97 588.259 1220.97H1357.74C1373.78 1220.97 1386.79 1208.09 1386.79 1192.21V777.892C1386.79 762.008 1373.78 749.132 1357.74 749.132Z"
                fill="url(#paint1_linear)" />
            </g>
            <path id="Vector_17"
              d="M1318.04 757.838H627.961C598.272 757.838 574.205 781.667 574.205 811.062V1167.74C574.205 1197.14 598.272 1220.97 627.961 1220.97H1318.04C1347.73 1220.97 1371.8 1197.14 1371.8 1167.74V811.062C1371.8 781.667 1347.73 757.838 1318.04 757.838Z"
              fill="#535461" />
            <path id="Vector_18"
              d="M973 1016.12C987.904 1016.12 999.986 1004.16 999.986 989.403C999.986 974.646 987.904 962.684 973 962.684C958.096 962.684 946.014 974.646 946.014 989.403C946.014 1004.16 958.096 1016.12 973 1016.12Z"
              fill="white" />
          </g>
          <g id="desk">
            <path id="Vector_19" d="M1946 1220.97H0V1286.28H1946V1220.97Z" fill="#E0E0E0" />
            <path id="Vector_20" d="M1863.54 1286.28H82.4576V1313H1863.54V1286.28Z" fill="#E0E0E0" />
            <path id="Vector_21" opacity="0.1" d="M1863.54 1286.28H82.4576V1295.19H1863.54V1286.28Z" fill="black" />
          </g>
          <g id="mug">
            <g id="Group_3" opacity="0.7">
              <path id="Vector_22" opacity="0.7"
                d="M1793.86 1079.31V1046.8H1629.66V1197.18C1629.66 1201.35 1630.49 1205.47 1632.1 1209.31C1633.71 1213.16 1636.07 1216.66 1639.04 1219.6C1642.01 1222.54 1645.54 1224.88 1649.43 1226.47C1653.31 1228.06 1657.48 1228.88 1661.68 1228.88H1761.84C1770.34 1228.88 1778.48 1225.54 1784.49 1219.6C1790.49 1213.65 1793.86 1205.59 1793.86 1197.18V1163.85C1805.17 1163.83 1816.01 1159.37 1824 1151.44C1831.99 1143.52 1836.47 1132.78 1836.47 1121.58C1836.47 1110.39 1831.99 1099.65 1824 1091.72C1816.01 1083.8 1805.17 1079.34 1793.86 1079.31V1079.31ZM1793.86 1147.6V1095.57C1800.83 1095.57 1807.51 1098.31 1812.44 1103.19C1817.37 1108.07 1820.14 1114.69 1820.14 1121.58C1820.14 1128.48 1817.37 1135.1 1812.44 1139.98C1807.51 1144.86 1800.83 1147.6 1793.86 1147.6V1147.6Z"
                fill="url(#paint2_linear)" />
            </g>
            <path id="Vector_23"
              d="M1788.58 1084.4C1780.87 1084.4 1773.33 1086.67 1766.92 1090.91C1760.51 1095.15 1755.52 1101.18 1752.57 1108.23C1749.62 1115.28 1748.85 1123.04 1750.35 1130.53C1751.85 1138.01 1755.57 1144.89 1761.02 1150.29C1766.47 1155.69 1773.41 1159.36 1780.98 1160.85C1788.54 1162.34 1796.38 1161.58 1803.5 1158.65C1810.62 1155.73 1816.71 1150.79 1820.99 1144.44C1825.27 1138.09 1827.56 1130.63 1827.56 1123C1827.56 1112.76 1823.45 1102.95 1816.14 1095.71C1808.83 1088.47 1798.92 1084.4 1788.58 1084.4ZM1788.58 1146.75C1783.84 1146.75 1779.2 1145.36 1775.25 1142.75C1771.31 1140.14 1768.23 1136.43 1766.42 1132.09C1764.6 1127.75 1764.13 1122.97 1765.05 1118.36C1765.98 1113.76 1768.26 1109.53 1771.62 1106.2C1774.97 1102.88 1779.25 1100.62 1783.9 1099.7C1788.55 1098.79 1793.38 1099.26 1797.76 1101.06C1802.14 1102.85 1805.89 1105.9 1808.53 1109.8C1811.16 1113.71 1812.57 1118.3 1812.57 1123C1812.57 1129.3 1810.04 1135.34 1805.54 1139.79C1801.04 1144.25 1794.94 1146.75 1788.58 1146.75V1146.75Z"
              fill="#6C63FF" />
            <path id="Vector_24" opacity="0.1"
              d="M1788.58 1084.4C1780.87 1084.4 1773.33 1086.67 1766.92 1090.91C1760.51 1095.15 1755.52 1101.18 1752.57 1108.23C1749.62 1115.28 1748.85 1123.04 1750.35 1130.53C1751.85 1138.01 1755.57 1144.89 1761.02 1150.29C1766.47 1155.69 1773.41 1159.36 1780.98 1160.85C1788.54 1162.34 1796.38 1161.58 1803.5 1158.65C1810.62 1155.73 1816.71 1150.79 1820.99 1144.44C1825.27 1138.09 1827.56 1130.63 1827.56 1123C1827.56 1112.76 1823.45 1102.95 1816.14 1095.71C1808.83 1088.47 1798.92 1084.4 1788.58 1084.4ZM1788.58 1146.75C1783.84 1146.75 1779.2 1145.36 1775.25 1142.75C1771.31 1140.14 1768.23 1136.43 1766.42 1132.09C1764.6 1127.75 1764.13 1122.97 1765.05 1118.36C1765.98 1113.76 1768.26 1109.53 1771.62 1106.2C1774.97 1102.88 1779.25 1100.62 1783.9 1099.7C1788.55 1098.79 1793.38 1099.26 1797.76 1101.06C1802.14 1102.85 1805.89 1105.9 1808.53 1109.8C1811.16 1113.71 1812.57 1118.3 1812.57 1123C1812.57 1129.3 1810.04 1135.34 1805.54 1139.79C1801.04 1144.25 1794.94 1146.75 1788.58 1146.75V1146.75Z"
              fill="black" />
            <path id="Vector_25"
              d="M1638.66 1054.72H1788.58V1201.63C1788.58 1206.76 1786.52 1211.68 1782.86 1215.3C1779.2 1218.93 1774.23 1220.97 1769.05 1220.97H1658.19C1653.01 1220.97 1648.04 1218.93 1644.38 1215.3C1640.72 1211.68 1638.66 1206.76 1638.66 1201.63V1054.72Z"
              fill="#6C63FF" />
            <path id="Vector_26" opacity="0.1"
              d="M1761.59 1054.72V1192.02C1761.59 1199.7 1758.51 1207.06 1753.03 1212.49C1747.55 1217.92 1740.11 1220.97 1732.36 1220.97H1747.35C1755.11 1220.97 1762.54 1217.92 1768.02 1212.49C1773.51 1207.06 1776.59 1199.7 1776.59 1192.02V1054.72H1761.59Z"
              fill="black" />
          </g>
          <path id="fog"
            d="M1668.24 944.05C1665.71 944.478 1662.86 945.154 1661.62 947.378C1659.66 950.908 1663.22 954.888 1666.47 957.313C1672.48 961.794 1678.81 966.196 1682.9 972.45C1686.98 978.704 1688.26 987.432 1683.8 993.426C1677.97 1001.25 1664.06 1002.94 1662.72 1012.57C1661.85 1018.75 1667.25 1024.03 1672.72 1027.13C1686.23 1034.79 1703.64 1036.84 1713.42 1048.82C1717.47 1040.58 1726.52 1035.82 1735.54 1033.79C1744.56 1031.75 1753.93 1031.9 1763.08 1030.52C1766.03 1030.08 1769.36 1029.19 1770.68 1026.53C1773.24 1021.4 1765.95 1015.23 1768.46 1010.08C1770.38 1006.15 1776 1006.45 1780.11 1004.88C1786.8 1002.32 1789.55 993.801 1787.66 986.956C1785.76 980.111 1780.4 974.762 1774.76 970.376C1759.57 958.556 1741.3 951.605 1722.82 946.605C1714.23 944.279 1704.14 940.633 1695.22 940.28C1686.6 939.94 1676.77 942.605 1668.24 944.05Z"
            fill="#EEEEEE" />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="528506" y1="853797" x2="528506" y2="156285" gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" stopOpacity="0.25" />
            <stop offset="0.53514" stopColor="#808080" stopOpacity="0.12" />
            <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="402529" y1="291210" x2="402529" y2="178963" gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" stopOpacity="0.25" />
            <stop offset="0.53514" stopColor="#808080" stopOpacity="0.12" />
            <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="paint2_linear" x1="1733.11" y1="1228.88" x2="1733.11" y2="1046.8"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" stopOpacity="0.25" />
            <stop offset="0.53514" stopColor="#808080" stopOpacity="0.12" />
            <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}