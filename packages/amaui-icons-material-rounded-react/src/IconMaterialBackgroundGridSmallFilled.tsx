import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundGridSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallFilled'

      short_name='BackgroundGridSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936h40V816H120v40q0 33 23.5 56.5T200 936Zm120 0h120V816H320v120Zm200 0h120V816H520v120Zm200 0h40q33 0 56.5-23.5T840 856v-40H720v120ZM120 336h120V216h-40q-33 0-56.5 23.5T120 296v40Zm0 200h120V416H120v120Zm0 200h120V616H120v120Zm200-400h120V216H320v120Zm0 200h120V416H320v120Zm0 200h120V616H320v120Zm200-400h120V216H520v120Zm0 200h120V416H520v120Zm0 200h120V616H520v120Zm200-400h120v-40q0-33-23.5-56.5T760 216h-40v120Zm0 200h120V416H720v120Zm0 200h120V616H720v120Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallFilled.displayName = 'AmauiIconMaterialBackgroundGridSmallFilled';

export default IconMaterialBackgroundGridSmallFilled;
