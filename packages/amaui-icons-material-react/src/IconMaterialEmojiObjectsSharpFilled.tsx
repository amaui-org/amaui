import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiObjectsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiObjectsSharpFilled'
      short_name='EmojiObjects'

      {...props}
    >
      <path d="M12 22Q11.35 22 10.825 21.688Q10.3 21.375 10 20.85H8V15.3Q6.525 14.325 5.638 12.725Q4.75 11.125 4.75 9.25Q4.75 6.225 6.862 4.112Q8.975 2 12 2Q15.025 2 17.137 4.112Q19.25 6.225 19.25 9.25Q19.25 11.175 18.363 12.75Q17.475 14.325 16 15.3V20.85H14Q13.7 21.375 13.175 21.688Q12.65 22 12 22ZM10 18.85H14V17.95H10ZM10 16.95H14V16H10ZM11.25 14H12.75V11.3L14.95 9.1L13.9 8.05L12 9.95L10.1 8.05L9.05 9.1L11.25 11.3Z"/>
    </Icon>
  );
});

IconMaterialEmojiObjectsSharpFilled.displayName = 'AmauiIconMaterialEmojiObjectsSharpFilled';

export default IconMaterialEmojiObjectsSharpFilled;
