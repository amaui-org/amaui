import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantW100'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.475 20.625 9.55 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425h-3.75l-1.925 1.925q-.225.225-.525.225-.3 0-.525-.225ZM5.8 18h4.05L12 20.15 14.15 18h4.05q.35 0 .575-.225Q19 17.55 19 17.2V4.8q0-.35-.225-.575Q18.55 4 18.2 4H5.8q-.35 0-.575.225Q5 4.45 5 4.8v12.4q0 .35.225.575Q5.45 18 5.8 18ZM5 4v14V4Zm8.075 8.075 1.55-.7q.25-.1.25-.375t-.25-.375l-1.55-.7-.7-1.55q-.1-.25-.375-.25t-.375.25l-.7 1.55-1.55.7q-.25.1-.25.375t.25.375l1.55.7.7 1.55q.1.25.375.25t.375-.25Z"/>
    </Icon>
  );
});

IconMaterialAssistantW100.displayName = 'AmauiIconMaterialAssistantW100';

export default IconMaterialAssistantW100;
