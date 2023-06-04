import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignItemsStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretch'

      short_name='AlignItemsStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 816V336h120v480H280Zm280 0V336h120v480H560ZM80 256v-80h800v80H80Zm0 720v-80h800v80H80Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretch.displayName = 'AmauiIconMaterialAlignItemsStretch';

export default IconMaterialAlignItemsStretch;
