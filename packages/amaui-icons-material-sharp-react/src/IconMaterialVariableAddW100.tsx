import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddW100'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-332H172v-296h616v68h-28v-40H200v240h360v28Zm-360-28v-240 240Zm560 148v-120H640v-28h120v-120h28v120h120v28H788v120h-28Z"/>
    </Icon>
  );
});

IconMaterialVariableAddW100.displayName = 'AmauiIconMaterialVariableAddW100';

export default IconMaterialVariableAddW100;
