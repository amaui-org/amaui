import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageFilled'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 21q-.725 0-1.287-.475-.563-.475-.688-1.2L3.2 10.175q-.075-.45.213-.812Q3.7 9 4.175 9h15.65q.475 0 .762.363.288.362.213.812l-1.525 9.15q-.125.725-.687 1.2Q18.025 21 17.3 21Zm3.3-6h4q.425 0 .713-.288Q15 14.425 15 14t-.287-.713Q14.425 13 14 13h-4q-.425 0-.712.287Q9 13.575 9 14t.288.712Q9.575 15 10 15ZM6 8q-.425 0-.713-.287Q5 7.425 5 7t.287-.713Q5.575 6 6 6h12q.425 0 .712.287Q19 6.575 19 7t-.288.713Q18.425 8 18 8Zm2-3q-.425 0-.713-.288Q7 4.425 7 4t.287-.713Q7.575 3 8 3h8q.425 0 .712.287Q17 3.575 17 4t-.288.712Q16.425 5 16 5Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageFilled.displayName = 'AmauiIconMaterialHomeStorageFilled';

export default IconMaterialHomeStorageFilled;
