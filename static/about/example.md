# Nested

Also supports nested markdown, e.g. to place complex markdown in a grid:

```json
{
  "key": "value"
}
```

:::grid{container direction="row" spacing="1"}

::grid[![browse](/static/about/browse.png) GoaT picture]{size=5}

::grid[![browse](/static/about/browse.png) :span[GoaT picture]{.caption}]{size=7}

::{size=3}

:::
