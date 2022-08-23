import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdRoundedW100Filled'
      short_name='Hd'

      {...props}
    >
      <path d="M7.15 14.6Q7.3 14.6 7.4 14.5Q7.5 14.4 7.5 14.25V12.6H10.3V14.25Q10.3 14.4 10.4 14.5Q10.5 14.6 10.65 14.6Q10.8 14.6 10.9 14.5Q11 14.4 11 14.25V9.75Q11 9.6 10.9 9.5Q10.8 9.4 10.65 9.4Q10.5 9.4 10.4 9.5Q10.3 9.6 10.3 9.75V11.9H7.5V9.75Q7.5 9.6 7.4 9.5Q7.3 9.4 7.15 9.4Q7 9.4 6.9 9.5Q6.8 9.6 6.8 9.75V14.25Q6.8 14.4 6.9 14.5Q7 14.6 7.15 14.6ZM13.4 14.6H16.1Q16.55 14.6 16.875 14.275Q17.2 13.95 17.2 13.5V10.5Q17.2 10.05 16.875 9.725Q16.55 9.4 16.1 9.4H13.4Q13.225 9.4 13.113 9.512Q13 9.625 13 9.8V14.2Q13 14.375 13.113 14.488Q13.225 14.6 13.4 14.6ZM13.7 13.9V10.1H16.1Q16.25 10.1 16.375 10.225Q16.5 10.35 16.5 10.5V13.5Q16.5 13.65 16.375 13.775Q16.25 13.9 16.1 13.9ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialHdRoundedW100Filled.displayName = 'AmauiIconMaterialHdRoundedW100Filled';

export default IconMaterialHdRoundedW100Filled;
