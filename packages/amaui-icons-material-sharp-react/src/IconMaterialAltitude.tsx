import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitude = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Altitude'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 12V7.8l-1.6 1.6L15 8l4-4 4 4-1.4 1.425-1.6-1.6V12ZM1 22l6-8 4.5 6H19l-5-6.65-2.5 3.3L10.25 15 14 10l9 12Zm10.5-2Z"/>
    </Icon>
  );
});

IconMaterialAltitude.displayName = 'AmauiIconMaterialAltitude';

export default IconMaterialAltitude;
