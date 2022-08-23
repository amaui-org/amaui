import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenRoundedW100'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm.7-8.05h5.3v-.7h1.4v.7H18V5H6ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenRoundedW100.displayName = 'AmauiIconMaterialWindowOpenRoundedW100';

export default IconMaterialWindowOpenRoundedW100;
