import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIos'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.125 21.1.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIos.displayName = 'AmauiIconMaterialArrowBackIos';

export default IconMaterialArrowBackIos;
