import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStyleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStyleFilled'

      short_name='LineStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-2h2v2Zm0-4v-2h5v2Zm0-4v-2h8v2Zm0-4V4h18v4Zm4 12v-2h2v2Zm2.5-4v-2h5v2Zm1.5 4v-2h2v2Zm2-8v-2h8v2Zm2 8v-2h2v2Zm1-4v-2h5v2Zm3 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialLineStyleFilled.displayName = 'AmauiIconMaterialLineStyleFilled';

export default IconMaterialLineStyleFilled;
