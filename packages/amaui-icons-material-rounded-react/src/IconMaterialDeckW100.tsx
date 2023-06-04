import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckW100'

      short_name='Deck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.15 0-.25-.1t-.1-.25V8.35H5.325q-.3 0-.387-.275-.088-.275.162-.45l6.5-4.55q.2-.125.4-.125t.4.125l6.5 4.55q.25.175.162.45-.087.275-.387.275H12.35V21q0 .15-.1.25t-.25.1Zm0-13.7h5.7H6.3Zm-8 13.7q-.15 0-.25-.1t-.1-.25v-4.8l-.625-3.5q-.025-.15.05-.262.075-.113.225-.138.15-.025.262.062.113.088.138.213l.65 3.575H7.6q.325 0 .537.212.213.213.213.538V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.15h-3.3V21q0 .15-.1.25t-.25.1Zm12 0q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.213-.538.212-.212.537-.212h3.25l.65-3.575q.025-.125.125-.213.1-.087.25-.062.15.025.238.138.087.112.062.262l-.625 3.5V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.15h-3.3V21q0 .15-.1.25t-.25.1ZM6.3 7.65h11.4l-5.7-4Z"/>
    </Icon>
  );
});

IconMaterialDeckW100.displayName = 'AmauiIconMaterialDeckW100';

export default IconMaterialDeckW100;
