import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookRounded'
      short_name='Book'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H16V10.125Q16 10.425 15.75 10.562Q15.5 10.7 15.25 10.55L13.5 9.5L11.75 10.55Q11.5 10.7 11.25 10.562Q11 10.425 11 10.125V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM11 4H13.5H16ZM6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4H11H13.5H16H18Q18 4 18 4Q18 4 18 4Q18 4 18 4Q18 4 18 4Z"/>
    </Icon>
  );
});

IconMaterialBookRounded.displayName = 'AmauiIconMaterialBookRounded';

export default IconMaterialBookRounded;
