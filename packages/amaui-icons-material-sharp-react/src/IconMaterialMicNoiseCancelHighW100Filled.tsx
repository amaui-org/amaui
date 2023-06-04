import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicNoiseCancelHighW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelHighW100Filled'

      short_name='MicNoiseCancelHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m261 812-19-19q44-43 67-99.5T332 576q0-61-23-117.5T242 359l19-20q48 48 73 108.5T359 575q0 67-25 128t-73 109Zm-91-91-20-21q26-25 39-57.5t13-67.5q0-35-13-67t-39-57l20-21q29 29 45 66t16 79q0 42-16 79.5T170 721Zm296 163V268h28v616h-28Zm268-294v-28h54v28h-54Zm-134 0v-28h54v28h-54Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelHighW100Filled.displayName = 'AmauiIconMaterialMicNoiseCancelHighW100Filled';

export default IconMaterialMicNoiseCancelHighW100Filled;
