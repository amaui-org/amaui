import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 14h5V5H5v14h9Zm-9.7 5.7V4.3h15.4v9.775L14.075 19.7Zm3.85-6.4v-.7H12v.7Zm0-3.95v-.7h7.7v.7ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100.displayName = 'AmauiIconMaterialStickyNote2W100';

export default IconMaterialStickyNote2W100;
