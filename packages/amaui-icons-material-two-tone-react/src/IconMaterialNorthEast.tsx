import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthEast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEast'

      short_name='NorthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"/>
    </Icon>
  );
});

IconMaterialNorthEast.displayName = 'AmauiIconMaterialNorthEast';

export default IconMaterialNorthEast;
