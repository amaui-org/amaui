import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltSharpW100'
      short_name='Bolt'

      {...props}
    >
      <path d="M10.3 19.7 11.15 13.7H8.025L12.85 4.3H13.7L12.85 10.3H15.975L11.15 19.7Z"/>
    </Icon>
  );
});

export default IconMaterialBoltSharpW100;
