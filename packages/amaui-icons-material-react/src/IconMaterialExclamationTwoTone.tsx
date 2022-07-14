import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExclamationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationTwoTone'
      short_name='Exclamation'

      {...props}
    >
      <path d="M11 14V5H13V14ZM11 19V17H13V19Z"/>
    </Icon>
  );
});

export default IconMaterialExclamationTwoTone;
