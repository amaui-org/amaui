import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100Filled'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v8.275L14.075 19.7Zm5.85-6.4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3.85-3.95q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM14 19l5-5h-4.25q-.325 0-.537.212-.213.213-.213.538Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100Filled.displayName = 'AmauiIconMaterialStickyNote2W100Filled';

export default IconMaterialStickyNote2W100Filled;
