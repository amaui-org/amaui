import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketSharpFilled'
      short_name='AirplaneTicket'

      {...props}
    >
      <path d="M8.85 15.65 17.75 13.3Q18.125 13.2 18.312 12.837Q18.5 12.475 18.4 12.1Q18.3 11.725 17.962 11.537Q17.625 11.35 17.25 11.45L14.8 12.1L10.8 8.35L9.4 8.7L11.8 12.9L9.4 13.5L8.15 12.55L7.2 12.8ZM2 20V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketSharpFilled.displayName = 'AmauiIconMaterialAirplaneTicketSharpFilled';

export default IconMaterialAirplaneTicketSharpFilled;
