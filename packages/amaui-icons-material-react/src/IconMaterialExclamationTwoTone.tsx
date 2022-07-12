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
      <path d="M10.5 14.3V4.275H13.525V14.3ZM10.5 19.7V16.675H13.525V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialExclamationTwoTone;
