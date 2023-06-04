import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolylineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineW100Filled'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 21.35V19.1l-7.5-3.75h-4.5v-4.7H7.6l3.05-3.5v-4.5h4.7v4.7H11.4l-3.05 3.5v3.8l7.3 3.65v-1.65h4.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialPolylineW100Filled.displayName = 'AmauiIconMaterialPolylineW100Filled';

export default IconMaterialPolylineW100Filled;
