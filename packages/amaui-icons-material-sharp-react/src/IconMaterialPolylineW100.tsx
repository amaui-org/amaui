import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolylineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineW100'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 21.35V19.1l-7.5-3.75h-4.5v-4.7H7.6l3.05-3.5v-4.5h4.7v4.7H11.4l-3.05 3.5v3.8l7.3 3.65v-1.65h4.7v4.7Zm-4.3-14.7h3.3v-3.3h-3.3Zm-7 8h3.3v-3.3h-3.3Zm12 6h3.3v-3.3h-3.3ZM13 5Zm-7 8Zm12 6Z"/>
    </Icon>
  );
});

IconMaterialPolylineW100.displayName = 'AmauiIconMaterialPolylineW100';

export default IconMaterialPolylineW100;
