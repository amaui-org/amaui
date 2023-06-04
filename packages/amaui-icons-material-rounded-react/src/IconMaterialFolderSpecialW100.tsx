import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSpecialW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialW100'

      short_name='FolderSpecial'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.9 14.575 1.125.875q.15.125.3.012.15-.112.1-.287L16 13.75l1.225-1q.125-.125.075-.288-.05-.162-.225-.162H15.6l-.475-1.4q-.05-.175-.225-.175t-.225.175l-.475 1.4h-1.475q-.175 0-.225.162-.05.163.075.288l1.225 1-.425 1.425q-.05.175.1.287.15.113.3-.012ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialW100.displayName = 'AmauiIconMaterialFolderSpecialW100';

export default IconMaterialFolderSpecialW100;
