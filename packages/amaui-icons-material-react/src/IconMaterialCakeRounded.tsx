import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeRounded'
      short_name='Cake'

      {...props}
    >
      <path d="M4 22Q3.575 22 3.288 21.712Q3 21.425 3 21V16Q3 15.175 3.587 14.587Q4.175 14 5 14V10Q5 9.175 5.588 8.587Q6.175 8 7 8H11V6.55Q10.55 6.25 10.275 5.825Q10 5.4 10 4.8Q10 4.425 10.15 4.062Q10.3 3.7 10.6 3.4L11.65 2.35Q11.7 2.3 12 2.2Q12.05 2.2 12.35 2.35L13.4 3.4Q13.7 3.7 13.85 4.062Q14 4.425 14 4.8Q14 5.4 13.725 5.825Q13.45 6.25 13 6.55V8H17Q17.825 8 18.413 8.587Q19 9.175 19 10V14Q19.825 14 20.413 14.587Q21 15.175 21 16V21Q21 21.425 20.712 21.712Q20.425 22 20 22ZM7 14H17V10Q17 10 17 10Q17 10 17 10H7Q7 10 7 10Q7 10 7 10ZM5 20H19V16Q19 16 19 16Q19 16 19 16H5Q5 16 5 16Q5 16 5 16ZM7 14Q7 14 7 14Q7 14 7 14H17Q17 14 17 14Q17 14 17 14ZM5 20Q5 20 5 20Q5 20 5 20H19Q19 20 19 20Q19 20 19 20ZM19 14H5H19Z"/>
    </Icon>
  );
});

IconMaterialCakeRounded.displayName = 'AmauiIconMaterialCakeRounded';

export default IconMaterialCakeRounded;
