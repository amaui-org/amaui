import { colors } from '@amaui/style-react';
import AmauiSubscrption from '@amaui/subscription';

export const libraries = [
  { name: 'UI React', url: '/dev/ui-react', version: 'primary' },
  { name: 'Style React', url: '/dev/style-react', version: 'secondary' },
  { name: 'Icons Material React', url: '/dev/icons-material-react', version: 'secondary' },
  ...[
    { name: 'AMQP', url: '/dev/amqp' },
    { name: 'API', url: '/dev/api' },
    { name: 'AWS', url: '/dev/aws' },
    { name: 'Binary Tree', url: '/dev/binary-tree' },
    { name: 'Cache', url: '/dev/cache' },
    { name: 'Cookie', url: '/dev/cookie' },
    { name: 'Date', url: '/dev/date' },
    { name: 'Diff', url: '/dev/diff' },
    { name: 'Errors', url: '/dev/errors' },
    { name: 'Heap', url: '/dev/heap' },
    { name: 'Huffman Code', url: '/dev/huffman-code' },
    { name: 'Log', url: '/dev/log' },
    { name: 'Lz77', url: '/dev/lz77' },
    { name: 'Meta', url: '/dev/meta' },
    { name: 'Models', url: '/dev/models' },
    { name: 'Mongo', url: '/dev/mongo' },
    { name: 'Node', url: '/dev/node' },
    { name: 'Request', url: '/dev/request' },
    { name: 'Storage', url: '/dev/storage' },
    { name: 'Style', url: '/dev/style' },
    { name: 'Subscription', url: '/dev/subscription' },
    { name: 'Test', url: '/dev/test' },
    { name: 'Utils', url: '/dev/utils' },
    { name: 'Zip', url: '/dev/zip' },
    { name: 'Algorithms', url: '/dev/algorithms' },
    { name: 'Linked List', url: '/dev/linked-list' },
    { name: 'Queue', url: '/dev/queue' },
    { name: 'Stack', url: '/dev/stack' },
    { name: 'Hash Table', url: '/dev/hash-table' },
    { name: 'Graph', url: '/dev/graph' },
  ].sort((a: any, b: any) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })
];

export const images = [
  { version: 'primary', color: colors.yellow[500], label: 'Default theme', image: '/assets/image/image-yellow.jpg', alt: 'Photo by Felix Mittermeier' },
  { version: 'image-green', label: 'Green leaves image to theme', image: '/assets/image/image-green.jpg', alt: 'Photo by Chris Lee on Unsplash' },
  { version: 'image-orange', label: 'Oranges image to theme', image: '/assets/image/image-orange.jpg', alt: 'Photo by Karolina Grabowska' },
  { version: 'image-pink', label: 'Pink Shiba Inu image to theme', image: '/assets/image/image-pink.jpg', alt: 'Photo by Anna Shvets' }
];

export const themeImageSub = new AmauiSubscrption('primary');
