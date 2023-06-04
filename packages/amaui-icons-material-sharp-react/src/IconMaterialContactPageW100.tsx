import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageW100'

      short_name='ContactPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.4q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 10.7 12 10.7t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-3.35 3.2h6.7v-.025q0-.425-.225-.7-.225-.275-.6-.45-.575-.25-1.213-.388Q12.675 14.9 12 14.9t-1.312.137q-.638.138-1.213.388-.375.175-.6.45-.225.275-.225.7ZM5.3 20.7V3.3h8.15l5.25 5.25V20.7ZM6 20h12V8.85L13.15 4H6Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialContactPageW100.displayName = 'AmauiIconMaterialContactPageW100';

export default IconMaterialContactPageW100;
