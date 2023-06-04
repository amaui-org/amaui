import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderClearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClearFilled'

      short_name='BorderClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderClearFilled.displayName = 'AmauiIconMaterialBorderClearFilled';

export default IconMaterialBorderClearFilled;
