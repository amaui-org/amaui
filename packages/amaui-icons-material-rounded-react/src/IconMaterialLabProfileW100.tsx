import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T8.65 7q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-3 7.3h7.5q.575 0 1.05.25.475.25.825.7L18 19V4.8q0-.35-.225-.575Q17.55 4 17.2 4H6.8q-.35 0-.575.225Q6 4.45 6 4.8ZM6.8 20h11.075l-3.05-3.975q-.25-.325-.587-.5-.338-.175-.738-.175H6v3.85q0 .35.225.575Q6.45 20 6.8 20Zm10.4.7H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425ZM6 20V4v16Zm0-4.65v-.7.7Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100.displayName = 'AmauiIconMaterialLabProfileW100';

export default IconMaterialLabProfileW100;
