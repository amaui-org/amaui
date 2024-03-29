import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentWorried = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentWorried'

      short_name='SentimentWorried'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 816h56q55 0 93.5-35t38.5-85q0-50-38.5-85T508 576h-56q-55 0-93.5 35T320 696q0 50 38.5 85t93.5 35Zm0-60q-30 0-51-17.5T380 696q0-25 21-42.5t51-17.5h56q30 0 51 17.5t21 42.5q0 25-21 42.5T508 756h-56ZM240 496h80q50 0 85-35t35-85h-60q0 25-17.5 42.5T320 436h-80v60Zm400 0h80v-60h-80q-25 0-42.5-17.5T580 376h-60q0 50 35 85t85 35ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentWorried.displayName = 'AmauiIconMaterialSentimentWorried';

export default IconMaterialSentimentWorried;
