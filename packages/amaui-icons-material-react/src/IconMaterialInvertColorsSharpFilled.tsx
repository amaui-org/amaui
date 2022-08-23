import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsSharpFilled'
      short_name='InvertColors'

      {...props}
    >
      <path d="M12 21Q8.675 21 6.338 18.7Q4 16.4 4 13.125Q4 11.475 4.625 10.062Q5.25 8.65 6.35 7.55L12 2L17.65 7.55Q18.75 8.65 19.375 10.062Q20 11.475 20 13.125Q20 16.4 17.663 18.7Q15.325 21 12 21ZM12 19V4.8L7.75 9Q6.875 9.825 6.438 10.875Q6 11.925 6 13.125Q6 15.55 7.75 17.275Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsSharpFilled.displayName = 'AmauiIconMaterialInvertColorsSharpFilled';

export default IconMaterialInvertColorsSharpFilled;
