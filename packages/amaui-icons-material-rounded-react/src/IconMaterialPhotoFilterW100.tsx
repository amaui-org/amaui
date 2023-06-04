import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFilterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterW100'

      short_name='PhotoFilter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h9.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55V9.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.05q0 .65-.425 1.075-.425.425-1.075.425Zm5.25-6.75-1.3-.575Q9.5 12.25 9.5 12t.25-.375l1.3-.575.575-1.3q.125-.25.375-.25t.375.25l.575 1.3 1.3.575q.25.125.25.375t-.25.375l-1.3.575-.575 1.3q-.125.25-.375.25t-.375-.25Zm5.45-5.425-.7-.35q-.225-.125-.225-.35 0-.225.225-.35l.7-.35.35-.7q.125-.225.35-.225.225 0 .35.225l.35.7.7.35q.225.125.225.35 0 .225-.225.35l-.7.35-.35.7q-.125.225-.35.225-.225 0-.35-.225Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterW100.displayName = 'AmauiIconMaterialPhotoFilterW100';

export default IconMaterialPhotoFilterW100;
