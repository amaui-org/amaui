import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClarifyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifyW100Filled'

      short_name='Clarify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.35h5.7v-.7h-5.7Zm10 0h.7v-8.7h-.7Zm-10-4h5.7v-.7h-5.7Zm0-4h5.7v-.7h-5.7ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q19.5 5 19.2 5H4.8q-.3 0-.55.25Q4 5.5 4 5.8v12.4q0 .3.25.55.25.25.55.25Zm14.4 0H4.8q-.3 0-.55-.25Q4 18.5 4 18.2V5.8q0-.3.25-.55Q4.5 5 4.8 5h14.4q.3 0 .55.25.25.25.25.55v12.4q0 .3-.25.55-.25.25-.55.25Z"/>
    </Icon>
  );
});

IconMaterialClarifyW100Filled.displayName = 'AmauiIconMaterialClarifyW100Filled';

export default IconMaterialClarifyW100Filled;
