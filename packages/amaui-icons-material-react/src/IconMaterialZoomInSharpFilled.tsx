import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomInSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInSharpFilled'
      short_name='ZoomIn'

      {...props}
    >
      <path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14ZM10.5 12.5H8.5V10.5H6.5V8.5H8.5V6.5H10.5V8.5H12.5V10.5H10.5Z"/>
    </Icon>
  );
});

IconMaterialZoomInSharpFilled.displayName = 'AmauiIconMaterialZoomInSharpFilled';

export default IconMaterialZoomInSharpFilled;
