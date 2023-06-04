import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFailedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedW100Filled'

      short_name='SmsFailed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 11.6h.7V5.5h-.7Zm.35 2.65q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15ZM3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedW100Filled.displayName = 'AmauiIconMaterialSmsFailedW100Filled';

export default IconMaterialSmsFailedW100Filled;
