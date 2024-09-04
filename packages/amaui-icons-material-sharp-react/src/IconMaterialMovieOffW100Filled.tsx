import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieOffW100Filled'

      short_name='MovieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h70l536 536H132Zm696-1L315-748h54l54 108h120l-54-108h100l54 108h120l-54-108h119v535Zm-30 101L112-798l20-20 686 686-20 20Z"/>
    </Icon>
  );
});

IconMaterialMovieOffW100Filled.displayName = 'AmauiIconMaterialMovieOffW100Filled';

export default IconMaterialMovieOffW100Filled;
