import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSingleBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedW100'

      short_name='SingleBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 17.7h-.4l-.3-2h-.7v-4.4h2V7.6h9.4v3.7h2v4.4H18l-.3 2h-.4l-.3-2H7Zm5.65-6.4H16v-3h-3.65ZM8 11.3h3.65v-3H8ZM6 15h12v-3H6Zm12 0H6Z"/>
    </Icon>
  );
});

IconMaterialSingleBedW100.displayName = 'AmauiIconMaterialSingleBedW100';

export default IconMaterialSingleBedW100;
