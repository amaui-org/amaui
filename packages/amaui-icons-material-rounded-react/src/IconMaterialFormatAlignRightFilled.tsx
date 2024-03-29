import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightFilled'

      short_name='FormatAlignRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm6-4q-.425 0-.712-.288Q9 16.425 9 16t.288-.713Q9.575 15 10 15h10q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17Zm-6-4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm6-4q-.425 0-.712-.288Q9 8.425 9 8t.288-.713Q9.575 7 10 7h10q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9ZM4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightFilled.displayName = 'AmauiIconMaterialFormatAlignRightFilled';

export default IconMaterialFormatAlignRightFilled;
