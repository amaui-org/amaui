import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharpW700'
      short_name='Description'

      {...props}
    >
      <path d="M8 18.075H16V15.7H8ZM8 14.075H16V11.7H8ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3V4.3H6.3V19.7H17.7V9.3ZM6.3 4.3V9.3V4.3V9.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionSharpW700;
