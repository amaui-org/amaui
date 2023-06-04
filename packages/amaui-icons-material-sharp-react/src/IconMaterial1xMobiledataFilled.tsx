import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataFilled'

      short_name='1xMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17V9H4V7h4v10Zm4.35 0 3.15-5.3L10.65 7H13l1.65 2.75L16.35 7h2.3l-2.8 4.7L19 17h-2.35l-2-3.35-2 3.35Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataFilled.displayName = 'AmauiIconMaterial1xMobiledataFilled';

export default IconMaterial1xMobiledataFilled;
