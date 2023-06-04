import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.6 17.775-.6-.6V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1h-.9l-.7-.7H11l1 1h7.2q.65 0 1.075.425.425.425.425 1.075v8.425q0 .175-.025.3t-.075.25Zm.05 3.875L17.7 18.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h1.5L7 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h12.175L3.35 4.35q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l17.3 17.3q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-9.175-9.15Zm3.4-.45Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100.displayName = 'AmauiIconMaterialFolderOffW100';

export default IconMaterialFolderOffW100;
