import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveFilled'

      short_name='PersonRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 11V9h6v2Zm-7 1q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveFilled.displayName = 'AmauiIconMaterialPersonRemoveFilled';

export default IconMaterialPersonRemoveFilled;
