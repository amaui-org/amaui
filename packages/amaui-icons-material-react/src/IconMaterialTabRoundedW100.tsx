import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRoundedW100'
      short_name='Tab'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM13 8.5V6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V10H14.5Q13.875 10 13.438 9.562Q13 9.125 13 8.5ZM4 17.2V6.8Q4 6.475 4 6.237Q4 6 4 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18H4Q4 18 4 17.775Q4 17.55 4 17.2Z"/>
    </Icon>
  );
});

IconMaterialTabRoundedW100.displayName = 'AmauiIconMaterialTabRoundedW100';

export default IconMaterialTabRoundedW100;
