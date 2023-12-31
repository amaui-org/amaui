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
      <path d="M660-160q58 0 99-41t41-99v-86H520v86q0 58 41 99t99 41ZM520-414h126v-145q-57 6-91.5 47T520-414Zm154 0h126q0-57-34.5-98T674-559v145Zm-13.82 282Q590-132 541-180.873 492-229.745 492-300v-120q0-70.255 48.821-119.127Q589.641-588 659.82-588 730-588 779-539.127 828-490.255 828-420v120q0 70.255-48.821 119.127Q730.359-132 660.18-132ZM160-240v-480 480Zm-28 28v-536h696v119q-7-5-13.5-10T800-649v-71H160v480h239q2 8 4 14.5t4 13.5H132Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100.displayName = 'AmauiIconMaterialTouchpadMouseW100';

export default IconMaterialTouchpadMouseW100;
