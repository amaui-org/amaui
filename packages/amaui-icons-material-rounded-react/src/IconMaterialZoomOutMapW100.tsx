import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomOutMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapW100'

      short_name='ZoomOutMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 9q-.15 0-.25-.1t-.1-.25v-3.6q0-.325.213-.538.212-.212.537-.212h3.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.5l3.525 3.525q.1.1.1.225T9 9q-.125.125-.25.125T8.5 9L5 5.5v3.15q0 .15-.1.25t-.25.1ZM15 9q-.125-.125-.125-.25T15 8.5L18.5 5h-3.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538v3.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.5l-3.525 3.525q-.1.1-.225.1T15 9Zm.35 10.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.15l-3.525-3.525q-.1-.1-.1-.225T15 15q.125-.125.25-.125t.25.125l3.5 3.5v-3.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.537-.213.213-.538.213Zm-10.3 0q-.325 0-.537-.213-.213-.212-.213-.537v-3.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.15l3.525-3.525q.1-.1.225-.1T9 15q.125.125.125.25T9 15.5L5.5 19h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapW100.displayName = 'AmauiIconMaterialZoomOutMapW100';

export default IconMaterialZoomOutMapW100;
