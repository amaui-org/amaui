import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraSharpW100Filled'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M12 16.5Q13.475 16.5 14.488 15.488Q15.5 14.475 15.5 13Q15.5 11.525 14.488 10.512Q13.475 9.5 12 9.5Q10.525 9.5 9.512 10.512Q8.5 11.525 8.5 13Q8.5 14.475 9.512 15.488Q10.525 16.5 12 16.5ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialPhotoCameraSharpW100Filled;
