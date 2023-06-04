import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOff'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 17.15V5H7.85l-2-2H22v16.15ZM2 19V3h1l2 2H4v12h10.15L.7 3.5l1.4-1.4 19.8 19.8-1.4 1.4-4.3-4.3H16v2H8v-2Zm7.1-7.05Zm4.875-.825Z"/>
    </Icon>
  );
});

IconMaterialTvOff.displayName = 'AmauiIconMaterialTvOff';

export default IconMaterialTvOff;
