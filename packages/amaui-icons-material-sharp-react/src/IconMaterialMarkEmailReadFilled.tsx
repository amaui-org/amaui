import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadFilled'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.95 22-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4ZM12 13l8-5V6l-8 5-8-5v2ZM2 20V4h20v6.35l-6.025 6.025L13.1 13.5l-4.225 4.225L11.15 20Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadFilled.displayName = 'AmauiIconMaterialMarkEmailReadFilled';

export default IconMaterialMarkEmailReadFilled;
