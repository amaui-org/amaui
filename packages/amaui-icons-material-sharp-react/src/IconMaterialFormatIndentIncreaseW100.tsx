import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncreaseW100'

      short_name='FormatIndentIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-5.9v-4.9L6.1 12Zm0-10.1v-.7h16.7v.7Zm8 12v-.7h8.7v.7Zm0-4v-.7h8.7v.7Zm0-4v-.7h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncreaseW100.displayName = 'AmauiIconMaterialFormatIndentIncreaseW100';

export default IconMaterialFormatIndentIncreaseW100;
