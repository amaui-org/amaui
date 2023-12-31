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
      <path d="M120-280v-400h720v123q-10-2-19.5-2.5T800-560q-100 0-170 70t-70 170q0 11 .5 20.5T563-280H120Zm640 120v-120H640v-80h120v-120h80v120h120v80H840v120h-80Z"/>
    </Icon>
  );
});

IconMaterialVariableAddFilled.displayName = 'AmauiIconMaterialVariableAddFilled';

export default IconMaterialVariableAddFilled;
