import "styles/index.css";
// import "react-medium-image-zoom/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
