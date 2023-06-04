import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyW100Filled'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.2 17.7H8.8q-.65 0-1.075-.425Q7.3 16.85 7.3 16.2V3.8q0-.65.425-1.075Q8.15 2.3 8.8 2.3h6.225q.3 0 .575.112.275.113.5.338l3.15 3.15q.225.225.338.5.112.275.112.575V16.2q0 .65-.425 1.075-.425.425-1.075.425Zm-13.4 4q-.65 0-1.075-.425Q3.3 20.85 3.3 20.2V8.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V20.2q0 .3.25.55.25.25.55.25h8.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.25-15H19L15.3 3v2.95q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100Filled.displayName = 'AmauiIconMaterialFileCopyW100Filled';

export default IconMaterialFileCopyW100Filled;
