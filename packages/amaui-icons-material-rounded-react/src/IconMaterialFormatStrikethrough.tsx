import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatStrikethrough = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethrough'

      short_name='FormatStrikethrough'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14q-.425 0-.712-.288Q2 13.425 2 13t.288-.713Q2.575 12 3 12h18q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 14 21 14Zm7.5-4V7h-4q-.625 0-1.062-.438Q5 6.125 5 5.5t.438-1.062Q5.875 4 6.5 4h11q.625 0 1.062.438Q19 4.875 19 5.5t-.438 1.062Q18.125 7 17.5 7h-4v3ZM12 20q-.625 0-1.062-.438-.438-.437-.438-1.062V16h3v2.5q0 .625-.438 1.062Q12.625 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethrough.displayName = 'AmauiIconMaterialFormatStrikethrough';

export default IconMaterialFormatStrikethrough;
