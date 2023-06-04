import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 18.85-2.3-5.8-5.8-2.35-.05-.4L18.95 5 13.6 18.85Zm.2-1.45 4.35-11.2L6.5 10.5l4.9 2Zm-2-4.9Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100.displayName = 'AmauiIconMaterialNearMeW100';

export default IconMaterialNearMeW100;
