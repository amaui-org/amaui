import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbRoundedFilled'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM9 19Q8.575 19 8.288 18.712Q8 18.425 8 18Q8 17.575 8.288 17.288Q8.575 17 9 17H15Q15.425 17 15.713 17.288Q16 17.575 16 18Q16 18.425 15.713 18.712Q15.425 19 15 19ZM8.25 16Q6.525 14.975 5.513 13.25Q4.5 11.525 4.5 9.5Q4.5 6.375 6.688 4.188Q8.875 2 12 2Q15.125 2 17.312 4.188Q19.5 6.375 19.5 9.5Q19.5 11.525 18.488 13.25Q17.475 14.975 15.75 16Z"/>
    </Icon>
  );
});

IconMaterialLightbulbRoundedFilled.displayName = 'AmauiIconMaterialLightbulbRoundedFilled';

export default IconMaterialLightbulbRoundedFilled;
