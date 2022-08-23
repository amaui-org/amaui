import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieFilterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterSharpW100Filled'
      short_name='MovieFilter'

      {...props}
    >
      <path d="M9.5 11.3 8.85 12.7 7.45 13.35 8.85 14 9.5 15.4 10.15 14 11.55 13.35 10.15 12.7ZM15.5 10.8 15 11.85 13.95 12.35 15 12.85 15.5 13.9 16 12.85 17.05 12.35 16 11.85ZM3.3 18.7V5.3H4.8L6.15 8H9.15L7.8 5.3H9.8L11.15 8H14.15L12.8 5.3H14.8L16.15 8H19.15L17.8 5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialMovieFilterSharpW100Filled.displayName = 'AmauiIconMaterialMovieFilterSharpW100Filled';

export default IconMaterialMovieFilterSharpW100Filled;
