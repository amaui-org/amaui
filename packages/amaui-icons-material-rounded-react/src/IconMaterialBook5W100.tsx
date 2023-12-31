import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5W100'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M282-132q-29 0-49.5-19T212-198v-527q0-29 20.5-50.5T282-803l265-57q28-6 50.5 11.5T620-802v446q0 21-13.5 37T573-298l-300 67q-13 3-23 11.5T240-198q0 17 12.5 27.5T282-160h406q14 0 23-9t9-23v-542q0-6 4-10t10-4q6 0 10 4t4 10v542q0 25-17.5 42.5T688-132H282Zm46-139 239-53q11-2 18-11t7-20v-446q0-15-12-25t-27-7l-225 49v513Zm-28 6v-513l-18 4q-18 4-30 17.5T240-725v480q8-5 16-8.5t17-5.5l27-6Zm-60-509v529-529Z"/>
    </Icon>
  );
});

IconMaterialBook5W100.displayName = 'AmauiIconMaterialBook5W100';

export default IconMaterialBook5W100;
