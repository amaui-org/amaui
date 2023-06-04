import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneratingTokensW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneratingTokensW100'

      short_name='GeneratingTokens'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.9 18.7q-2.8 0-4.75-1.95Q3.2 14.8 3.2 12t1.95-4.75Q7.1 5.3 9.9 5.3t4.75 1.95Q16.6 9.2 16.6 12t-1.95 4.75Q12.7 18.7 9.9 18.7Zm0-.7q2.5 0 4.25-1.75T15.9 12q0-2.5-1.75-4.25T9.9 6Q7.4 6 5.65 7.75T3.9 12q0 2.5 1.75 4.25T9.9 18Zm0-2.9q.25 0 .425-.175t.175-.425v-4.4h1.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1H9.3v4.4q0 .25.175.425t.425.175Zm8.125-9-.375-.85-.85-.375q-.25-.125-.25-.375t.25-.375l.85-.375.375-.85q.125-.25.375-.25t.375.25l.375.85.85.375q.25.125.25.375t-.25.375l-.85.375-.375.85q-.125.25-.375.25t-.375-.25Zm0 15-.375-.85-.85-.375q-.25-.125-.25-.375t.25-.375l.85-.375.375-.85q.125-.25.375-.25t.375.25l.375.85.85.375q.25.125.25.375t-.25.375l-.85.375-.375.85q-.125.25-.375.25t-.375-.25ZM9.9 12Z"/>
    </Icon>
  );
});

IconMaterialGeneratingTokensW100.displayName = 'AmauiIconMaterialGeneratingTokensW100';

export default IconMaterialGeneratingTokensW100;
