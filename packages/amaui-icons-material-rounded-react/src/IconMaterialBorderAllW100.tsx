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
      <path d="M4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2Zm8.05-5.85V19H19v-6.65h-6.65Zm0-.7H19V5h-6.65v6.65Zm-.7 0V5H5v6.65h6.65Zm0 .7H5V19h6.65v-6.65Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100.displayName = 'AmauiIconMaterialBorderAllW100';

export default IconMaterialBorderAllW100;
