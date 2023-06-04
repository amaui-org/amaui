import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitudeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeFilled'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 12V7.8l-1.6 1.6L15 8l4-4 4 4-1.4 1.425-1.6-1.6V12ZM1 22l6-8 4.5 6 1.6-1.2-2.85-3.8L14 10l9 12Z"/>
    </Icon>
  );
});

IconMaterialAltitudeFilled.displayName = 'AmauiIconMaterialAltitudeFilled';

export default IconMaterialAltitudeFilled;
