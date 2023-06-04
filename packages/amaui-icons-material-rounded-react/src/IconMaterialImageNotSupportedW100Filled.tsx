import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedW100Filled'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.75 20.75 18.7 19.7H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.3L3.25 4.25q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l16.5 16.5q.1.1.1.238 0 .137-.1.262-.125.125-.25.125t-.25-.125ZM8.1 16.35h7.25l-2.625-2.6L11.5 15.4l-1.525-1.775q-.125-.15-.312-.137-.188.012-.313.162L7.775 15.7q-.15.2-.037.425.112.225.362.225Zm11.6.525L7.125 4.3H18.2q.625 0 1.063.437.437.438.437 1.063Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedW100Filled.displayName = 'AmauiIconMaterialImageNotSupportedW100Filled';

export default IconMaterialImageNotSupportedW100Filled;
