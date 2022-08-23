import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageRoundedFilled'
      short_name='Storage'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18Q2 17.175 2.588 16.587Q3.175 16 4 16H20Q20.825 16 21.413 16.587Q22 17.175 22 18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM5 19H7V17H5ZM4 8Q3.175 8 2.588 7.412Q2 6.825 2 6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6Q22 6.825 21.413 7.412Q20.825 8 20 8ZM5 7H7V5H5ZM4 14Q3.175 14 2.588 13.412Q2 12.825 2 12Q2 11.175 2.588 10.587Q3.175 10 4 10H20Q20.825 10 21.413 10.587Q22 11.175 22 12Q22 12.825 21.413 13.412Q20.825 14 20 14ZM5 13H7V11H5Z"/>
    </Icon>
  );
});

IconMaterialStorageRoundedFilled.displayName = 'AmauiIconMaterialStorageRoundedFilled';

export default IconMaterialStorageRoundedFilled;
