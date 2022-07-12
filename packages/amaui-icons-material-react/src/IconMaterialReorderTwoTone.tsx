import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReorderTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderTwoTone'
      short_name='Reorder'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>
    </Icon>
  )
});

export default IconMaterialReorderTwoTone;
