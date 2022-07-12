import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneAllOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllOutlinedW100Filled'
      short_name='DoneAll'

      {...props}
    >
      <path d="M6.7 17.1 1.95 12.35 2.45 11.85 6.7 16.1 7.6 15.2 8.1 15.7ZM12.35 17.1 7.6 12.35 8.1 11.85 12.35 16.1 21.55 6.9 22.05 7.4ZM11.45 12.35 10.95 11.85 15.9 6.9 16.4 7.4Z"/>
    </Icon>
  )
});

export default IconMaterialDoneAllOutlinedW100Filled;
