import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEarbudsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsRoundedFilled'
      short_name='Earbuds'

      {...props}
    >
      <path d="M8 21Q5.925 21 4.463 19.538Q3 18.075 3 16V6.2Q3 4.85 3.825 3.925Q4.65 3 6 3Q7.35 3 8.175 3.825Q9 4.65 9 6Q9 7.275 8.137 8.137Q7.275 9 6 9H5V16Q5 17.25 5.875 18.125Q6.75 19 8 19Q9.25 19 10.125 18.125Q11 17.25 11 16V8Q11 5.925 12.463 4.463Q13.925 3 16 3Q18.075 3 19.538 4.463Q21 5.925 21 8V18Q21 19.275 20.038 20.137Q19.075 21 17.8 21Q16.525 21 15.763 20.137Q15 19.275 15 18Q15 16.725 15.863 15.863Q16.725 15 18 15H19V8Q19 6.75 18.125 5.875Q17.25 5 16 5Q14.75 5 13.875 5.875Q13 6.75 13 8V16Q13 18.075 11.538 19.538Q10.075 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialEarbudsRoundedFilled.displayName = 'AmauiIconMaterialEarbudsRoundedFilled';

export default IconMaterialEarbudsRoundedFilled;
