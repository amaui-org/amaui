import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLegendToggleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleSharpFilled'
      short_name='LegendToggle'

      {...props}
    >
      <path d="M4 11V8.65L10 5L15 8.55L20 5V7.45L15 11L9.925 7.4ZM4 15V13H20V15ZM4 19V17H20V19Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleSharpFilled.displayName = 'AmauiIconMaterialLegendToggleSharpFilled';

export default IconMaterialLegendToggleSharpFilled;
