import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOffFilled'

      short_name='AdOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m791 1000-64-64H120V329l-64-65 56-56 736 736-57 56ZM200 856h447L200 409v447Zm640-33-80-80V416H433L233 216h607v607Z"/>
    </Icon>
  );
});

IconMaterialAdOffFilled.displayName = 'AmauiIconMaterialAdOffFilled';

export default IconMaterialAdOffFilled;
