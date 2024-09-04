import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2Filled'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200 200-480l440-280v560Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2Filled.displayName = 'AmauiIconMaterialArrowBack2Filled';

export default IconMaterialArrowBack2Filled;
