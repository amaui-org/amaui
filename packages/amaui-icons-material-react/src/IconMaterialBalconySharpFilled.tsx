import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBalconySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconySharpFilled'
      short_name='Balcony'

      {...props}
    >
      <path d="M8 12V10H10V12ZM14 12V10H16V12ZM3 22V14H4V10Q4 8.35 4.625 6.888Q5.25 5.425 6.338 4.338Q7.425 3.25 8.888 2.625Q10.35 2 12 2Q13.65 2 15.113 2.625Q16.575 3.25 17.663 4.338Q18.75 5.425 19.375 6.888Q20 8.35 20 10V14H21V22ZM5 20H7V16H5ZM9 20H11V16H9ZM6 14H11V4.075Q8.85 4.425 7.425 6.087Q6 7.75 6 10ZM13 14H18V10Q18 7.75 16.575 6.087Q15.15 4.425 13 4.075ZM13 20H15V16H13ZM17 20H19V16H17Z"/>
    </Icon>
  );
});

IconMaterialBalconySharpFilled.displayName = 'AmauiIconMaterialBalconySharpFilled';

export default IconMaterialBalconySharpFilled;
