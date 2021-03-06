import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllSharpW100Filled'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M11.65 15.1H12.35V10.25L14.6 12.5L15.1 12L12 8.9L8.9 12L9.4 12.5L11.65 10.25ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

export default IconMaterialPresentToAllSharpW100Filled;
