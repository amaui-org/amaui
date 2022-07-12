import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreUpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpSharpW700Filled'
      short_name='MoreUp'

      {...props}
    >
      <path d="M16.8 16.2v-9h-9V4.05h12.15V16.2Zm-5.375 5.375v-9h-9v-3.15h12.15v12.15Z"/>
    </Icon>
  )
});

export default IconMaterialMoreUpSharpW700Filled;
