import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOff'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.975 22.775-10.75-10.75 3.975-4L1.4 4.2l1.4-1.4 18.4 18.4-1.375 1.375L16.05 18.8ZM12 19.2l2.25-2.2-1.425-1.425L12 16.4l-4.375-4.375.825-.825-1.4-1.4-2.225 2.225Zm6.8-3.2L17 14.2l2.2-2.2L12 4.8 9.8 7 8 5.2l4-4L22.8 12Zm-3.2-3.2-4.4-4.4.8-.8 4.4 4.4Z"/>
    </Icon>
  );
});

IconMaterialNearbyOff.displayName = 'AmauiIconMaterialNearbyOff';

export default IconMaterialNearbyOff;
