import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2dFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2dFilled'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-360h180v-60H320v-40h120v-140H260v60h120v40H260v140ZM120-120v-720h720v720H120Zm400-240h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterial2dFilled.displayName = 'AmauiIconMaterial2dFilled';

export default IconMaterial2dFilled;
