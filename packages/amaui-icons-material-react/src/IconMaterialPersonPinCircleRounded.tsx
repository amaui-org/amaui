import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinCircleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircleRounded'
      short_name='PersonPinCircle'

      {...props}
    >
      <path d="M12 15Q13.4 15 14.525 14.312Q15.65 13.625 16.3 12.5Q15.425 11.775 14.325 11.387Q13.225 11 12 11Q10.775 11 9.675 11.387Q8.575 11.775 7.7 12.5Q8.35 13.625 9.475 14.312Q10.6 15 12 15ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM12 19.35Q15.05 16.55 16.525 14.262Q18 11.975 18 10.2Q18 7.475 16.262 5.737Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2Q6 11.975 7.475 14.262Q8.95 16.55 12 19.35ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625ZM12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircleRounded.displayName = 'AmauiIconMaterialPersonPinCircleRounded';

export default IconMaterialPersonPinCircleRounded;
