import { colors } from '@amaui/style-react';
import AmauiSubscrption from '@amaui/subscription';

export const libraries = [
  { name: 'UI React', url: '/amaui-ui-react' },
  { name: 'Style React', url: '/amaui-style-react' },
  { name: 'Icons Material React', url: '/icons-material-react' },
  { name: 'AMQP', url: '/amaui-amqp' },
  { name: 'API', url: '/amaui-api' },
  { name: 'AWS', url: '/amaui-aws' },
  { name: 'Binary Tree', url: '/amaui-binary-tree' },
  { name: 'Cache', url: '/amaui-cache' },
  { name: 'Cookie', url: '/amaui-cookie' },
  { name: 'Date', url: '/amaui-date' },
  { name: 'Diff', url: '/amaui-diff' },
  { name: 'Errors', url: '/amaui-errors' },
  { name: 'Heap', url: '/amaui-heap' },
  { name: 'Huffman Code', url: '/amaui-huffman-code' },
  { name: 'Log', url: '/amaui-log' },
  { name: 'Lz77', url: '/amaui-lz77' },
  { name: 'Meta', url: '/amaui-meta' },
  { name: 'Models', url: '/amaui-models' },
  { name: 'Mongo', url: '/amaui-mongo' },
  { name: 'Node', url: '/amaui-node' },
  { name: 'Request', url: '/amaui-request' },
  { name: 'Storage', url: '/amaui-storage' },
  { name: 'Style', url: '/amaui-style' },
  { name: 'Subscription', url: '/amaui-subscription' },
  { name: 'Test', url: '/amaui-test' },
  { name: 'Utils', url: '/amaui-utils' },
  { name: 'Zip', url: '/amaui-zip' }
];

export const images = [
  { version: 'primary', color: colors.yellow[500], label: 'Default theme', image: '/assets/image/image-yellow.jpg', alt: 'Photo by Felix Mittermeier' },
  { version: 'image-green', label: 'Green leaves image to theme', image: '/assets/image/image-green.jpg', alt: 'Photo by Chris Lee on Unsplash' },
  { version: 'image-orange', label: 'Oranges image to theme', image: '/assets/image/image-orange.jpg', alt: 'Photo by Karolina Grabowska' },
  { version: 'image-pink', label: 'Pink Shiba Inu image to theme', image: '/assets/image/image-pink.jpg', alt: 'Photo by Anna Shvets' }
];

export const themeImageSub = new AmauiSubscrption('primary');
