import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhereW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereW100'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.4-6.7-5.025V3.3h13.4v13.075Zm0-.9 6-4.5V4H6v12Zm-1.05-6.4 4.75-4.75-.5-.5-4.25 4.25-2.15-2.15-.5.5ZM12 4H6h12Z"/>
    </Icon>
  );
});

IconMaterialBeenhereW100.displayName = 'AmauiIconMaterialBeenhereW100';

export default IconMaterialBeenhereW100;
