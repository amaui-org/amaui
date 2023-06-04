import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeFilled'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.9 21-2.85-7.05L3 11.1V9.7L21 3l-6.7 18Z"/>
    </Icon>
  );
});

IconMaterialNearMeFilled.displayName = 'AmauiIconMaterialNearMeFilled';

export default IconMaterialNearMeFilled;
