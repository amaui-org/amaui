import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmallW100'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 10.35h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmallW100.displayName = 'AmauiIconMaterialMagnificationSmallW100';

export default IconMaterialMagnificationSmallW100;
