import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMe'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.9 21-2.85-7.05L3 11.1V9.7L21 3l-6.7 18Zm.65-3.7L17.6 6.4 6.7 10.45l4.9 1.95Zm-1.95-4.9Z"/>
    </Icon>
  );
});

IconMaterialNearMe.displayName = 'AmauiIconMaterialNearMe';

export default IconMaterialNearMe;
