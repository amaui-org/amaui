import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkSharpW100'
      short_name='Work'

      {...props}
    >
      <path d="M3.3 19.7V7.3H9.3V4.6H14.7V7.3H20.7V19.7ZM10 7.3H14V5.3H10ZM4 19H20V8H4ZM4 19V8Z"/>
    </Icon>
  );
});

export default IconMaterialWorkSharpW100;
