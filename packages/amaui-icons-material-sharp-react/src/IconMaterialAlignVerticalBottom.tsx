import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottom'

      short_name='AlignVerticalBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h20v2Zm5-4V2h3v16Zm7 0V8h3v10Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottom.displayName = 'AmauiIconMaterialAlignVerticalBottom';

export default IconMaterialAlignVerticalBottom;
