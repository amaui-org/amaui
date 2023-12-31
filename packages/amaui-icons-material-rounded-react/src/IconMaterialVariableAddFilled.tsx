import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddFilled'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v83q-10-2-19.5-2.5T800-560q-100 0-170 70t-70 170q0 11 .5 20.5T563-280H160Zm600 0h-80q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h80v-80q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v80h80q17 0 28.5 11.5T960-320q0 17-11.5 28.5T920-280h-80v80q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-80Z"/>
    </Icon>
  );
});

IconMaterialVariableAddFilled.displayName = 'AmauiIconMaterialVariableAddFilled';

export default IconMaterialVariableAddFilled;
