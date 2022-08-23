import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageSharpW100'
      short_name='Garage'

      {...props}
    >
      <path d="M3.3 20.7V3.3H20.7V20.7ZM4 20H20V4H4ZM8.5 13.7Q8.775 13.7 8.988 13.487Q9.2 13.275 9.2 13Q9.2 12.725 8.988 12.512Q8.775 12.3 8.5 12.3Q8.225 12.3 8.012 12.512Q7.8 12.725 7.8 13Q7.8 13.275 8.012 13.487Q8.225 13.7 8.5 13.7ZM15.5 13.7Q15.775 13.7 15.988 13.487Q16.2 13.275 16.2 13Q16.2 12.725 15.988 12.512Q15.775 12.3 15.5 12.3Q15.225 12.3 15.013 12.512Q14.8 12.725 14.8 13Q14.8 13.275 15.013 13.487Q15.225 13.7 15.5 13.7ZM6.3 17.2H7V15.2H17V17.2H17.7V11.3L16.125 6.8H7.875L6.3 11.3ZM7.2 10.8 8.35 7.5H15.65L16.8 10.8ZM7 14.5V11.5H17V14.5ZM4 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialGarageSharpW100.displayName = 'AmauiIconMaterialGarageSharpW100';

export default IconMaterialGarageSharpW100;
