import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicVideoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoSharpW100'
      short_name='MusicVideo'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 18V6ZM4 6V18H20V6ZM10.975 16.425Q11.775 16.425 12.312 15.875Q12.85 15.325 12.85 14.55V9H15.35V7.6H12.15V13.1Q11.925 12.9 11.625 12.787Q11.325 12.675 10.975 12.675Q10.2 12.675 9.65 13.212Q9.1 13.75 9.1 14.55Q9.1 15.325 9.65 15.875Q10.2 16.425 10.975 16.425Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoSharpW100.displayName = 'AmauiIconMaterialMusicVideoSharpW100';

export default IconMaterialMusicVideoSharpW100;
