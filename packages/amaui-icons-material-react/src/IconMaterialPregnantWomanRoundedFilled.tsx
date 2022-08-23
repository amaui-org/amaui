import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPregnantWomanRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWomanRoundedFilled'
      short_name='PregnantWoman'

      {...props}
    >
      <path d="M11 6Q10.175 6 9.588 5.412Q9 4.825 9 4Q9 3.175 9.588 2.587Q10.175 2 11 2Q11.825 2 12.413 2.587Q13 3.175 13 4Q13 4.825 12.413 5.412Q11.825 6 11 6ZM11.5 22Q10.875 22 10.438 21.562Q10 21.125 10 20.5V17H9Q8.575 17 8.288 16.712Q8 16.425 8 16V10Q8 8.75 8.875 7.875Q9.75 7 11 7Q12.25 7 13.125 7.875Q14 8.75 14 10Q14.9 10.375 15.45 11.2Q16 12.025 16 13V16Q16 16.425 15.713 16.712Q15.425 17 15 17H13V20.5Q13 21.125 12.562 21.562Q12.125 22 11.5 22Z"/>
    </Icon>
  );
});

IconMaterialPregnantWomanRoundedFilled.displayName = 'AmauiIconMaterialPregnantWomanRoundedFilled';

export default IconMaterialPregnantWomanRoundedFilled;
