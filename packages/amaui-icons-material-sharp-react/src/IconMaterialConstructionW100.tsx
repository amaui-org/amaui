import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConstructionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConstructionW100'

      short_name='Construction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.8 19.625-5.075-5.075.75-.75 5.075 5.075Zm-12.925 0-.75-.75L10.6 12.4 7.875 9.675l-.5.5-.85-.875v1.725l-.5.5-2.5-2.5.5-.5H5.75l-.875-.85 1.75-1.75q.3-.3.663-.45.362-.15.787-.15.425 0 .788.15.362.15.662.45l-1.45 1.45 1.05 1.05-.5.5 2.725 2.725 2.925-2.925q-.275-.35-.375-.713-.1-.362-.1-.812 0-1.15.8-1.95t1.95-.8q.225 0 .438.025.212.025.412.125l-1.95 1.95L17.2 8.3l1.95-1.95q.1.2.125.412.025.213.025.438 0 1.15-.8 1.95t-1.95.8q-.45 0-.812-.1-.363-.1-.713-.375Z"/>
    </Icon>
  );
});

IconMaterialConstructionW100.displayName = 'AmauiIconMaterialConstructionW100';

export default IconMaterialConstructionW100;
