import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoDrinksSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoDrinksSharpW100Filled'
      short_name='NoDrinks'

      {...props}
    >
      <path d="M7.3 20.35V19.65H11.65V12.75L10.85 11.85L3.15 4.15L3.65 3.65L20.35 20.35L19.85 20.85L12.35 13.35V19.65H16.7V20.35ZM13.85 11.05 9.8 7H16.55L18.35 5H7.8L7.1 4.3H19.25V5Z"/>
    </Icon>
  );
});

IconMaterialNoDrinksSharpW100Filled.displayName = 'AmauiIconMaterialNoDrinksSharpW100Filled';

export default IconMaterialNoDrinksSharpW100Filled;
