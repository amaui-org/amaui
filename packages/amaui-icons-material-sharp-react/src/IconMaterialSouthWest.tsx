import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWest'

      short_name='SouthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19V9h2v6.6L18.6 4 20 5.4 8.4 17H15v2Z"/>
    </Icon>
  );
});

IconMaterialSouthWest.displayName = 'AmauiIconMaterialSouthWest';

export default IconMaterialSouthWest;
