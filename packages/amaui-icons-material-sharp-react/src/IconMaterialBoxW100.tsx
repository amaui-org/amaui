import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxW100'

      short_name='Box'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-650v450h560v-450H588v257l-108-54-108 54v-257H200Zm-28 478v-498l98-118h419l99 120v496H172Zm43-506h529l-69-82H284l-69 82Zm185 28v211l80-40 80 40v-211H400Zm-200 0h560-560Z"/>
    </Icon>
  );
});

IconMaterialBoxW100.displayName = 'AmauiIconMaterialBoxW100';

export default IconMaterialBoxW100;
