import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBurstModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeW100'

      short_name='BurstMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 17.7q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.7q0 .15-.1.25t-.25.1Zm-4.3 0q-.15 0-.25-.1t-.1-.25V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.7q0 .15-.1.25t-.25.1Zm9.75 0q-.65 0-1.075-.425-.425-.425-.425-1.075V7.8q0-.65.425-1.075Q11.45 6.3 12.1 6.3h8.4q.65 0 1.075.425Q22 7.15 22 7.8v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h8.4q.35 0 .575-.225.225-.225.225-.575V7.8q0-.35-.225-.575Q20.85 7 20.5 7h-8.4q-.35 0-.575.225-.225.225-.225.575v8.4q0 .35.225.575.225.225.575.225Zm1.6-2.3h5.2q.25 0 .363-.225.112-.225-.038-.425l-1.2-1.625q-.125-.175-.325-.163-.2.013-.325.163L15.8 14.5l-1.075-1.425Q14.6 12.9 14.4 12.9t-.325.175l-.7 1q-.15.2-.037.412.112.213.362.213ZM11.3 7v10V7Z"/>
    </Icon>
  );
});

IconMaterialBurstModeW100.displayName = 'AmauiIconMaterialBurstModeW100';

export default IconMaterialBurstModeW100;
