import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterRounded'
      short_name='VerticalAlignCenter'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V17.8L10.075 18.725Q9.8 19 9.4 19Q9 19 8.7 18.7Q8.425 18.425 8.425 18Q8.425 17.575 8.7 17.3L11.3 14.7Q11.45 14.55 11.625 14.487Q11.8 14.425 12 14.425Q12.2 14.425 12.375 14.487Q12.55 14.55 12.7 14.7L15.325 17.325Q15.6 17.6 15.6 18Q15.6 18.4 15.3 18.7Q15.025 18.975 14.6 18.975Q14.175 18.975 13.9 18.7L13 17.8V21Q13 21.425 12.713 21.712Q12.425 22 12 22ZM5 13Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H19Q19.425 11 19.712 11.287Q20 11.575 20 12Q20 12.425 19.712 12.712Q19.425 13 19 13ZM12 9.575Q11.8 9.575 11.625 9.512Q11.45 9.45 11.3 9.3L8.675 6.675Q8.4 6.4 8.4 6Q8.4 5.6 8.7 5.3Q8.975 5.025 9.4 5.025Q9.825 5.025 10.1 5.3L11 6.2V3Q11 2.575 11.288 2.287Q11.575 2 12 2Q12.425 2 12.713 2.287Q13 2.575 13 3V6.2L13.925 5.275Q14.2 5 14.6 5Q15 5 15.3 5.3Q15.575 5.575 15.575 6Q15.575 6.425 15.3 6.7L12.7 9.3Q12.55 9.45 12.375 9.512Q12.2 9.575 12 9.575Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterRounded.displayName = 'AmauiIconMaterialVerticalAlignCenterRounded';

export default IconMaterialVerticalAlignCenterRounded;
