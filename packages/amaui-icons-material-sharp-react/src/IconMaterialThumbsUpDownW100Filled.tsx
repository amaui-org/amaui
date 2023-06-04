import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownW100Filled'

      short_name='ThumbsUpDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.65 13.05V5.4L5.4.65l.55.55L5 5.35h6.35v1.875L8.8 13.05Zm17.95 10.3-.55-.55.95-4.15h-6.35v-1.875l2.55-5.825h8.15v7.65Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownW100Filled.displayName = 'AmauiIconMaterialThumbsUpDownW100Filled';

export default IconMaterialThumbsUpDownW100Filled;
