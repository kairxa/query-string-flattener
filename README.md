# query-string-flattener

Basically just flatten an object to GET query string.

Example:

```
{
  meme: '123',
  emem: '321',
}
```

will become
```
?meme=123&emem=321
```