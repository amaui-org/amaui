import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxCustomize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomize'

      short_name='InboxCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18h6.325q.175.55.4 1.05.225.5.55.95H3V2h18v7.65q-.475-.225-.975-.363-.5-.137-1.025-.212V4H5v9h4.2q.225.675.75 1.175t1.175.7q-.075.5-.1 1.012-.025.513.05 1.013-.9-.175-1.688-.662Q8.6 15.75 8 15H5Zm0 0H11.325Zm12.025 3-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.3-.05-.65 0-.35.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262l.3-1.5h2l.3 1.5q.3.125.563.262.262.138.537.338l1.45-.45 1 1.7-1.15 1q.05.3.05.65 0 .35-.05.65l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262l-.3 1.5Zm1-3q.825 0 1.413-.587.587-.588.587-1.413 0-.825-.587-1.413Q18.85 14 18.025 14q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.413.587.587 1.412.587Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomize.displayName = 'AmauiIconMaterialInboxCustomize';

export default IconMaterialInboxCustomize;
