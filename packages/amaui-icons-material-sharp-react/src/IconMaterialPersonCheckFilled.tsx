import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonCheckFilled'

      short_name='PersonCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/>
    </Icon>
  );
});

IconMaterialPersonCheckFilled.displayName = 'AmauiIconMaterialPersonCheckFilled';

export default IconMaterialPersonCheckFilled;
