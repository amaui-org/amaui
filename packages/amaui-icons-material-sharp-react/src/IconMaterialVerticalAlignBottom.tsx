import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottom'

      short_name='VerticalAlignBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2h16v2Zm8-4-5-5 1.4-1.4 2.6 2.6V3h2v10.2l2.6-2.6L17 12Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottom.displayName = 'AmauiIconMaterialVerticalAlignBottom';

export default IconMaterialVerticalAlignBottom;
