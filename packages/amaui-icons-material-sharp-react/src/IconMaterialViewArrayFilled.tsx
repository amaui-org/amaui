import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArrayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayFilled'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 19V5h3v14ZM7 19V5h10v14Zm-4 0V5h3v14Z"/>
    </Icon>
  );
});

IconMaterialViewArrayFilled.displayName = 'AmauiIconMaterialViewArrayFilled';

export default IconMaterialViewArrayFilled;
