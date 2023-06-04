import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNext'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 18V6h2v12Zm-11 0V6l9 6Zm2-6Zm0 2.25L10.9 12 7.5 9.75Z"/>
    </Icon>
  );
});

IconMaterialSkipNext.displayName = 'AmauiIconMaterialSkipNext';

export default IconMaterialSkipNext;
