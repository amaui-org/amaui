import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterHdrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrW100'

      short_name='FilterHdr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.475 16.7 3.65-4.9 3.15 4.2h8.85l-5-6.65-3.15 4.2-.45-.6 3.6-4.8 6.4 8.55Zm9.35-.7Zm-7.95 0H9.4l-2.275-3.05Zm0 0H9.4Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrW100.displayName = 'AmauiIconMaterialFilterHdrW100';

export default IconMaterialFilterHdrW100;
