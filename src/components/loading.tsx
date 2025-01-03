import styles from './LoadingData.module.css';

const LoadingData = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
};

export default LoadingData;
