import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextFilled'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 18V6h2v12Zm-11 0V6l9 6Z"/>
    </Icon>
  );
});

IconMaterialSkipNextFilled.displayName = 'AmauiIconMaterialSkipNextFilled';

export default IconMaterialSkipNextFilled;
