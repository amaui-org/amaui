import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControlCameraSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraSharpW100'
      short_name='ControlCamera'

      {...props}
    >
      <path d="M12 13.7Q11.275 13.7 10.788 13.212Q10.3 12.725 10.3 12Q10.3 11.275 10.788 10.787Q11.275 10.3 12 10.3Q12.725 10.3 13.213 10.787Q13.7 11.275 13.7 12Q13.7 12.725 13.213 13.212Q12.725 13.7 12 13.7ZM12 20.2 8.65 16.85 9.15 16.35 12 19.2 14.85 16.35 15.35 16.85ZM7.15 15.35 3.8 12 7.15 8.65 7.65 9.15 4.8 12 7.65 14.85ZM9.15 7.65 8.65 7.15 12 3.8 15.35 7.15 14.85 7.65 12 4.8ZM16.85 15.35 16.35 14.85 19.2 12 16.35 9.15 16.85 8.65 20.2 12Z"/>
    </Icon>
  );
});

IconMaterialControlCameraSharpW100.displayName = 'AmauiIconMaterialControlCameraSharpW100';

export default IconMaterialControlCameraSharpW100;
