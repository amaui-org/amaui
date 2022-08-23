import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoFoodSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodSharpW100'
      short_name='NoFood'

      {...props}
    >
      <path d="M19.975 22.3 13.175 15.5H2.875Q2.875 13.8 4.763 12.8Q6.65 11.8 9.225 11.8H9.475L0.925 3.25L1.425 2.75L20.475 21.8ZM2.875 21.7V21H15.575V21.7ZM2.875 17.9H15.575V18.6H2.875ZM19.925 18.45 19.3 17.825 20.375 7.5H11.525L11.425 6.8H15.925V2.8H16.625V6.8H21.125ZM15.625 14.125ZM3.7 14.8H12.475L10.225 12.55Q9.975 12.525 9.738 12.512Q9.5 12.5 9.225 12.5Q7.025 12.5 5.625 13.15Q4.225 13.8 3.7 14.8ZM12.475 14.8Q12.475 14.8 12.475 14.8Q12.475 14.8 12.475 14.8Q12.475 14.8 12.475 14.8Q12.475 14.8 12.475 14.8Z"/>
    </Icon>
  );
});

IconMaterialNoFoodSharpW100.displayName = 'AmauiIconMaterialNoFoodSharpW100';

export default IconMaterialNoFoodSharpW100;
