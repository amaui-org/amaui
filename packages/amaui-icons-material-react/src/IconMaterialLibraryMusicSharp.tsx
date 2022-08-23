import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryMusicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicSharp'
      short_name='LibraryMusic'

      {...props}
    >
      <path d="M12.5 15Q13.55 15 14.275 14.275Q15 13.55 15 12.5V7H18V5H14V10.5Q13.675 10.25 13.3 10.125Q12.925 10 12.5 10Q11.45 10 10.725 10.725Q10 11.45 10 12.5Q10 13.55 10.725 14.275Q11.45 15 12.5 15ZM6 2H22V18H6ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 4V16Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicSharp.displayName = 'AmauiIconMaterialLibraryMusicSharp';

export default IconMaterialLibraryMusicSharp;
