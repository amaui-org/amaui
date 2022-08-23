import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageSharpW100Filled'
      short_name='Garage'

      {...props}
    >
      <path d="M3.3 20.7V3.3H20.7V20.7ZM8.5 13.7Q8.225 13.7 8.012 13.487Q7.8 13.275 7.8 13Q7.8 12.725 8.012 12.512Q8.225 12.3 8.5 12.3Q8.775 12.3 8.988 12.512Q9.2 12.725 9.2 13Q9.2 13.275 8.988 13.487Q8.775 13.7 8.5 13.7ZM15.5 13.7Q15.225 13.7 15.013 13.487Q14.8 13.275 14.8 13Q14.8 12.725 15.013 12.512Q15.225 12.3 15.5 12.3Q15.775 12.3 15.988 12.512Q16.2 12.725 16.2 13Q16.2 13.275 15.988 13.487Q15.775 13.7 15.5 13.7ZM6.3 17.2H7V15.2H17V17.2H17.7V11.3L16.125 6.8H7.875L6.3 11.3ZM7.2 10.8 8.35 7.5H15.65L16.8 10.8Z"/>
    </Icon>
  );
});

IconMaterialGarageSharpW100Filled.displayName = 'AmauiIconMaterialGarageSharpW100Filled';

export default IconMaterialGarageSharpW100Filled;
