import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRollRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollRoundedW100Filled'
      short_name='CameraRoll'

      {...props}
    >
      <path d="M19.2 18.7H12.65V19.2Q12.65 19.825 12.225 20.262Q11.8 20.7 11.2 20.7H4.8Q4.175 20.7 3.737 20.262Q3.3 19.825 3.3 19.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H6.3V3.1Q6.3 2.75 6.525 2.525Q6.75 2.3 7.1 2.3H8.9Q9.25 2.3 9.475 2.525Q9.7 2.75 9.7 3.1V4.3H11.2Q11.825 4.3 12.263 4.737Q12.7 5.175 12.7 5.8V6.3H19.2Q19.825 6.3 20.263 6.738Q20.7 7.175 20.7 7.8V17.2Q20.7 17.825 20.263 18.262Q19.825 18.7 19.2 18.7ZM9.8 16.7H11.2V15.3H9.8ZM9.8 9.7H11.2V8.3H9.8ZM13.55 16.7H14.95V15.3H13.55ZM13.55 9.7H14.95V8.3H13.55ZM17.3 16.7H18.7V15.3H17.3ZM17.3 9.7H18.7V8.3H17.3Z"/>
    </Icon>
  );
});

IconMaterialCameraRollRoundedW100Filled.displayName = 'AmauiIconMaterialCameraRollRoundedW100Filled';

export default IconMaterialCameraRollRoundedW100Filled;
