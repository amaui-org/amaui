import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100'

      short_name='VideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.625 15.35q.15 0 .25-.1t.1-.25v-2.65h2.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65h-2.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65V15q0 .15.1.25t.25.1Zm-5.2 3.35q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.35 0 .575-.225.225-.225.225-.575V6.8q0-.35-.225-.575Q16.175 6 15.825 6h-10.4q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575.225.225.575.225Zm-.8 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100.displayName = 'AmauiIconMaterialVideoCallW100';

export default IconMaterialVideoCallW100;
