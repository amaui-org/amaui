import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiObjectsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsW100'

      short_name='EmojiObjects'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.25q-.525 0-.887-.325-.363-.325-.363-.825H10q-.275 0-.487-.212-.213-.213-.213-.488v-2.85q-1.575-.825-2.412-2.275-.838-1.45-.838-3.025 0-2.5 1.725-4.225Q9.5 3.3 12 3.3q2.5 0 4.225 1.725Q17.95 6.75 17.95 9.25q0 1.575-.837 3.025-.838 1.45-2.413 2.275v2.85q0 .275-.212.488-.213.212-.488.212h-.75q0 .5-.363.825-.362.325-.887.325Zm-2-1.85h4v-1h-4Zm0-1.7h4v-1h-4ZM9.8 14h1.85v-3.25L9.825 8.925q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125L12 10.1l1.675-1.675q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-1.8 1.8V14h1.85q1.35-.65 2.2-1.913.85-1.262.85-2.837 0-2.2-1.525-3.725T12 4Q9.8 4 8.275 5.525T6.75 9.25q0 1.575.85 2.837Q8.45 13.35 9.8 14Zm2.2-3.9ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsW100.displayName = 'AmauiIconMaterialEmojiObjectsW100';

export default IconMaterialEmojiObjectsW100;
