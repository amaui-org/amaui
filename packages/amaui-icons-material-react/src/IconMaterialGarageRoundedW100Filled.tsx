import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageRoundedW100Filled'
      short_name='Garage'

      {...props}
    >
      <path d="M4.8 20.7Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7ZM8.5 13.7Q8.225 13.7 8.012 13.487Q7.8 13.275 7.8 13Q7.8 12.725 8.012 12.512Q8.225 12.3 8.5 12.3Q8.775 12.3 8.988 12.512Q9.2 12.725 9.2 13Q9.2 13.275 8.988 13.487Q8.775 13.7 8.5 13.7ZM15.5 13.7Q15.225 13.7 15.013 13.487Q14.8 13.275 14.8 13Q14.8 12.725 15.013 12.512Q15.225 12.3 15.5 12.3Q15.775 12.3 15.988 12.512Q16.2 12.725 16.2 13Q16.2 13.275 15.988 13.487Q15.775 13.7 15.5 13.7ZM6.3 11.3V16.85Q6.3 17 6.4 17.1Q6.5 17.2 6.65 17.2Q6.8 17.2 6.9 17.1Q7 17 7 16.85V15.2H17V16.85Q17 17 17.1 17.1Q17.2 17.2 17.35 17.2Q17.5 17.2 17.6 17.1Q17.7 17 17.7 16.85V11.3L16.25 7.15Q16.2 6.975 16.062 6.887Q15.925 6.8 15.75 6.8H8.25Q8.075 6.8 7.938 6.887Q7.8 6.975 7.75 7.15ZM7.2 10.8 8.35 7.5H15.65L16.8 10.8Z"/>
    </Icon>
  );
});

IconMaterialGarageRoundedW100Filled.displayName = 'AmauiIconMaterialGarageRoundedW100Filled';

export default IconMaterialGarageRoundedW100Filled;
