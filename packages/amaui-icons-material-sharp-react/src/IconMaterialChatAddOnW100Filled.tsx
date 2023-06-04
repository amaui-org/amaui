import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatAddOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatAddOnW100Filled'

      short_name='ChatAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.425V6.15q0-.65.425-1.075Q4.5 4.65 5.15 4.65h11.7q.65 0 1.075.425.425.425.425 1.075V11h-.7V6.15q0-.3-.25-.55-.25-.25-.55-.25H5.15q-.3 0-.55.25-.25.25-.25.55v11.575l1.075-1.075H12v.7H5.725ZM7.15 9.35v-.7h7.7v.7Zm0 4v-.7h4.7v.7Zm10.5 7v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialChatAddOnW100Filled.displayName = 'AmauiIconMaterialChatAddOnW100Filled';

export default IconMaterialChatAddOnW100Filled;
