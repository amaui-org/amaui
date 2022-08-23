import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastForwardRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardRoundedW100'
      short_name='FastForward'

      {...props}
    >
      <path d="M5.75 15.425Q5.375 15.7 4.975 15.475Q4.575 15.25 4.575 14.8V9.2Q4.575 8.75 4.975 8.525Q5.375 8.3 5.75 8.575L9.95 11.375Q10.3 11.6 10.3 12Q10.3 12.4 9.95 12.625ZM14.3 15.425Q13.925 15.7 13.525 15.475Q13.125 15.25 13.125 14.8V9.2Q13.125 8.75 13.525 8.525Q13.925 8.3 14.3 8.575L18.5 11.375Q18.85 11.6 18.85 12Q18.85 12.4 18.5 12.625ZM5.275 12ZM13.825 12ZM5.275 14.9 9.625 12 5.275 9.1ZM13.825 14.9 18.175 12 13.825 9.1Z"/>
    </Icon>
  );
});

IconMaterialFastForwardRoundedW100.displayName = 'AmauiIconMaterialFastForwardRoundedW100';

export default IconMaterialFastForwardRoundedW100;
