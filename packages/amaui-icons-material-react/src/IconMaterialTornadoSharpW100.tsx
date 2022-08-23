import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoSharpW100'
      short_name='Tornado'

      {...props}
    >
      <path d="M3.25 4.3H20.75L12 19.4ZM4.475 5 6.6 8.65H17.4L19.525 5ZM7 9.35 9.475 13.65H14.525L17 9.35ZM9.875 14.35 12 18 14.125 14.35Z"/>
    </Icon>
  );
});

IconMaterialTornadoSharpW100.displayName = 'AmauiIconMaterialTornadoSharpW100';

export default IconMaterialTornadoSharpW100;
