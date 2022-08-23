import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesSharpW100Filled'
      short_name='Subtitles'

      {...props}
    >
      <path d="M6.75 11.8H7.45V11.1H6.75ZM6.75 15.25H14.55V14.55H6.75ZM16.55 15.25H17.25V14.55H16.55ZM9.45 11.8H17.25V11.1H9.45ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesSharpW100Filled.displayName = 'AmauiIconMaterialSubtitlesSharpW100Filled';

export default IconMaterialSubtitlesSharpW100Filled;
