import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareW100Filled'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 18.2q-.65 0-1.075-.425-.425-.425-.425-1.075V4.3q0-.65.425-1.075Q9.5 2.8 10.15 2.8h6.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-12.35h-8v9.3h8ZM7.45 20.9q-.65 0-1.075-.425-.425-.425-.425-1.075V6.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V19.4q0 .35.225.575.225.225.575.225h7.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.875-8.95q-.15 0-.25-.1t-.1-.25v-1.5q0-.275.163-.438.162-.162.437-.162h3.1l-.85-.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L15.5 9.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-1.175 1.175q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l.85-.85h-3v1.4q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareW100Filled.displayName = 'AmauiIconMaterialOfflineShareW100Filled';

export default IconMaterialOfflineShareW100Filled;
