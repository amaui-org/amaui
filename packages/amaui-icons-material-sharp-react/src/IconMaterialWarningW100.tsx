import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningW100'

      short_name='Warning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.5Zm-8.75 7.2L12 4.6l8.75 15.1Zm8.4-4.2h.7v-5h-.7Zm.35 2q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15ZM4.45 19h15.1L12 6Z"/>
    </Icon>
  );
});

IconMaterialWarningW100.displayName = 'AmauiIconMaterialWarningW100';

export default IconMaterialWarningW100;
