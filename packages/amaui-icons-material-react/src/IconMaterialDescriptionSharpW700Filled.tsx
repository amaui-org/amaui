import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDescriptionSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionSharpW700Filled'
      short_name='Description'

      {...props}
    >
      <path d="M8 18.075H16V15.7H8ZM8 14.075H16V11.7H8ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3H17.7L12.7 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialDescriptionSharpW700Filled;
