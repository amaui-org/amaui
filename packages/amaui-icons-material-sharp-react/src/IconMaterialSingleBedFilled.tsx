import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSingleBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedFilled'

      short_name='SingleBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19H6l-.65-2H4v-7h2V5h12v5h2v7h-1.35L18 19h-1l-.65-2h-8.7Zm6-9h3V7h-3Zm-5 0h3V7H8Z"/>
    </Icon>
  );
});

IconMaterialSingleBedFilled.displayName = 'AmauiIconMaterialSingleBedFilled';

export default IconMaterialSingleBedFilled;
