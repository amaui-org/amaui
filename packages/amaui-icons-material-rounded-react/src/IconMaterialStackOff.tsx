import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOff'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m880-194-80-80v-286H514l-80-80h366q33 0 56.5 23.5T880-560v366ZM274-800l-80-80h366q33 0 56.5 23.5T640-800v40q0 17-11.5 28.5T600-720q-17 0-28.5-11.5T560-760v-40H274Zm383 383ZM400-160h286L400-446v286Zm0 80q-34 0-57-23t-23-57v-366L160-686v286h40q17 0 28.5 11.5T240-360q0 17-11.5 28.5T200-320h-40q-34 0-57-23t-23-57v-366l-29-29q-12-12-11.5-28.5T52-852q12-12 28.5-12t28.5 12l743 744q12 12 12 28t-12 28q-12 12-28.5 12T795-52l-29-28H400Zm143-223Z"/>
    </Icon>
  );
});

IconMaterialStackOff.displayName = 'AmauiIconMaterialStackOff';

export default IconMaterialStackOff;
