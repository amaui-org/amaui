import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElderlyWomanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyWomanW100Filled'

      short_name='ElderlyWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.7 22.6-.575-.4 2.7-3.95H6.95q.175-2.25.638-4.338.462-2.087 1.1-3.7.637-1.612 1.425-2.574.787-.963 1.612-.963.35 0 .65.163.3.162.5.512l.975 1.575q.65 1.15 1.95 1.912 1.3.763 2.275.763.55 0 .925.375t.375.925v9.7h-.7v-9.7q0-.25-.175-.425t-.425-.175q-.25 0-.425.175t-.175.425v.475h-.7V12.9q0-.175.1-.412.1-.238.225-.363-1.2-.3-2.3-1.138-1.1-.837-1.9-2.262l-.85 4.3 2.025 4.9V22.6h-.7v-4.35H9.7Zm6.525-17.5q-.65 0-1.125-.475T11.625 3.5q0-.05.075-.475-.2-.1-.337-.288-.138-.187-.138-.437 0-.35.225-.575.225-.225.575-.225.25 0 .438.137.187.138.287.338.125-.05.238-.063.112-.012.237-.012.65 0 1.125.475t.475 1.125q0 .65-.475 1.125t-1.125.475Z"/>
    </Icon>
  );
});

IconMaterialElderlyWomanW100Filled.displayName = 'AmauiIconMaterialElderlyWomanW100Filled';

export default IconMaterialElderlyWomanW100Filled;
