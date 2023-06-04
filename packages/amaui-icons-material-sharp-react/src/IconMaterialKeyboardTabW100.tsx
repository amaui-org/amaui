import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabW100'

      short_name='KeyboardTab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.025 17.075-.5-.475 4.25-4.25H2.65v-.7h13.1l-4.2-4.25.475-.475L17.1 12Zm8.625.275V6.65h.7v10.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabW100.displayName = 'AmauiIconMaterialKeyboardTabW100';

export default IconMaterialKeyboardTabW100;
