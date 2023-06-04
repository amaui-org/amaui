import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11Zm0 8.7V13H11v6.7ZM13 11V4.3h6.7V11Zm0 8.7V13h6.7v6.7Zm-8-9.4h5.3V5H5Zm8.7 0H19V5h-5.3Zm0 8.7H19v-5.3h-5.3ZM5 19h5.3v-5.3H5Zm8.7-8.7Zm0 3.4Zm-3.4 0Zm0-3.4Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100.displayName = 'AmauiIconMaterialGridViewW100';

export default IconMaterialGridViewW100;
