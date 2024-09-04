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
      <path d="M588-294 296-480l292-186v372Zm-28-186Zm0 134v-268L348-480l212 134Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2W100.displayName = 'AmauiIconMaterialArrowBack2W100';

export default IconMaterialArrowBack2W100;
