import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutVideoOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOff'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-638h124v124L436-638Zm124 124 160-126v286L560-514Zm240 240 80 80v-606H274l80 80h446v446ZM160-800l80 80h-80v480h446l-80-80H240v-286L28-820l56-56L876-84l-56 56-134-132H80v-640h80Zm418 304Zm-194 34Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOff.displayName = 'AmauiIconMaterialHangoutVideoOff';

export default IconMaterialHangoutVideoOff;
