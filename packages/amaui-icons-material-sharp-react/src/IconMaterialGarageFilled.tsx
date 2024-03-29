import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageFilled'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm7-8q-.425 0-.712-.288Q8 13.425 8 13t.288-.713Q8.575 12 9 12t.713.287Q10 12.575 10 13t-.287.712Q9.425 14 9 14Zm6 0q-.425 0-.712-.288Q14 13.425 14 13t.288-.713Q14.575 12 15 12t.713.287Q16 12.575 16 13t-.287.712Q15.425 14 15 14ZM5 18.5h2v-2h10v2h2v-7.4l-1.925-5.6H6.925L5 11.1Zm2.65-9 .7-2h7.3l.7 2Z"/>
    </Icon>
  );
});

IconMaterialGarageFilled.displayName = 'AmauiIconMaterialGarageFilled';

export default IconMaterialGarageFilled;
