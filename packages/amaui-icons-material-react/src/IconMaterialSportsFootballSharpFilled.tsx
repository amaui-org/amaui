import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsFootballSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballSharpFilled'
      short_name='SportsFootball'

      {...props}
    >
      <path d="M9.075 20.975Q7.9 21.1 6.238 20.913Q4.575 20.725 3.7 20.3Q3.35 19.5 3.112 17.8Q2.875 16.1 3 14.9ZM11.45 20.575 3.4 12.525Q3.825 10.65 4.638 9.112Q5.45 7.575 6.525 6.475Q7.6 5.4 9.138 4.612Q10.675 3.825 12.45 3.425L20.55 11.525Q20.15 13.375 19.375 14.925Q18.6 16.475 17.525 17.55Q16.4 18.65 14.838 19.438Q13.275 20.225 11.45 20.575ZM9.4 16 16 9.4 14.6 8 8 14.6ZM20.95 9.15 14.875 3.025Q16.075 2.875 17.825 3.075Q19.575 3.275 20.3 3.7Q20.75 4.7 20.925 6.287Q21.1 7.875 20.95 9.15Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballSharpFilled.displayName = 'AmauiIconMaterialSportsFootballSharpFilled';

export default IconMaterialSportsFootballSharpFilled;
