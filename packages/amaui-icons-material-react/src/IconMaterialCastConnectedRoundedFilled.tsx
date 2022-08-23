import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastConnectedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedRoundedFilled'
      short_name='CastConnected'

      {...props}
    >
      <path d="M14.35 16H17Q17.425 16 17.712 15.712Q18 15.425 18 15V9Q18 8.575 17.712 8.287Q17.425 8 17 8H7Q9.65 9.1 11.588 11.188Q13.525 13.275 14.35 16ZM13 20Q13 17.725 12.137 15.725Q11.275 13.725 9.775 12.225Q8.275 10.725 6.275 9.863Q4.275 9 2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM9 20Q9 17.075 6.963 15.037Q4.925 13 2 13V11Q3.875 11 5.513 11.712Q7.15 12.425 8.363 13.637Q9.575 14.85 10.288 16.488Q11 18.125 11 20ZM5 20Q5 18.75 4.125 17.875Q3.25 17 2 17V15Q4.075 15 5.537 16.462Q7 17.925 7 20Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedRoundedFilled.displayName = 'AmauiIconMaterialCastConnectedRoundedFilled';

export default IconMaterialCastConnectedRoundedFilled;
