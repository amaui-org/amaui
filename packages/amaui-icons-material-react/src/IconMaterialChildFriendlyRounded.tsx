import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChildFriendlyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyRounded'
      short_name='ChildFriendly'

      {...props}
    >
      <path d="M8.5 22Q7.85 22 7.425 21.575Q7 21.15 7 20.5Q7 19.85 7.425 19.425Q7.85 19 8.5 19Q9.15 19 9.575 19.425Q10 19.85 10 20.5Q10 21.15 9.575 21.575Q9.15 22 8.5 22ZM19.5 22Q18.85 22 18.425 21.575Q18 21.15 18 20.5Q18 19.85 18.425 19.425Q18.85 19 19.5 19Q20.15 19 20.575 19.425Q21 19.85 21 20.5Q21 21.15 20.575 21.575Q20.15 22 19.5 22ZM13.5 7.6 9.6 2.9Q10.5 2.45 11.55 2.225Q12.6 2 13.8 2Q14.675 2 15.488 2.162Q16.3 2.325 17.025 2.65Q17.575 2.9 17.613 3.425Q17.65 3.95 17.175 4.375ZM12 18Q9.925 18 8.463 16.538Q7 15.075 7 13V5.3L6.5 4.7Q6.15 4.275 5.913 4.137Q5.675 4 5.4 4Q4.975 4 4.65 4.237Q4.325 4.475 4.15 4.825Q4 5.15 3.788 5.325Q3.575 5.5 3.3 5.5Q2.725 5.5 2.375 5.1Q2.025 4.7 2.225 4.225Q2.6 3.25 3.45 2.625Q4.3 2 5.4 2Q6.15 2 6.775 2.35Q7.4 2.7 8.05 3.45L18.75 16.35Q19.175 16.85 18.913 17.425Q18.65 18 18 18ZM12 16H15.85L9 7.7V13Q9 14.25 9.875 15.125Q10.75 16 12 16ZM12.425 11.85Q12.425 11.85 12.425 11.85Q12.425 11.85 12.425 11.85Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyRounded.displayName = 'AmauiIconMaterialChildFriendlyRounded';

export default IconMaterialChildFriendlyRounded;
