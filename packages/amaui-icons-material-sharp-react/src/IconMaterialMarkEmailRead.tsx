import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailRead'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.95 22-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM12 11l8-5H4ZM2 20V4h20v6.35l-2 2V8l-8 5-8-5v10h5.15l2 2Zm10-7Zm0-2Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailRead.displayName = 'AmauiIconMaterialMarkEmailRead';

export default IconMaterialMarkEmailRead;
