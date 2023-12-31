import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGestureSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureSelectW100Filled'

      short_name='GestureSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M150-548v40q-16.5 0-28.25-11.75T110-548h40Zm660 40v-40h40q0 17-11.75 28.5T810-508ZM110-648v-40h40v40h-40Zm700 0v-40h40v40h-40ZM150-788h-40q0-16.5 11.75-28.25T150-828v40Zm100 280v-40h40v40h-40Zm420 0v-40h40v40h-40Zm140-280v-40q16.5 0 28.25 11.75T850-788h-40Zm-560 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40Zm140 0v-40h40v40h-40ZM464.848-119Q446-119 429.5-126t-30.269-20.631L234-311l19.66-19.833Q262-339 272-341t21 1l85 18v-318q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v270h80v-160q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v160h80v-100q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v100h80q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v117q0 56-39 95t-95 39H464.848Z"/>
    </Icon>
  );
});

IconMaterialGestureSelectW100Filled.displayName = 'AmauiIconMaterialGestureSelectW100Filled';

export default IconMaterialGestureSelectW100Filled;
