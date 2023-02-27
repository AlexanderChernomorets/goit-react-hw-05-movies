import { Bars } from 'react-loader-spinner';
function Loader() {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="rgba(148, 0, 211, 60%)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
