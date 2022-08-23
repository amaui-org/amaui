import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatSharpFilled'
      short_name='Nat'

      {...props}
    >
      <path d="M4 15Q2.75 15 1.875 14.125Q1 13.25 1 12Q1 10.75 1.875 9.875Q2.75 9 4 9Q4.975 9 5.738 9.562Q6.5 10.125 6.8 11H11V13H6.8Q6.5 13.875 5.738 14.438Q4.975 15 4 15ZM4 13Q4.425 13 4.713 12.712Q5 12.425 5 12Q5 11.575 4.713 11.287Q4.425 11 4 11Q3.575 11 3.288 11.287Q3 11.575 3 12Q3 12.425 3.288 12.712Q3.575 13 4 13ZM5 22V20Q8.325 20 10.663 17.663Q13 15.325 13 12Q13 8.675 10.663 6.337Q8.325 4 5 4V2Q8.925 2 11.75 4.6Q14.575 7.2 14.95 11H19.15L17.6 9.4L19 8L23 12L19 16L17.6 14.6L19.15 13H14.95Q14.575 16.8 11.75 19.4Q8.925 22 5 22Z"/>
    </Icon>
  );
});

IconMaterialNatSharpFilled.displayName = 'AmauiIconMaterialNatSharpFilled';

export default IconMaterialNatSharpFilled;
