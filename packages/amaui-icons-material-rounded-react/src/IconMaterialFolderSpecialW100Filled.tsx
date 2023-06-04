import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecialW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialW100Filled'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 14.575 1.125.875q.15.125.3.025t.1-.3L16 13.75l1.225-1q.125-.125.075-.288-.05-.162-.225-.162H15.6l-.475-1.4q-.05-.175-.225-.175t-.225.175l-.475 1.4h-1.475q-.175 0-.225.162-.05.163.075.288l1.225 1-.425 1.425q-.05.2.1.3.15.1.3-.025ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .575.112.275.113.5.338l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialW100Filled.displayName = 'AmauiIconMaterialFolderSpecialW100Filled';

export default IconMaterialFolderSpecialW100Filled;
