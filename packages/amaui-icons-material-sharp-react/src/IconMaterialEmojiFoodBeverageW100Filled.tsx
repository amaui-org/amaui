import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100Filled'

      short_name='EmojiFoodBeverage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.55v-.7h12.8v.7Zm11.4-11.1h1.4q.35 0 .575-.225Q18.9 8 18.9 7.65v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-1.4Zm-11.4 7.4V4.45h3.85V6.4L7.5 7.775v3.375h4V7.775L9.85 6.4V4.45h8.25q.65 0 1.075.425.425.425.425 1.075v1.7q0 .65-.425 1.075-.425.425-1.075.425h-1.4v6.7Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100Filled.displayName = 'AmauiIconMaterialEmojiFoodBeverageW100Filled';

export default IconMaterialEmojiFoodBeverageW100Filled;
