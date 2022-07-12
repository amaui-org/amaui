import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightTwoTone'
      short_name='AlignHorizontalRight'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M20,2h2v20h-2V2z M2,10h16V7H2V10z M8,17h10v-3H8V17z"/>
    </Icon>
  )
});

export default IconMaterialAlignHorizontalRightTwoTone;
