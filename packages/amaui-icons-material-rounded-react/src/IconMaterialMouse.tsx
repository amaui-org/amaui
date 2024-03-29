import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mouse'

      short_name='Mouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.9 0-4.95-2.05Q5 17.9 5 15V9q0-2.9 2.05-4.95Q9.1 2 12 2q2.9 0 4.95 2.05Q19 6.1 19 9v6q0 2.9-2.05 4.95Q14.9 22 12 22Zm1-13h4q0-1.8-1.137-3.175Q14.725 4.45 13 4.1ZM7 9h4V4.1q-1.725.35-2.863 1.725Q7 7.2 7 9Zm5 11q2.075 0 3.538-1.462Q17 17.075 17 15v-4H7v4q0 2.075 1.463 3.538Q9.925 20 12 20Zm0-9Zm1-2Zm-2 0Zm1 2Z"/>
    </Icon>
  );
});

IconMaterialMouse.displayName = 'AmauiIconMaterialMouse';

export default IconMaterialMouse;
