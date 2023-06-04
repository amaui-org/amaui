import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnW100Filled'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21.7q-.3 0-.5-.2t-.2-.5V3q0-.3.2-.5t.5-.2h18q.3 0 .5.2t.2.5v18q0 .3-.2.5t-.5.2ZM9.4 9.85l.475-.475-4.25-4.25q-.1-.1-.225-.1t-.225.1q-.1.1-.1.237 0 .138.1.238Zm5.6 9.5h3.6q.325 0 .538-.212.212-.213.212-.538V15q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.1l-4-4-.5.5 4.05 4.05H15q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-9.85-.5q.125.125.25.125t.25-.125l13-13V9q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V5.4q0-.325-.212-.538-.213-.212-.538-.212H15q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.15l-13 13q-.1.1-.112.237-.013.138.112.263Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnW100Filled.displayName = 'AmauiIconMaterialShuffleOnW100Filled';

export default IconMaterialShuffleOnW100Filled;
