import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitFilled'

      short_name='CallSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20v-7.6l-5-5V10H4V4h6v2H7.4l5.6 5.6V20Zm3.85-9.4L13.4 9.15 16.6 6H14V4h6v6h-2V7.4Z"/>
    </Icon>
  );
});

IconMaterialCallSplitFilled.displayName = 'AmauiIconMaterialCallSplitFilled';

export default IconMaterialCallSplitFilled;
