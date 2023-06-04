import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardW100'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 17h14.4q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q19.5 7 19.2 7H4.8q-.3 0-.55.25Q4 7.5 4 7.8v8.4q0 .3.25.55.25.25.55.25Zm0 .7q-.65 0-1.075-.425Q3.3 16.85 3.3 16.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h14.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.5-8h1.4V8.3h-1.4Zm0 3h1.4v-1.4h-1.4Zm-3-3h1.4V8.3H8.3Zm0 3h1.4v-1.4H8.3Zm-3 0h1.4v-1.4H5.3Zm0-3h1.4V8.3H5.3Zm3.7 6h6q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q15.275 14.3 15 14.3H9q-.275 0-.488.212-.212.213-.212.488t.212.488q.213.212.488.212Zm5.3-3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4Zm3 3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4ZM4 17V7 17Z"/>
    </Icon>
  );
});

IconMaterialKeyboardW100.displayName = 'AmauiIconMaterialKeyboardW100';

export default IconMaterialKeyboardW100;
