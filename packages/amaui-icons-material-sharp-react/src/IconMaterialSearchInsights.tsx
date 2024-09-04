import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchInsights = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchInsights'

      short_name='SearchInsights'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm-40-120v-280h80v280h-80Zm-140 0v-200h80v200h-80Zm280 0v-160h80v160h-80ZM824-80 597-307q-41 32-91 49.5T400-240q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 106T653-363l227 227-56 56Z"/>
    </Icon>
  );
});

IconMaterialSearchInsights.displayName = 'AmauiIconMaterialSearchInsights';

export default IconMaterialSearchInsights;
