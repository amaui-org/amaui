import { colors } from '@amaui/style-react';
import AmauiSubscrption from '@amaui/subscription';

export const libraries = [
  { name: 'UI React', url: '/library/ui-react', version: 'primary', github: '/amaui/tree/main/packages/amaui-ui-react' },
  { name: 'Style React', url: '/library/style-react', version: 'secondary', github: '/amaui/tree/main/packages/amaui-style-react' },
  { name: 'Icons Material React', url: '/library/icons-material-react', version: 'secondary', github: '/amaui/tree/main/packages/amaui-icons-material-react' },
  ...[
    { name: 'AMQP', url: '/library/amqp', github: '/amaui-amqp' },
    { name: 'API', url: '/library/api', github: '/amaui-api' },
    { name: 'AWS', url: '/library/aws', github: '/amaui-aws' },
    { name: 'Binary Tree', url: '/library/binary-tree', github: '/amaui-binary-tree' },
    { name: 'Cache', url: '/library/cache', github: '/amaui-cache' },
    { name: 'Cookie', url: '/library/cookie', github: '/amaui-cookie' },
    { name: 'Date', url: '/library/date', github: '/amaui-date' },
    { name: 'Diff', url: '/library/diff', github: '/amaui-diff' },
    { name: 'Errors', url: '/library/errors', github: '/amaui-errors' },
    { name: 'Heap', url: '/library/heap', github: '/amaui-heap' },
    { name: 'Huffman Code', url: '/library/huffman-code', github: '/amaui-huffman-code' },
    { name: 'Log', url: '/library/log', github: '/amaui-log' },
    { name: 'Lz77', url: '/library/lz77', github: '/amaui-lz77' },
    { name: 'Meta', url: '/library/meta', github: '/amaui-meta' },
    { name: 'Models', url: '/library/models', github: '/amaui-models' },
    { name: 'Mongo', url: '/library/mongo', github: '/amaui-mongo' },
    { name: 'Node', url: '/library/node', github: '/amaui-node' },
    { name: 'Request', url: '/library/request', github: '/amaui-request' },
    { name: 'Storage', url: '/library/storage', github: '/amaui-storage' },
    { name: 'Style', url: '/library/style', github: '/amaui-style' },
    { name: 'Subscription', url: '/library/subscription', github: '/amaui-subscription' },
    { name: 'Test', url: '/library/test', github: '/amaui-test' },
    { name: 'Utils', url: '/library/utils', github: '/amaui-utils' },
    { name: 'Zip', url: '/library/zip', github: '/amaui-zip' },
    { name: 'Algorithms', url: '/library/algorithms', github: '/amaui-algorithms' },
    { name: 'Linked List', url: '/library/linked-list', github: '/amaui-linked-list' },
    { name: 'Queue', url: '/library/queue', github: '/amaui-queue' },
    { name: 'Stack', url: '/library/stack', github: '/amaui-stack' },
    { name: 'Hash Table', url: '/library/hash-table', github: '/amaui-hash-table' },
    { name: 'Graph', url: '/library/graph', github: '/amaui-graph' },
  ].sort((a: any, b: any) => a.name.localeCompare(b.name))
];

export const images = [
  { id: 'primary', color: colors.yellow[500], label: 'Default theme', image: '/assets/image/image-yellow.jpg', alt: 'Photo by Felix Mittermeier' },
  { id: 'image-green', label: 'Green leaves image to theme', image: '/assets/image/image-green.jpg', alt: 'Photo by Chris Lee on Unsplash' },
  { id: 'image-orange', label: 'Oranges image to theme', image: '/assets/image/image-orange.jpg', alt: 'Photo by Karolina Grabowska' },
  { id: 'image-pink', label: 'Pink Shiba Inu image to theme', image: '/assets/image/image-pink.jpg', alt: 'Photo by Anna Shvets' }
];

export const themeImageSub = new AmauiSubscrption('primary');

export const newImagesSub = new AmauiSubscrption([]);

export const importIframeStyles = (iframeDocument: Document) => {
  const styleSheets = window.document.styleSheets;

  for (const styleSheet of Array.from(styleSheets)) {
    if (!(styleSheet.ownerNode as any).amaui) {
      iframeDocument.head.append((styleSheet.ownerNode as any)?.cloneNode(true));

      continue;
    }

    let css = '';

    const rules = styleSheet?.cssRules;

    for (const rule of Array.from(rules)) css += rule.cssText;

    const style = window.document.createElement('style');

    style.innerHTML = css;

    iframeDocument.head.append(style);
  }
};

export const imageDownload = async (url: string) => {
  return new Promise((resolve, reject) => {
    const img = window.document.createElement('img');

    img.crossOrigin = 'Anonymous';

    img.onload = () => resolve(true);

    img.onerror = () => resolve(false);

    img.src = url;
  });
};

export const addScript = (id: string, url: string) => new Promise((resolve, reject) => {
  const exists = window.document.getElementById(id);

  if (exists) return resolve(true);

  const script = window.document.createElement('script');

  script.id = id;
  script.src = url;

  script.onload = () => resolve(true);
  script.onerror = () => resolve(false);
  script.onabort = () => resolve(false);

  window.document.head.append(script);
});
