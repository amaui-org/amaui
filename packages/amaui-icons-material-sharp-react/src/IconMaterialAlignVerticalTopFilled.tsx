import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopFilled'

      short_name='AlignVerticalTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V6h3v16Zm7-6V6h3v10ZM2 4V2h20v2Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopFilled.displayName = 'AmauiIconMaterialAlignVerticalTopFilled';

export default IconMaterialAlignVerticalTopFilled;
