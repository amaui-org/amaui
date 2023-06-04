import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100Filled'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 18.85-2.3-5.8-5.8-2.35-.05-.4L18.95 5 13.6 18.85Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100Filled.displayName = 'AmauiIconMaterialNearMeW100Filled';

export default IconMaterialNearMeW100Filled;
