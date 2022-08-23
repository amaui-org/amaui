import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsBaseballSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballSharpFilled'
      short_name='SportsBaseball'

      {...props}
    >
      <path d="M4.175 18.225Q3.125 16.875 2.562 15.287Q2 13.7 2 12Q2 10.3 2.562 8.712Q3.125 7.125 4.175 5.775Q5.625 6.9 6.45 8.537Q7.275 10.175 7.275 12Q7.275 13.825 6.45 15.463Q5.625 17.1 4.175 18.225ZM12 22Q10.2 22 8.562 21.4Q6.925 20.8 5.575 19.65Q7.3 18.225 8.275 16.238Q9.25 14.25 9.25 12Q9.25 9.75 8.275 7.762Q7.3 5.775 5.575 4.35Q6.925 3.2 8.562 2.6Q10.2 2 12 2Q13.8 2 15.438 2.6Q17.075 3.2 18.425 4.35Q16.7 5.775 15.725 7.762Q14.75 9.75 14.75 12Q14.75 14.25 15.725 16.238Q16.7 18.225 18.425 19.65Q17.075 20.8 15.438 21.4Q13.8 22 12 22ZM19.825 18.225Q18.375 17.1 17.55 15.463Q16.725 13.825 16.725 12Q16.725 10.175 17.55 8.537Q18.375 6.9 19.825 5.775Q20.875 7.125 21.438 8.712Q22 10.3 22 12Q22 13.7 21.438 15.287Q20.875 16.875 19.825 18.225Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballSharpFilled.displayName = 'AmauiIconMaterialSportsBaseballSharpFilled';

export default IconMaterialSportsBaseballSharpFilled;
