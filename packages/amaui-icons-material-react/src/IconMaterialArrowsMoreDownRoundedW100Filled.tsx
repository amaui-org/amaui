import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownRoundedW100Filled'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M7.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537v-8.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V19h8.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.7-3.675q-.325 0-.537-.213Q10 15.6 10 15.275v-8.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.65h8.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

export default IconMaterialArrowsMoreDownRoundedW100Filled;
