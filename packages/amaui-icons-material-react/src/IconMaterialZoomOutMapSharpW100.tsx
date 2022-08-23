import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomOutMapSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapSharpW100'
      short_name='ZoomOutMap'

      {...props}
    >
      <path d="M8.75 9.25 5 5.5V9H4.3V4.3H9V5H5.5L9.25 8.75ZM15.25 9.25 14.75 8.75 18.5 5H15V4.3H19.7V9H19V5.5ZM15 19.7V19H18.5L14.75 15.25L15.25 14.75L19 18.5V15H19.7V19.7ZM4.3 19.7V15H5V18.5L8.75 14.75L9.25 15.25L5.5 19H9V19.7Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapSharpW100.displayName = 'AmauiIconMaterialZoomOutMapSharpW100';

export default IconMaterialZoomOutMapSharpW100;
