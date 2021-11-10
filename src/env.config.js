const {
  REACT_APP_REST_SERVER_URI,
  REACT_APP_PROMETHEUS_URI,
  REACT_APP_PYLON_URI,
  REACT_APP_JAVA_REST_SERVER_URI,
  REACT_APP_YARN_WEB_PORTAL_URI,
  REACT_APP_GRAFANA_URI,
  REACT_APP_K8S_DASHBOARD_URI,
  REACT_APP_EXPORTER_PORT,
  REACT_APP_PROM_SCRAPE_TIME,
  REACT_APP_WEBPORTAL_PLUGINS,
  REACT_APP_DATA_LABELING,
  REACT_APP_PRODUCT_NAME,
  REACT_APP_PRODUCT_VERSION,
  REACT_APP_COMPANY_NAME,
  REACT_APP_COPYRIGHT_YEAR
} = process.env;

const setting = {
  restServerUri: REACT_APP_REST_SERVER_URI,
  javaRestServerUri: REACT_APP_JAVA_REST_SERVER_URI,
  pylonUri: REACT_APP_PYLON_URI,
  prometheusUri: `${REACT_APP_PROMETHEUS_URI}/prometheus`,
  yarnWebPortalUri: REACT_APP_YARN_WEB_PORTAL_URI,
  grafanaUri: REACT_APP_GRAFANA_URI,
  k8sDashboardUri: REACT_APP_K8S_DASHBOARD_URI,
  exporterPort: REACT_APP_EXPORTER_PORT,
  promScrapeTime: REACT_APP_PROM_SCRAPE_TIME,
  dataLabelingUri: REACT_APP_DATA_LABELING,
  PAI_PLUGINS: [REACT_APP_WEBPORTAL_PLUGINS][0] || [],
  productName: REACT_APP_PRODUCT_NAME,
  productVersion: REACT_APP_PRODUCT_VERSION,
  companyName: REACT_APP_COMPANY_NAME,
  copyrightYear: REACT_APP_COPYRIGHT_YEAR
};

// eslint-disable-next-line
window.ENV = setting
