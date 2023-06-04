import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDown'

      short_name='OpenInNewDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V216h720v360h-80V296H200v560h280v80H120Zm440 0v-80h144L332 484l56-56 372 371V656h80v280H560Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDown.displayName = 'AmauiIconMaterialOpenInNewDown';

export default IconMaterialOpenInNewDown;
