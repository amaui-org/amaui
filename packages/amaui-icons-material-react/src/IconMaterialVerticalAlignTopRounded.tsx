import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopRounded'
      short_name='VerticalAlignTop'

      {...props}
    >
      <path d="M5 5Q4.575 5 4.287 4.712Q4 4.425 4 4Q4 3.575 4.287 3.287Q4.575 3 5 3H19Q19.425 3 19.712 3.287Q20 3.575 20 4Q20 4.425 19.712 4.712Q19.425 5 19 5ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V10.8L9.075 12.725Q8.8 13 8.4 13Q8 13 7.7 12.7Q7.425 12.425 7.425 12Q7.425 11.575 7.7 11.3L11.3 7.7Q11.45 7.55 11.625 7.488Q11.8 7.425 12 7.425Q12.2 7.425 12.375 7.488Q12.55 7.55 12.7 7.7L16.325 11.325Q16.6 11.6 16.6 12Q16.6 12.4 16.3 12.7Q16.025 12.975 15.6 12.975Q15.175 12.975 14.9 12.7L13 10.8V20Q13 20.425 12.713 20.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopRounded.displayName = 'AmauiIconMaterialVerticalAlignTopRounded';

export default IconMaterialVerticalAlignTopRounded;
