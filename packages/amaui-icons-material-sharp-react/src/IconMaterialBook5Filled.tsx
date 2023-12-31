import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5Filled'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l395-78v640l-379 76q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-640h80v720H270Zm10-217 80-16v-478l-80 16v478Z"/>
    </Icon>
  );
});

IconMaterialBook5Filled.displayName = 'AmauiIconMaterialBook5Filled';

export default IconMaterialBook5Filled;
