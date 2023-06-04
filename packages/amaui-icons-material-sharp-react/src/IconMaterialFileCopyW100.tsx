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
      <path d="M7.3 17.7V2.3h8.35l4.05 4.05V17.7Zm8-11V3H8v14h11V6.7Zm-12 15V8.3H4V21h9.7v.7ZM8 17V3v3.7V3v14Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100.displayName = 'AmauiIconMaterialFileCopyW100';

export default IconMaterialFileCopyW100;
