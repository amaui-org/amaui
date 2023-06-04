import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipPreviousFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousFilled'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 18V6h2v12Zm13 0-9-6 9-6Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousFilled.displayName = 'AmauiIconMaterialSkipPreviousFilled';

export default IconMaterialSkipPreviousFilled;
