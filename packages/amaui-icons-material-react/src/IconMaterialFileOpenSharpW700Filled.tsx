import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenSharpW700Filled'
      short_name='FileOpen'

      {...props}
    >
      <path d="M21.95 23.2 19.575 20.8V22.75H16.425V15.425H23.75V18.575H21.775L24.15 20.95ZM12.7 9.3H17.7L12.7 4.3ZM3.15 22.85V1.15H14.35L20.85 7.65V13.425H14.425V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialFileOpenSharpW700Filled;
