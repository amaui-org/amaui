import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Done'

      short_name='Done'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </Icon>
  );
});

IconMaterialDone.displayName = 'AmauiIconMaterialDone';

export default IconMaterialDone;
