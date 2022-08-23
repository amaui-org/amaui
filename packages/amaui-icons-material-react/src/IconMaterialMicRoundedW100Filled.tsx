import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicRoundedW100Filled'
      short_name='Mic'

      {...props}
    >
      <path d="M12 12.7Q11.275 12.7 10.788 12.212Q10.3 11.725 10.3 11V5Q10.3 4.275 10.788 3.787Q11.275 3.3 12 3.3Q12.725 3.3 13.213 3.787Q13.7 4.275 13.7 5V11Q13.7 11.725 13.213 12.212Q12.725 12.7 12 12.7ZM12 20.35Q11.85 20.35 11.75 20.25Q11.65 20.15 11.65 20V16.75Q9.475 16.55 7.95 15.025Q6.425 13.5 6.3 11.35Q6.3 11.2 6.4 11.1Q6.5 11 6.65 11Q6.775 11 6.875 11.1Q6.975 11.2 7 11.35Q7.125 13.3 8.575 14.65Q10.025 16 12 16Q13.975 16 15.425 14.65Q16.875 13.3 17 11.35Q17.025 11.2 17.113 11.1Q17.2 11 17.35 11Q17.5 11 17.6 11.1Q17.7 11.2 17.7 11.35Q17.575 13.5 16.05 15.025Q14.525 16.55 12.35 16.75V20Q12.35 20.15 12.25 20.25Q12.15 20.35 12 20.35Z"/>
    </Icon>
  );
});

IconMaterialMicRoundedW100Filled.displayName = 'AmauiIconMaterialMicRoundedW100Filled';

export default IconMaterialMicRoundedW100Filled;
