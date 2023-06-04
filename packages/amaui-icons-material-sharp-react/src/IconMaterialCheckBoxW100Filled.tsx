import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100Filled'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 15.3 6.2-6.2-.5-.5-5.7 5.7-2.85-2.85-.5.5Zm-6.3 4.4V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100Filled.displayName = 'AmauiIconMaterialCheckBoxW100Filled';

export default IconMaterialCheckBoxW100Filled;
