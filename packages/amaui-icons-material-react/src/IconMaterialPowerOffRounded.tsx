import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffRounded'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.1 21.9 14.85 17.65 14.5 18V20Q14.5 20.425 14.213 20.712Q13.925 21 13.5 21H10.5Q10.075 21 9.788 20.712Q9.5 20.425 9.5 20V18L6.575 15.075Q6.3 14.8 6.15 14.438Q6 14.075 6 13.675V8.85Q6 8.85 6 8.85Q6 8.85 6 8.85L2.075 4.875Q1.8 4.6 1.8 4.2Q1.8 3.8 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.525 20.525Q20.8 20.8 20.8 21.2Q20.8 21.6 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM11.5 19H12.5V17.15L13.4 16.25L8 10.8V13.65L11.5 17.15ZM17.65 14.8 16 13.15V9Q16 9 16 9Q16 9 16 9H11.85L8 5.15V4Q8 3.575 8.288 3.287Q8.575 3 9 3Q9.425 3 9.713 3.287Q10 3.575 10 4V7H14V4Q14 3.575 14.288 3.287Q14.575 3 15 3Q15.425 3 15.713 3.287Q16 3.575 16 4V7Q16.825 7 17.413 7.587Q18 8.175 18 9V13.675Q18 14.025 17.9 14.312Q17.8 14.6 17.65 14.8ZM13.95 11.1Q13.95 11.1 13.95 11.1Q13.95 11.1 13.95 11.1ZM10.7 13.525Z"/>
    </Icon>
  );
});

IconMaterialPowerOffRounded.displayName = 'AmauiIconMaterialPowerOffRounded';

export default IconMaterialPowerOffRounded;
