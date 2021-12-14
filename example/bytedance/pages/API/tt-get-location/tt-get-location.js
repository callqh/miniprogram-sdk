function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  let lonPrefix = 'E';
  let latPrefix = 'N';

  if (longitude > 0) {
    lonPrefix = 'E:';
  } else if (longitude == 0) {
    lonPrefix = '';
  } else {
    lonPrefix = 'W:';
    longitude = -longitude;
  }

  if (latitude > 0) {
    latPrefix = 'N:';
  } else if (latitude == 0) {
    latPrefix = '';
  } else {
    latitude = -latitude;
    latPrefix = 'S:';
  }

  longitude = longitude.toFixed(6).split('.');
  latitude = latitude.toFixed(6).split('.');
  return {
    longitude: `${lonPrefix} ${longitude[0]}°${longitude[1]}′`,
    latitude: `${latPrefix} ${latitude[0]}°${latitude[1]}′`
  };
}

Page({
  data: {
    hasLocation: false
  },
  getLocation: function (type) {
    var that = this;
    tt.getLocation({
      type,
      success: function (res) {
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        });
      }
    });
  },

  getLocation_wgs84() {
    this.getLocation('wgs84');
  },

  clear: function () {
    this.setData({
      hasLocation: false
    });
  }
});