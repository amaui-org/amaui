import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsSharp'
      short_name='InvertColors'

      {...props}
    >
      <path d="M12 21Q8.675 21 6.338 18.688Q4 16.375 4 13.1Q4 11.45 4.625 10.05Q5.25 8.65 6.35 7.55L12 2L17.65 7.55Q18.75 8.65 19.375 10.05Q20 11.45 20 13.1Q20 16.375 17.663 18.688Q15.325 21 12 21ZM12 19V4.8L7.75 9Q6.875 9.825 6.438 10.862Q6 11.9 6 13.1Q6 15.525 7.75 17.262Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsSharp.displayName = 'AmauiIconMaterialInvertColorsSharp';

export default IconMaterialInvertColorsSharp;
