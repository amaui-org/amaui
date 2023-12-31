import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5W100Filled'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-132q-29 0-49.5-19T212-198v-527q0-29 20.5-50.5T282-803l265-57q28-6 50.5 11.5T620-802v446q0 21-13.5 37T573-298l-300 67q-13 3-23 11.5T240-198q0 17 12.5 27.5T282-160h406q14 0 23-9t9-23v-542q0-6 4-10t10-4q6 0 10 4t4 10v542q0 25-17.5 42.5T688-132H282Zm35-137q5-1 8-4.5t3-8.5v-485q0-7-5-11t-12-2q-5 1-8 4.5t-3 8.5v485q0 7 5 11t12 2Z"/>
    </Icon>
  );
});

IconMaterialBook5W100Filled.displayName = 'AmauiIconMaterialBook5W100Filled';

export default IconMaterialBook5W100Filled;
