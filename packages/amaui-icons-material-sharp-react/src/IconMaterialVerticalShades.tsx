import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShades = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShades'

      short_name='VerticalShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm4-2h2V5H6Zm4 0h4V5h-4Zm6 0h2V5h-2ZM6 19V5v14Zm12 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialVerticalShades.displayName = 'AmauiIconMaterialVerticalShades';

export default IconMaterialVerticalShades;
