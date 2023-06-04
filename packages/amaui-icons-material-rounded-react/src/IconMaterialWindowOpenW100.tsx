import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenW100'

      short_name='WindowOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm.7-8.05h5.3v-.7h1.4v.7H18V5H6ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenW100.displayName = 'AmauiIconMaterialWindowOpenW100';

export default IconMaterialWindowOpenW100;
