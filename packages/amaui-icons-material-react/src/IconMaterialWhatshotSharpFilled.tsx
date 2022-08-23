import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotSharpFilled'
      short_name='Whatshot'

      {...props}
    >
      <path d="M12 8V10H14.6L10.95 13.65L7.95 11.15L2.925 16.175Q2.475 15.225 2.237 14.175Q2 13.125 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22Q9.525 22 7.438 20.9Q5.35 19.8 3.975 17.925L8.05 13.85L11.05 16.35L16 11.4V14H18V8Z"/>
    </Icon>
  );
});

IconMaterialWhatshotSharpFilled.displayName = 'AmauiIconMaterialWhatshotSharpFilled';

export default IconMaterialWhatshotSharpFilled;
