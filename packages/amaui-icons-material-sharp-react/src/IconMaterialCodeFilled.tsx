import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeFilled'

      short_name='Code'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 18-6-6 6-6 1.425 1.425-4.6 4.6L9.4 16.6Zm8 0-1.425-1.425 4.6-4.6L14.6 7.4 16 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialCodeFilled.displayName = 'AmauiIconMaterialCodeFilled';

export default IconMaterialCodeFilled;
