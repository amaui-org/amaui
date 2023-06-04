import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForward'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.5 18V6l9 6Zm10 0V6l9 6Zm-8-6Zm10 0Zm-10 2.25L7.9 12 4.5 9.75Zm10 0L17.9 12l-3.4-2.25Z"/>
    </Icon>
  );
});

IconMaterialFastForward.displayName = 'AmauiIconMaterialFastForward';

export default IconMaterialFastForward;
