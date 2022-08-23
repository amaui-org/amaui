import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelRoundedW100Filled'
      short_name='Cancel'

      {...props}
    >
      <path d="M8.15 15.85Q8.275 15.975 8.4 15.975Q8.525 15.975 8.65 15.85L12 12.5L15.375 15.875Q15.475 15.975 15.613 15.962Q15.75 15.95 15.85 15.85Q15.975 15.725 15.975 15.6Q15.975 15.475 15.85 15.35L12.5 12L15.875 8.625Q15.975 8.525 15.963 8.387Q15.95 8.25 15.85 8.15Q15.725 8.025 15.6 8.025Q15.475 8.025 15.35 8.15L12 11.5L8.625 8.125Q8.525 8.025 8.387 8.037Q8.25 8.05 8.15 8.15Q8.025 8.275 8.025 8.4Q8.025 8.525 8.15 8.65L11.5 12L8.125 15.375Q8.025 15.475 8.038 15.613Q8.05 15.75 8.15 15.85ZM12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCancelRoundedW100Filled.displayName = 'AmauiIconMaterialCancelRoundedW100Filled';

export default IconMaterialCancelRoundedW100Filled;
