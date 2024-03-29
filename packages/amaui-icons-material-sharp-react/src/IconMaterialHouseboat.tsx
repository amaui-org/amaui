import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseboat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Houseboat'

      short_name='Houseboat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-2q.95 0 1.4-.5.45-.5 1.925-.5 1.45 0 1.95.5t1.375.5q.95 0 1.412-.5.463-.5 1.938-.5 1.475 0 1.938.5.462.5 1.412.5.875 0 1.375-.5t1.95-.5q1.475 0 1.925.5.45.5 1.4.5v2q-1.425 0-1.95-.5-.525-.5-1.4-.5-.9 0-1.4.5-.5.5-1.925.5-1.475 0-1.925-.5-.45-.5-1.4-.5t-1.4.5q-.45.5-1.925.5-1.425 0-1.925-.5t-1.4-.5q-.875 0-1.4.5-.525.5-1.95.5Zm2.5-4-2.25-2.25 1.4-1.4L5.325 13H7V9.625l-1.325.975L4.5 9 12 3.5 19.5 9l-1.175 1.625L17 9.65V13h1.675l1.675-1.65 1.4 1.4L19.5 15ZM9 13h2v-2h2v2h2V8.175l-3-2.2-3 2.2Zm0 0h6-6Z"/>
    </Icon>
  );
});

IconMaterialHouseboat.displayName = 'AmauiIconMaterialHouseboat';

export default IconMaterialHouseboat;
