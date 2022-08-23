import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleRoundedW100Filled'
      short_name='PersonPinCircle'

      {...props}
    >
      <path d="M12 14.35Q13.05 14.35 13.938 13.887Q14.825 13.425 15.425 12.65Q14.675 12.15 13.812 11.9Q12.95 11.65 12 11.65Q11.05 11.65 10.188 11.9Q9.325 12.15 8.575 12.65Q9.175 13.425 10.062 13.887Q10.95 14.35 12 14.35ZM12 9.35Q12.575 9.35 12.963 8.962Q13.35 8.575 13.35 8Q13.35 7.425 12.963 7.037Q12.575 6.65 12 6.65Q11.425 6.65 11.038 7.037Q10.65 7.425 10.65 8Q10.65 8.575 11.038 8.962Q11.425 9.35 12 9.35ZM12 21.2Q11.85 21.2 11.725 21.163Q11.6 21.125 11.475 21.025Q8.025 17.825 6.338 15.087Q4.65 12.35 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.35 17.663 15.087Q15.975 17.825 12.525 21.025Q12.425 21.125 12.288 21.163Q12.15 21.2 12 21.2Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleRoundedW100Filled.displayName = 'AmauiIconMaterialPersonPinCircleRoundedW100Filled';

export default IconMaterialPersonPinCircleRoundedW100Filled;
