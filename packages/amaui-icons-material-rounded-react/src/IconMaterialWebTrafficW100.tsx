import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebTrafficW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebTrafficW100'

      short_name='WebTraffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-534h92q6 0 10 4t4 10q0 6-4 10t-10 4H94q-6 0-10-4t-4-10q0-6 4-10t10-4Zm94 226 64-64q4-4 9.5-4.5T272-372q5 5 5 10t-5 10l-64 64q-4 4-9.5 4.5T188-288q-5-5-5-10t5-10Zm64-360-64-64q-4-4-4.5-9.5T188-752q5-5 10-5t10 5l64 64q4 4 4.5 9.5T272-668q-5 5-10 5t-10-5Zm397 413L492-412l-19 60q-2 5-6 8t-9 3q-5 0-8.5-3t-5.5-8l-52-170q-2-7-.5-12t6.5-10q5-5 10-6.5t12 .5l176 53q5 2 8 5.5t3 8.5q0 5-2.5 8.5T597-469l-63 23 149 149q9 9 9 21t-9 21q-7 7-17 7t-17-7ZM406-734v-92q0-6 4-10t10-4q6 0 10 4t4 10v92q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm162 46 64-64q4-4 9.5-4.5T652-752q5 5 5 10t-5 10l-64 64q-4 4-9.5 4.5T568-668q-5-5-5-10t5-10Z"/>
    </Icon>
  );
});

IconMaterialWebTrafficW100.displayName = 'AmauiIconMaterialWebTrafficW100';

export default IconMaterialWebTrafficW100;
