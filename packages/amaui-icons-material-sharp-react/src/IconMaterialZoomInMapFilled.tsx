import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomInMapFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMapFilled'

      short_name='ZoomInMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.9 21.5-1.4-1.4L5.6 17H3v-2h6v6H7v-2.6Zm16.2 0L17 18.4V21h-2v-6h6v2h-2.6l3.1 3.1ZM3 9V7h2.6L2.5 3.9l1.4-1.4L7 5.6V3h2v6Zm12 0V3h2v2.6l3.1-3.1 1.4 1.4L18.4 7H21v2Z"/>
    </Icon>
  );
});

IconMaterialZoomInMapFilled.displayName = 'AmauiIconMaterialZoomInMapFilled';

export default IconMaterialZoomInMapFilled;
