import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamRoundedW100Filled'
      short_name='Videocam'

      {...props}
    >
      <path d="M5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L19.4 9.425Q19.6 9.225 19.838 9.337Q20.075 9.45 20.075 9.725V14.275Q20.075 14.55 19.838 14.662Q19.6 14.775 19.4 14.575L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7Z"/>
    </Icon>
  );
});

IconMaterialVideocamRoundedW100Filled.displayName = 'AmauiIconMaterialVideocamRoundedW100Filled';

export default IconMaterialVideocamRoundedW100Filled;
