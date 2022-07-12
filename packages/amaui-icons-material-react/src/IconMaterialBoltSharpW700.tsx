import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltSharpW700'
      short_name='Bolt'

      {...props}
    >
      <path d="M9.825 21.85 10.9 14.2H6.25L13.1 2.15H14.175L13.1 9.8H17.75L10.9 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBoltSharpW700;
