import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkChatReadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadRoundedFilled'
      short_name='MarkChatRead'

      {...props}
    >
      <path d="M17.35 17.175 20.9 13.625Q21.2 13.325 21.6 13.337Q22 13.35 22.3 13.65Q22.575 13.95 22.588 14.35Q22.6 14.75 22.3 15.05L18.05 19.3Q17.75 19.6 17.35 19.587Q16.95 19.575 16.65 19.275L14.525 17.15Q14.25 16.875 14.238 16.462Q14.225 16.05 14.525 15.75Q14.8 15.475 15.225 15.475Q15.65 15.475 15.925 15.75ZM6 18 3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V11H14Q13.175 11 12.588 11.587Q12 12.175 12 13V18Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadRoundedFilled.displayName = 'AmauiIconMaterialMarkChatReadRoundedFilled';

export default IconMaterialMarkChatReadRoundedFilled;
