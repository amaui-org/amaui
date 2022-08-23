import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenRoundedW100Filled'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H17V5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V9ZM3.3 9V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H7V6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8V9ZM17 18.7V18H19.2Q19.5 18 19.75 17.75Q20 17.5 20 17.2V15H20.7V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V15H4V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H7V18.7ZM15.4 14.9H8.6Q7.975 14.9 7.538 14.462Q7.1 14.025 7.1 13.4V10.6Q7.1 9.975 7.538 9.537Q7.975 9.1 8.6 9.1H15.4Q16.025 9.1 16.463 9.537Q16.9 9.975 16.9 10.6V13.4Q16.9 14.025 16.463 14.462Q16.025 14.9 15.4 14.9Z"/>
    </Icon>
  );
});

IconMaterialFitScreenRoundedW100Filled.displayName = 'AmauiIconMaterialFitScreenRoundedW100Filled';

export default IconMaterialFitScreenRoundedW100Filled;
