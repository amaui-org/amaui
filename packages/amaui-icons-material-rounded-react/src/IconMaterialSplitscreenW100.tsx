import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenW100'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 10.3h10.4q.35 0 .575-.225Q18 9.85 18 9.5V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8v4.7q0 .35.225.575.225.225.575.225Zm0 .7q-.65 0-1.075-.425Q5.3 10.15 5.3 9.5V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v4.7q0 .65-.425 1.075Q17.85 11 17.2 11Zm0 9h10.4q.35 0 .575-.225Q18 19.55 18 19.2v-4.7q0-.35-.225-.575-.225-.225-.575-.225H6.8q-.35 0-.575.225Q6 14.15 6 14.5v4.7q0 .35.225.575Q6.45 20 6.8 20Zm0 .7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2v-4.7q0-.65.425-1.075Q6.15 13 6.8 13h10.4q.65 0 1.075.425.425.425.425 1.075v4.7q0 .65-.425 1.075-.425.425-1.075.425ZM6 10.3V4v6.3ZM6 20v-6.3V20Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenW100.displayName = 'AmauiIconMaterialSplitscreenW100';

export default IconMaterialSplitscreenW100;
