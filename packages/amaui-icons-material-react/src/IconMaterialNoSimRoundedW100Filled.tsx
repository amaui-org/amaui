import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimRoundedW100Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M18.725 16.2 8.175 5.7 10.25 3.625Q10.4 3.475 10.613 3.387Q10.825 3.3 11.05 3.3H17.225Q17.875 3.3 18.3 3.725Q18.725 4.15 18.725 4.8ZM6.825 20.7Q6.175 20.7 5.75 20.275Q5.325 19.85 5.325 19.2V9.025Q5.325 8.8 5.412 8.587Q5.5 8.375 5.65 8.225L6.275 7.6L2.7 4.025Q2.6 3.925 2.6 3.8Q2.6 3.675 2.725 3.55Q2.85 3.425 2.975 3.425Q3.1 3.425 3.225 3.55L20.7 21.025Q20.8 21.125 20.8 21.25Q20.8 21.375 20.675 21.5Q20.55 21.625 20.425 21.625Q20.3 21.625 20.175 21.5L18.575 19.9Q18.375 20.275 18.05 20.487Q17.725 20.7 17.225 20.7Z"/>
    </Icon>
  );
});

IconMaterialNoSimRoundedW100Filled.displayName = 'AmauiIconMaterialNoSimRoundedW100Filled';

export default IconMaterialNoSimRoundedW100Filled;
