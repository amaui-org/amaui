import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListNumbered = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListNumbered'

      short_name='FormatListNumbered'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20q-.2 0-.35-.15Q3 19.7 3 19.5q0-.2.15-.35.15-.15.35-.15H5v-.5h-.5q-.2 0-.35-.15Q4 18.2 4 18q0-.2.15-.35.15-.15.35-.15H5V17H3.5q-.2 0-.35-.15Q3 16.7 3 16.5q0-.2.15-.35.15-.15.35-.15h2q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35-.15.15-.35.15Zm1-12q-.2 0-.35-.15Q4 7.7 4 7.5V5h-.5q-.2 0-.35-.15Q3 4.7 3 4.5q0-.2.15-.35Q3.3 4 3.5 4h1q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35Q4.7 8 4.5 8Zm-1 6q-.2 0-.35-.15Q3 13.7 3 13.5v-.225q0-.1.125-.325L4.8 11H3.5q-.2 0-.35-.15Q3 10.7 3 10.5q0-.2.15-.35.15-.15.35-.15h2q.2 0 .35.15.15.15.15.35v.225q0 .1-.125.325L4.2 13h1.3q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15ZM9 19q-.425 0-.712-.288Q8 18.425 8 18t.288-.712Q8.575 17 9 17h11q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Zm0-6q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h11q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-6q-.425 0-.712-.287Q8 6.425 8 6t.288-.713Q8.575 5 9 5h11q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialFormatListNumbered.displayName = 'AmauiIconMaterialFormatListNumbered';

export default IconMaterialFormatListNumbered;
