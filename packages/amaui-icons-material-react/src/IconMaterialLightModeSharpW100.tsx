import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightModeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightModeSharpW100'
      short_name='LightMode'

      {...props}
    >
      <path d="M12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM12 15.7Q10.45 15.7 9.375 14.625Q8.3 13.55 8.3 12Q8.3 10.45 9.375 9.375Q10.45 8.3 12 8.3Q13.55 8.3 14.625 9.375Q15.7 10.45 15.7 12Q15.7 13.55 14.625 14.625Q13.55 15.7 12 15.7ZM1.65 12.35V11.65H5V12.35ZM19 12.35V11.65H22.35V12.35ZM11.65 5V1.65H12.35V5ZM11.65 22.35V19H12.35V22.35ZM6.8 7.3 4.775 5.275 5.275 4.775 7.3 6.8ZM18.725 19.225 16.7 17.2 17.2 16.7 19.225 18.725ZM17.2 7.3 16.7 6.8 18.725 4.775 19.225 5.275ZM5.275 19.225 4.775 18.725 6.8 16.7 7.3 17.2ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialLightModeSharpW100.displayName = 'AmauiIconMaterialLightModeSharpW100';

export default IconMaterialLightModeSharpW100;
