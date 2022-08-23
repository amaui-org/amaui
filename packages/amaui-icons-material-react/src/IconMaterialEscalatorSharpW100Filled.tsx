import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorSharpW100Filled'
      short_name='Escalator'

      {...props}
    >
      <path d="M6.65 16.85H9.7L14.7 7.85H17.35V7.15H14.3L9.3 16.15H6.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialEscalatorSharpW100Filled.displayName = 'AmauiIconMaterialEscalatorSharpW100Filled';

export default IconMaterialEscalatorSharpW100Filled;
