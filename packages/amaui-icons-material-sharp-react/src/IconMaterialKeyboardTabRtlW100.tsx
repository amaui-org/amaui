import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlW100'

      short_name='KeyboardTabRtl'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479 779 276 576l203-203 19 19-168 170h524v28H329l170 170-20 19Zm-373 11V362h28v428h-28Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlW100.displayName = 'AmauiIconMaterialKeyboardTabRtlW100';

export default IconMaterialKeyboardTabRtlW100;
