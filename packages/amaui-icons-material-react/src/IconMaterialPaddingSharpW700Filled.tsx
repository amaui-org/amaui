import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingSharpW700Filled'
      short_name='Padding'

      {...props}
    >
      <path d="M6.875 9.275H9.275V6.875H6.875ZM10.8 9.275H13.2V6.875H10.8ZM14.725 9.275H17.125V6.875H14.725ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPaddingSharpW700Filled;
