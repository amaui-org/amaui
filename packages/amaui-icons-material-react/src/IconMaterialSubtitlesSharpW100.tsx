import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesSharpW100'
      short_name='Subtitles'

      {...props}
    >
      <path d="M6.75 11.8H7.45V11.1H6.75ZM6.75 15.25H14.55V14.55H6.75ZM16.55 15.25H17.25V14.55H16.55ZM9.45 11.8H17.25V11.1H9.45ZM3.3 18.7V5.3H20.7V18.7ZM4 18V6ZM20 18V6H4V18Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesSharpW100.displayName = 'AmauiIconMaterialSubtitlesSharpW100';

export default IconMaterialSubtitlesSharpW100;
