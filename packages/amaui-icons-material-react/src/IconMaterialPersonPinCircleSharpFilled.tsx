import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinCircleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleSharpFilled'
      short_name='PersonPinCircle'

      {...props}
    >
      <path d="M12 22Q11.65 22 11.4 21.8Q11.15 21.6 11.025 21.275Q10.55 19.875 9.838 18.65Q9.125 17.425 7.85 15.775Q6.575 14.125 5.787 12.625Q5 11.125 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q14.925 2 16.962 4.037Q19 6.075 19 9Q19 11.275 18.138 12.787Q17.275 14.3 16.15 15.775Q14.8 17.575 14.113 18.762Q13.425 19.95 12.975 21.275Q12.85 21.625 12.588 21.812Q12.325 22 12 22ZM12 13Q13.125 13 14.125 12.525Q15.125 12.05 15.85 11.2Q15 10.625 14.025 10.312Q13.05 10 12 10Q10.95 10 9.975 10.312Q9 10.625 8.15 11.2Q8.875 12.05 9.875 12.525Q10.875 13 12 13ZM12 9Q12.825 9 13.413 8.412Q14 7.825 14 7Q14 6.175 13.413 5.588Q12.825 5 12 5Q11.175 5 10.588 5.588Q10 6.175 10 7Q10 7.825 10.588 8.412Q11.175 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleSharpFilled.displayName = 'AmauiIconMaterialPersonPinCircleSharpFilled';

export default IconMaterialPersonPinCircleSharpFilled;
