import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffRoundedW100Filled'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M18.825 20 17.075 18.2Q16.925 18.425 16.613 18.562Q16.3 18.7 15.925 18.7H5.525Q4.875 18.7 4.45 18.275Q4.025 17.85 4.025 17.2V6.8Q4.025 6.375 4.162 6.112Q4.3 5.85 4.525 5.7L3.2 4.375Q3.1 4.275 3.1 4.15Q3.1 4.025 3.225 3.9Q3.35 3.775 3.475 3.775Q3.6 3.775 3.725 3.9L19.35 19.525Q19.45 19.625 19.45 19.75Q19.45 19.875 19.325 20Q19.2 20.125 19.075 20.113Q18.95 20.1 18.825 20ZM17.425 14.75 7.975 5.3H15.925Q16.575 5.3 17 5.725Q17.425 6.15 17.425 6.8V11.5L19.5 9.425Q19.7 9.225 19.938 9.337Q20.175 9.45 20.175 9.725V14.275Q20.175 14.55 19.938 14.662Q19.7 14.775 19.5 14.575L17.425 12.5Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffRoundedW100Filled.displayName = 'AmauiIconMaterialVideocamOffRoundedW100Filled';

export default IconMaterialVideocamOffRoundedW100Filled;
