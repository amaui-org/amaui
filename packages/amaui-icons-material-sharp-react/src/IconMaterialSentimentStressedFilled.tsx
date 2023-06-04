import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentStressedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentStressedFilled'

      short_name='SentimentStressed'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM298 600l143-104-143-104-36 48 77 56-77 56 36 48Zm122 178 60-60 60 60 60-60 39 39 42-42-81-81-60 60-60-60-60 60-60-60-81 81 42 42 39-39 60 60Zm242-178 36-48-77-56 77-56-36-48-143 104 143 104Z"/>
    </Icon>
  );
});

IconMaterialSentimentStressedFilled.displayName = 'AmauiIconMaterialSentimentStressedFilled';

export default IconMaterialSentimentStressedFilled;
