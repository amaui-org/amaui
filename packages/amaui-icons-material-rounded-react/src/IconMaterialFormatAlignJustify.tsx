import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustify = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustify'

      short_name='FormatAlignJustify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm0-4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17Zm0-4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h16q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm0-4q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustify.displayName = 'AmauiIconMaterialFormatAlignJustify';

export default IconMaterialFormatAlignJustify;
