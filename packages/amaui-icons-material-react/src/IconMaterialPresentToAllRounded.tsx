import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPresentToAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllRounded'
      short_name='PresentToAll'

      {...props}
    >
      <path d="M12 16Q12.425 16 12.713 15.712Q13 15.425 13 15V11.85L13.9 12.725Q14.2 13 14.6 13.012Q15 13.025 15.3 12.725Q15.6 12.425 15.588 12.012Q15.575 11.6 15.3 11.3L12.7 8.7Q12.55 8.55 12.375 8.475Q12.2 8.4 12 8.4Q11.8 8.425 11.625 8.487Q11.45 8.55 11.3 8.7L8.7 11.3Q8.425 11.575 8.425 11.987Q8.425 12.4 8.725 12.7Q9.025 12.975 9.425 12.988Q9.825 13 10.125 12.7L11 11.825V15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllRounded.displayName = 'AmauiIconMaterialPresentToAllRounded';

export default IconMaterialPresentToAllRounded;
