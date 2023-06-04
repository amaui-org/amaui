import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantW100Filled'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.475 20.625 9.55 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425h-3.75l-1.925 1.925q-.225.225-.525.225-.3 0-.525-.225Zm1.6-8.55 1.55-.7q.25-.125.25-.375t-.25-.375l-1.55-.7-.7-1.55q-.125-.25-.375-.25t-.375.25l-.7 1.55-1.55.7q-.25.125-.25.375t.25.375l1.55.7.7 1.55q.125.25.375.25t.375-.25Z"/>
    </Icon>
  );
});

IconMaterialAssistantW100Filled.displayName = 'AmauiIconMaterialAssistantW100Filled';

export default IconMaterialAssistantW100Filled;
