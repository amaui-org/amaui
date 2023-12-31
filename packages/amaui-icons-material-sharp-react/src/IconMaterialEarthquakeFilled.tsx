import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarthquakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarthquakeFilled'

      short_name='Earthquake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331-80 220-440H80v-80h199l75 243 134-603h64l94 407 65-207h57l60 160h52v80H772l-29-77-74 237h-61l-88-379L392-80h-61Z"/>
    </Icon>
  );
});

IconMaterialEarthquakeFilled.displayName = 'AmauiIconMaterialEarthquakeFilled';

export default IconMaterialEarthquakeFilled;
