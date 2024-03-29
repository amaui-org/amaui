import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenter'

      short_name='FormatAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm4-4q-.425 0-.713-.288Q7 16.425 7 16t.287-.713Q7.575 15 8 15h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 17 16 17Zm-4-4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.713-.288Q7 8.425 7 8t.287-.713Q7.575 7 8 7h8q.425 0 .712.287Q17 7.575 17 8t-.288.712Q16.425 9 16 9ZM4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenter.displayName = 'AmauiIconMaterialFormatAlignCenter';

export default IconMaterialFormatAlignCenter;
