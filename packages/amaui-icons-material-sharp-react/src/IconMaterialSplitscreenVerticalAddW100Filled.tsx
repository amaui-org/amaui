import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenVerticalAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenVerticalAddW100Filled'

      short_name='SplitscreenVerticalAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h249v616H172Zm368 0v-616h248v397q-5-.5-10-.75t-10-.25q-83 0-141.5 58.291Q568-275.417 568-192q0 5.323.5 10.161.5 4.839.5 9.839h-29Zm220 92v-92h-92v-28h92v-92h28v92h92v28h-92v92h-28Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenVerticalAddW100Filled.displayName = 'AmauiIconMaterialSplitscreenVerticalAddW100Filled';

export default IconMaterialSplitscreenVerticalAddW100Filled;
