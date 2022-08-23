import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketRoundedFilled'
      short_name='AirplaneTicket'

      {...props}
    >
      <path d="M9.225 15.55 17.75 13.3Q18.125 13.2 18.312 12.837Q18.5 12.475 18.4 12.1Q18.3 11.725 17.962 11.537Q17.625 11.35 17.25 11.45L14.8 12.1L11.075 8.625Q10.95 8.5 10.763 8.45Q10.575 8.4 10.4 8.45Q9.975 8.575 9.85 8.9Q9.725 9.225 9.925 9.6L11.8 12.9L9.4 13.5L8.325 12.675Q8.25 12.625 8.137 12.6Q8.025 12.575 7.925 12.6Q7.625 12.675 7.525 12.925Q7.425 13.175 7.575 13.45L8.65 15.325Q8.75 15.475 8.9 15.537Q9.05 15.6 9.225 15.55ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketRoundedFilled.displayName = 'AmauiIconMaterialAirplaneTicketRoundedFilled';

export default IconMaterialAirplaneTicketRoundedFilled;
