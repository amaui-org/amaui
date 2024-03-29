import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCode2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCode2'

      short_name='QrCode2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-2h2v2Zm-2-2v-5h2v5Zm8-3v-4h2v4Zm-2-4v-2h2v2ZM5 14v-2h2v2Zm-2-2v-2h2v2Zm9-7V3h2v2ZM4.5 7.5h3v-3h-3ZM4 9q-.425 0-.712-.288Q3 8.425 3 8V4q0-.425.288-.713Q3.575 3 4 3h4q.425 0 .713.287Q9 3.575 9 4v4q0 .425-.287.712Q8.425 9 8 9Zm.5 10.5h3v-3h-3ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-4q0-.425.288-.713Q3.575 15 4 15h4q.425 0 .713.287Q9 15.575 9 16v4q0 .425-.287.712Q8.425 21 8 21ZM16.5 7.5h3v-3h-3ZM16 9q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3h4q.425 0 .712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9Zm1 12v-3h-2v-2h4v3h2v2Zm-4-7v-2h4v2Zm-4 0v-2H7v-2h6v2h-2v2Zm1-5V5h2v2h2v2ZM5.25 6.75v-1.5h1.5v1.5Zm0 12v-1.5h1.5v1.5Zm12-12v-1.5h1.5v1.5Z"/>
    </Icon>
  );
});

IconMaterialQrCode2.displayName = 'AmauiIconMaterialQrCode2';

export default IconMaterialQrCode2;
