![Banner][]
# vidi-metrics-web

- __Lead Maintainer:__ [Kristina Matuleviciute][Lead]
- __Sponsor:__ [nearForm][Sponsor]


A web interface for capturing vidi metrics - where users can submit data in JSON file format.
This JSON object via UDP emitter goes to InfluxDB that will connect with Graphing instance
 which will graph data from JSON object.

- __Work in progress__ This module is currently a work in progress.

## Install
To install the app locally, simply clone the repo,

```
git clone https://github.com/vidi-insights/vidi-metrics-web
```

Next, install and build via npm,

```
npm install
```

## Running
To run the app :

1) You need to have webpack installed. If you have no run:   
```
npm install webpack -g
```
2) then to build app run:
```
npm run build
```

3) and to start server run:

```
npm run start
```

Which will start on port `3010`.

Also you can watch the files for changes and automatically rebuild the sources running this command in a different terminal window:
```
npm run watch
```

### Receiver
To run a dummy receiver, open a second console window and run :

```
npm run receiver
```
This will echo any metrics sent via the vidi-metrics-web.


## Contributing
The [nearForm][Org] encourages __open__ and __safe__ participation.

- [Code of Conduct][CoC]

If you feel you can help in any way, be it with documentation, examples, extra testing, or new
features please get in touch.

## License
Copyright (c) 2016, Kristina Matuleviciute and other contributors.
Licensed under [MIT][].



[Banner]: https://raw.githubusercontent.com/vidi-insights/org/master/assets/vidi-banner.png
[Lead]: https://github.com/KristinaMatuleviciute
[Sponsor]: http://www.nearform.com/
[Org]: https://github.com/nearform
[CoC]: ./CoC.md
[MIT]: ./LICENSE
