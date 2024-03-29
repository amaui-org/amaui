import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRight'

      short_name='RampRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21v-6.3q-.825 1.125-1.975 2.137-1.15 1.013-2.575 1.888L5 17.275q.75-.425 1.775-1.175t1.963-1.788q.937-1.037 1.6-2.374Q11 10.6 11 9V6.8L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.8V21Z"/>
    </Icon>
  );
});

IconMaterialRampRight.displayName = 'AmauiIconMaterialRampRight';

export default IconMaterialRampRight;
