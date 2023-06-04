import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWideW100'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h3.3V6H4Zm4 0h8V6H8Zm8.7 0H20V6h-3.3ZM8 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthWideW100.displayName = 'AmauiIconMaterialWidthWideW100';

export default IconMaterialWidthWideW100;
