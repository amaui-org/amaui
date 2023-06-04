import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM19 19v-6.65h-6.65V19Zm0-14h-6.65v6.65H19ZM5 5v6.65h6.65V5Zm0 14h6.65v-6.65H5Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100.displayName = 'AmauiIconMaterialBorderAllW100';

export default IconMaterialBorderAllW100;
