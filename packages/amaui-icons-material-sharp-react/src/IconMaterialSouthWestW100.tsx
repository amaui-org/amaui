import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestW100'

      short_name='SouthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 18.35v-8.7h.7v7.5L18.6 4.9l.5.5L6.85 17.65h7.5v.7Z"/>
    </Icon>
  );
});

IconMaterialSouthWestW100.displayName = 'AmauiIconMaterialSouthWestW100';

export default IconMaterialSouthWestW100;
