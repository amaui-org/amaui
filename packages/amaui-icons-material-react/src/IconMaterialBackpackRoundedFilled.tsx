import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackRoundedFilled'
      short_name='Backpack'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 6.6 4.85 5.55Q5.7 4.5 7 4.15V3.5Q7 2.875 7.438 2.438Q7.875 2 8.5 2Q9.125 2 9.562 2.438Q10 2.875 10 3.5V4H14V3.5Q14 2.875 14.438 2.438Q14.875 2 15.5 2Q16.125 2 16.562 2.438Q17 2.875 17 3.5V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM15.5 16Q15.925 16 16.212 15.712Q16.5 15.425 16.5 15V13Q16.5 12.575 16.212 12.287Q15.925 12 15.5 12H8.5Q8.075 12 7.788 12.287Q7.5 12.575 7.5 13Q7.5 13.425 7.788 13.712Q8.075 14 8.5 14H14.5V15Q14.5 15.425 14.788 15.712Q15.075 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialBackpackRoundedFilled.displayName = 'AmauiIconMaterialBackpackRoundedFilled';

export default IconMaterialBackpackRoundedFilled;
