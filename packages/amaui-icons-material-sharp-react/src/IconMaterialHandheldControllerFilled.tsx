import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandheldControllerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandheldControllerFilled'

      short_name='HandheldController'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240q-66 0-113-47t-47-113q-100 1-170-69.5T40-640q0-33 23.5-56.5T120-720h160v-40h-80v-80h240v80h-80v40h127q16 0 30.5 6t25.5 17l335 335q42 42 42 100t-42 100q-42 42-100 42t-100-42l-78-78H440Zm0-160h-81q0 33 23.5 56.5T440-320h80l-80-80Z"/>
    </Icon>
  );
});

IconMaterialHandheldControllerFilled.displayName = 'AmauiIconMaterialHandheldControllerFilled';

export default IconMaterialHandheldControllerFilled;
