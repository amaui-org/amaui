import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenRunW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenRunW100'

      short_name='OpenRun'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-172 72-71q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-70 70q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-70-70q-4-4-4.5-9.5T389-243q5-5 10-5t10 5l71 71ZM172-480l71 71q4 4 4.5 9.5T243-389q-5 5-10 5t-10-5l-70-70q-5-5-7-10t-2-11q0-6 2-11t7-10l71-71q4-4 9-4t10 4q5 4 4.5 10t-4.5 10l-71 72Zm617 0-72-73q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l70 71q5 5 7 10t2 11q0 6-2 11t-7 10l-70 70q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l71-71ZM480-789l-72 72q-4 4-9.5 4t-9.5-4q-5-4-4.5-10t4.5-10l70-70q5-5 10-7t11-2q6 0 11 2t10 7l71 71q4 4 3.5 9.5T571-717q-4 4-9 4t-9-4l-73-72Z"/>
    </Icon>
  );
});

IconMaterialOpenRunW100.displayName = 'AmauiIconMaterialOpenRunW100';

export default IconMaterialOpenRunW100;
