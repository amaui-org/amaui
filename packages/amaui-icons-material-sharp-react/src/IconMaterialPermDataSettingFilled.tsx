import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDataSettingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDataSettingFilled'

      short_name='PermDataSetting'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.025 23-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.3-.05-.65 0-.35.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262l.3-1.5h2l.3 1.5q.3.125.563.262.262.138.537.338l1.45-.45 1 1.7-1.15 1q.05.3.05.65 0 .35-.05.65l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262l-.3 1.5Zm1-3q.825 0 1.413-.587.587-.588.587-1.413 0-.825-.587-1.413Q18.85 16 18.025 16q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.413.587.587 1.412.587Zm-18 0 20-20v11h-2q-2.95 0-4.9 2.025-1.95 2.025-1.95 4.975v2Z"/>
    </Icon>
  );
});

IconMaterialPermDataSettingFilled.displayName = 'AmauiIconMaterialPermDataSettingFilled';

export default IconMaterialPermDataSettingFilled;
