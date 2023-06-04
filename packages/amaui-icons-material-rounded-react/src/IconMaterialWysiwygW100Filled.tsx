import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWysiwygW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygW100Filled'

      short_name='Wysiwyg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V7H5v11.2q0 .35.225.575Q5.45 19 5.8 19Zm1.55-7.65q-.15 0-.25-.1T7 11q0-.15.1-.25t.25-.1h9.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1T7 15q0-.15.1-.25t.25-.1h5.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialWysiwygW100Filled.displayName = 'AmauiIconMaterialWysiwygW100Filled';

export default IconMaterialWysiwygW100Filled;
