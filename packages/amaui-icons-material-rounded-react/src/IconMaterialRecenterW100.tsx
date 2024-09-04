import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecenterW100'

      short_name='Recenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-281v175q0 6-4 10t-10 4q-6 0-10-4t-4-10v-175l-54 54q-4 4-9.5 4.5T392-227q-5-5-5-10t5-10l67-67q9-9 21-9t21 9l67 67q4 4 4.5 9.5T568-227q-5 5-10 5t-10-5l-54-54ZM281-466H106q-6 0-10-4t-4-10q0-6 4-10t10-4h175l-54-54q-4-4-4.5-9.5T227-568q5-5 10-5t10 5l67 67q9 9 9 21t-9 21l-67 67q-4 4-9.5 4.5T227-392q-5-5-5-10t5-10l54-54Zm398 0 54 54q4 4 4.5 9.5T733-392q-5 5-10 5t-10-5l-67-67q-9-9-9-21t9-21l67-67q4-4 9.5-4.5T733-568q5 5 5 10t-5 10l-54 54h175q6 0 10 4t4 10q0 6-4 10t-10 4H679Zm-199 19q-14 0-23.5-9.5T447-480q0-14 9.5-23.5T480-513q14 0 23.5 9.5T513-480q0 14-9.5 23.5T480-447Zm-14-232v-175q0-6 4-10t10-4q6 0 10 4t4 10v175l54-54q4-4 9.5-4.5T568-733q5 5 5 10t-5 10l-67 67q-9 9-21 9t-21-9l-67-67q-4-4-4.5-9.5T392-733q5-5 10-5t10 5l54 54Z"/>
    </Icon>
  );
});

IconMaterialRecenterW100.displayName = 'AmauiIconMaterialRecenterW100';

export default IconMaterialRecenterW100;
