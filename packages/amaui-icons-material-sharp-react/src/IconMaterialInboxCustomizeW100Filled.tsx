import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxCustomizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxCustomizeW100Filled'

      short_name='InboxCustomize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.725 18.7-.05-.675q-.625-.125-1.037-.35-.413-.225-.788-.675l-.625.3-.4-.55.575-.45q-.225-.575-.225-1.125t.225-1.15l-.575-.475.4-.55.625.3q.35-.425.8-.663.45-.237 1.025-.362l.05-.675h.7l.05.675q.575.1 1.013.35.437.25.812.675l.625-.3.4.55-.575.475q.25.625.238 1.163-.013.537-.263 1.112l.6.45-.4.55-.625-.3q-.375.425-.787.663-.413.237-1.038.362l-.05.675ZM4.3 18.7V3.3h15.4v6.6q-.175-.125-.337-.212Q19.2 9.6 19 9.525V4H5v9.8h4.2q.25.725.775 1.212.525.488 1.25.688.175.875.575 1.637.4.763 1.05 1.363Zm12.775-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialInboxCustomizeW100Filled.displayName = 'AmauiIconMaterialInboxCustomizeW100Filled';

export default IconMaterialInboxCustomizeW100Filled;
