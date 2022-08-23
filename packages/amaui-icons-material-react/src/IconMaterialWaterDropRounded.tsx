import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropRounded'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.425 5.8 8.65Q7.6 5.875 11.25 2.65Q11.4 2.525 11.6 2.45Q11.8 2.375 12 2.375Q12.2 2.375 12.4 2.45Q12.6 2.525 12.75 2.65Q16.4 5.875 18.2 8.65Q20 11.425 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22ZM12 20Q14.525 20 16.262 18.275Q18 16.55 18 13.8Q18 12.025 16.525 9.737Q15.05 7.45 12 4.65Q8.95 7.45 7.475 9.737Q6 12.025 6 13.8Q6 16.55 7.737 18.275Q9.475 20 12 20ZM12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8ZM12.275 19Q12.575 18.975 12.788 18.763Q13 18.55 13 18.25Q13 17.9 12.775 17.688Q12.55 17.475 12.2 17.5Q11.175 17.575 10.025 16.938Q8.875 16.3 8.575 14.625Q8.525 14.35 8.312 14.175Q8.1 14 7.825 14Q7.475 14 7.25 14.262Q7.025 14.525 7.1 14.875Q7.525 17.15 9.1 18.125Q10.675 19.1 12.275 19Z"/>
    </Icon>
  );
});

IconMaterialWaterDropRounded.displayName = 'AmauiIconMaterialWaterDropRounded';

export default IconMaterialWaterDropRounded;
