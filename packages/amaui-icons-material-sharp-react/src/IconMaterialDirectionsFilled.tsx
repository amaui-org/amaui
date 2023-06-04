import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsFilled'

      short_name='Directions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 15h2v-3h3.5v2.5L17 11l-3.5-3.5V10H8Zm4 7.8L1.2 12 12 1.2 22.8 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsFilled.displayName = 'AmauiIconMaterialDirectionsFilled';

export default IconMaterialDirectionsFilled;
