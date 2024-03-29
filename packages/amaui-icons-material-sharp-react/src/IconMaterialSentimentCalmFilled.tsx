import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentCalmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentCalmFilled'

      short_name='SentimentCalm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 796q39 0 75-17.5t67-52.5l-44-40q-22 24-47 36.5T480 735q-26 0-51-12.5T382 686l-44 40q32 35 67.5 52.5T480 796Zm0 180q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM340 576q42 0 70-30.5t39-72.5l-58-14q-5 22-17.5 39.5T340 516q-21 0-33.5-17.5T289 459l-58 14q11 42 39 72.5t70 30.5Zm280 0q42 0 70-30.5t39-72.5l-58-14q-5 22-17.5 39.5T620 516q-21 0-33.5-17.5T569 459l-58 14q11 42 39 72.5t70 30.5Z"/>
    </Icon>
  );
});

IconMaterialSentimentCalmFilled.displayName = 'AmauiIconMaterialSentimentCalmFilled';

export default IconMaterialSentimentCalmFilled;
