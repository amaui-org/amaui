import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomSheets = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomSheets'

      short_name='BottomSheets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-360h560v-280H200v280Zm0 80v200h560v-200H200Zm0 0v200-200Z"/>
    </Icon>
  );
});

IconMaterialBottomSheets.displayName = 'AmauiIconMaterialBottomSheets';

export default IconMaterialBottomSheets;
