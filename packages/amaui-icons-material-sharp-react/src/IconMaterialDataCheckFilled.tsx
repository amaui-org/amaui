import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckFilled'

      short_name='DataCheck'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m612 506 141-142-28-28-113 113-57-57-28 29 85 85ZM120 896v-80h480v80H120Zm520-280q-83 0-141.5-58.5T440 416q0-83 58.5-141.5T640 216q83 0 141.5 58.5T840 416q0 83-58.5 141.5T640 616Zm-520-40v-80h252q7 22 16 42t22 38H120Zm0 160v-80h376q23 14 49 23.5t55 13.5v43H120Z"/>
    </Icon>
  );
});

IconMaterialDataCheckFilled.displayName = 'AmauiIconMaterialDataCheckFilled';

export default IconMaterialDataCheckFilled;
