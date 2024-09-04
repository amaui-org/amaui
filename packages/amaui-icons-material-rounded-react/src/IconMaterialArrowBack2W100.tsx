import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2W100'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-455q-7-5-10.5-11t-3.5-14q0-8 3.5-14t10.5-11l206-132q4-2 8-3t8-1q12 0 21 8t9 22v262q0 14-9 22t-21 8q-4 0-8-1t-8-3L336-455Zm224-25Zm0 134v-268L348-480l212 134Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2W100.displayName = 'AmauiIconMaterialArrowBack2W100';

export default IconMaterialArrowBack2W100;
