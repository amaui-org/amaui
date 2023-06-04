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
      <path d="M4.3 19.7V15H5v3.5l3.75-3.75.5.5L5.5 19H9v.7Zm10.7 0V19h3.5l-3.75-3.75.5-.5L19 18.5V15h.7v4.7ZM8.75 9.25 5 5.5V9h-.7V4.3H9V5H5.5l3.75 3.75Zm6.5 0-.5-.5L18.5 5H15v-.7h4.7V9H19V5.5Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapW100.displayName = 'AmauiIconMaterialZoomOutMapW100';

export default IconMaterialZoomOutMapW100;
