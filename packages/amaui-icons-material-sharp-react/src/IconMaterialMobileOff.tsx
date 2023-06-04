import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOff'

      short_name='MobileOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 23.3.7 3.5l1.4-1.4 19.8 19.8ZM5 6.425l2 2V18h9.6l2.4 2.4V23H5ZM7 20v1h10v-1ZM19 1v15.15l-2-2V6H8.825L5.15 2.3V1ZM7 4h10V3H7Zm0 16v1-1ZM7 4V3Z"/>
    </Icon>
  );
});

IconMaterialMobileOff.displayName = 'AmauiIconMaterialMobileOff';

export default IconMaterialMobileOff;
