import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenRotationAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAltRounded'
      short_name='ScreenRotationAlt'

      {...props}
    >
      <path d="M12.175 21.4 5.525 14.75Q5.225 14.45 5.213 14.037Q5.2 13.625 5.5 13.325Q5.8 13.025 6.213 13.025Q6.625 13.025 6.925 13.325L13.6 20Q13.6 20 13.6 20Q13.6 20 13.6 20L18.6 15H17Q16.575 15 16.288 14.712Q16 14.425 16 14Q16 13.575 16.288 13.287Q16.575 13 17 13H21Q21.425 13 21.712 13.287Q22 13.575 22 14V18Q22 18.425 21.712 18.712Q21.425 19 21 19Q20.575 19 20.288 18.712Q20 18.425 20 18V16.4L15 21.4Q14.425 21.975 13.588 21.975Q12.75 21.975 12.175 21.4ZM7 11H3Q2.575 11 2.288 10.712Q2 10.425 2 10V6Q2 5.575 2.288 5.287Q2.575 5 3 5Q3.425 5 3.713 5.287Q4 5.575 4 6V7.6L9 2.6Q9.575 2.025 10.413 2.025Q11.25 2.025 11.825 2.6L18.475 9.25Q18.775 9.55 18.788 9.962Q18.8 10.375 18.5 10.675Q18.2 10.975 17.788 10.975Q17.375 10.975 17.075 10.675L10.4 4Q10.4 4 10.4 4Q10.4 4 10.4 4L5.4 9H7Q7.425 9 7.713 9.287Q8 9.575 8 10Q8 10.425 7.713 10.712Q7.425 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAltRounded.displayName = 'AmauiIconMaterialScreenRotationAltRounded';

export default IconMaterialScreenRotationAltRounded;
