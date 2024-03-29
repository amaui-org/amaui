import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternate'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h8q.425 0 .713.287Q14 3.575 14 4t-.287.712Q13.425 5 13 5H5v14h14v-8q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v8q0 .825-.587 1.413Q19.825 21 19 21ZM18 9q-.425 0-.712-.288Q17 8.425 17 8V7h-1q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h1V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v1h1q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-1v1q0 .425-.288.712Q18.425 9 18 9ZM7 17h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16 9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 17 7 17Zm-2-6v8V5v6Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternate.displayName = 'AmauiIconMaterialAddPhotoAlternate';

export default IconMaterialAddPhotoAlternate;
