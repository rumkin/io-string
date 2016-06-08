# I/O String

I/O String is useful for capturing and logging asynchronous spawned process
output. It allows to store raw chunk and channel descriptor.

```
var chunk = Buffer.from('Hello');
var str = new IOString(chunk, 0);
console.log('%s', str); // => "Hello"
```

## Installation

Via NPM:

```shell
npm i io-string
```

## License

Licensed under MIT license.
