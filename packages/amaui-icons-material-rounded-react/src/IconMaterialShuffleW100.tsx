import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleW100'

      short_name='Shuffle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 9.85 5.175 5.6q-.125-.1-.125-.225t.125-.25q.1-.1.225-.1t.225.1l4.25 4.25Zm5.6 9.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.2l-4.05-4.05.5-.5 4 4V15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.538-.213.212-.538.212Zm-9.85-.5q-.125-.125-.125-.25t.125-.25l13-13H15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.6q.325 0 .538.212.212.213.212.538V9q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.85l-13 13q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialShuffleW100.displayName = 'AmauiIconMaterialShuffleW100';

export default IconMaterialShuffleW100;
