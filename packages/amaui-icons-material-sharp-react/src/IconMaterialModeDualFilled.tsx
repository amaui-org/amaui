import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeDualFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeDualFilled'

      short_name='ModeDual'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-720v113l-82-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T172-689l-75 75-57-57 75-75q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-746l26 26Zm0 200v113l-82-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T172-489l-75 75-57-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-546l26 26Zm0 200v113l-83-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T171-289l-75 75-56-56 75-76q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-346l26 26Zm80 240v-800h80v166l130-128 56 56-186 186v80h80l186-186 56 56-128 130h166v80H754l128 130-56 56-186-186h-80v80l186 186-56 56-130-128v166h-80Z"/>
    </Icon>
  );
});

IconMaterialModeDualFilled.displayName = 'AmauiIconMaterialModeDualFilled';

export default IconMaterialModeDualFilled;
