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
      <path d="M390 716h180q13 0 21.5-8.5T600 686q0-13-8.5-21.5T570 656H390q-13 0-21.5 8.5T360 686q0 13 8.5 21.5T390 716Zm90 260q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM340 436q-23 0-44 9t-37 26q-10 11-10 24.5t11 20.5q10 7 22 5t22-10q8-7 17-10.5t19-3.5q10 0 19 4t17 10q10 8 22 9.5t22-5.5q11-7 11-20.5T421 471q-16-17-37-26t-44-9Zm280 0q-23 0-45 9t-38 26q-10 11-9 24t12 21q10 7 22 5.5t22-9.5q8-6 17-10t19-4q11 0 20 4t17 10q10 8 21.5 9.5T700 516q11-7 11-20.5T701 471q-16-17-37-26t-44-9Z"/>
    </Icon>
  );
});

IconMaterialSentimentContent.displayName = 'AmauiIconMaterialSentimentContent';

export default IconMaterialSentimentContent;
