import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatReadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadRoundedW100Filled'
      short_name='MarkChatRead'

      {...props}
    >
      <path d="M17.35 18.1 21.35 14.1Q21.45 14 21.6 13.988Q21.75 13.975 21.85 14.1Q21.95 14.2 21.95 14.35Q21.95 14.5 21.85 14.6L17.875 18.55Q17.65 18.775 17.35 18.775Q17.05 18.775 16.825 18.55L14.975 16.7Q14.875 16.6 14.875 16.45Q14.875 16.3 14.975 16.2Q15.075 16.1 15.225 16.1Q15.375 16.1 15.475 16.2ZM6.1 16.7 4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V11.65H14.15Q13.525 11.65 13.088 12.087Q12.65 12.525 12.65 13.15V16.7Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadRoundedW100Filled.displayName = 'AmauiIconMaterialMarkChatReadRoundedW100Filled';

export default IconMaterialMarkChatReadRoundedW100Filled;
