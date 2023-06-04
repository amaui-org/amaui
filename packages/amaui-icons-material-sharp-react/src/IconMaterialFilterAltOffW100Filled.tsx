import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100Filled'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.875 11.05 8.125 5.3h10.3ZM11.3 18.4v-6.1L3.15 4.15l.5-.5 16.7 16.7-.5.5-7.15-7.15v4.7Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100Filled.displayName = 'AmauiIconMaterialFilterAltOffW100Filled';

export default IconMaterialFilterAltOffW100Filled;
