import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAv1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Av1W100Filled'

      short_name='Av1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-376h28v-70h100v70h28v-208H220v208Zm28-98v-82h100v82H248Zm243 98h44l60-208h-30l-52 180-52-180h-30l60 208Zm221 0h28v-208h-80v28h52v180ZM92-212v-536h776v536H92Z"/>
    </Icon>
  );
});

IconMaterialAv1W100Filled.displayName = 'AmauiIconMaterialAv1W100Filled';

export default IconMaterialAv1W100Filled;
