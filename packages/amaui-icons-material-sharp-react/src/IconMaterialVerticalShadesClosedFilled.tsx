import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosedFilled'

      short_name='VerticalShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm4-2h1.5V5H6Zm3.5 0H11V5H9.5Zm3.5 0h1.5V5H13Zm3.5 0H18V5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosedFilled.displayName = 'AmauiIconMaterialVerticalShadesClosedFilled';

export default IconMaterialVerticalShadesClosedFilled;
