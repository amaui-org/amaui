import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingW100'

      short_name='FormatLineSpacing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.875 19.1-3.1-3.1.5-.5 2.25 2.25V6.25L3.275 8.5l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v11.5l2.25-2.25.5.5Zm6.65-.75v-.7h8.7v.7Zm0-6v-.7h8.7v.7Zm0-6v-.7h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingW100.displayName = 'AmauiIconMaterialFormatLineSpacingW100';

export default IconMaterialFormatLineSpacingW100;
