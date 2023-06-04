import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStable'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.975 18 2.3-8.65L7.075 6l-2.3 8.65Zm-1.425-2.45-8.325-2.3L8.5 8.45l8.325 2.3ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoStable.displayName = 'AmauiIconMaterialVideoStable';

export default IconMaterialVideoStable;
