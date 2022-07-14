import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityHighTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighTwoTone'
      short_name='PriorityHigh'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
    </Icon>
  );
});

export default IconMaterialPriorityHighTwoTone;
