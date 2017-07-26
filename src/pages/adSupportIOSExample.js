const React = require('react');
const {
  AdSupportIOS,
  Text,
  View
} = require('react-native');
const PageContent = require('../components/pageContent');

class AdSupportIOSExample extends React.Component {
  constructor() {
    super();
    this.state = {
        deviceID: 'No IDFA yet',
        hasAdvertiserTracking: 'unset',
    };
    this._getAdvertisingIdSuccess = this._getAdvertisingIdSuccess.bind(this);
    this._getAdvertisingIdFailure = this._getAdvertisingIdFailure.bind(this);
    this._getAdvertisingTrackingEnabledSuccess = this._getAdvertisingTrackingEnabledSuccess.bind(this);
    this._getAdvertisingTrackingEnabledFailure = this._getAdvertisingTrackingEnabledFailure.bind(this);
  }

  componentDidMount() {
    AdSupportIOS.getAdvertisingId(this._getAdvertisingIdSuccess,
                                  this._getAdvertisingIdFailure);
    AdSupportIOS.getAdvertisingTrackingEnabled(this._getAdvertisingTrackingEnabledSuccess,
                                               this._getAdvertisingTrackingEnabledFailure);
  }

  _getAdvertisingIdSuccess(deviceID) {
    this.setState({deviceID});
  }

  _getAdvertisingIdFailure(e) {
    this.setState({deviceID: 'Get Device ID failure'});
  }

  _getAdvertisingTrackingEnabledSuccess(hasTracking) {
    this.setState({hasAdvertiserTracking: hasTracking});
  }

  _getAdvertisingTrackingEnabledFailure(e) {
    this.setState({hasAdvertiserTracking: 'Tracking advertiser failure'})
  }


  render() {
    return (
      <PageContent pageTitle='AdSupportIOS'
                   pageDescription='API to access the "advertising identifier" on iOS.'>

        <View>
          <Text>Advertising ID: <Text>{this.state.deviceID}</Text></Text>
          <Text>Has Advertiser Tracking: <Text>{this.state.hasAdvertiserTracking}</Text></Text>
        </View>
      </PageContent>
    );
  }
}

module.exports = AdSupportIOSExample;
