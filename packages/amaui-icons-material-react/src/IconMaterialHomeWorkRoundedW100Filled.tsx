import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkRoundedW100Filled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M3 19.7Q2.725 19.7 2.513 19.487Q2.3 19.275 2.3 19V12Q2.3 11.825 2.388 11.688Q2.475 11.55 2.6 11.45L7.6 7.9Q7.8 7.775 8 7.775Q8.2 7.775 8.4 7.9L13.4 11.45Q13.525 11.55 13.613 11.688Q13.7 11.825 13.7 12V19Q13.7 19.275 13.488 19.487Q13.275 19.7 13 19.7ZM15.7 19.7V11.425Q15.7 11.05 15.538 10.725Q15.375 10.4 15.075 10.2L10.5 6.925V5Q10.5 4.725 10.713 4.512Q10.925 4.3 11.2 4.3H21Q21.275 4.3 21.488 4.512Q21.7 4.725 21.7 5V19Q21.7 19.275 21.488 19.487Q21.275 19.7 21 19.7ZM6.65 19H9.35V14.65H6.65ZM17.3 16.7H18.7V15.3H17.3ZM17.3 12.7H18.7V11.3H17.3ZM17.3 8.7H18.7V7.3H17.3Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkRoundedW100Filled.displayName = 'AmauiIconMaterialHomeWorkRoundedW100Filled';

export default IconMaterialHomeWorkRoundedW100Filled;
