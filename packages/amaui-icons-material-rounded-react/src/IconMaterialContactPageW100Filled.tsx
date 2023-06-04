import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageW100Filled'

      short_name='ContactPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.4q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 10.7 12 10.7t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm-3.35 3.2h6.7v-.025q0-.425-.225-.7-.225-.275-.6-.45-.575-.25-1.213-.388Q12.675 14.9 12 14.9t-1.312.137q-.638.138-1.213.388-.375.175-.6.45-.225.275-.225.7Zm8.55 4.1H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h6.025q.3 0 .588.125.287.125.487.325l4.35 4.35q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialContactPageW100Filled.displayName = 'AmauiIconMaterialContactPageW100Filled';

export default IconMaterialContactPageW100Filled;
