import Link from "next/link";

export const SocialIcons = ({ styleIcons }) => {
  // change shape of github icons into rectangular
  return (
    <div
      className={`max-w-40 sm:h-max xs:self-end gap-6 justify-between items-center mx-auto xs:mx-0 ${styleIcons}`}
    >
      <Link
        href="mailto:www.mtslabrh97@gmail.com"
        target="_blank"
        title="Email"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0H14.25C14.6642 0 15 0.348227 15 0.777778V13.2222C15 13.6518 14.6642 14 14.25 14H0.75C0.33579 14 0 13.6518 0 13.2222V0.777778C0 0.348227 0.33579 0 0.75 0ZM13.5 3.29616L7.55385 8.81844L1.5 3.27906V12.4444H13.5V3.29616ZM1.88359 1.55556L7.54643 6.73711L13.1257 1.55556H1.88359Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
      <Link
        href="https://www.linkedin.com/in/matusalab/"
        target="_blank"
        title="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          class="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      </Link>

      <Link
        href="https://github.com/matusalab-dev"
        target="_blank"
        title="Github"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3em"
          height="1.3em"
          viewBox="0 -2 24 24"
          fill="currentColor"
        >
          <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
        </svg>
      </Link>
      <Link href="http://twitter.com/matusalab" target="_blank" title="Twitter">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.77273 0H0L5.6324 7.71015L0.306784 13.9999H2.11362L6.4693 8.8557L10.2273 14H15L9.1307 5.96561L14.1819 0H12.3751L8.29384 4.82005L4.77273 0ZM10.9091 12.6L2.72727 1.4H4.09091L12.2727 12.6H10.9091Z"
            fill="currentColor"
          ></path>
        </svg>
      </Link>
    </div>
  );
};
