import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleSharpW700'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M3.425 11.325V7.625L10.025 3.625L15 7.15L20.575 3.2V7.05L15 11.025L9.9 7.4ZM3.425 15.575V12.425H20.575V15.575ZM3.425 20.15V17H20.575V20.15Z"/>
    </Icon>
  )
});

export default IconMaterialLegendToggleSharpW700;
