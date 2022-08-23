import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentRounded'
      short_name='Segment'

      {...props}
    >
      <path d="M10 18Q9.575 18 9.288 17.712Q9 17.425 9 17Q9 16.575 9.288 16.288Q9.575 16 10 16H20Q20.425 16 20.712 16.288Q21 16.575 21 17Q21 17.425 20.712 17.712Q20.425 18 20 18ZM4 8Q3.575 8 3.288 7.713Q3 7.425 3 7Q3 6.575 3.288 6.287Q3.575 6 4 6H20Q20.425 6 20.712 6.287Q21 6.575 21 7Q21 7.425 20.712 7.713Q20.425 8 20 8ZM10 13Q9.575 13 9.288 12.712Q9 12.425 9 12Q9 11.575 9.288 11.287Q9.575 11 10 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialSegmentRounded.displayName = 'AmauiIconMaterialSegmentRounded';

export default IconMaterialSegmentRounded;
