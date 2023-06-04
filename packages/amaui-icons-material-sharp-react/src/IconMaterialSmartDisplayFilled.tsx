import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayFilled'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 16.5 7-4.5-7-4.5ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayFilled.displayName = 'AmauiIconMaterialSmartDisplayFilled';

export default IconMaterialSmartDisplayFilled;
