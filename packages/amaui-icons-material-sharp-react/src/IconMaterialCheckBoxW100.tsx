import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxW100'

      short_name='CheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 15.3 6.2-6.2-.5-.5-5.7 5.7-2.85-2.85-.5.5Zm-6.3 4.4V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxW100.displayName = 'AmauiIconMaterialCheckBoxW100';

export default IconMaterialCheckBoxW100;
