import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentContent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentContent'

      short_name='SentimentContent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 716h240v-60H360v60Zm-20-280q-32 0-59.5 18T235 500l50 33q10-15 24-25.5t31-10.5q17 0 31 10.5t24 24.5l50-33q-18-27-45.5-45T340 436Zm280 0q-32 0-59.5 18T515 500l50 33q10-14 24-24.5t31-10.5q17 0 31.5 10t23.5 25l50-33q-18-28-45.5-46T620 436ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentContent.displayName = 'AmauiIconMaterialSentimentContent';

export default IconMaterialSentimentContent;
