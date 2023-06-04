import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOn'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22V11L6 8V2h12v6l-2 3v11Zm4-6.5q-.625 0-1.062-.438Q10.5 14.625 10.5 14t.438-1.062Q11.375 12.5 12 12.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM8 5h8V4H8Zm8 2H8v.4l2 3V20h4v-9.6l2-3Zm-4 5Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOn.displayName = 'AmauiIconMaterialFlashlightOn';

export default IconMaterialFlashlightOn;
