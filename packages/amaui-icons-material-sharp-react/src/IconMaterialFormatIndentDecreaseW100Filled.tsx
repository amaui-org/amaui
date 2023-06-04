import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecreaseW100Filled'

      short_name='FormatIndentDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm8-4v-.7h8.7v.7Zm-5.3-1.9L3.9 12l2.45-2.45Zm5.3-2.1v-.7h8.7v.7Zm0-4v-.7h8.7v.7Zm-8-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecreaseW100Filled.displayName = 'AmauiIconMaterialFormatIndentDecreaseW100Filled';

export default IconMaterialFormatIndentDecreaseW100Filled;
