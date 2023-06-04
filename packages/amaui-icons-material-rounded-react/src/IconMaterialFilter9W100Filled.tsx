import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9W100Filled'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 14.35h1.85q.65 0 1.075-.425.425-.425.425-1.075v-5.7q0-.65-.425-1.075-.425-.425-1.075-.425h-1.7q-.65 0-1.075.425Q11 6.5 11 7.15v1.7q0 .65.425 1.075.425.425 1.075.425H15v2.5q0 .35-.225.575-.225.225-.575.225h-1.875q-.125 0-.225.1T12 14q0 .15.1.25t.25.1ZM15 9.65h-2.5q-.35 0-.575-.225Q11.7 9.2 11.7 8.85v-1.7q0-.35.225-.575.225-.225.575-.225h1.7q.35 0 .575.225Q15 6.8 15 7.15ZM8.15 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilter9W100Filled.displayName = 'AmauiIconMaterialFilter9W100Filled';

export default IconMaterialFilter9W100Filled;
