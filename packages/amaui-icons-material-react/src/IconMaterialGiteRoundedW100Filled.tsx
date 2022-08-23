import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGiteRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteRoundedW100Filled'
      short_name='Gite'

      {...props}
    >
      <path d="M4 17.675Q3.725 17.675 3.513 17.462Q3.3 17.25 3.3 16.975V11.2Q3.3 11.075 3.35 10.938Q3.4 10.8 3.5 10.7L6.7 7.5Q6.8 7.4 6.938 7.35Q7.075 7.3 7.2 7.3H8.3V6.25Q8.3 6.1 8.4 6Q8.5 5.9 8.65 5.9Q8.8 5.9 8.9 6Q9 6.1 9 6.25V7.3H16.8Q16.925 7.3 17.062 7.35Q17.2 7.4 17.3 7.5L20.5 10.7Q20.6 10.8 20.65 10.938Q20.7 11.075 20.7 11.2V16.975Q20.7 17.25 20.488 17.462Q20.275 17.675 20 17.675ZM14.7 16.975H20V11.2L17.375 8.575L14.7 11.25ZM4 16.975H14V12H4Z"/>
    </Icon>
  );
});

IconMaterialGiteRoundedW100Filled.displayName = 'AmauiIconMaterialGiteRoundedW100Filled';

export default IconMaterialGiteRoundedW100Filled;
