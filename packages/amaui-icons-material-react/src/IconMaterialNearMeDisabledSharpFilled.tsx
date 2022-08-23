import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledSharpFilled'
      short_name='NearMeDisabled'

      {...props}
    >
      <path d="M12.9 21 10.05 13.95 3 11.1V9.7L7.875 7.875L2.8 2.8L4.225 1.375L22.625 19.775L21.2 21.2L16.125 16.125L14.3 21ZM17.675 11.975 12.025 6.325 21 3Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledSharpFilled.displayName = 'AmauiIconMaterialNearMeDisabledSharpFilled';

export default IconMaterialNearMeDisabledSharpFilled;
