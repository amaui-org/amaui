import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOptionKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKey'

      short_name='KeyboardOptionKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="6" x="15" y="5"/><polygon points="9,5 3,5 3,7 7.85,7 14.77,19 21,19 21,17 15.93,17"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardOptionKey.displayName = 'AmauiIconMaterialKeyboardOptionKey';

export default IconMaterialKeyboardOptionKey;
