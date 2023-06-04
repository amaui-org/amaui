import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffW100'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 20.25-1.55-1.55H3.3V5.3h1.75l.7.7H4v12h12.75L14 15.25H6.75v-.7h6.55L2.9 4.15l.5-.5 16.1 16.1Zm1.7-2.15-.7-.7V6H8.6l-.7-.7h12.8Zm-6.3-6.3-.7-.7h3.55v.7Zm-7.65 0v-.7h.7v.7Zm7.55-.1Zm-3.55.3Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100.displayName = 'AmauiIconMaterialSubtitlesOffW100';

export default IconMaterialSubtitlesOffW100;
