import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantNavigationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationRoundedFilled'
      short_name='AssistantNavigation'

      {...props}
    >
      <path d="M8.7 16.625 11.775 15.275Q11.9 15.225 12.012 15.225Q12.125 15.225 12.25 15.275L15.3 16.625Q15.65 16.775 15.925 16.512Q16.2 16.25 16.05 15.9L12.525 7.3Q12.375 6.95 12 6.95Q11.625 6.95 11.475 7.3L7.95 15.9Q7.8 16.25 8.075 16.512Q8.35 16.775 8.7 16.625ZM12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationRoundedFilled.displayName = 'AmauiIconMaterialAssistantNavigationRoundedFilled';

export default IconMaterialAssistantNavigationRoundedFilled;
