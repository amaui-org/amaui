import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizTwoTone'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
    </Icon>
  )
});

export default IconMaterialSwapHorizTwoTone;
