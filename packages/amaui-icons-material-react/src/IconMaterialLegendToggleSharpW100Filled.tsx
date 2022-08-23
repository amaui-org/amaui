import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleSharpW100Filled'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M4.65 10.15V9.325L9.975 6.075L15 9.65L19.35 6.55V7.425L15 10.5L9.95 6.925ZM4.65 14.35V13.65H19.35V14.35ZM4.65 18.05V17.35H19.35V18.05Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleSharpW100Filled.displayName = 'AmauiIconMaterialLegendToggleSharpW100Filled';

export default IconMaterialLegendToggleSharpW100Filled;
