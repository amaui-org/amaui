import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedSharpFilled'
      short_name='Speed'

      {...props}
    >
      <path d="M10.45 15.5Q11.075 16.125 12.025 16.087Q12.975 16.05 13.4 15.4L19 7L10.6 12.6Q9.95 13.05 9.888 13.962Q9.825 14.875 10.45 15.5ZM5.1 20Q4.55 20 4.088 19.762Q3.625 19.525 3.35 19.05Q2.7 17.875 2.35 16.613Q2 15.35 2 14Q2 11.925 2.788 10.1Q3.575 8.275 4.925 6.925Q6.275 5.575 8.1 4.787Q9.925 4 12 4Q14.05 4 15.85 4.775Q17.65 5.55 19 6.888Q20.35 8.225 21.15 10.012Q21.95 11.8 21.975 13.85Q22 15.225 21.663 16.538Q21.325 17.85 20.625 19.05Q20.35 19.525 19.888 19.762Q19.425 20 18.875 20Z"/>
    </Icon>
  );
});

IconMaterialSpeedSharpFilled.displayName = 'AmauiIconMaterialSpeedSharpFilled';

export default IconMaterialSpeedSharpFilled;
