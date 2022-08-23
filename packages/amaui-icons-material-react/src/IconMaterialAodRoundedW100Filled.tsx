import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodRoundedW100Filled'
      short_name='Aod'

      {...props}
    >
      <path d="M8.75 11.1Q8.6 11.1 8.5 11Q8.4 10.9 8.4 10.75Q8.4 10.6 8.5 10.5Q8.6 10.4 8.75 10.4H15.25Q15.4 10.4 15.5 10.5Q15.6 10.6 15.6 10.75Q15.6 10.9 15.5 11Q15.4 11.1 15.25 11.1ZM9.75 14.1Q9.6 14.1 9.5 14Q9.4 13.9 9.4 13.75Q9.4 13.6 9.5 13.5Q9.6 13.4 9.75 13.4H14.25Q14.4 13.4 14.5 13.5Q14.6 13.6 14.6 13.75Q14.6 13.9 14.5 14Q14.4 14.1 14.25 14.1ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialAodRoundedW100Filled.displayName = 'AmauiIconMaterialAodRoundedW100Filled';

export default IconMaterialAodRoundedW100Filled;
