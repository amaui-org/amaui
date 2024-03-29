import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxCustomizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomizeFilled'

      short_name='InboxCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.025 21-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.3-.05-.65 0-.35.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262l.3-1.5h2l.3 1.5q.3.125.563.262.262.138.537.338l1.45-.45 1 1.7-1.15 1q.05.3.05.65 0 .35-.05.65l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262l-.3 1.5ZM3 20V2h18v7.65q-.475-.225-.975-.363-.5-.137-1.025-.212V4H5v9h4.2q.225.675.75 1.175t1.175.7q-.225 1.35.063 2.675.287 1.325 1.087 2.45Zm15.025-2q.825 0 1.413-.587.587-.588.587-1.413 0-.825-.587-1.413Q18.85 14 18.025 14q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.413.587.587 1.412.587Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomizeFilled.displayName = 'AmauiIconMaterialInboxCustomizeFilled';

export default IconMaterialInboxCustomizeFilled;
