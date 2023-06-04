import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelImportantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelImportantW100Filled'

      short_name='LabelImportant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17.7 8.65 12 5 6.3h9.975L19 12l-4.1 5.7Z"/>
    </Icon>
  );
});

IconMaterialLabelImportantW100Filled.displayName = 'AmauiIconMaterialLabelImportantW100Filled';

export default IconMaterialLabelImportantW100Filled;
