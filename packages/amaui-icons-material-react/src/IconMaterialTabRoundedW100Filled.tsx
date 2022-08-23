import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRoundedW100Filled'
      short_name='Tab'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM13 8.5Q13 9.125 13.438 9.562Q13.875 10 14.5 10H20V6.8Q20 6.475 19.763 6.237Q19.525 6 19.2 6H13Z"/>
    </Icon>
  );
});

IconMaterialTabRoundedW100Filled.displayName = 'AmauiIconMaterialTabRoundedW100Filled';

export default IconMaterialTabRoundedW100Filled;
