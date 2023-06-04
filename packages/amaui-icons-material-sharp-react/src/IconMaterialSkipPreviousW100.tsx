import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPreviousW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousW100'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.1 16.2V7.8h.7v8.4Zm9.8 0L10.6 12l6.3-4.2Zm-.7-4.2Zm0 2.9V9.1L11.85 12Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousW100.displayName = 'AmauiIconMaterialSkipPreviousW100';

export default IconMaterialSkipPreviousW100;
