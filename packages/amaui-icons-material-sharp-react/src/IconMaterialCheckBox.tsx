import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBox'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 16.2 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCheckBox.displayName = 'AmauiIconMaterialCheckBox';

export default IconMaterialCheckBox;
