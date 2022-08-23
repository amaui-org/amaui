import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketSharpW100Filled'
      short_name='AirplaneTicket'

      {...props}
    >
      <path d="M8.95 15.35 17.6 13.05Q17.925 12.975 18.125 12.712Q18.325 12.45 18.25 12.15Q18.175 11.85 17.888 11.738Q17.6 11.625 17.3 11.7L14.75 12.4L10.75 8.65L9.8 8.85L12.2 13.05L9.35 13.75L8.1 12.8L7.6 12.95ZM3.3 18.7V15.05Q4.2 14.625 4.75 13.812Q5.3 13 5.3 12Q5.3 11 4.75 10.188Q4.2 9.375 3.3 8.95V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketSharpW100Filled.displayName = 'AmauiIconMaterialAirplaneTicketSharpW100Filled';

export default IconMaterialAirplaneTicketSharpW100Filled;
