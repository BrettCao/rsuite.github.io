# Popover

When the mouse clicks/moves in, the pop-up pop-up box is used to display more content.

- `<Popover>` Pop-up box.
- `<Whisper>` Monitor triggers, wrap the outside of the listener object, and notify the `Tooltip` when the event is triggered.

## Usage

```js
import { Popover, Whisper } from "rsuite";
```

## Examples

<!--{demo}-->

## Props

### `<Popover>`

| Property    | Type `(Default)`     | Description                            |
| ----------- | -------------------- | -------------------------------------- |
| children \* | React.Node           | The content of the component.          |
| classPrefix | string `('popover')` | The prefix of the component CSS class. |
| title       | React.Node           | The title of the component.            |

### `<Whisper>`

| Property   | Type `(Default)`                                                 | Description                         |
| ---------- | ---------------------------------------------------------------- | ----------------------------------- |
| container  | HTMLElement or (() => HTMLElement)                               | Sets the rendering container        |
| delay      | number                                                           | Delay Time                          |
| delayHide  | number                                                           | Hidden delay Time                   |
| delayShow  | number                                                           | Show Delay Time                     |
| onBlur     | () => void                                                       | Lose Focus callback function        |
| onClick    | () => void                                                       | Click on the callback function      |
| onClose    | ()=>void                                                         | Callback fired when close component |
| onFocus    | () => void                                                       | Callback function to get focus      |
| onMouseOut | () => void                                                       | Mouse leave callback function       |
| onOpen     | ()=>void                                                         | Callback fired when open component  |
| placement  | enum: [Placement](#Placement) `('top')`                          | Dispaly placement                   |
| speaker \* | union: Tooltip, Popover                                          | Displayed component                 |
| trigger    | union: 'click', 'hover', 'focus', 'active' `(['hover','focus'])` | Triggering events                   |
| triggerRef | React.ElementRef                                                 | Ref of trigger                      |

## Types

### Placement

```js
type Placement =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight"
  | "leftTop"
  | "rightTop"
  | "leftBottom"
  | "rightBottom"
  | "auto"
  | "autoVertical"
  | "autoVerticalLeft"
  | "autoVerticalRight"
  | "autoHorizontal"
  | "autoHorizontalTop"
  | "autoHorizontalBottom";
```

## Related components

- [`<Popover>`](./popover)
- [`<Message>`](./message)
- [`<Alert`>](./alert)
- [`<Notification>`](./notification)
