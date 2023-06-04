import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderColorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorFilled'

      short_name='BorderColor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-4h20v4Zm2-6v-3.75l9.05-9.05 3.75 3.75L7.75 18ZM17.925 7.85l-3.75-3.75 2.5-2.5 3.75 3.75Z"/>
    </Icon>
  );
});

IconMaterialBorderColorFilled.displayName = 'AmauiIconMaterialBorderColorFilled';

export default IconMaterialBorderColorFilled;
