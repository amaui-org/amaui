import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCircleRoundedW100Filled'
      short_name='AddCircle'

      {...props}
    >
      <path d="M12 16.35Q12.15 16.35 12.25 16.25Q12.35 16.15 12.35 16V12.35H16.025Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H12.35V7.975Q12.35 7.85 12.25 7.75Q12.15 7.65 12 7.65Q11.85 7.65 11.75 7.75Q11.65 7.85 11.65 8V11.65H7.975Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35H11.65V16.025Q11.65 16.15 11.75 16.25Q11.85 16.35 12 16.35ZM12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAddCircleRoundedW100Filled.displayName = 'AmauiIconMaterialAddCircleRoundedW100Filled';

export default IconMaterialAddCircleRoundedW100Filled;
