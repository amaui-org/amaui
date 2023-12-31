import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddW100'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-760H568h192Zm-220-28h248v396h-28v-368H568v588h-28v-616ZM172-172v-616h249v616H172Zm221-588H200v560h193v-560Zm0 0H200h193ZM760-80v-92h-92v-28h92v-92h28v92h92v28h-92v92h-28Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddW100.displayName = 'AmauiIconMaterialSplitscreenVerticalAddW100';

export default IconMaterialSplitscreenVerticalAddW100;
