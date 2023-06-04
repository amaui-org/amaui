import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOptionKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyFilled'

      short_name='KeyboardOptionKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.775 19 7.85 7H3V5h6l6.925 12H21v2ZM15 7V5h6v2Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyFilled.displayName = 'AmauiIconMaterialKeyboardOptionKeyFilled';

export default IconMaterialKeyboardOptionKeyFilled;
