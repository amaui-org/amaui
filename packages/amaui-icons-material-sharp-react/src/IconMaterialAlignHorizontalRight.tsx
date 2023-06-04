import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRight'

      short_name='AlignHorizontalRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22V2h2v20ZM8 17v-3h10v3Zm-6-7V7h16v3Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRight.displayName = 'AmauiIconMaterialAlignHorizontalRight';

export default IconMaterialAlignHorizontalRight;
