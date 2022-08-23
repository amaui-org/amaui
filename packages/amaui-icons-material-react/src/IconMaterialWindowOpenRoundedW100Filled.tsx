import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenRoundedW100Filled'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm1.4-8.05h4.6v-.7h1.4v.7h4.6V5.7H6.7ZM6 19h12V5H6Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenRoundedW100Filled.displayName = 'AmauiIconMaterialWindowOpenRoundedW100Filled';

export default IconMaterialWindowOpenRoundedW100Filled;
