import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireplaceSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceSharpW100Filled'
      short_name='Fireplace'

      {...props}
    >
      <path d="M10.6 18.25Q11.575 19.05 12.713 18.638Q13.85 18.225 14 16.95Q14.125 15.775 13.275 15.213Q12.425 14.65 12 13.75Q11.875 14.1 11.875 14.4Q11.875 14.7 11.95 15.05Q12.025 15.475 12.125 15.85Q12.225 16.225 12.15 16.65Q12.025 17.1 11.6 17.575Q11.175 18.05 10.6 18.25ZM3.3 20.7V3.3H20.7V20.7ZM4 20H6.9V19.3H10.1Q9.3 18.775 8.8 17.913Q8.3 17.05 8.3 16.25Q8.3 15.25 8.575 14.412Q8.85 13.575 9.325 12.862Q9.8 12.15 10.45 11.562Q11.1 10.975 11.85 10.5Q12.15 11.55 12.788 12.387Q13.425 13.225 14.55 14.05Q15.125 14.5 15.413 15.075Q15.7 15.65 15.7 16.3Q15.7 17.1 15.338 17.9Q14.975 18.7 14.15 19.3H17.1V20H20V4H4Z"/>
    </Icon>
  );
});

IconMaterialFireplaceSharpW100Filled.displayName = 'AmauiIconMaterialFireplaceSharpW100Filled';

export default IconMaterialFireplaceSharpW100Filled;
