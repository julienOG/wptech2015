FASTLY.setupPerfmap(
    {
      'domains': [
        {'type': 'ac', 'hostname': 'ac.fastly-analytics.com'},
        {'type': 'as', 'hostname': 'as.fastly-analytics.com'},
        {'type': 'dy', 'hostname': 'dy.fastly-analytics.com'}
      ],
      'pops': [
        { 'popId': 'lhr', 'hostname': 'lhr.pops.fastly-analytics.com' },
        { 'popId': 'lcy', 'hostname': 'lcy.pops.fastly-analytics.com' },
        { 'popId': 'fra', 'hostname': 'fra.pops.fastly-analytics.com' },
        { 'popId': 'ams', 'hostname': 'ams.pops.fastly-analytics.com' },
        { 'popId': 'bma', 'hostname': 'bma.pops.fastly-analytics.com' },
        { 'popId': 'jfk', 'hostname': 'jfk.pops.fastly-analytics.com' },
        { 'popId': 'hkg', 'hostname': 'hkg.pops.fastly-analytics.com' }
      ],
      'geo_ip': {
        'ci': 'Charenton-le-pont',
        'st': 'A8',
        'ct': 'France',
        'co': 'EU'
      }
    }
    );