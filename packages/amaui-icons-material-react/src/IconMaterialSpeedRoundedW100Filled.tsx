import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedRoundedW100Filled'
      short_name='Speed'

      {...props}
    >
      <path d="M10.85 15.1Q11.275 15.525 11.938 15.475Q12.6 15.425 12.9 15L16.525 10.05Q16.725 9.775 16.488 9.537Q16.25 9.3 15.975 9.5L11 13.1Q10.55 13.4 10.488 14.037Q10.425 14.675 10.85 15.1ZM5.1 18.7Q4.9 18.7 4.738 18.6Q4.575 18.5 4.45 18.3Q4 17.5 3.65 16.45Q3.3 15.4 3.3 14Q3.3 12.225 3.975 10.637Q4.65 9.05 5.812 7.862Q6.975 6.675 8.575 5.988Q10.175 5.3 12 5.3Q13.85 5.3 15.438 5.975Q17.025 6.65 18.188 7.812Q19.35 8.975 20.025 10.55Q20.7 12.125 20.7 13.9Q20.7 15.15 20.425 16.212Q20.15 17.275 19.55 18.4Q19.475 18.525 19.3 18.612Q19.125 18.7 18.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialSpeedRoundedW100Filled.displayName = 'AmauiIconMaterialSpeedRoundedW100Filled';

export default IconMaterialSpeedRoundedW100Filled;
