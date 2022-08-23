import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildSharpW100Filled'
      short_name='Build'

      {...props}
    >
      <path d="M18.5 20.95 11.3 13.75Q10.725 14.025 10.125 14.188Q9.525 14.35 8.85 14.35Q6.625 14.35 5.062 12.787Q3.5 11.225 3.5 9Q3.5 8.425 3.612 7.887Q3.725 7.35 3.95 6.85L7.45 10.3L10.15 7.6L6.75 4.15Q7.25 3.925 7.763 3.787Q8.275 3.65 8.85 3.65Q11.075 3.65 12.638 5.212Q14.2 6.775 14.2 9Q14.2 9.725 14.05 10.325Q13.9 10.925 13.6 11.45L20.8 18.65Z"/>
    </Icon>
  );
});

IconMaterialBuildSharpW100Filled.displayName = 'AmauiIconMaterialBuildSharpW100Filled';

export default IconMaterialBuildSharpW100Filled;
