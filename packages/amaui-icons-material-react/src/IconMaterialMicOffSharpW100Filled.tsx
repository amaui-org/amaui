import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffSharpW100Filled'
      short_name='MicOff'

      {...props}
    >
      <path d="M16.425 12.95 15.875 12.35Q15.95 12.15 16.012 11.787Q16.075 11.425 16.075 11H16.775Q16.775 11.65 16.675 12.112Q16.575 12.575 16.425 12.95ZM12.775 9.3 9.375 5.85V5Q9.375 4.275 9.863 3.787Q10.35 3.3 11.075 3.3Q11.8 3.3 12.288 3.787Q12.775 4.275 12.775 5V9.3Q12.775 9.3 12.775 9.3Q12.775 9.3 12.775 9.3ZM19.975 20.3 14.875 15.2Q14.15 15.925 13.125 16.312Q12.1 16.7 11.425 16.75V20.35H10.725V16.75Q8.95 16.625 7.163 15.137Q5.375 13.65 5.375 11H6.075Q6.075 13.075 7.537 14.537Q9 16 11.075 16Q12.025 16 12.95 15.613Q13.875 15.225 14.375 14.7L2.125 2.45L2.625 1.95L20.475 19.8Z"/>
    </Icon>
  );
});

IconMaterialMicOffSharpW100Filled.displayName = 'AmauiIconMaterialMicOffSharpW100Filled';

export default IconMaterialMicOffSharpW100Filled;
