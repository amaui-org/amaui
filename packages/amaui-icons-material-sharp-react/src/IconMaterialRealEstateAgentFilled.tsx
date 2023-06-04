import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRealEstateAgentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentFilled'

      short_name='RealEstateAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 15v-2.4L9.35 9H7V6.5l7-5 7 5V15ZM1 22V11h4v11Zm13 0-7-1.975V11h1.975L17 14v2h-4l-1.75-.675-.35.925L13 17h9v2Zm.5-14h1V7h-1Zm-2 0h1V7h-1Zm2 2h1V9h-1Zm-2 0h1V9h-1Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentFilled.displayName = 'AmauiIconMaterialRealEstateAgentFilled';

export default IconMaterialRealEstateAgentFilled;
