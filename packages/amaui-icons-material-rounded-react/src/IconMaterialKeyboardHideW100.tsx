import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardHideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideW100'

      short_name='KeyboardHide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 15.7q-.625 0-1.063-.438Q3.3 14.825 3.3 14.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v8.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q19.5 5 19.2 5H4.8q-.3 0-.55.25Q4 5.5 4 5.8v8.4q0 .3.25.55.25.25.55.25Zm6.5-7.3h1.4V6.3h-1.4Zm0 3h1.4V9.3h-1.4Zm-3-3h1.4V6.3H8.3Zm0 3h1.4V9.3H8.3Zm-3 0h1.4V9.3H5.3Zm0-3h1.4V6.3H5.3Zm3.7 6h6q.275 0 .488-.2.212-.2.212-.5 0-.275-.212-.488-.213-.212-.488-.212H9q-.275 0-.488.2-.212.2-.212.5 0 .275.212.487.213.213.488.213Zm5.3-3h1.4V9.3h-1.4Zm0-3h1.4V6.3h-1.4Zm3 3h1.4V9.3h-1.4Zm0-3h1.4V6.3h-1.4ZM12 21.325q-.025 0-.275-.1l-1.85-1.85q-.2-.2-.087-.437.112-.238.387-.238h3.65q.275 0 .388.238.112.237-.088.437l-1.85 1.85q-.05.05-.275.1ZM4 5V15 5Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideW100.displayName = 'AmauiIconMaterialKeyboardHideW100';

export default IconMaterialKeyboardHideW100;
