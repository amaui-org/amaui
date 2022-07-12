import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllSharpW700'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M10.725 16.525H13.3V12.5L14.675 13.875L16.475 12.075L12.025 7.625L7.575 12.075L9.375 13.85L10.725 12.5ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPresentToAllSharpW700;
