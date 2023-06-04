import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Close'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>
    </Icon>
  );
});

IconMaterialClose.displayName = 'AmauiIconMaterialClose';

export default IconMaterialClose;
