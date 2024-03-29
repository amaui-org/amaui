import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentExcited = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentExcited'

      short_name='SentimentExcited'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 576v80q0 66 47 113t113 47q66 0 113-47t47-113v-40q0-17-11.5-28.5T600 576H320Zm160 180q-42 0-71-29t-29-71v-20h200v20q0 42-29 71t-71 29ZM340 376q-34 0-60 22t-40 54q-5 11 1.5 21t18.5 13q11 3 22-2.5t16-16.5q7-13 17.5-22t24.5-9q14 0 24.5 9.5T382 468q5 11 16 16t22 2q12-3 18.5-13t1.5-21q-14-32-40-54t-60-22Zm280 0q-34 0-60 22t-40 54q-5 11 1.5 21t18.5 13q11 3 22-2.5t16-16.5q7-13 17.5-22t24.5-9q14 0 24.5 9.5T662 468q5 11 16 16t22 2q12-3 18.5-13t1.5-21q-14-32-40-54t-60-22ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialSentimentExcited.displayName = 'AmauiIconMaterialSentimentExcited';

export default IconMaterialSentimentExcited;
