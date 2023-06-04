import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.875 11.05-.5-.5L16.95 6H8.825l-.7-.7h10.3ZM11.3 18.4v-6.1L3.15 4.15l.5-.5 16.7 16.7-.5.5-7.15-7.15v4.7Zm2.075-7.85Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100.displayName = 'AmauiIconMaterialFilterAltOffW100';

export default IconMaterialFilterAltOffW100;
