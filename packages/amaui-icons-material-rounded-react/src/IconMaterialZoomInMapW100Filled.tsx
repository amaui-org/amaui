import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomInMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMapW100Filled'

      short_name='ZoomInMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.675 9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.15l-3.5-3.5q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l3.5 3.5V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.213.537Q8.6 9 8.275 9Zm14.7 0h-3.6q-.325 0-.537-.213-.213-.212-.213-.537v-3.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V7.8l3.5-3.5q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-3.5 3.5h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4.325 19.7q-.125-.125-.125-.25t.125-.25l3.5-3.5h-3.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .537.212.213.213.213.538v3.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V16.2l-3.5 3.5q-.1.1-.237.112-.138.013-.263-.112Zm11.05 0q-.15 0-.25-.1t-.1-.25v-3.6q0-.325.213-.538.212-.212.537-.212h3.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.15l3.5 3.5q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-3.5-3.5v3.15q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialZoomInMapW100Filled.displayName = 'AmauiIconMaterialZoomInMapW100Filled';

export default IconMaterialZoomInMapW100Filled;
