import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenter'

      short_name='VerticalAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-4.2l-1.6 1.6L8 18l4-4 4 4-1.4 1.4-1.6-1.6V22Zm-7-9v-2h16v2Zm8-3L8 6l1.4-1.4L11 6.2V2h2v4.2l1.6-1.6L16 6Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenter.displayName = 'AmauiIconMaterialVerticalAlignCenter';

export default IconMaterialVerticalAlignCenter;
