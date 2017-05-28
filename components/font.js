import { css } from 'styled-components';

const font = css`
@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/roboto-v16-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
      url('../assets/fonts/roboto-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('../assets/fonts/roboto-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
      url('../assets/fonts/roboto-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
      url('../assets/fonts/roboto-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
      url('../assets/fonts/roboto-v16-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }`;
export default font;
