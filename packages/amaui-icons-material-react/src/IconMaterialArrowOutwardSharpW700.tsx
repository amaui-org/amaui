import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardSharpW700'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="M6.4 18.825 4.175 16.6 13.2 7.575H5.425v-3.15h13.15v13.15h-3.15V9.8Z"/>
    </Icon>
  )
});

export default IconMaterialArrowOutwardSharpW700;
