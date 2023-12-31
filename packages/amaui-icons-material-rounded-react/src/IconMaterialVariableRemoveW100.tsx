import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveW100'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-332H202q-12.75 0-21.375-8.511-8.625-8.51-8.625-21.091v-236.817q0-12.581 8.625-21.081T202-628h556q12.75 0 21.375 8.625T788-598v41h-28v-43H200v240h363v28Zm-363-28v-240 240Zm568 28-75 75q-4 4-9.5 4.5t-10.717-4.717Q668-262 668-267q0-5 5-10l75-75-75-75q-4-4-4.5-9.5T673-447q5-5 10-5t10 5l75 75 75-75q4-4 9.5-4.5t10.717 4.717Q868-442 868-437q0 5-5 10l-75 75 75 75q4 4 4.5 9.5t-4.717 10.717Q858-252 853-252q-5 0-10-5l-75-75Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveW100.displayName = 'AmauiIconMaterialVariableRemoveW100';

export default IconMaterialVariableRemoveW100;
