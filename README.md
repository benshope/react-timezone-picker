# React Timezone Picker

![gzip size](http://img.badgesize.io/https://unpkg.com/react-timezone-picker/dist/index.js?compression=gzip)
[![npm version](https://img.shields.io/npm/v/react-timezone-picker.svg)](https://www.npmjs.com/package/react-timezone-picker)
[![npm downloads](https://img.shields.io/npm/dm/react-timezone-picker.svg)](https://www.npmjs.com/package/react-timezone-picker)

This is a React component for selecting a timezone. The implementation is one file, it can be styled, and it has no dependencies.

## Install

-   **Npm:** `npm install react-timezone-picker`
-   **Yarn:** `yarn add react-timezone-picker`

## Use

```jsx
import React from 'react';
import TimezonePicker from 'react-timezone-picker';

const MyComponent() => {
        return (
            <TimezonePicker onChange={console.log} />
        )
    })
```

## Use With Options

```jsx
import React from 'react';
import TimezonePicker from 'react-timezone-picker';

const MyComponent() => {
        return (
            <TimezonePicker
                onChange={console.log}
                defaultValue={'America/New_York'}
                unselectLabel="No Timezone"
                style={{
                    borderRadius: '0.5rem',
                    background: 'teal',
                    color: 'white',
                }}
            />
        )
    })
```

## Options

Customize timezone picker by passing these, or any other props valid on the `<select />` element, to the component:

| Prop          | Description                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------- |
| onChange      | initial open state of the modal                                                                    |
| defaultValue  | the value the timezone picker is initially set to                                                  |
| value         | pass a value into the picker making it a controlled component                                      |
| unselectLabel | the label for selecting undefined (the undefined option does not appear without a label specified) |
| style         | styles for the <select> element                                                                    |

See the [examples](https://benshope.github.io/react-timezone-picker) and the [examples source code](https://github.com/benshope/react-timezone-picker/blob/master/stories.js) for more snippets to copy.

## Help

If there are any examples you'd like to see or use cases I didn't cover, please [file an issue](https://github.com/benshope/react-timezone-picker/issues/new).
