import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightModeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightModeSharp'
      short_name='LightMode'

      {...props}
    >
      <path d="M12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17ZM1 13V11H5V13ZM19 13V11H23V13ZM11 5V1H13V5ZM11 23V19H13V23ZM6.35 7.75 3.875 5.275 5.275 3.875 7.75 6.35ZM18.725 20.125 16.25 17.65 17.65 16.25 20.125 18.725ZM17.65 7.75 16.25 6.35 18.725 3.875 20.125 5.275ZM5.275 20.125 3.875 18.725 6.35 16.25 7.75 17.65ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialLightModeSharp.displayName = 'AmauiIconMaterialLightModeSharp';

export default IconMaterialLightModeSharp;
