import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortTwoTone'
      short_name='Sort'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
    </Icon>
  )
});

export default IconMaterialSortTwoTone;
