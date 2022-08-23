import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbSunnySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnySharp'
      short_name='WbSunny'

      {...props}
    >
      <path d="M11 4V1H13V4ZM11 23V20H13V23ZM20 13V11H23V13ZM1 13V11H4V13ZM18.7 6.7 17.3 5.3 19.05 3.5 20.5 4.95ZM4.95 20.5 3.5 19.05 5.3 17.3 6.7 18.7ZM19.05 20.5 17.3 18.7 18.7 17.3 20.5 19.05ZM5.3 6.7 3.5 4.95 4.95 3.5 6.7 5.3ZM12 18Q9.5 18 7.75 16.25Q6 14.5 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.5 6 16.25 7.75Q18 9.5 18 12Q18 14.5 16.25 16.25Q14.5 18 12 18ZM12 16Q13.675 16 14.838 14.837Q16 13.675 16 12Q16 10.325 14.838 9.162Q13.675 8 12 8Q10.325 8 9.163 9.162Q8 10.325 8 12Q8 13.675 9.163 14.837Q10.325 16 12 16ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialWbSunnySharp.displayName = 'AmauiIconMaterialWbSunnySharp';

export default IconMaterialWbSunnySharp;
