import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='North'

      short_name='North'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/>
    </Icon>
  );
});

IconMaterialNorth.displayName = 'AmauiIconMaterialNorth';

export default IconMaterialNorth;
