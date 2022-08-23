import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationSearchingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingSharpFilled'
      short_name='LocationSearching'

      {...props}
    >
      <path d="M11 23V21Q7.875 20.65 5.638 18.413Q3.4 16.175 3.05 13.05H1.05V11.05H3.05Q3.4 7.925 5.638 5.688Q7.875 3.45 11 3.1V1.1H13V3.1Q16.125 3.45 18.363 5.688Q20.6 7.925 20.95 11.05H22.95V13.05H20.95Q20.6 16.175 18.363 18.413Q16.125 20.65 13 21V23ZM12 19.05Q14.9 19.05 16.95 17Q19 14.95 19 12.05Q19 9.15 16.95 7.1Q14.9 5.05 12 5.05Q9.1 5.05 7.05 7.1Q5 9.15 5 12.05Q5 14.95 7.05 17Q9.1 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingSharpFilled.displayName = 'AmauiIconMaterialLocationSearchingSharpFilled';

export default IconMaterialLocationSearchingSharpFilled;
