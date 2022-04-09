import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
    --gray-100: #DDDDDD;
		--gray-200: #CCCCCC;
    --gray-400: #999999;
    --gray-500: #777777;
    --grat-600: #515151;
    --white: #FFF;
    --black: #000000;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%; // 15px
		}
	}

	@media (max-width: 753px) {
		html {
			font-size: 87.5%; //14px
		}
	}

	body {
		background-color: var(--gray-100);
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font: 400 1rem "Roboto", sans-serif;
    color: var(--black);
	}

	#root {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	button {
		cursor: pointer;
	}

  @media (max-width: 768px) {
    #root {
      padding: 0;
    }
  }
`;
