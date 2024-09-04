import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieOffW100'

      short_name='MovieOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h70l136 136H160v372h550l28 28H132Zm696-23-28-28v-349H451L315-748h54l54 108h120l-54-108h100l54 108h120l-54-108h119v513Zm-30 123L112-798l20-20 686 686-20 20ZM484-426Zm142-1Z"/>
    </Icon>
  );
});

IconMaterialMovieOffW100.displayName = 'AmauiIconMaterialMovieOffW100';

export default IconMaterialMovieOffW100;
