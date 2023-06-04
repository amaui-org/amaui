import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyringeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyringeW100'

      short_name='Syringe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m219 386-20-20 100-101 21 20-41 41 59 58 106-106 20 20-32 32 308 307-74 74 153 153h-40L646 731l-73 73-308-307-31 31-19-19 104-106-59-58-41 41Zm65 92 288 288 127-128-78-80-73 73-20-18 74-74-91-90-72 72-20-20 72-72-79-79-128 128Zm0 0 23-23 105-105-128 128Z"/>
    </Icon>
  );
});

IconMaterialSyringeW100.displayName = 'AmauiIconMaterialSyringeW100';

export default IconMaterialSyringeW100;
