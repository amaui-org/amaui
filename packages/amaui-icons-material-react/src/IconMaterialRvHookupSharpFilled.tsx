import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRvHookupSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupSharpFilled'
      short_name='RvHookup'

      {...props}
    >
      <path d="M19.5 21.5 18.1 20.1 19.2 19H11.8Q11.5 19.9 10.725 20.45Q9.95 21 9 21Q8.05 21 7.288 20.45Q6.525 19.9 6.2 19H2V10H8V7H2V5H17V17H19.15L18.1 15.95L19.5 14.5L23 18ZM10 10H15V7H10ZM9 19Q9.425 19 9.713 18.712Q10 18.425 10 18Q10 17.575 9.713 17.288Q9.425 17 9 17Q8.575 17 8.288 17.288Q8 17.575 8 18Q8 18.425 8.288 18.712Q8.575 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialRvHookupSharpFilled.displayName = 'AmauiIconMaterialRvHookupSharpFilled';

export default IconMaterialRvHookupSharpFilled;
