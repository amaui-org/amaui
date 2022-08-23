import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRollRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollRounded'
      short_name='CameraRoll'

      {...props}
    >
      <path d="M20 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V5Q2 4.175 2.588 3.587Q3.175 3 4 3H5V2Q5 1.575 5.287 1.287Q5.575 1 6 1H10Q10.425 1 10.713 1.287Q11 1.575 11 2V3H12Q12.825 3 13.413 3.587Q14 4.175 14 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM20 18V7H12V5Q12 5 12 5Q12 5 12 5H4Q4 5 4 5Q4 5 4 5V20Q4 20 4 20Q4 20 4 20H12Q12 20 12 20Q12 20 12 20V18ZM9 17H11V15H9ZM9 10H11V8H9ZM13 17H15V15H13ZM13 10H15V8H13ZM17 17H19V15H17ZM17 10H19V8H17ZM4 5Q4 5 4 5Q4 5 4 5V7V18V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V5Q4 5 4 5Q4 5 4 5Z"/>
    </Icon>
  );
});

IconMaterialCameraRollRounded.displayName = 'AmauiIconMaterialCameraRollRounded';

export default IconMaterialCameraRollRounded;
