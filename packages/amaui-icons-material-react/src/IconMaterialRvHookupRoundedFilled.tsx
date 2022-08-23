import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRvHookupRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupRoundedFilled'
      short_name='RvHookup'

      {...props}
    >
      <path d="M18.8 20.8Q18.525 20.525 18.525 20.1Q18.525 19.675 18.8 19.4L19.2 19H11.8Q11.5 19.9 10.725 20.45Q9.95 21 9 21Q8.05 21 7.288 20.45Q6.525 19.9 6.2 19H5Q3.75 19 2.875 18.125Q2 17.25 2 16V10H8V7H2.975Q2.55 7 2.275 6.713Q2 6.425 2 6Q2 5.575 2.288 5.287Q2.575 5 3 5H15Q15.825 5 16.413 5.588Q17 6.175 17 7V17H19.15L18.8 16.65Q18.5 16.35 18.5 15.938Q18.5 15.525 18.8 15.225Q19.1 14.925 19.513 14.925Q19.925 14.925 20.225 15.225L22.3 17.3Q22.45 17.45 22.513 17.625Q22.575 17.8 22.575 18Q22.575 18.2 22.513 18.375Q22.45 18.55 22.3 18.7L20.175 20.825Q19.9 21.1 19.5 21.1Q19.1 21.1 18.8 20.8ZM10 10H15V7Q15 7 15 7Q15 7 15 7H10ZM9 19Q9.425 19 9.713 18.712Q10 18.425 10 18Q10 17.575 9.713 17.288Q9.425 17 9 17Q8.575 17 8.288 17.288Q8 17.575 8 18Q8 18.425 8.288 18.712Q8.575 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialRvHookupRoundedFilled.displayName = 'AmauiIconMaterialRvHookupRoundedFilled';

export default IconMaterialRvHookupRoundedFilled;
