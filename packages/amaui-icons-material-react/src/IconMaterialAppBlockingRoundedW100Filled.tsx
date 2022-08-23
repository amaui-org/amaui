import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppBlockingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingRoundedW100Filled'
      short_name='AppBlocking'

      {...props}
    >
      <path d="M17.35 15.6Q15.85 15.6 14.8 14.55Q13.75 13.5 13.75 12Q13.75 10.5 14.8 9.45Q15.85 8.4 17.35 8.4Q18.85 8.4 19.9 9.45Q20.95 10.5 20.95 12Q20.95 13.5 19.9 14.55Q18.85 15.6 17.35 15.6ZM17.35 14.9Q17.85 14.9 18.288 14.75Q18.725 14.6 19.15 14.3L15.05 10.2Q14.75 10.625 14.6 11.062Q14.45 11.5 14.45 12Q14.45 13.2 15.3 14.05Q16.15 14.9 17.35 14.9ZM19.65 13.8Q20 13.35 20.125 12.925Q20.25 12.5 20.25 12Q20.25 10.8 19.4 9.95Q18.55 9.1 17.35 9.1Q16.85 9.1 16.413 9.25Q15.975 9.4 15.55 9.7ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V6.9H17V5.35H7V18.65H17V17.1H17.7V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingRoundedW100Filled.displayName = 'AmauiIconMaterialAppBlockingRoundedW100Filled';

export default IconMaterialAppBlockingRoundedW100Filled;
