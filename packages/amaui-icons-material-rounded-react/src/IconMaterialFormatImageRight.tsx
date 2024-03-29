import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRight'

      short_name='FormatImageRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm0-4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h4q.425 0 .713.287Q9 15.575 9 16t-.287.712Q8.425 17 8 17Zm0-4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h4q.425 0 .713.287Q9 11.575 9 12t-.287.712Q8.425 13 8 13Zm0-4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h4q.425 0 .713.287Q9 7.575 9 8t-.287.712Q8.425 9 8 9Zm0-4q-.425 0-.712-.288Q3 4.425 3 4t.288-.713Q3.575 3 4 3h16q.425 0 .712.287Q21 3.575 21 4t-.288.712Q20.425 5 20 5Zm8 12q-.425 0-.712-.288Q11 16.425 11 16V8q0-.425.288-.713Q11.575 7 12 7h8q.425 0 .712.287Q21 7.575 21 8v8q0 .425-.288.712Q20.425 17 20 17Zm1-2h6V9h-6Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRight.displayName = 'AmauiIconMaterialFormatImageRight';

export default IconMaterialFormatImageRight;
