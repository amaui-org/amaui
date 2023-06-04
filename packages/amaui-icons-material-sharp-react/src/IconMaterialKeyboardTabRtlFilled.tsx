import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlFilled'

      short_name='KeyboardTabRtl'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816 240 576l240-240 56 56-143 144h487v80H393l144 144-57 56Zm-400 0V336h80v480H80Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlFilled.displayName = 'AmauiIconMaterialKeyboardTabRtlFilled';

export default IconMaterialKeyboardTabRtlFilled;
