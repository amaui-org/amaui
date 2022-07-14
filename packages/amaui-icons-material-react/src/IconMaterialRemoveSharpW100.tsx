import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveSharpW100'
      short_name='Remove'

      {...props}
    >
      <path d="M5.65 12.35V11.65H18.35V12.35Z"/>
    </Icon>
  );
});

export default IconMaterialRemoveSharpW100;
