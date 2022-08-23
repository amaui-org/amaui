import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageRoundedW100Filled'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H13.7Q14.05 3.3 14.338 3.437Q14.625 3.575 14.85 3.85L18.35 8.025Q18.525 8.225 18.613 8.475Q18.7 8.725 18.7 9V19.2L14.15 14.65Q14.425 14.275 14.562 13.887Q14.7 13.5 14.7 13Q14.7 11.875 13.913 11.087Q13.125 10.3 12 10.3Q10.875 10.3 10.088 11.087Q9.3 11.875 9.3 13Q9.3 14.125 10.088 14.912Q10.875 15.7 12 15.7Q12.45 15.7 12.838 15.575Q13.225 15.45 13.65 15.15L18.35 19.85Q17.9 20.35 17.45 20.525Q17 20.7 16.35 20.7Z"/>
    </Icon>
  );
});

IconMaterialFindInPageRoundedW100Filled.displayName = 'AmauiIconMaterialFindInPageRoundedW100Filled';

export default IconMaterialFindInPageRoundedW100Filled;
