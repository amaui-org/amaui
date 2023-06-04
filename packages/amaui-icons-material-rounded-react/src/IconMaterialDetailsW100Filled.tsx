import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetailsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsW100Filled'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.475 19.7q-.425 0-.637-.375-.213-.375-.013-.75L11.35 6.85q.2-.4.65-.4t.65.4l6.525 11.725q.2.375-.012.75-.213.375-.638.375ZM5.4 19h6.25V7.75Zm6.95 0h6.25L12.35 7.75Z"/>
    </Icon>
  );
});

IconMaterialDetailsW100Filled.displayName = 'AmauiIconMaterialDetailsW100Filled';

export default IconMaterialDetailsW100Filled;
