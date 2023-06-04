import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesW100Filled'

      short_name='Subtitles'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.75 11.8h.7v-.7h-.7Zm0 3.45h7.8v-.7h-7.8Zm9.8 0h.7v-.7h-.7Zm-7.1-3.45h7.8v-.7h-7.8ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesW100Filled.displayName = 'AmauiIconMaterialSubtitlesW100Filled';

export default IconMaterialSubtitlesW100Filled;
