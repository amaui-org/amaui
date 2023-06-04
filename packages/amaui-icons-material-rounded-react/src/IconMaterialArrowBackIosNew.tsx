import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.125 21.1 6.7 12.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNew.displayName = 'AmauiIconMaterialArrowBackIosNew';

export default IconMaterialArrowBackIosNew;
