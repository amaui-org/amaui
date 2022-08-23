import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWomanRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanRoundedFilled'
      short_name='Woman'

      {...props}
    >
      <path d="M11 22Q10.575 22 10.288 21.712Q10 21.425 10 21V16H8.475Q7.95 16 7.65 15.562Q7.35 15.125 7.55 14.625L10.05 8.3Q10.3 7.7 10.825 7.35Q11.35 7 12 7Q12.65 7 13.175 7.35Q13.7 7.7 13.95 8.3L16.45 14.625Q16.65 15.125 16.35 15.562Q16.05 16 15.525 16H14V21Q14 21.425 13.713 21.712Q13.425 22 13 22ZM12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialWomanRoundedFilled.displayName = 'AmauiIconMaterialWomanRoundedFilled';

export default IconMaterialWomanRoundedFilled;
