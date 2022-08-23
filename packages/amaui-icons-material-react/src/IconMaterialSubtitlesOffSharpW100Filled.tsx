import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffSharpW100Filled'
      short_name='SubtitlesOff'

      {...props}
    >
      <path d="M19 20.25 17.45 18.7H3.3V5.3H4L2.9 4.15L3.4 3.65L19.5 19.75ZM6.75 11.8H7.45V11.1H6.75ZM20.7 5.3V18.1L14.4 11.8H17.25V11.1H13.7L7.9 5.3ZM13.3 14.55H6.75V15.25H14Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffSharpW100Filled.displayName = 'AmauiIconMaterialSubtitlesOffSharpW100Filled';

export default IconMaterialSubtitlesOffSharpW100Filled;
