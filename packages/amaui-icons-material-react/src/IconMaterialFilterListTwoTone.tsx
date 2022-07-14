import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListTwoTone'
      short_name='FilterList'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    </Icon>
  );
});

export default IconMaterialFilterListTwoTone;
