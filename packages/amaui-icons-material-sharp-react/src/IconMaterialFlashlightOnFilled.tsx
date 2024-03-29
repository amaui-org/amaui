import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnFilled'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 5V2h12v3Zm6 10.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 12.5 12 12.5t-1.062.438Q10.5 13.375 10.5 14t.438 1.062q.437.438 1.062.438ZM8 22V11L6 8V7h12v1l-2 3v11Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnFilled.displayName = 'AmauiIconMaterialFlashlightOnFilled';

export default IconMaterialFlashlightOnFilled;
