import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEcoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoRoundedFilled'
      short_name='Eco'

      {...props}
    >
      <path d="M11.25 22Q10.425 22 9.588 21.812Q8.75 21.625 7.875 21.275Q8.175 18.25 9.625 15.625Q11.075 13 13.35 11Q10.6 12.4 8.588 14.7Q6.575 17 5.775 19.95Q5.675 19.875 5.588 19.788Q5.5 19.7 5.4 19.6Q4.225 18.425 3.613 16.975Q3 15.525 3 13.95Q3 12.25 3.675 10.7Q4.35 9.15 5.55 7.95Q7.575 5.925 10.8 5.312Q14.025 4.7 19.85 5.2Q20.3 11.225 19.7 14.337Q19.1 17.45 17.1 19.45Q15.875 20.675 14.363 21.337Q12.85 22 11.25 22Z"/>
    </Icon>
  );
});

IconMaterialEcoRoundedFilled.displayName = 'AmauiIconMaterialEcoRoundedFilled';

export default IconMaterialEcoRoundedFilled;
