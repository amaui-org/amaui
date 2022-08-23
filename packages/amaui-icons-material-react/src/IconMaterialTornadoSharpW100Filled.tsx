import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoSharpW100Filled'
      short_name='Tornado'

      {...props}
    >
      <path d="M5.775 8.65 3.25 4.3H20.75L18.225 8.65ZM8.675 13.65 6.175 9.35H17.825L15.325 13.65ZM12 19.4 9.075 14.35H14.925Z"/>
    </Icon>
  );
});

IconMaterialTornadoSharpW100Filled.displayName = 'AmauiIconMaterialTornadoSharpW100Filled';

export default IconMaterialTornadoSharpW100Filled;
