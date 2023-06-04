import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDescriptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionFilled'

      short_name='Description'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18h8v-2H8Zm0-4h8v-2H8Zm-4 8V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialDescriptionFilled.displayName = 'AmauiIconMaterialDescriptionFilled';

export default IconMaterialDescriptionFilled;
