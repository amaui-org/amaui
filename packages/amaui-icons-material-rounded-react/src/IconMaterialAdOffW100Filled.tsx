import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOffW100Filled'

      short_name='AdOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-25 0-42.5-17.5T172 824V328q0-5 .5-9t2.5-8l-17-17q-4-4-4.5-9.5T158 274q5-5 10-5t10 5l604 604q4 4 4.5 9.5T782 898q-5 5-10 5t-10-5l-16-16q-5 1-9 1.5t-9 .5H232Zm0-28h488L200 336v488q0 14 9 23t23 9Zm556-85-28-28V424H441L285 268h443q25 0 42.5 17.5T788 328v443Z"/>
    </Icon>
  );
});

IconMaterialAdOffW100Filled.displayName = 'AmauiIconMaterialAdOffW100Filled';

export default IconMaterialAdOffW100Filled;
