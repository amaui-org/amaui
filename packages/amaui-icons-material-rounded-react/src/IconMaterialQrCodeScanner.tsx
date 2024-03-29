import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQrCodeScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeScanner'

      short_name='QrCodeScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 7q-.425 0-.712-.287Q2 6.425 2 6V3q0-.425.288-.713Q2.575 2 3 2h3q.425 0 .713.287Q7 2.575 7 3t-.287.712Q6.425 4 6 4H4v2q0 .425-.287.713Q3.425 7 3 7Zm0 15q-.425 0-.712-.288Q2 21.425 2 21v-3q0-.425.288-.712Q2.575 17 3 17t.713.288Q4 17.575 4 18v2h2q.425 0 .713.288Q7 20.575 7 21t-.287.712Q6.425 22 6 22Zm15 0q-.425 0-.712-.288Q17 21.425 17 21t.288-.712Q17.575 20 18 20h2v-2q0-.425.288-.712Q20.575 17 21 17t.712.288Q22 17.575 22 18v3q0 .425-.288.712Q21.425 22 21 22Zm3-15q-.425 0-.712-.287Q20 6.425 20 6V4h-2q-.425 0-.712-.288Q17 3.425 17 3t.288-.713Q17.575 2 18 2h3q.425 0 .712.287Q22 2.575 22 3v3q0 .425-.288.713Q21.425 7 21 7Zm-3.5 10.5H19V19h-1.5Zm0-3H19V16h-1.5ZM16 16h1.5v1.5H16Zm-1.5 1.5H16V19h-1.5ZM13 16h1.5v1.5H13Zm3-3h1.5v1.5H16Zm-1.5 1.5H16V16h-1.5ZM13 13h1.5v1.5H13Zm6-8v6h-6V5Zm-8 8v6H5v-6Zm0-8v6H5V5ZM9.5 17.5v-3h-3v3Zm0-8v-3h-3v3Zm8 0v-3h-3v3Z"/>
    </Icon>
  );
});

IconMaterialQrCodeScanner.displayName = 'AmauiIconMaterialQrCodeScanner';

export default IconMaterialQrCodeScanner;
