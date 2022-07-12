import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowClosedOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedOutlinedW100Filled'
      short_name='WindowClosed'

      {...props}
    >
      <path d="M5.3 19.7V4.3h13.4v15.4Zm1.4-8.05h4.6v-.7h1.4v.7h4.6V5.7H6.7Zm0 6.65h10.6v-5.95H6.7ZM6 19h12V5H6Z"/>
    </Icon>
  )
});

export default IconMaterialWindowClosedOutlinedW100Filled;
