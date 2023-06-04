import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundedCornerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerW100Filled'

      short_name='RoundedCorner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 19.7v-2h.7v2Zm0-4v-2h.7v2ZM4.3 13v-2H5v2Zm0 4v-2H5v2Zm0-8V7H5v2Zm0-4v-.7h2V5Zm4 0v-.7h2V5ZM15 19.7V19h2v.7Zm-4 0V19h2v.7Zm-4 0V19h2v.7Zm-2.7 0V19H5v.7Zm14.7-8V9q0-1.65-1.175-2.825Q16.65 5 15 5h-2.7v-.7H15q1.95 0 3.325 1.35Q19.7 7 19.7 9v2.7Z"/>
    </Icon>
  );
});

IconMaterialRoundedCornerW100Filled.displayName = 'AmauiIconMaterialRoundedCornerW100Filled';

export default IconMaterialRoundedCornerW100Filled;
