import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEditFilled'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160v-50q0-16 6.5-30.5T584-266l197-197q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L706-143q-11 11-25.5 17t-30.5 6h-50q-17 0-28.5-11.5T560-160Zm-400-40v-72q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q37 0 73 4.5t72 14.5L515-311q-17 17-26 39t-9 46v66H200q-17 0-28.5-11.5T160-200Zm663-144 37-39-37-37-38 38 38 38ZM480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialPersonEditFilled.displayName = 'AmauiIconMaterialPersonEditFilled';

export default IconMaterialPersonEditFilled;
