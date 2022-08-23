import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsHockeySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeySharpFilled'
      short_name='SportsHockey'

      {...props}
    >
      <path d="M2 20V17Q2 16.575 2.288 16.288Q2.575 16 3 16H4V20ZM5 20V16H9L9.85 14.05L11.45 17.55L10.6 19.45Q10.475 19.725 10.225 19.863Q9.975 20 9.7 20ZM20 20V16H21Q21.425 16 21.712 16.288Q22 16.575 22 17V20ZM19 20H14.3Q14.025 20 13.775 19.863Q13.525 19.725 13.4 19.45L6.35 4H9.7L12 9.2L14.3 4H17.65L13.6 12.85L15 16H19Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeySharpFilled.displayName = 'AmauiIconMaterialSportsHockeySharpFilled';

export default IconMaterialSportsHockeySharpFilled;
