import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearW100Filled'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.35 9.85-.525-.525L12.85 6.85H9.3l-.7-.7h10.25v.7h-5.225ZM19.2 20.2l-7.875-7.9-2.4 5.65H8.15l2.65-6.175L3.55 4.55l.5-.5L19.7 19.7Z"/>
    </Icon>
  );
});

IconMaterialFormatClearW100Filled.displayName = 'AmauiIconMaterialFormatClearW100Filled';

export default IconMaterialFormatClearW100Filled;
