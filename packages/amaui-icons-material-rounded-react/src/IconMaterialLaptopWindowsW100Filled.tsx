import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsW100Filled'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 18.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H4.8V17q-.65 0-1.075-.425Q3.3 16.15 3.3 15.5V7.1q0-.65.425-1.075Q4.15 5.6 4.8 5.6h14.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075Q19.85 17 19.2 17v.7h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsW100Filled.displayName = 'AmauiIconMaterialLaptopWindowsW100Filled';

export default IconMaterialLaptopWindowsW100Filled;
