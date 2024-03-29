import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomOutMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMap'

      short_name='ZoomOutMap'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9q-.425 0-.712-.288Q3 8.425 3 8V4q0-.425.288-.713Q3.575 3 4 3h4q.425 0 .713.287Q9 3.575 9 4t-.287.712Q8.425 5 8 5H6.4l2.425 2.425Q9.1 7.7 9.1 8.1t-.3.7q-.275.275-.7.275-.425 0-.7-.275L5 6.4V8q0 .425-.287.712Q4.425 9 4 9Zm11.2-.2q-.275-.275-.275-.7 0-.425.275-.7L17.6 5H16q-.425 0-.712-.288Q15 4.425 15 4t.288-.713Q15.575 3 16 3h4q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9t-.712-.288Q19 8.425 19 8V6.4l-2.425 2.425Q16.3 9.1 15.9 9.1t-.7-.3ZM16 21q-.425 0-.712-.288Q15 20.425 15 20t.288-.712Q15.575 19 16 19h1.6l-2.425-2.425Q14.9 16.3 14.9 15.9t.3-.7q.275-.275.7-.275.425 0 .7.275l2.4 2.4V16q0-.425.288-.713Q19.575 15 20 15t.712.287Q21 15.575 21 16v4q0 .425-.288.712Q20.425 21 20 21ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-4q0-.425.288-.713Q3.575 15 4 15t.713.287Q5 15.575 5 16v1.6l2.425-2.425Q7.7 14.9 8.1 14.9t.7.3q.275.275.275.7 0 .425-.275.7L6.4 19H8q.425 0 .713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMap.displayName = 'AmauiIconMaterialZoomOutMap';

export default IconMaterialZoomOutMap;
