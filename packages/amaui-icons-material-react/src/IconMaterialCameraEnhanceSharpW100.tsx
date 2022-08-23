import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraEnhanceSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhanceSharpW100'
      short_name='CameraEnhance'

      {...props}
    >
      <path d="M12 16.8Q13.575 16.8 14.688 15.688Q15.8 14.575 15.8 13Q15.8 11.425 14.688 10.312Q13.575 9.2 12 9.2Q10.425 9.2 9.312 10.312Q8.2 11.425 8.2 13Q8.2 14.575 9.312 15.688Q10.425 16.8 12 16.8ZM12 15.9 11.1 13.9 9.1 13 11.1 12.1 12 10.1 12.9 12.1 14.9 13 12.9 13.9ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceSharpW100.displayName = 'AmauiIconMaterialCameraEnhanceSharpW100';

export default IconMaterialCameraEnhanceSharpW100;
