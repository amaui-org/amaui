import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeft'

      short_name='FormatImageLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 21H4q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm0-4h-4q-.425 0-.712-.288Q15 16.425 15 16t.288-.713Q15.575 15 16 15h4q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17Zm0-4h-4q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11h4q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-4h-4q-.425 0-.712-.288Q15 8.425 15 8t.288-.713Q15.575 7 16 7h4q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Zm0-4H4q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm-8 12H4q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7h8q.425 0 .713.287Q13 7.575 13 8v8q0 .425-.287.712Q12.425 17 12 17Zm-1-2V9H5v6Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeft.displayName = 'AmauiIconMaterialFormatImageLeft';

export default IconMaterialFormatImageLeft;
