import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100Filled'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.25 11.1H13.7L7.9 5.3h12.8v12.8l-6.3-6.3h2.85ZM19 20.25l-1.55-1.55H3.3V5.3h1.5v.775L2.9 4.15l.5-.5 16.1 16.1Zm-5.7-5.7H6.75v.7H14ZM6.75 11.8h.7v-.7h-.7Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100Filled.displayName = 'AmauiIconMaterialSubtitlesOffW100Filled';

export default IconMaterialSubtitlesOffW100Filled;
