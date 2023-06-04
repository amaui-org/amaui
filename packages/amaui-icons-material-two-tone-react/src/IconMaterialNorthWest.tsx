import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWest'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,15h2V8.41L18.59,20L20,18.59L8.41,7H15V5H5V15z"/>
    </Icon>
  );
});

IconMaterialNorthWest.displayName = 'AmauiIconMaterialNorthWest';

export default IconMaterialNorthWest;
