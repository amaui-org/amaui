import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastForwardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardRoundedW100Filled'
      short_name='FastForward'

      {...props}
    >
      <path d="M5.75 15.425Q5.375 15.7 4.975 15.475Q4.575 15.25 4.575 14.8V9.2Q4.575 8.75 4.975 8.525Q5.375 8.3 5.75 8.575L9.95 11.375Q10.275 11.6 10.275 12Q10.275 12.4 9.95 12.625ZM14.3 15.425Q13.925 15.7 13.525 15.475Q13.125 15.25 13.125 14.8V9.2Q13.125 8.75 13.525 8.525Q13.925 8.3 14.3 8.575L18.5 11.375Q18.825 11.6 18.825 12Q18.825 12.4 18.5 12.625Z"/>
    </Icon>
  );
});

IconMaterialFastForwardRoundedW100Filled.displayName = 'AmauiIconMaterialFastForwardRoundedW100Filled';

export default IconMaterialFastForwardRoundedW100Filled;
