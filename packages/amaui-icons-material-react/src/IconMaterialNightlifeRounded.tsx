import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeRounded'
      short_name='Nightlife'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19Q5 18.575 5.287 18.288Q5.575 18 6 18H7V14L2.025 6.55Q1.675 6.05 1.975 5.525Q2.275 5 2.875 5H13.125Q13.725 5 14.025 5.525Q14.325 6.05 13.975 6.55L9 14V18H10Q10.425 18 10.713 18.288Q11 18.575 11 19Q11 19.425 10.713 19.712Q10.425 20 10 20ZM5.9 9H10.1L11.5 7H4.5ZM16 20Q14.75 20 13.875 19.125Q13 18.25 13 17Q13 15.75 13.875 14.875Q14.75 14 16 14Q16.275 14 16.525 14.037Q16.775 14.075 17 14.2V7Q17 6.175 17.587 5.588Q18.175 5 19 5H20.5Q21.125 5 21.562 5.438Q22 5.875 22 6.5Q22 7.125 21.562 7.562Q21.125 8 20.5 8H19V17Q19 18.25 18.125 19.125Q17.25 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialNightlifeRounded.displayName = 'AmauiIconMaterialNightlifeRounded';

export default IconMaterialNightlifeRounded;
