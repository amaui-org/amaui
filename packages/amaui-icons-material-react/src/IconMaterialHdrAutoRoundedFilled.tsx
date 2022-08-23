import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrAutoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoRoundedFilled'
      short_name='HdrAuto'

      {...props}
    >
      <path d="M8.175 17Q8.425 17 8.675 16.837Q8.925 16.675 9 16.45L9.8 14.2H14.2L15 16.45Q15.075 16.675 15.312 16.837Q15.55 17 15.825 17Q16.35 17 16.6 16.65Q16.85 16.3 16.65 15.8L13.35 6.925Q13.2 6.55 12.812 6.275Q12.425 6 12 6Q11.575 6 11.188 6.275Q10.8 6.55 10.65 6.925L7.35 15.8Q7.15 16.3 7.4 16.65Q7.65 17 8.175 17ZM10.35 12.6 11.95 8.05H12.05L13.65 12.6ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoRoundedFilled.displayName = 'AmauiIconMaterialHdrAutoRoundedFilled';

export default IconMaterialHdrAutoRoundedFilled;
