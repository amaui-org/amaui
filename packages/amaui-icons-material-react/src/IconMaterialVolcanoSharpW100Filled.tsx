import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolcanoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoSharpW100Filled'
      short_name='Volcano'

      {...props}
    >
      <path d="M4 20.7 6.85 14.3H9.875L11.875 9.3H17.025L20.275 20.7ZM14.15 5.35V2.65H14.85V5.35ZM18.025 6.95 17.55 6.475 19.45 4.575 19.95 5.05ZM10.975 6.95 9.075 5.05 9.55 4.55 11.45 6.475Z"/>
    </Icon>
  );
});

IconMaterialVolcanoSharpW100Filled.displayName = 'AmauiIconMaterialVolcanoSharpW100Filled';

export default IconMaterialVolcanoSharpW100Filled;
