import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeft'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeft.displayName = 'AmauiIconMaterialAlignHorizontalLeft';

export default IconMaterialAlignHorizontalLeft;
