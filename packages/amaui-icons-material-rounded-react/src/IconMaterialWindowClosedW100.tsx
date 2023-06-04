import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedW100'

      short_name='WindowClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm.7-8.05h5.3v-.7h1.4v.7H18V5H6ZM6 19h12v-6.65H6Zm0 0h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedW100.displayName = 'AmauiIconMaterialWindowClosedW100';

export default IconMaterialWindowClosedW100;
