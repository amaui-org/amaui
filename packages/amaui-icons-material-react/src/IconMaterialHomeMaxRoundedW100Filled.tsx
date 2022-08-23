import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxRoundedW100Filled'
      short_name='HomeMax'

      {...props}
    >
      <path d="M9.05 17.4Q8.75 17.4 8.525 17.2Q8.3 17 8.3 16.7H5Q3.875 16.7 3.088 15.912Q2.3 15.125 2.3 14V9Q2.3 7.875 3.088 7.088Q3.875 6.3 5 6.3H19Q20.125 6.3 20.913 7.088Q21.7 7.875 21.7 9V14Q21.7 15.125 20.913 15.912Q20.125 16.7 19 16.7H15.7Q15.7 17 15.475 17.2Q15.25 17.4 14.95 17.4Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxRoundedW100Filled.displayName = 'AmauiIconMaterialHomeMaxRoundedW100Filled';

export default IconMaterialHomeMaxRoundedW100Filled;
