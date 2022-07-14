import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeTwoTone'
      short_name='LocalPostOffice'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 11l8-5H4zM4 8v10h16V8l-8 5z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
    </Icon>
  );
});

export default IconMaterialLocalPostOfficeTwoTone;
