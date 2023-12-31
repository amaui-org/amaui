import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial2d = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='2d'

      short_name='2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-360h180v-60H320v-40h120v-140H260v60h120v40H260v140ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm320-160h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterial2d.displayName = 'AmauiIconMaterial2d';

export default IconMaterial2d;
