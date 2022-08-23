import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraSharpW100Filled'
      short_name='Camera'

      {...props}
    >
      <path d="M11.175 9.1 14.325 3.625Q16.275 4.125 17.875 5.625Q19.475 7.125 20.2 9.1ZM9.025 11.375 5.875 5.825Q7.125 4.6 8.7 3.95Q10.275 3.3 12 3.3Q12.4 3.3 12.913 3.35Q13.425 3.4 13.65 3.45ZM3.575 14.15Q3.425 13.5 3.363 12.988Q3.3 12.475 3.3 12Q3.3 10.475 3.825 9.05Q4.35 7.625 5.375 6.35L9.825 14.15ZM9.8 20.425Q7.7 19.875 6.05 18.35Q4.4 16.825 3.775 14.825H12.975ZM12 20.7Q11.625 20.7 11.175 20.65Q10.725 20.6 10.475 20.55L15.075 12.775L18.15 18.15Q16.925 19.375 15.325 20.038Q13.725 20.7 12 20.7ZM18.625 17.65 14.175 9.8H20.425Q20.55 10.375 20.625 10.938Q20.7 11.5 20.7 12Q20.7 13.575 20.188 14.975Q19.675 16.375 18.625 17.65Z"/>
    </Icon>
  );
});

IconMaterialCameraSharpW100Filled.displayName = 'AmauiIconMaterialCameraSharpW100Filled';

export default IconMaterialCameraSharpW100Filled;
