import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyW100'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.2 17.7H8.8q-.65 0-1.075-.425Q7.3 16.85 7.3 16.2V3.8q0-.65.425-1.075Q8.15 2.3 8.8 2.3h6.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V16.2q0 .65-.425 1.075-.425.425-1.075.425ZM15.3 3H8.8q-.3 0-.55.25Q8 3.5 8 3.8v12.4q0 .3.25.55.25.25.55.25h9.4q.3 0 .55-.25.25-.25.25-.55V6.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537ZM4.8 21.7q-.65 0-1.075-.425Q3.3 20.85 3.3 20.2V8.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20.2q0 .3.25.55.25.25.55.25h8.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM8 3v3.7V3v14V3Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100.displayName = 'AmauiIconMaterialFileCopyW100';

export default IconMaterialFileCopyW100;
