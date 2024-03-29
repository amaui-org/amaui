import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoSettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsFilled'

      short_name='VideoSettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v7h-2V6H4v12h8v2Zm7.5-3.5v-9l7 4.5Zm8.35 6.5-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262l.3-1.5h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262l-.3 1.5Zm1-3q.825 0 1.413-.587.587-.588.587-1.413 0-.825-.587-1.413Q19.675 16 18.85 16q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.413.587.587 1.412.587Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsFilled.displayName = 'AmauiIconMaterialVideoSettingsFilled';

export default IconMaterialVideoSettingsFilled;
