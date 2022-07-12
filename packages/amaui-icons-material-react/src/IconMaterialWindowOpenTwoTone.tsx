import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowOpenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenTwoTone'
      short_name='WindowOpen'

      {...props}
    >
      <path d="M3.5 21.5V2.475h17.025V21.5Zm3.95-11.025h2.975v-1h3.15v1h2.975V6.45h-9.1Zm-.925 8H17.5V5.5H6.525Z"/>
    </Icon>
  )
});

export default IconMaterialWindowOpenTwoTone;
