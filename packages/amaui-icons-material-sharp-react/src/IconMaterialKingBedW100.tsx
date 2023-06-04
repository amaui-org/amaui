import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKingBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedW100'

      short_name='KingBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 17.7h-.4l-.3-2h-.7v-4.4h2V7.6h13.4v3.7h2v4.4H20l-.3 2h-.4l-.3-2H5Zm7.65-6.4H18v-3h-5.65ZM6 11.3h5.65v-3H6ZM4 15h16v-3H4Zm16 0H4Z"/>
    </Icon>
  );
});

IconMaterialKingBedW100.displayName = 'AmauiIconMaterialKingBedW100';

export default IconMaterialKingBedW100;
