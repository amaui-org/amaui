import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropSharpFilled'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 22Q8.825 22 6.413 19.788Q4 17.575 4 13.8Q4 11.3 5.988 8.363Q7.975 5.425 12 2Q16.025 5.425 18.013 8.363Q20 11.3 20 13.8Q20 17.575 17.587 19.788Q15.175 22 12 22ZM12.275 19Q12.575 18.975 12.788 18.763Q13 18.55 13 18.25Q13 17.9 12.775 17.688Q12.55 17.475 12.2 17.5Q11.175 17.575 10.025 16.938Q8.875 16.3 8.575 14.625Q8.525 14.35 8.312 14.175Q8.1 14 7.825 14Q7.475 14 7.25 14.262Q7.025 14.525 7.1 14.875Q7.525 17.15 9.1 18.125Q10.675 19.1 12.275 19Z"/>
    </Icon>
  );
});

IconMaterialWaterDropSharpFilled.displayName = 'AmauiIconMaterialWaterDropSharpFilled';

export default IconMaterialWaterDropSharpFilled;
