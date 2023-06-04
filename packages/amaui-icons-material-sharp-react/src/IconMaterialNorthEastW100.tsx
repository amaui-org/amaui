import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthEastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastW100'

      short_name='NorthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.4 19.1-.5-.5L17.15 6.35h-7.5v-.7h8.7v8.7h-.7v-7.5Z"/>
    </Icon>
  );
});

IconMaterialNorthEastW100.displayName = 'AmauiIconMaterialNorthEastW100';

export default IconMaterialNorthEastW100;
