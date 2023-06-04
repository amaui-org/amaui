import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightW100Filled'

      short_name='Straight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.7V5.6L9.375 7.875 8.9 7.4 12 4.3l3.1 3.1-.475.475L12.35 5.6v14.1Z"/>
    </Icon>
  );
});

IconMaterialStraightW100Filled.displayName = 'AmauiIconMaterialStraightW100Filled';

export default IconMaterialStraightW100Filled;
