import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownFilled'

      short_name='ThumbDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 16v-4.4L4.65 3H16v13l-7 7-1.85-1.85L8.45 16Zm17 0V3h4v13Z"/>
    </Icon>
  );
});

IconMaterialThumbDownFilled.displayName = 'AmauiIconMaterialThumbDownFilled';

export default IconMaterialThumbDownFilled;
