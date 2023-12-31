import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseW100'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-160q58 0 99-41t41-99v-86H520v86q0 58 41 99t99 41ZM520-414h126v-145q-57 6-91.5 47T520-414Zm154 0h126q0-57-34.5-98T674-559v145Zm-14 282q-70 0-119-49t-49-119v-120q0-70 49-119t119-49q70 0 119 49t49 119v120q0 70-49 119t-119 49ZM160-240v-480 480Zm32 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v59q-7-5-13.5-10T800-649v-39q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h207q2 8 4 14.5t4 13.5H192Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100.displayName = 'AmauiIconMaterialTouchpadMouseW100';

export default IconMaterialTouchpadMouseW100;
