import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCss = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Css'

      short_name='Css'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 15v-2H11v.5h2v-1H9.5V9h5v2H13v-.5h-2v1h3.5V15Zm6.5 0v-2h1.5v.5h2v-1H16V9h5v2h-1.5v-.5h-2v1H21V15ZM3 15V9h5v2H6.5v-.5h-2v3h2V13H8v2Z"/>
    </Icon>
  );
});

IconMaterialCss.displayName = 'AmauiIconMaterialCss';

export default IconMaterialCss;
