import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTv'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2H2V3h20v5h-2V5H4v12h16v-5h-7.2l1.85 1.85-1.4 1.4L9 11l4.25-4.25 1.4 1.4L12.8 10H22v9h-6v2Zm5-10Z"/>
    </Icon>
  );
});

IconMaterialResetTv.displayName = 'AmauiIconMaterialResetTv';

export default IconMaterialResetTv;
