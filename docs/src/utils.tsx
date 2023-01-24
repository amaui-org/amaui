import { colors } from '@amaui/style-react';
import AmauiSubscrption from '@amaui/subscription';

export const libraries = [
  { name: 'UI React', url: '/dev/ui-react', version: 'primary', github: '/amaui/tree/main/packages/amaui-ui-react' },
  { name: 'Style React', url: '/dev/style-react', version: 'secondary', github: '/amaui/tree/main/packages/amaui-style-react' },
  { name: 'Icons Material React', url: '/dev/icons-material-react', version: 'secondary', github: '/amaui/tree/main/packages/amaui-icons-material-react' },
  ...[
    { name: 'AMQP', url: '/dev/amqp', github: '/amaui-amqp' },
    { name: 'API', url: '/dev/api', github: '/amaui-api' },
    { name: 'AWS', url: '/dev/aws', github: '/amaui-aws' },
    { name: 'Binary Tree', url: '/dev/binary-tree', github: '/amaui-binary-tree' },
    { name: 'Cache', url: '/dev/cache', github: '/amaui-cache' },
    { name: 'Cookie', url: '/dev/cookie', github: '/amaui-cookie' },
    { name: 'Date', url: '/dev/date', github: '/amaui-date' },
    { name: 'Diff', url: '/dev/diff', github: '/amaui-diff' },
    { name: 'Errors', url: '/dev/errors', github: '/amaui-errors' },
    { name: 'Heap', url: '/dev/heap', github: '/amaui-heap' },
    { name: 'Huffman Code', url: '/dev/huffman-code', github: '/amaui-huffman-code' },
    { name: 'Log', url: '/dev/log', github: '/amaui-log' },
    { name: 'Lz77', url: '/dev/lz77', github: '/amaui-lz77' },
    { name: 'Meta', url: '/dev/meta', github: '/amaui-meta' },
    { name: 'Models', url: '/dev/models', github: '/amaui-models' },
    { name: 'Mongo', url: '/dev/mongo', github: '/amaui-mongo' },
    { name: 'Node', url: '/dev/node', github: '/amaui-node' },
    { name: 'Request', url: '/dev/request', github: '/amaui-request' },
    { name: 'Storage', url: '/dev/storage', github: '/amaui-storage' },
    { name: 'Style', url: '/dev/style', github: '/amaui-style' },
    { name: 'Subscription', url: '/dev/subscription', github: '/amaui-subscription' },
    { name: 'Test', url: '/dev/test', github: '/amaui-test' },
    { name: 'Utils', url: '/dev/utils', github: '/amaui-utils' },
    { name: 'Zip', url: '/dev/zip', github: '/amaui-zip' },
    { name: 'Algorithms', url: '/dev/algorithms', github: '/amaui-algorithms' },
    { name: 'Linked List', url: '/dev/linked-list', github: '/amaui-linked-list' },
    { name: 'Queue', url: '/dev/queue', github: '/amaui-queue' },
    { name: 'Stack', url: '/dev/stack', github: '/amaui-stack' },
    { name: 'Hash Table', url: '/dev/hash-table', github: '/amaui-hash-table' },
    { name: 'Graph', url: '/dev/graph', github: '/amaui-graph' },
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
