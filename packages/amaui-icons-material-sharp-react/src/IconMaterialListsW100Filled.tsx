import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListsW100Filled'

      short_name='Lists'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-60h60v60h-60Zm180 0v-60h516v60H312ZM132-450v-60h60v60h-60Zm180 0v-60h516v60H312ZM132-688v-60h60v60h-60Zm180 0v-60h516v60H312Z"/>
    </Icon>
  );
});

IconMaterialListsW100Filled.displayName = 'AmauiIconMaterialListsW100Filled';

export default IconMaterialListsW100Filled;
