import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomOutMapSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapSharp'
      short_name='ZoomOutMap'

      {...props}
    >
      <path d="M8.1 9.5 5 6.4V9H3V3H9V5H6.4L9.5 8.1ZM15.9 9.5 14.5 8.1 17.6 5H15V3H21V9H19V6.4ZM15 21V19H17.6L14.5 15.9L15.9 14.5L19 17.6V15H21V21ZM3 21V15H5V17.6L8.1 14.5L9.5 15.9L6.4 19H9V21Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapSharp.displayName = 'AmauiIconMaterialZoomOutMapSharp';

export default IconMaterialZoomOutMapSharp;
