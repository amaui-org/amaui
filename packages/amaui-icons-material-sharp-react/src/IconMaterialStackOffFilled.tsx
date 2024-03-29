import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffFilled'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m880-194-80-80v-286H514l-80-80h446v446ZM560-720v-80H274l-80-80h446v160h-80Zm240 446L514-560h286v286Zm23 251-57-57H320v-446L160-686v286h80v80H80v-446l-57-57 57-57L880-80l-57 57Z"/>
    </Icon>
  );
});

IconMaterialStackOffFilled.displayName = 'AmauiIconMaterialStackOffFilled';

export default IconMaterialStackOffFilled;
