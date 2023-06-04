import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackW100Filled'

      short_name='VideoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.425 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Zm1.85-3.05h6.7q.275 0 .375-.225.1-.225-.05-.425l-1.775-2.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackW100Filled.displayName = 'AmauiIconMaterialVideoCameraBackW100Filled';

export default IconMaterialVideoCameraBackW100Filled;
