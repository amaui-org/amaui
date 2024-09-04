import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvcW100Filled'

      short_name='Avc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-376h28v-70h92v70h28v-208H220v208Zm28-98v-82h92v82h-92Zm215 98h44l60-208h-30l-52 180-52-180h-30l60 208Zm129 0h148v-52h-28v24h-92v-152h92v26h28v-54H592v208ZM92-212v-536h776v536H92Z"/>
    </Icon>
  );
});

IconMaterialAvcW100Filled.displayName = 'AmauiIconMaterialAvcW100Filled';

export default IconMaterialAvcW100Filled;
