import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaneTicketRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaneTicketRoundedW100'
      short_name='AirplaneTicket'

      {...props}
    >
      <path d="M9.25 15.275 17.6 13.05Q17.925 12.975 18.125 12.712Q18.325 12.45 18.25 12.15Q18.175 11.85 17.888 11.738Q17.6 11.625 17.3 11.7L14.75 12.4L10.925 8.825Q10.85 8.75 10.738 8.712Q10.625 8.675 10.5 8.7Q10.225 8.75 10.113 8.975Q10 9.2 10.15 9.475L12.2 13.05L9.35 13.75L8.2 12.875Q8.15 12.825 8.088 12.825Q8.025 12.825 7.975 12.85Q7.825 12.9 7.775 13.037Q7.725 13.175 7.8 13.3L8.8 15.075Q8.875 15.2 9 15.262Q9.125 15.325 9.25 15.275ZM4 18.7Q3.725 18.7 3.513 18.487Q3.3 18.275 3.3 18V15.05Q4.2 14.625 4.75 13.812Q5.3 13 5.3 12Q5.3 11 4.75 10.188Q4.2 9.375 3.3 8.95V6Q3.3 5.725 3.513 5.512Q3.725 5.3 4 5.3H20Q20.275 5.3 20.488 5.512Q20.7 5.725 20.7 6V18Q20.7 18.275 20.488 18.487Q20.275 18.7 20 18.7ZM4 18H20V6H4V8.55Q4.925 9.1 5.463 10.012Q6 10.925 6 12Q6 13.075 5.463 13.988Q4.925 14.9 4 15.45ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialAirplaneTicketRoundedW100.displayName = 'AmauiIconMaterialAirplaneTicketRoundedW100';

export default IconMaterialAirplaneTicketRoundedW100;
