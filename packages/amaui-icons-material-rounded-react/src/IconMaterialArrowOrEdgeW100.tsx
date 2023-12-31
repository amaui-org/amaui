import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowOrEdgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOrEdgeW100'

      short_name='ArrowOrEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M303-224v-272q0-14-9-23t-23-9H164q-25 0-42.5-17.5T104-588v-186q0-6 4-10t10-4q6 0 10 4t4 10v186q0 14 9 23t23 9h107q25 0 42.5 17.5T331-496v271l80-79q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-92 92q-9 9-21 9t-21-9l-93-93q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l80 80Zm354 0 80-80q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-92 92q-9 9-21 9t-21-9l-93-93q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l80 80v-272q0-25 17.5-42.5T689-556h107q14 0 23-9t9-23v-186q0-6 4-10t10-4q6 0 10 4t4 10v186q0 25-17.5 42.5T796-528H689q-14 0-23 9t-9 23v272Z"/>
    </Icon>
  );
});

IconMaterialArrowOrEdgeW100.displayName = 'AmauiIconMaterialArrowOrEdgeW100';

export default IconMaterialArrowOrEdgeW100;
