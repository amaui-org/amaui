import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnFilled'

      short_name='ChatAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V6q0-.825.587-1.412Q4.175 4 5 4h12q.825 0 1.413.588Q19 5.175 19 6v5.075q-.25-.05-.487-.063Q18.275 11 18 11t-.512.012q-.238.013-.488.063V6H5v10.175L5.175 16h6.9q-.05.25-.063.488Q12 16.725 12 17t.012.512q.013.238.063.488H6Zm4-11V8h8v2Zm0 4v-2h5v2Zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnFilled.displayName = 'AmauiIconMaterialChatAddOnFilled';

export default IconMaterialChatAddOnFilled;
