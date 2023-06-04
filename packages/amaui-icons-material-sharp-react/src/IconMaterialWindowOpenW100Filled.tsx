import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenW100Filled'

      short_name='WindowOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm1.4-8.05h4.6v-.7h1.4v.7h4.6V5.7H6.7ZM6 19h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenW100Filled.displayName = 'AmauiIconMaterialWindowOpenW100Filled';

export default IconMaterialWindowOpenW100Filled;
