import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveW100Filled'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V8q0-.225.038-.413.037-.187.162-.337l1.2-1.4q.15-.15.362-.2.213-.05.438-.05h11q.225 0 .438.025.212.025.362.225l1.15 1.4q.15.15.2.337.05.188.05.413v10.2q0 .65-.425 1.075-.425.425-1.075.425ZM5.4 7.3h13.2l-.85-1H6.25Zm6.6 9.35q.15 0 .275-.05.125-.05.25-.175L14.85 14.1q.1-.1.113-.237.012-.138-.113-.263t-.25-.125q-.125 0-.25.125l-2 2v-4.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.5l-2-2q-.1-.1-.237-.112-.138-.013-.263.112t-.125.25q0 .125.125.25l2.325 2.325q.125.125.25.175.125.05.275.05Z"/>
    </Icon>
  );
});

IconMaterialArchiveW100Filled.displayName = 'AmauiIconMaterialArchiveW100Filled';

export default IconMaterialArchiveW100Filled;
