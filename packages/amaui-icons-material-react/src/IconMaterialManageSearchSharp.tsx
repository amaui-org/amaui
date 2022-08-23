import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialManageSearchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchSharp'
      short_name='ManageSearch'

      {...props}
    >
      <path d="M2 9V7H7V9ZM2 14V12H7V14ZM20.6 19 16.75 15.15Q16.15 15.575 15.438 15.787Q14.725 16 14 16Q11.925 16 10.463 14.537Q9 13.075 9 11Q9 8.925 10.463 7.462Q11.925 6 14 6Q16.075 6 17.538 7.462Q19 8.925 19 11Q19 11.725 18.788 12.438Q18.575 13.15 18.15 13.75L22 17.6ZM14 14Q15.25 14 16.125 13.125Q17 12.25 17 11Q17 9.75 16.125 8.875Q15.25 8 14 8Q12.75 8 11.875 8.875Q11 9.75 11 11Q11 12.25 11.875 13.125Q12.75 14 14 14ZM2 19V17H12V19Z"/>
    </Icon>
  );
});

IconMaterialManageSearchSharp.displayName = 'AmauiIconMaterialManageSearchSharp';

export default IconMaterialManageSearchSharp;
