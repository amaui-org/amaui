import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightW100'

      short_name='Straight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.7V5.6L9.375 7.875 8.9 7.4 12 4.3l3.1 3.1-.475.475L12.35 5.6v14.1Z"/>
    </Icon>
  );
});

IconMaterialStraightW100.displayName = 'AmauiIconMaterialStraightW100';

export default IconMaterialStraightW100;
