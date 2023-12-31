import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightKeyboardFocusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightKeyboardFocusFilled'

      short_name='HighlightKeyboardFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-400h-80v400Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialHighlightKeyboardFocusFilled.displayName = 'AmauiIconMaterialHighlightKeyboardFocusFilled';

export default IconMaterialHighlightKeyboardFocusFilled;
