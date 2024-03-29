import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltFilled'

      short_name='MemoryAlt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 696h80V456h-80v240Zm200 0h80V456h-80v240Zm200 0h80V456h-80v240ZM200 936v-80H80V296h120v-80h80v80h160v-80h80v80h160v-80h80v80h120v560H760v80h-80v-80H520v80h-80v-80H280v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltFilled.displayName = 'AmauiIconMaterialMemoryAltFilled';

export default IconMaterialMemoryAltFilled;
