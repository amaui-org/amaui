import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightsStaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStaySharpW100Filled'
      short_name='NightsStay'

      {...props}
    >
      <path d="M4 19.35Q3.025 19.35 2.338 18.688Q1.65 18.025 1.65 17Q1.65 16.025 2.338 15.337Q3.025 14.65 4 14.65Q4.75 14.65 5.4 15.213Q6.05 15.775 6.35 16.65H7Q7.575 16.65 7.963 17.038Q8.35 17.425 8.35 18Q8.35 18.575 7.963 18.962Q7.575 19.35 7 19.35ZM9.2 20.25Q9.725 19.9 10.038 19.262Q10.35 18.625 10.35 18Q10.35 16.65 9.475 15.65Q8.6 14.65 7.25 14.65Q6.675 13.525 5.775 13.087Q4.875 12.65 4.025 12.65Q3.9 12.65 3.713 12.65Q3.525 12.65 3.325 12.7Q3.15 11.3 3.55 9.85Q3.95 8.4 4.812 7.125Q5.675 5.85 6.975 4.9Q8.275 3.95 9.9 3.6Q9.125 6.275 9.488 8.662Q9.85 11.05 11.038 12.962Q12.225 14.875 14.1 16.188Q15.975 17.5 18.25 18.05Q16.85 19.475 15.238 20.087Q13.625 20.7 12 20.7Q11.3 20.7 10.538 20.6Q9.775 20.5 9.2 20.25Z"/>
    </Icon>
  );
});

IconMaterialNightsStaySharpW100Filled.displayName = 'AmauiIconMaterialNightsStaySharpW100Filled';

export default IconMaterialNightsStaySharpW100Filled;
