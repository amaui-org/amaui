import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.55v-.7h12.8v.7Zm0-3.7V4.45h12.8q.65 0 1.075.425.425.425.425 1.075v1.7q0 .65-.425 1.075-.425.425-1.075.425h-1.4v6.7Zm11.4-7.4h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4ZM6 15.15h10v-10H9.85V6.4l1.65 1.375v3.375h-4V7.775L9.15 6.4V5.15H6Zm3.15-10h.7Zm1.85 5Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100.displayName = 'AmauiIconMaterialEmojiFoodBeverageW100';

export default IconMaterialEmojiFoodBeverageW100;
