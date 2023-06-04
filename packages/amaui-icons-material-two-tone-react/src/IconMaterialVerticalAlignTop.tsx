import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTop'

      short_name='VerticalAlignTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTop.displayName = 'AmauiIconMaterialVerticalAlignTop';

export default IconMaterialVerticalAlignTop;
