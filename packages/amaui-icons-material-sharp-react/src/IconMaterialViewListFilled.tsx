import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListFilled'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9V5h4v4Zm5 0V5h13v4Zm0 5v-4h13v4Zm0 5v-4h13v4Zm-5 0v-4h4v4Zm0-5v-4h4v4Z"/>
    </Icon>
  );
});

IconMaterialViewListFilled.displayName = 'AmauiIconMaterialViewListFilled';

export default IconMaterialViewListFilled;
