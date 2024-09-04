import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBack2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200 200-480l440-280v560Zm-80-280Zm0 134v-268L350-480l210 134Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2.displayName = 'AmauiIconMaterialArrowBack2';

export default IconMaterialArrowBack2;
