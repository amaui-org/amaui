import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.2 16.2V7.8h.7v8.4Zm-9.1 0V7.8l6.3 4.2Zm.7-4.2Zm0 2.9 4.35-2.9L7.8 9.1Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100.displayName = 'AmauiIconMaterialSkipNextW100';

export default IconMaterialSkipNextW100;
