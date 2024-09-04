import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2W100Filled'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-455q-7-5-10.5-11t-3.5-14q0-8 3.5-14t10.5-11l206-132q3.78-2 7.95-3 4.16-1 7.94-1 12.11 0 21.11 8t9 22v262q0 14-9.07 22-9.06 8-21.15 8-3.78 0-7.9-1-4.13-1-7.88-3L336-455Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2W100Filled.displayName = 'AmauiIconMaterialArrowBack2W100Filled';

export default IconMaterialArrowBack2W100Filled;
