import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeft'

      short_name='ArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.3 15.3-2.6-2.6q-.15-.15-.225-.325Q9.4 12.2 9.4 12t.075-.375q.075-.175.225-.325l2.6-2.6q.475-.475 1.087-.212.613.262.613.937v5.15q0 .675-.613.937-.612.263-1.087-.212Z"/>
    </Icon>
  );
});

IconMaterialArrowLeft.displayName = 'AmauiIconMaterialArrowLeft';

export default IconMaterialArrowLeft;
