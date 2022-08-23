import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNextPlanSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanSharpW100Filled'
      short_name='NextPlan'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM6.7 13.35H7.4Q7.625 11.875 8.825 10.863Q10.025 9.85 11.65 9.85Q12.7 9.85 13.963 10.575Q15.225 11.3 16.05 12.65H13.55V13.35H17.25V9.65H16.55V12.15Q15.6 10.6 14.213 9.875Q12.825 9.15 11.65 9.15Q9.725 9.15 8.35 10.362Q6.975 11.575 6.7 13.35Z"/>
    </Icon>
  );
});

IconMaterialNextPlanSharpW100Filled.displayName = 'AmauiIconMaterialNextPlanSharpW100Filled';

export default IconMaterialNextPlanSharpW100Filled;
