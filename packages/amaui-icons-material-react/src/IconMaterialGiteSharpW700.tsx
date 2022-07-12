import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGiteSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteSharpW700'
      short_name='Gite'

      {...props}
    >
      <path d="M1.625 19.375V9.85L5.85 5.625H6.625V3.625H9.375V5.625H18.15L22.375 9.85V19.375ZM16.375 16.625H19.625V10.975L18 9.35L16.375 10.975ZM4.375 16.625H13.625V12.375H4.375Z"/>
    </Icon>
  )
});

export default IconMaterialGiteSharpW700;
