import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlifeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeRoundedFilled'
      short_name='Nightlife'

      {...props}
    >
      <path d="M6.5 20Q6.075 20 5.787 19.712Q5.5 19.425 5.5 19Q5.5 18.575 5.787 18.288Q6.075 18 6.5 18H7.5V14L2.525 6.55Q2.175 6.05 2.475 5.525Q2.775 5 3.375 5H13.625Q14.225 5 14.525 5.525Q14.825 6.05 14.475 6.55L9.5 14V18H10.5Q10.925 18 11.213 18.288Q11.5 18.575 11.5 19Q11.5 19.425 11.213 19.712Q10.925 20 10.5 20ZM6.4 9H10.6L12 7H5ZM16.5 20Q15.25 20 14.375 19.125Q13.5 18.25 13.5 17Q13.5 15.75 14.375 14.875Q15.25 14 16.5 14Q16.775 14 17.025 14.037Q17.275 14.075 17.5 14.2V7Q17.5 6.175 18.087 5.588Q18.675 5 19.5 5H21Q21.625 5 22.062 5.438Q22.5 5.875 22.5 6.5Q22.5 7.125 22.062 7.562Q21.625 8 21 8H19.5V17Q19.5 18.25 18.625 19.125Q17.75 20 16.5 20Z"/>
    </Icon>
  );
});

IconMaterialNightlifeRoundedFilled.displayName = 'AmauiIconMaterialNightlifeRoundedFilled';

export default IconMaterialNightlifeRoundedFilled;
