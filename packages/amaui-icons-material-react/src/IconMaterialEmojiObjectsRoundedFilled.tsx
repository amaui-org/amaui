import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiObjectsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsRoundedFilled'
      short_name='EmojiObjects'

      {...props}
    >
      <path d="M12 22Q11.35 22 10.825 21.688Q10.3 21.375 10 20.85Q9.175 20.85 8.588 20.263Q8 19.675 8 18.85V15.3Q6.525 14.325 5.638 12.725Q4.75 11.125 4.75 9.25Q4.75 6.225 6.862 4.112Q8.975 2 12 2Q15.025 2 17.137 4.112Q19.25 6.225 19.25 9.25Q19.25 11.175 18.363 12.75Q17.475 14.325 16 15.3V18.85Q16 19.675 15.413 20.263Q14.825 20.85 14 20.85Q13.7 21.375 13.175 21.688Q12.65 22 12 22ZM10 18.85H14V17.95H10ZM10 16.95H14V16H10ZM11.25 14H12.75V11.3L14.425 9.625Q14.65 9.4 14.65 9.1Q14.65 8.8 14.425 8.575Q14.2 8.35 13.9 8.35Q13.6 8.35 13.4 8.55L12 9.95L10.625 8.575Q10.4 8.35 10.1 8.35Q9.8 8.35 9.575 8.575Q9.35 8.8 9.35 9.1Q9.35 9.4 9.55 9.6L11.25 11.3Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsRoundedFilled.displayName = 'AmauiIconMaterialEmojiObjectsRoundedFilled';

export default IconMaterialEmojiObjectsRoundedFilled;
