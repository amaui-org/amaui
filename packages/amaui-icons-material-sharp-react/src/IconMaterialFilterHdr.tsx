import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterHdr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdr'

      short_name='FilterHdr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1 18 6-8 4.5 6H19l-5-6.65-2.5 3.3L10.25 11 14 6l9 12Zm13.025-2ZM5 16h4l-2-2.675Zm0 0h4Z"/>
    </Icon>
  );
});

IconMaterialFilterHdr.displayName = 'AmauiIconMaterialFilterHdr';

export default IconMaterialFilterHdr;
