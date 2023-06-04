import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSingleBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBed'

      short_name='SingleBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19H6l-.65-2H4v-7h2V5h12v5h2v7h-1.35L18 19h-1l-.65-2h-8.7Zm6-9h3V7h-3Zm-5 0h3V7H8Zm-2 5h12v-3H6Zm12 0H6Z"/>
    </Icon>
  );
});

IconMaterialSingleBed.displayName = 'AmauiIconMaterialSingleBed';

export default IconMaterialSingleBed;
