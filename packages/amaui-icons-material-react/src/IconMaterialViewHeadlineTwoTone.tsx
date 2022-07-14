import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewHeadlineTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineTwoTone'
      short_name='ViewHeadline'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
    </Icon>
  );
});

export default IconMaterialViewHeadlineTwoTone;
