import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncrease'

      short_name='FormatIndentIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm-1-6.2V9.2q0-.35.3-.475t.55.125l2.8 2.8q.15.15.15.35 0 .2-.15.35l-2.8 2.8q-.25.25-.55.125Q3 15.15 3 14.8Zm9 2.2q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17ZM4 5q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm8 4q-.425 0-.712-.288Q11 8.425 11 8t.288-.713Q11.575 7 12 7h8q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm0 4q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncrease.displayName = 'AmauiIconMaterialFormatIndentIncrease';

export default IconMaterialFormatIndentIncrease;
