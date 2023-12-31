import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddW100'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-192 1-1 192Zm-28 28v-248h616v28H200v192h368v28H172Zm0-367v-249h616v249H172Zm28-28h560v-193H200v193Zm0 0v-193 193Zm560 395h-92v-28h92v-92h28v92h92v28h-92v92h-28v-92Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddW100.displayName = 'AmauiIconMaterialSplitscreenAddW100';

export default IconMaterialSplitscreenAddW100;
