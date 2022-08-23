import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseRoundedW100'
      short_name='Close'

      {...props}
    >
      <path d="M12 12.5 6.65 17.85Q6.55 17.95 6.413 17.962Q6.275 17.975 6.15 17.85Q6.025 17.725 6.025 17.6Q6.025 17.475 6.15 17.35L11.5 12L6.15 6.65Q6.05 6.55 6.038 6.412Q6.025 6.275 6.15 6.15Q6.275 6.025 6.4 6.025Q6.525 6.025 6.65 6.15L12 11.5L17.35 6.15Q17.45 6.05 17.587 6.037Q17.725 6.025 17.85 6.15Q17.975 6.275 17.975 6.4Q17.975 6.525 17.85 6.65L12.5 12L17.85 17.35Q17.95 17.45 17.962 17.587Q17.975 17.725 17.85 17.85Q17.725 17.975 17.6 17.975Q17.475 17.975 17.35 17.85Z"/>
    </Icon>
  );
});

IconMaterialCloseRoundedW100.displayName = 'AmauiIconMaterialCloseRoundedW100';

export default IconMaterialCloseRoundedW100;
