import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTornadoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoSharp'
      short_name='Tornado'

      {...props}
    >
      <path d="M1 3H23L12 22ZM4.475 5 6.2 8H17.8L19.525 5ZM7.375 10 9.1 13H14.9L16.625 10ZM10.275 15 12 18 13.725 15Z"/>
    </Icon>
  );
});

export default IconMaterialTornadoSharp;
