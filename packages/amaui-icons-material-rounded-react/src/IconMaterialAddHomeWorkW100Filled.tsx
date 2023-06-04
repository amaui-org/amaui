import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkW100Filled'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.7 3v7.4q-.825-.55-1.775-.825Q18.975 9.3 18 9.3q-.6 0-1.175.1-.575.1-1.125.3v-.025q0-.5-.287-.975-.288-.475-.813-.85l-4.1-2.925V3q0-.275.213-.488.212-.212.487-.212H21q.275 0 .488.212.212.213.212.488Zm-4.4 3.7h1.4V5.3h-1.4Zm.7 13q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-3.35v2.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V13.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H15.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-15.35.6v-6.525q0-.35.163-.688.162-.337.462-.537l4.2-2.975q.4-.275.875-.275t.875.275l4.2 2.975q.3.2.463.537.162.338.162.688v.425q-1.15.95-1.775 2.3Q11.3 14.5 11.3 16q0 .425.05.85t.175.85H9.8v-4.8H6.2v4.8H3.05q-.325 0-.537-.213-.213-.212-.213-.537Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkW100Filled.displayName = 'AmauiIconMaterialAddHomeWorkW100Filled';

export default IconMaterialAddHomeWorkW100Filled;
