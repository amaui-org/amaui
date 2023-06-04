import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19H14v-4.25q0-.325.213-.538.212-.212.537-.212H19V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19Zm0 .7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v8.275L14.075 19.7Zm2.7-6.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-3.95q-.15 0-.25-.1T8.15 9q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100.displayName = 'AmauiIconMaterialStickyNote2W100';

export default IconMaterialStickyNote2W100;
