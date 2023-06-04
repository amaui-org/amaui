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
      <path d="M7.1 11.8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm6.2 2.75H7.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1H14Zm7.2 3.35-6.1-6.1h2.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.2L7.9 5.3h11.3q.65 0 1.075.425.425.425.425 1.075v10.4q0 .2-.037.375-.038.175-.163.325ZM18.75 20l-1.3-1.3H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h.25l6.5 6.5h-1l-7.4-7.4q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l15.6 15.6q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffW100Filled.displayName = 'AmauiIconMaterialSubtitlesOffW100Filled';

export default IconMaterialSubtitlesOffW100Filled;
