import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestW100'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.6 19.1 6.35 6.85v7.5h-.7v-8.7h8.7v.7h-7.5L19.1 18.6Z"/>
    </Icon>
  );
});

IconMaterialNorthWestW100.displayName = 'AmauiIconMaterialNorthWestW100';

export default IconMaterialNorthWestW100;
