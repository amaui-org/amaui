import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightsStayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayRoundedW100Filled'
      short_name='NightsStay'

      {...props}
    >
      <path d="M12 20.7Q11.3 20.7 10.538 20.6Q9.775 20.5 9.2 20.25Q9.325 20.175 9.5 20Q9.675 19.825 9.75 19.7Q9.95 19.45 10.15 19.025Q10.35 18.6 10.35 18Q10.35 16.65 9.475 15.65Q8.6 14.65 7.25 14.65Q6.675 13.525 5.775 13.087Q4.875 12.65 4.025 12.65Q3.9 12.65 3.713 12.65Q3.525 12.65 3.325 12.7Q3.175 11.375 3.513 10Q3.85 8.625 4.625 7.4Q5.4 6.175 6.575 5.213Q7.75 4.25 9.225 3.775Q9.5 3.675 9.65 3.837Q9.8 4 9.725 4.275Q9.15 6.75 9.538 8.95Q9.925 11.15 11.025 12.925Q12.125 14.7 13.825 15.975Q15.525 17.25 17.575 17.875Q17.85 17.975 17.9 18.15Q17.95 18.325 17.75 18.525Q16.425 19.7 14.95 20.2Q13.475 20.7 12 20.7ZM7 19.35H4Q3.025 19.35 2.338 18.688Q1.65 18.025 1.65 17Q1.65 16.025 2.338 15.337Q3.025 14.65 4 14.65Q4.75 14.65 5.4 15.213Q6.05 15.775 6.35 16.65H7Q7.575 16.65 7.963 17.038Q8.35 17.425 8.35 18Q8.35 18.575 7.963 18.962Q7.575 19.35 7 19.35Z"/>
    </Icon>
  );
});

IconMaterialNightsStayRoundedW100Filled.displayName = 'AmauiIconMaterialNightsStayRoundedW100Filled';

export default IconMaterialNightsStayRoundedW100Filled;
