import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCafeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeW100'

      short_name='LocalCafe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.55v-.7h12.8v.7Zm0-3.7V4.45h12.8q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.062-.438.438-1.063.438h-1.4v6.7Zm.7-.7h10v-10H6Zm10.7-6.7h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4Zm-5.7 1.7Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeW100.displayName = 'AmauiIconMaterialLocalCafeW100';

export default IconMaterialLocalCafeW100;
