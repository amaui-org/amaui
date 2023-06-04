import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConstructionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionW100Filled'

      short_name='Construction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.425 19.25-4.7-4.7.75-.75 4.7 4.7q.15.15.15.375t-.15.375q-.15.15-.375.15t-.375-.15Zm-12.925 0q-.15-.15-.15-.375t.15-.375l6.1-6.1-2.725-2.725q-.2.2-.512.175-.313-.025-.513-.225L6.525 9.3v1.725l-.1.1q-.175.175-.4.175-.225 0-.4-.175l-1.7-1.7q-.175-.175-.175-.4 0-.225.175-.4l.1-.1H5.75L5.425 8.2Q5.2 7.975 5.2 7.662q0-.312.225-.537l1.2-1.2q.3-.3.663-.45.362-.15.787-.15.425 0 .788.15.362.15.662.45l-1.45 1.45.525.525q.2.2.212.512.013.313-.187.513l2.725 2.725 2.925-2.925q-.275-.35-.375-.713-.1-.362-.1-.812 0-1.15.8-1.95t1.95-.8q.225 0 .438.025.212.025.412.125l-1.95 1.95L17.2 8.3l1.95-1.95q.1.2.125.412.025.213.025.438 0 1.15-.8 1.95t-1.95.8q-.45 0-.812-.1-.363-.1-.713-.375L5.25 19.25q-.15.15-.375.15t-.375-.15Z"/>
    </Icon>
  );
});

IconMaterialConstructionW100Filled.displayName = 'AmauiIconMaterialConstructionW100Filled';

export default IconMaterialConstructionW100Filled;
