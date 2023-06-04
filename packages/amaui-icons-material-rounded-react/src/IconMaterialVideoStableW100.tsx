import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStableW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.975 16.25q.3.1.575-.062.275-.163.35-.463l1.3-5q.05-.3-.087-.575-.138-.275-.438-.35l-7.6-2.05q-.3-.1-.575.062-.275.163-.35.463l-1.3 4.95q-.075.3.075.575.15.275.45.35Zm.225-.675L7.5 13.45 8.85 8.4l7.7 2.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 18V6v12Zm.8 0h14.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100.displayName = 'AmauiIconMaterialVideoStableW100';

export default IconMaterialVideoStableW100;
