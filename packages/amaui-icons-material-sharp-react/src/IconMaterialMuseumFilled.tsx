import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMuseumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumFilled'

      short_name='Museum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h2v-9H2V9l10-7 10 7v2h-2v9h2v2Zm6-4h2v-4l2 3 2-3v4h2v-7h-2l-2 3-2-3H8Z"/>
    </Icon>
  );
});

IconMaterialMuseumFilled.displayName = 'AmauiIconMaterialMuseumFilled';

export default IconMaterialMuseumFilled;
