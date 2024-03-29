import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSegmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentFilled'

      short_name='Segment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18q-.425 0-.712-.288Q9 17.425 9 17t.288-.712Q9.575 16 10 16h10q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 18 20 18ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Zm6 5q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h10q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialSegmentFilled.displayName = 'AmauiIconMaterialSegmentFilled';

export default IconMaterialSegmentFilled;
