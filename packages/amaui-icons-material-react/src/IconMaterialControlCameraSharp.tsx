import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControlCameraSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraSharp'
      short_name='ControlCamera'

      {...props}
    >
      <path d="M12 15Q10.75 15 9.875 14.125Q9 13.25 9 12Q9 10.75 9.875 9.875Q10.75 9 12 9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM12 22 7.75 17.75 9.15 16.35 12 19.15 14.85 16.35 16.25 17.75ZM6.25 16.25 2 12 6.25 7.75 7.65 9.15 4.85 12 7.65 14.85ZM9.15 7.65 7.75 6.25 12 2 16.25 6.25 14.85 7.65 12 4.85ZM17.75 16.25 16.35 14.85 19.15 12 16.35 9.15 17.75 7.75 22 12Z"/>
    </Icon>
  );
});

IconMaterialControlCameraSharp.displayName = 'AmauiIconMaterialControlCameraSharp';

export default IconMaterialControlCameraSharp;
