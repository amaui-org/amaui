import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhone'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-320h80v120h400v-480H280v120h-80v-320h560v880H200Zm80-120v40h400v-40H280Zm120-160-56-56 62-64H80v-80h326l-62-64 56-56 160 160-160 160ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhone.displayName = 'AmauiIconMaterialOpenInPhone';

export default IconMaterialOpenInPhone;
