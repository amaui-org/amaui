import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowAndEdgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowAndEdgeW100'

      short_name='ArrowAndEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-224v-212q0-38-27-65t-65-27H164q-25 0-42.5-17.5T104-588v-186q0-6 4-10t10-4q6 0 10 4t4 10v186q0 14 9 23t23 9h210q35 0 63 17.5t43 46.5q15-29 43-46.5t63-17.5h210q14 0 23-9t9-23v-186q0-6 4-10t10-4q6 0 10 4t4 10v186q0 25-17.5 42.5T796-528H586q-38 0-65 27t-27 65v211l80-79q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-92 92q-9 9-21 9t-21-9l-93-93q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l80 80Z"/>
    </Icon>
  );
});

IconMaterialArrowAndEdgeW100.displayName = 'AmauiIconMaterialArrowAndEdgeW100';

export default IconMaterialArrowAndEdgeW100;
