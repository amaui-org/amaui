import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopFilled'

      short_name='VerticalAlignTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21V10.8l-2.6 2.6L7 12l5-5 5 5-1.4 1.4-2.6-2.6V21ZM4 5V3h16v2Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopFilled.displayName = 'AmauiIconMaterialVerticalAlignTopFilled';

export default IconMaterialVerticalAlignTopFilled;
