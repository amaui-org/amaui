import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomOutMapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMapFilled'

      short_name='ZoomOutMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-6h2v2.6l3.1-3.1 1.4 1.4L6.4 19H9v2Zm12 0v-2h2.6l-3.1-3.1 1.4-1.4 3.1 3.1V15h2v6ZM8.1 9.5 5 6.4V9H3V3h6v2H6.4l3.1 3.1Zm7.8 0-1.4-1.4L17.6 5H15V3h6v6h-2V6.4Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMapFilled.displayName = 'AmauiIconMaterialZoomOutMapFilled';

export default IconMaterialZoomOutMapFilled;
