import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTvW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvW100'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.7v-2h-6V4.3h17.4v4.35H20V5H4v12h16v-5.65h-8.75l2.5 2.5-.5.5L9.9 11l3.35-3.35.5.5-2.5 2.5h9.45v7.05h-6v2Zm3.05-8.7Z"/>
    </Icon>
  );
});

IconMaterialResetTvW100.displayName = 'AmauiIconMaterialResetTvW100';

export default IconMaterialResetTvW100;
