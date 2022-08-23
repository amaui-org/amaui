import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthAmericaRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthAmericaRounded'
      short_name='SouthAmerica'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20 11.3 19.3Q11.15 19.15 11.075 18.975Q11 18.8 11 18.6V13Q10.175 13 9.588 12.412Q9 11.825 9 11V10L5.875 6.875Q5 7.925 4.5 9.225Q4 10.525 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20ZM13 19.95Q15.975 19.575 17.988 17.325Q20 15.075 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q10.9 4 9.887 4.287Q8.875 4.575 8 5.075V7H11.55Q12 7 12.413 7.2Q12.825 7.4 13.1 7.75L14.5 9.5H16Q16.425 9.5 16.712 9.787Q17 10.075 17 10.5V11.55Q17 11.775 16.938 11.975Q16.875 12.175 16.75 12.375L13 18Z"/>
    </Icon>
  );
});

IconMaterialSouthAmericaRounded.displayName = 'AmauiIconMaterialSouthAmericaRounded';

export default IconMaterialSouthAmericaRounded;
