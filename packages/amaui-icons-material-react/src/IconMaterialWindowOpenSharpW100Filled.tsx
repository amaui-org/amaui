import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenSharpW100Filled'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm1.4-8.05h4.6v-.7h1.4v.7h4.6V5.7H6.7ZM6 19h12V5H6Z"/>
    </Icon>
  );
});

export default IconMaterialWindowOpenSharpW100Filled;
