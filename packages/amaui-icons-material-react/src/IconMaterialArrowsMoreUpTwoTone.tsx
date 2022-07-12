import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpTwoTone'
      short_name='ArrowsMoreUp'

      {...props}
    >
      <path d="M11.4 19.6v-9h-9V7.575h12.025V19.6Zm5.15-5.15v-9h-9V2.425h12.025V14.45Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreUpTwoTone;
