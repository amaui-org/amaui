import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomSheetsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomSheetsFilled'

      short_name='BottomSheets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-360h560v-280H200v280Z"/>
    </Icon>
  );
});

IconMaterialBottomSheetsFilled.displayName = 'AmauiIconMaterialBottomSheetsFilled';

export default IconMaterialBottomSheetsFilled;
