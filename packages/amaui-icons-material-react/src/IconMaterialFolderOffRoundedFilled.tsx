import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffRoundedFilled'
      short_name='FolderOff'

      {...props}
    >
      <path d="M21.75 18.925 6.825 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.275 21.938 18.5Q21.875 18.725 21.75 18.925ZM19.775 22.6 17.175 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.075L1.375 4.2Q1.1 3.925 1.1 3.512Q1.1 3.1 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.5 21.5 21.488 21.9Q21.475 22.3 21.175 22.6Q20.875 22.875 20.475 22.887Q20.075 22.9 19.775 22.6Z"/>
    </Icon>
  );
});

IconMaterialFolderOffRoundedFilled.displayName = 'AmauiIconMaterialFolderOffRoundedFilled';

export default IconMaterialFolderOffRoundedFilled;
