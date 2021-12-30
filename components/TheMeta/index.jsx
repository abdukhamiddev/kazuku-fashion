import OpenGraph from './OpenGraph';

import Icons from './Icons';

const TheMeta = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <meta httpEquiv="Content-language" content="en-US" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />

      <Icons />

      <meta name="theme-color" content="#000" />

      <meta name="author" content="GitHub: @abdukhamiddev" />
      <meta name="publisher" content="@abdukhamiddev" />
      <meta name="copyright" content={`${new Date().getFullYear()} Kazuku`} />

      <OpenGraph />
    </>
  );
};
export default TheMeta;