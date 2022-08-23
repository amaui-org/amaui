import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsHockeyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyRounded'
      short_name='SportsHockey'

      {...props}
    >
      <path d="M3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V17Q2 16.575 2.288 16.288Q2.575 16 3 16H4V20ZM5 20V16H9L9.85 14.05L11.45 17.55L10.6 19.45Q10.475 19.725 10.225 19.863Q9.975 20 9.7 20ZM20 20V16H21Q21.425 16 21.712 16.288Q22 16.575 22 17V19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM14.3 20Q14.025 20 13.775 19.863Q13.525 19.725 13.4 19.45L7.4 6.325Q6.975 5.375 7.413 4.688Q7.85 4 8.925 4Q9.25 4 9.562 4.212Q9.875 4.425 10 4.7L12 9.2L14 4.7Q14.125 4.425 14.438 4.212Q14.75 4 15.1 4Q16.15 4 16.588 4.688Q17.025 5.375 16.6 6.325L13.6 12.85L15 16H19V20Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyRounded.displayName = 'AmauiIconMaterialSportsHockeyRounded';

export default IconMaterialSportsHockeyRounded;
