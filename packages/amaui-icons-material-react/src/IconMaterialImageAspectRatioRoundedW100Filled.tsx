import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioRoundedW100Filled'
      short_name='ImageAspectRatio'

      {...props}
    >
      <path d="M13.75 12H15.25V10.5H13.75ZM13.75 15.75H15.25V14.25H13.75ZM6.25 12H7.75V10.5H6.25ZM10 12H11.5V10.5H10ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioRoundedW100Filled.displayName = 'AmauiIconMaterialImageAspectRatioRoundedW100Filled';

export default IconMaterialImageAspectRatioRoundedW100Filled;
