# react-gallery-infinite-carousel

A React component for an infinite gallery with autoplay and thumbnails/dots.

## INSTALLATION

```bash
npm install react-infinite-gallery
```

## USAGE

```ruby

import React from 'react';
import Gallery from 'react-gallery-infinite-carousel';

const App = () => {
const images = [
'https://example.com/image1.jpg',
'https://example.com/image2.jpg',
'https://example.com/image3.jpg',
];

return (

<Gallery
    images={images}
    thumbnailsOrDot={true}
    autoplayInterval={3000}
    isAutoplay={true}
    thumbnailCount={3}
    showAutoplayButton={true}
    showPrevNextButton={true}
/>
);
};
```

export default App;

## PROPS

- `images` (array, required): An array of image URLs to display in the gallery.
- `thumbnailsOrDot` (boolean, optional): Whether to display thumbnails or dots for navigation. Default is `true`.
- `autoplayInterval` (number, optional): The interval in milliseconds between autoplay transitions. Default is 3000.
- `isAutoplay` (boolean, optional): Whether autoplay should be on by default. Default is `true`.
- `thumbnailCount` (number): number of image to show in the carousel of thumbnails. Default is 3.
- `showAutoplayButton` (boolean, optional): to show the play/stop button.
- `showPrevNextButton` (boolean, optional): to show the previous/next button.

## STYLES

The component comes with default styles. If you're using a bundler that supports CSS imports (like webpack or Create React App), the styles will be automatically included when you import the component.

If your setup doesn't support CSS imports, you can manually include the styles by copying the CSS from `node_modules/react-infinite-gallery/dist/index.css` to your project and importing it in your main CSS file or in the component where you're using the Gallery.

## LICENSE

MIT
