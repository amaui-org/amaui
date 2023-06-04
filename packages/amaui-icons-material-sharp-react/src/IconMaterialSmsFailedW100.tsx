import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFailedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedW100'

      short_name='SmsFailed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 11.6h.7V5.5h-.7Zm.35 2.65q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedW100.displayName = 'AmauiIconMaterialSmsFailedW100';

export default IconMaterialSmsFailedW100;
